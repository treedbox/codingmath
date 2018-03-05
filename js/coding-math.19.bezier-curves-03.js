let t = 0,
direction = .01

const p0 = {
	x: Utils.randomRange(0, width),
	y: Utils.randomRange(0, height)
},
p1 = {
	x: Utils.randomRange(0, width),
	y: Utils.randomRange(0, height)
},
p2 = {
	x: Utils.randomRange(0, width),
	y: Utils.randomRange(0, height)
},
p3 = {
	x: Utils.randomRange(0, width),
	y: Utils.randomRange(0, height)
},
pFinal = {},
draw = () => {
	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.moveTo(p0.x, p0.y)
	c.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
	c.stroke()

	Utils.cubicBezier(p0, p1, p2, p3, t, pFinal)
	c.beginPath()
	c.arc(pFinal.x, pFinal.y, 10, 0, Math.PI * 2, false)
	c.fill()

	t += direction
	if (t > 1 || t < 0) direction = -direction

	requestAnimationFrame(draw)
}
draw()
