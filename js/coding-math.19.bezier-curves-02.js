let maxT = 0

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
	for (let t = 0; t <= maxT; t += .01) {
		Utils.cubicBezier(p0, p1, p2, p3, t, pFinal)
		c.lineTo(pFinal.x, pFinal.y)
	}
	c.stroke()

	maxT += .01

	if (maxT > 1) maxT = 0

	requestAnimationFrame(draw)
}

draw()
