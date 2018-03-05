msg.innerHTML = 'Move your mouse/touch'

const circle0 = {
	x: Math.random() * width,
	y: Math.random() * height,
	radius: 50 + Math.random() * 100
},
circle1 = {
	x: Math.random() * width,
	y: Math.random() * height,
	radius: 50 + Math.random() * 100
},
move = e => {
	circle1.x = e.clientX || e.touches[0].clientX,
	circle1.y = e.clientY || e.touches[0].clientY

	Utils.circleCollision(circle0, circle1) ?
	c.fillStyle = '#f66' : c.fillStyle = '#999'

	c.clearRect(0, 0, width, height)
	c.beginPath()
	c.arc(circle0.x, circle0.y, circle0.radius, 0, Math.PI * 2, false)
	c.fill()

	c.beginPath()
	c.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI * 2, false)
	c.fill()
}

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
