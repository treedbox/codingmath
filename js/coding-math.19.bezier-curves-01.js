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
pFinal = {}

c.beginPath()
c.arc(p0.x, p0.y, 4, 0, Math.PI * 2, false)
c.fill()

c.beginPath()
c.arc(p1.x, p1.y, 4, 0, Math.PI * 2, false)
c.fill()

c.beginPath()
c.arc(p2.x, p2.y, 4, 0, Math.PI * 2, false)
c.fill()

c.beginPath()
c.arc(p3.x, p3.y, 4, 0, Math.PI * 2, false)
c.fill()

c.beginPath()
c.moveTo(p0.x, p0.y)
c.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
c.stroke()

for (let t = 0; t <= 1; t += .01) {
	Utils.cubicBezier(p0, p1, p2, p3, t, pFinal)
	c.beginPath()
	c.arc(pFinal.x, pFinal.y, 10, 0, Math.PI * 2, false)
	c.stroke()
}
