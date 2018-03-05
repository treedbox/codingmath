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
intersect = lineIntersect(p0, p1, p2, p3)

c.beginPath()
c.moveTo(p0.x, p0.y)
c.lineTo(p1.x, p1.y)
c.moveTo(p2.x, p2.y)
c.lineTo(p3.x, p3.y)
c.stroke()

c.beginPath()
c.arc(intersect.x, intersect.y, 20, 0, Math.PI * 2, false)
c.stroke()
