const centerX = width / 2,
centerY = height / 2,
distanceXY = (x0, y0, x1, y1) => {
	const dx = x1 - x0,
	dy = y1 - y0
	return Math.sqrt(dx * dx + dy * dy)
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	c.clearRect(0, 0, width, height)

	const dist = distanceXY(centerX, centerY, x, y)
	
	dist < 100 ? (
		c.fillStyle = '#ff6666',
		canvas.style.backgroundColor = '#fff'
	) : (
		c.fillStyle = '#fff',
		canvas.style.backgroundColor = '#000'
	)

	c.beginPath()
	c.arc(centerX, centerY, 100, 0, Math.PI * 360, false)
	c.fill()
}

msg.innerHTML = 'Move your mouse/touch'

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
