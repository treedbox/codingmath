const point = {
	x: 50,
	y: 100
},
delta = .05,
update = () => {
	c.clearRect(-width / 2, -height / 2, width, height)

	c.beginPath()
	c.arc(point.x, point.y, 20, 0, Math.PI * 2, false)
	c.fill()

	const cos = Math.cos(delta),
	sin = Math.sin(delta),
	x = point.x * cos - point.y * sin,
	y = point.y * cos + point.x * sin

	point.x = x
	point.y = y

	requestAnimationFrame(update)
}

c.translate(width / 2, height / 2)

update()
