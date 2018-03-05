const Particle = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	mass: 1,
	radius: 0,
	bounce: -1,
	friction: 1,
	gravity: 0,
	springs: null,
	gravitations: null,
	create(x, y, speed, direction, grav) {
		const obj = Object.create(this)
		obj.x = x
		obj.y = y
		obj.vx = Math.cos(direction) * speed
		obj.vy = Math.sin(direction) * speed
		obj.gravity = grav || 0
		obj.springs = []
		obj.gravitations = []
		return obj
	},
	addGravitation(p) {
		this.removeGravitation(p)
		this.gravitations.push(p)
	},
	removeGravitation(p) {
		for (let i = 0; i < this.gravitations.length; i++) {
			if (p === this.gravitations[i]) {
				this.gravitations.splice(i, 1)
				return
			}
		}
	},
	addSpring(point, k, length) {
		this.removeSpring(point)
		this.springs.push({
			point: point,
			k: k,
			length: length || 0
		})
	},
	removeSpring(point) {
		for (let i = 0; i < this.springs.length; i++) {
			if (point === this.springs[i].point) {
				this.springs.splice(i, 1)
				return
			}
		}
	},
	get speed() {
		return Math.sqrt(this.vx * this.vx + this.vy * this.vy)
	},
	set speed(speed) {
		const heading = this.heading
		this.vx = Math.cos(heading) * speed
		this.vy = Math.sin(heading) * speed
	},
	get heading() {
		return Math.atan2(this.vy, this.vx)
	},
	set heading(heading) {
		const speed = this.speed
		this.vx = Math.cos(heading) * speed
		this.vy = Math.sin(heading) * speed
	},
	accelerate(obj) {
		this.vx += obj.x
		this.vy += obj.y
	},
	update() {
		this.handleSprings()
		this.handleGravitations()
		this.vx *= this.friction
		this.vy *= this.friction
		this.vy += this.gravity
		this.x += this.vx
		this.y += this.vy
	},
	handleGravitations() {
		for (let i = 0; i < this.gravitations.length; i++) {
			this.gravitateTo(this.gravitations[i])
		}
	},
	handleSprings() {
		for (let i = 0; i < this.springs.length; i++) {
			const spring = this.springs[i]
			this.springTo(spring.point, spring.k, spring.length)
		}
	},
	angleTo(p2) {
		return Math.atan2(p2.y - this.y, p2.x - this.x)
	},
	distanceTo(p2) {
		let	dx = p2.x - this.x,
		dy = p2.y - this.y
		return Math.sqrt(dx * dx + dy * dy)
	},
	gravitateTo(p2) {
		let	dx = p2.x - this.x,
		dy = p2.y - this.y,
		distSQ = dx * dx + dy * dy,
		dist = Math.sqrt(distSQ),
		force = p2.mass / distSQ,
		ax = dx / dist * force,
		ay = dy / dist * force
		this.vx += ax
		this.vy += ay
	},
	springTo(point, k, length) {
		const dx = point.x - this.x,
		dy = point.y - this.y,
		distance = Math.sqrt(dx * dx + dy * dy),
		springForce = (distance - length || 0) * k
		this.vx += dx / distance * springForce,
		this.vy += dy / distance * springForce
	},
	checkEdges(width, height) {
		if (this.x + this.radius > width) {
			this.x = width - this.radius
			this.vx = this.vx * this.bounce
		}
		if (this.x - this.radius < 0) {
			this.x = this.radius
			this.vx = this.vx * this.bounce
		}
		if (this.y + this.radius > height) {
			this.y = height - this.radius
			this.vy = this.vy * this.bounce
		}
		if (this.y - this.radius < 0) {
			this.y = this.radius
			this.vy = this.vy * this.bounce
		}
	},
	wrapping(width, height) {
		if (this.x - this.radius > width) {
			this.x = -this.radius
		}
		if (this.x + this.radius < 0) {
			this.x = width + this.radius
		}
		if (this.y - this.radius > height) {
			this.y = -this.radius
		}
		if (this.y + this.radius < 0) {
			this.y = height + this.radius
		}
	},
	offScreenRemove(arr, width, height) {
		arr.forEach((e,i) => {
			if (e.x - e.radius > width ||
				e.x + e.radius < 0 ||
				e.y - e.radius > height ||
				e.y + e.radius < 0) {
					arr.splice(i, 1)
				}
			}
		)
	}
}
