const draw = () => {
	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.moveTo(handle0.x, handle0.y)
	c.bezierCurveTo(
		handle1.x, handle1.y,
		handle2.x, handle2.y,
		handle3.x, handle3.y
	)
	c.stroke()

	for (let i = 0; i < 4; i++) {
		const handle = handles[i]
		if (isDragging && handle === dragHandle) {
			c.shadowColor = color
			c.shadowOffsetX = 4
			c.shadowOffsetY = 4
			c.shadowBlur = 8
		}
		c.beginPath()
		c.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false)
		c.fill()

		c.shadowColor = null
		c.shadowOffsetX = null
		c.shadowOffsetY = null
		c.shadowBlur = null
	}
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	dragHandle.x = x- offset.x
	dragHandle.y = y - offset.y
	draw()
},
up = e => {
	canvas.removeEventListener('mousemove', move)
	canvas.removeEventListener('touchmove', move)

	canvas.removeEventListener('mouseup', up)
	canvas.removeEventListener('touchend', up)

	canvas.removeEventListener('mouseleave', up)
	canvas.removeEventListener('touchcancel', up)
	isDragging = false
	draw()
},
down = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	for (let i = 0; i < 4; i++) {
		const handle = handles[i]
		if (Utils.circlePointCollision(x, y, handle)) {
			isDragging = true
			canvas.addEventListener('mousemove', move)
			canvas.addEventListener('touchmove', move, {passive:true})

			canvas.addEventListener('mouseup', up)
			canvas.addEventListener('touchend', up)

			canvas.addEventListener('mouseleave', up)
			canvas.addEventListener('touchcancel', up)
			dragHandle = handle
			offset.x = x - handle.x
			offset.y = y - handle.y
			draw()
		}
	}
},
r = 15,
handle0 = {
	x: random(r, width),
	y: random(r, height),
	radius: r
},
handle1 = {
	x: random(r, width),
	y: random(r, height),
	radius: r
},
handle2 = {
	x: random(r, width),
	y: random(r, height),
	radius: r
},
handle3 = {
	x: random(r, width),
	y: random(r, height),
	radius: r
},
handles = [handle0, handle1, handle2, handle3],
offset = {},
color = randomColor()

let isDragging = false,
dragHandle

draw()
canvas.addEventListener('mousedown', down)
canvas.addEventListener('touchstart',down, {passive:true})
