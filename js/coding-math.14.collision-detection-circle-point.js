msg.innerHTML = 'Move your mouse/touch'

const circle = {
	x: Math.random() * width,
	y: Math.random() * height,
	radius: 50 + Math.random() * 100
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	Utils.circlePointCollision(x, y, circle) ?
	c.fillStyle = '#f66' : c.fillStyle = '#999'

	c.clearRect(0, 0, width, height)
	c.beginPath()
	c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false)
	c.fill()
}

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
