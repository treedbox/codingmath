msg.innerHTML = 'Hold your mouse/touch to move. Reliase to shoot'

let forceAngle = 0,
rawForce = 0,
isShooting = false

const gun = {
	x: 100,
	y: height,
	angle: -Math.PI / 4
},
cannonball = Particle.create(gun.x, gun.y, 15, gun.angle, .2),
forceSpeed = .1,
target = {},
shoot = () => {
	const force = Utils.map(rawForce, -1, 1, 2, 20)

	cannonball.x = gun.x + Math.cos(gun.angle) * 40
	cannonball.y = gun.y + Math.sin(gun.angle) * 40
	cannonball.speed = force
	cannonball.heading = gun.angle

	isShooting = true
},
setTarget = () => {
	target.x = Utils.randomRange(200, width)
	target.y = height
	target.radius = Utils.randomRange(10, 40)
},
checkTarget = () => {
	if (Utils.circleCollision(target, cannonball)) {
		//collision reaction
		setTarget()
	}
},
aimGun = (x, y) => {
	gun.angle = Utils.clamp(Math.atan2(y - gun.y, x - gun.x), -Math.PI / 2, -.3)
},
draw = () => {
	c.clearRect(0, 0, width, height)

	c.fillStyle = color
	c.fillRect(10, height - 10, 20, -100)

	c.fillStyle = color2
	c.fillRect(10, height - 10, 20, Utils.map(rawForce, -1, 1, 0, -100))

	c.fillStyle = color3

	c.beginPath()
	c.arc(gun.x, gun.y, 24, 0, Math.PI * 2, false)
	c.fill()

	c.save()
	c.translate(gun.x, gun.y)
	c.rotate(gun.angle)
	c.fillRect(0, -8, 40, 16)
	c.restore()

	c.beginPath()
	c.arc(cannonball.x,
		cannonball.y,
		cannonball.radius,
		0, Math.PI * 2, false)
		c.fill()

		c.fillStyle = color4
		c.beginPath()
		c.arc(target.x, target.y, target.radius, 0, Math.PI * 2, false)
		c.fill()
	},
	update = () => {
		if (!isShooting) {
			forceAngle += forceSpeed
		}
		rawForce = Math.sin(forceAngle)
		if (isShooting) {
			cannonball.update()
			checkTarget()
		}
		draw()

		if (cannonball.y > height) {
			isShooting = false
		}
		requestAnimationFrame(update)
	},
	up = e => {
		if (!isShooting) shoot()
		canvas.removeEventListener('mousemove', move)
		canvas.removeEventListener('touchmove', move)

		canvas.removeEventListener('mouseup', up)
		canvas.removeEventListener('touchend', up)

		canvas.removeEventListener('mouseleave', up)
		canvas.removeEventListener('mouseleave', up)
	},
	move = e => {
		aimGun(
			e.clientX || e.touches[0].clientX,
			e.clientY || e.touches[0].clientY
		)
	},
	down = e => {
		canvas.addEventListener('mousemove', move)
		canvas.addEventListener('touchmove',move, {passive:true})
		canvas.addEventListener('mouseup', up)
		canvas.addEventListener('touchend',up)
		canvas.addEventListener('mouseleave', up)
		canvas.addEventListener('touchcancel',up)

		aimGun(
			e.clientX || e.touches[0].clientX,
			e.clientY || e.touches[0].clientY
		)
	},
	color = randomColor(),
	color2 = randomColor(),
	color3 = randomColor(),
	color4 = randomColor()

	cannonball.radius = 7

	setTarget()
	update()

	canvas.addEventListener('mousedown', down)
	canvas.addEventListener('touchstart',down, {passive:true})
