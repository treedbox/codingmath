msg.innerHTML = 'Click to pin'

const points = [],
sticks = [],
bounce = .9,
gravity = .5,
friction = .999,
angle = 0,
speed = .1,
engine = {
	baseX: 450,
	baseY: 135,
	range: 100,
	angle: 0,
	speed: .05,
	x: 550,
	y: 100,
	pinned: true
},
distance = (p0, p1) => {
	const dx = p1.x - p0.x,
	dy = p1.y - p0.y

	return Math.sqrt(dx * dx + dy * dy)
},
updateEngine = () => {
	engine.x = engine.baseX + Math.cos(engine.angle) * engine.range
	engine.y = engine.baseY + Math.sin(engine.angle) * engine.range
	engine.angle += engine.speed
},
updatePoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i]

		if (!p.pinned) {
			const vx = (p.x - p.oldx) * friction,
			vy = (p.y - p.oldy) * friction

			p.oldx = p.x
			p.oldy = p.y
			p.x += vx
			p.y += vy
			p.y += gravity
		}
	}
},
constrainPoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i]

		if (!p.pinned) {
			const vx = (p.x - p.oldx) * friction,
			vy = (p.y - p.oldy) * friction

			p.x > width ? (
				p.x = width,
				p.oldx = p.x + vx * bounce
			) : (
				p.x < 0 ? (
					p.x = 0,
					p.oldx = p.x + vx * bounce
				) : null
			)

			p.y > height ? (
				p.y = height,
				p.oldy = p.y + vy * bounce
			) : (
				p.y < 0 ? (
					p.y = 0,
					p.oldy = p.y + vy * bounce
				) : null
			)
		}
	}
},
updateSticks = () => {
	for (let i = 0; i < sticks.length; i++) {
		const s = sticks[i],
		dx = s.p1.x - s.p0.x,
		dy = s.p1.y - s.p0.y,
		distance = Math.sqrt(dx * dx + dy * dy),
		difference = s.length - distance,
		percent = difference / distance / 2,
		offsetX = dx * percent,
		offsetY = dy * percent

		if (!s.p0.pinned) {
			s.p0.x -= offsetX
			s.p0.y -= offsetY
		}

		if (!s.p1.pinned) {
			s.p1.x += offsetX
			s.p1.y += offsetY
		}
	}
},
renderPoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i]

		c.beginPath()
		p.pinned ? c.fillStyle = '#fd0' : c.fillStyle = 'red'
		c.arc(p.x, p.y, 5, 0, Math.PI * 2)

		c.fill()
	}
},
renderSticks = () => {
	for (let i = 0; i < sticks.length; i++) {
		const s = sticks[i]

		if (!s.hidden) {
			c.beginPath()
			// c.strokeStyle = s.color ? s.color : 'black'
			c.lineWidth = s.width ? s.width : 1
			c.moveTo(s.p0.x, s.p0.y)
			c.lineTo(s.p1.x, s.p1.y)
			c.stroke()
		}
	}
},
renderEngine = () => {
	c.beginPath()
	// c.rect(engine.baseX - engine.range, engine.baseY - 5, engine.range * 2, 10)
	c.arc(engine.baseX, engine.baseY, engine.range, 0, Math.PI * 2)
	c.stroke()
	c.beginPath()
	c.arc(engine.x, engine.y, 5, 0, Math.PI * 2)
	c.fill()
},
update = () => {
	updateEngine()
	updatePoints()

	for (let i = 0; i < 5; i++) {
		updateSticks()
		constrainPoints()
	}

	c.clearRect(0, 0, width, height)
	renderPoints()
	renderSticks()
	renderEngine()
	requestAnimationFrame(update)
},
click = () => {
	num = random(0, 5)
	points[num].pinned = !points[num].pinned
}

points.push({
	x: 100,
	y: 100,
	oldx: 100 + Math.random() * 50 - 25,
	oldy: 100 + Math.random() * 50 - 25
})
points.push({
	x: 200,
	y: 100,
	oldx: 200,
	oldy: 100
})
points.push({
	x: 200,
	y: 200,
	oldx: 200,
	oldy: 200
})
points.push({
	x: 100,
	y: 200,
	oldx: 100,
	oldy: 200
})
points.push({
	x: 400,
	y: 100,
	oldx: 400,
	oldy: 100
})
points.push({
	x: 250,
	y: 100,
	oldx: 250,
	oldy: 100
})

sticks.push({
	p0: points[0],
	p1: points[1],
	length: distance(points[0], points[1])
})
sticks.push({
	p0: points[1],
	p1: points[2],
	length: distance(points[1], points[2])
})
sticks.push({
	p0: points[2],
	p1: points[3],
	length: distance(points[2], points[3])
})
sticks.push({
	p0: points[3],
	p1: points[0],
	length: distance(points[3], points[0])
})
sticks.push({
	p0: points[0],
	p1: points[2],
	length: distance(points[0], points[2]),
	hidden: true
})
sticks.push({
	p0: engine,
	p1: points[4],
	length: distance(engine, points[4])
})
sticks.push({
	p0: points[4],
	p1: points[5],
	length: distance(points[4], points[5])
})
sticks.push({
	p0: points[5],
	p1: points[0],
	length: distance(points[5], points[0])
})

canvas.addEventListener('click', click)

update()
