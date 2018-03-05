msg.innerHTML = 'Move your mouse/touch'

const rect = {
	x: 300,
	y: 200,
	width: -200,
	height: -100
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	c.clearRect(0, 0, width, height)

	Utils.pointInRect(x, y, rect) ?
	c.fillStyle = '#ff6666' : c.fillStyle = '#999999'

	c.fillRect(rect.x, rect.y, rect.width, rect.height)
}

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
