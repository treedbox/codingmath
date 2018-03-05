const rect = {
	x: width / 2 - 200,
	y: height / 2 - 150,
	width: 400,
	height: 300
},
clamp = (value, min, max) => {
	return Math.min(Math.max(value, min), max)
},
move = e => {
	const x = clamp(
		e.clientX || e.touches[0].clientX,
		rect.x + radius,
		rect.x + rect.width - radius
	),
	y = clamp(
		e.clientY || e.touches[0].clientY,
		rect.y + radius,
		rect.y + rect.height - radius
	)

	c.clearRect(0, 0, width, height)
	c.fillStyle = '#cccccc'
	c.fillRect(rect.x, rect.y, rect.width, rect.height)

	c.fillStyle = color
	c.beginPath()
	c.arc(x, y, radius, 0, Math.PI * 2, false)
	c.fill()
},
color = randomColor(),
radius = random(1, 30)

msg.innerHTML = 'Move your mouse/touch'

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
