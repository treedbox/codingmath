msg.innerHTML = 'Move your mouse/touch'

const rect0 = {
	x: 300,
	y: 400,
	width: -200,
	height: -100
},
rect1 = {
	x: 0,
	y: 0,
	width: -100,
	height: -200
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	rect1.x = x - rect1.width / 2
	rect1.y = y - rect1.height / 2

	c.clearRect(0, 0, width, height)

	Utils.rectIntersect(rect0, rect1) ?
	c.fillStyle = '#ff6666' : c.fillStyle = '#999999'

	c.fillRect(rect0.x, rect0.y, rect0.width, rect0.height)
	c.fillRect(rect1.x, rect1.y, rect1.width, rect1.height)
}

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
