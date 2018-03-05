const p0 = {
	x: Math.random() * width,
	y: Math.random() * height
},
p1 = {
	x: Math.random() * width,
	y: Math.random() * height
},
p2 = {
	x: Math.random() * width,
	y: Math.random() * height
},
p3 = {
	x: Math.random() * width,
	y: Math.random() * height
}

c.beginPath()
c.moveTo(p0.x, p0.y)
c.lineWidth = 2
c.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
c.stroke()

c.beginPath()
c.strokeStyle = '#fd0'
c.lineWidth = 5
Utils.multicurve([p0, p1, p2, p3], c)
c.stroke()
