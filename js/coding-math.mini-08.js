const drawGrid = () => {
	c.beginPath()

	for (let x = 0; x <= width; x += gridSize) {
		c.moveTo(x, 0)
		c.lineTo(x, height)
	}

	for (let y = 0; y <= height; y += gridSize) {
		c.moveTo(0, y)
		c.lineTo(width, y)
	}

	c.stroke()
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY,
	px = Utils.roundNearest(x, gridSize),
	py = Utils.roundNearest(y, gridSize)

	c.clearRect(0, 0, width, height)

	drawGrid()

	c.beginPath()
	c.arc(px, py, 20, 0, Math.PI * 2, false)
	c.fill()
},
gridSize = 40

msg.innerHTML = 'Move your mouse/touch'

drawGrid()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
