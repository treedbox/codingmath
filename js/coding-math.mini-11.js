const draw = () => {
	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false)
	c.fill()
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	handle.x = x - offset.x
	handle.y = y - offset.y

	draw()
},
up = e => {
	canvas.removeEventListener('mousemove', move)
	canvas.removeEventListener('touchmove', move)

	canvas.removeEventListener('mouseup', up)
	canvas.removeEventListener('touchend', up)

	canvas.removeEventListener('mouseleave', up)
	canvas.removeEventListener('touchcancel', up)
},
down = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	if (Utils.circlePointCollision(x, y, handle)) {
		canvas.addEventListener('mousemove', move)
		canvas.addEventListener('touchmove',move, {passive:true})

		canvas.addEventListener('mouseup', up)
		canvas.addEventListener('touchend', up)

		canvas.addEventListener('mouseleave', up)
		canvas.addEventListener('touchcancel', up)
		offset.x = x - handle.x
		offset.y = y - handle.y
	}
},
handle = {
	x: width / 2,
	y: height / 2,
	radius: 20
},
offset = {}

draw()

canvas.addEventListener('mousedown',down)
canvas.addEventListener('touchstart',down, {passive:true})
