msg.innerHTML = 'Drag an Drop the circles'

let clickPoint = {}

const p0 = {
	x: 100,
	y: 100
},
p1 = {
	x: 500,
	y: 500
},
p2 = {
	x: 600,
	y: 50
},
p3 = {
	x: 80,
	y: 600
},
getClickPoint = (x, y) => {
	const points = [p0, p1, p2, p3]

	for (let i = 0; i < points.length; i++) {
		const p = points[i],
		dx = p.x - x,
		dy = p.y - y,
		dist = Math.sqrt(dx * dx + dy * dy)

		if (dist < 10) return p
	}
},
drawPoint = (p) => {
	c.beginPath()
	c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
	c.fill()
},
lineIntersect = (p0, p1, p2, p3) => {
	const A1 = p1.y - p0.y,
	B1 = p0.x - p1.x,
	C1 = A1 * p0.x + B1 * p0.y,
	A2 = p3.y - p2.y,
	B2 = p2.x - p3.x,
	C2 = A2 * p2.x + B2 * p2.y,
	denominator = A1 * B2 - A2 * B1

	return {
		x: (B2 * C1 - B1 * C2) / denominator,
		y: (A1 * C2 - A2 * C1) / denominator
	}
},
update = () => {
	c.clearRect(0, 0, width, height)

	drawPoint(p0)
	drawPoint(p1)
	drawPoint(p2)
	drawPoint(p3)

	c.beginPath()
	c.moveTo(p0.x, p0.y)
	c.lineTo(p1.x, p1.y)
	c.moveTo(p2.x, p2.y)
	c.lineTo(p3.x, p3.y)
	c.stroke()

	const intersect = lineIntersect(p0, p1, p2, p3)

	c.beginPath()
	c.arc(intersect.x, intersect.y, 20, 0, Math.PI * 2, false)
	c.stroke()
},
move = e => {
	clickPoint.x = e.clientX || e.touches[0].clientX
	clickPoint.y = e.clientY || e.touches[0].clientY
	update()
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

	clickPoint = getClickPoint(x, y)

	if (clickPoint) {
		canvas.addEventListener('mousemove', move)
		canvas.addEventListener('touchmove',move, {passive:true})

		canvas.addEventListener('mouseup', up)
		canvas.addEventListener('touchend', up)

		canvas.addEventListener('mouseleave', up)
		canvas.addEventListener('touchcancel', up)
	}
}

update()

canvas.addEventListener('mousedown', down)
canvas.addEventListener('touchstart',down, {passive:true})
