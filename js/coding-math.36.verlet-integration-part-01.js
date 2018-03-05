const points = [],
bounce = .9,
gravity = .5,
friction = .999,
radius = 10,
updatePoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i],
		vx = (p.x - p.oldx) * friction,
		vy = (p.y - p.oldy) * friction

		p.oldx = p.x
		p.oldy = p.y
		p.x += vx
		p.y += vy
		p.y += gravity


		p.x > width - radius ? (
			p.x = width - radius,
			p.oldx = p.x + vx * bounce
		) : (
			p.x < radius ? (
				p.x = radius,
				p.oldx = p.x + vx * bounce
			) : null
		)

		p.y > height - radius ? (
			p.y = height - radius,
			p.oldy = p.y + vy * bounce
		) : (
			p.y < radius ? (
				p.y = radius,
				p.oldy = p.y + vy * bounce
			) : null
		)
	}
},
renderPoints = () => {
	c.clearRect(0, 0, width, height)
	for (let i = 0; i < points.length; i++) {
		const p = points[i]
		c.beginPath()
		c.arc(p.x, p.y, radius, 0, Math.PI * 2)
		c.fill()
	}
},
update = () => {
	updatePoints()
	renderPoints()
	requestAnimationFrame(update)
}

points.push({
	x: 100,
	y: 100,
	oldx: 95,
	oldy: 95
})

update()
