const points = [],
numPoints = 10

for (let i = 0; i < numPoints; i++) {
	const p = {
		x: random(0, width),
		y: random(0, height),
	}

	c.beginPath()
	c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
	c.fill()

	points.push(p)
}

c.strokeStyle = '#fff'
c.beginPath()
c.moveTo(points[0].x, points[0].y)
for (let i = 1; i < numPoints; i++) {
	c.lineTo(points[i].x, points[i].y)
}
c.stroke()

c.beginPath()
c.strokeStyle = '#fd0'
c.lineWidth = 5
Utils.multicurve(points, c)
c.stroke()
