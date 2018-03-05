const p0 = {
	x: random(0, width),
  y: random(0, height),
},
p1 = {
	x: random(0, width),
  y: random(0, height),
},
p2 = {
	x: random(0, width),
  y: random(0, height),
},
cp = {},
drawPoint = (p) => {
	c.beginPath()
	c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
	c.fill()
}

cp.x = p1.x * 2 - (p0.x + p2.x) / 2
cp.y = p1.y * 2 - (p0.y + p2.y) / 2

c.strokeStyle = '#fff'
c.beginPath()
c.moveTo(p0.x, p0.y)
c.lineTo(cp.x, cp.y)
c.lineTo(p2.x, p2.y)
c.stroke()

c.beginPath()
c.strokeStyle = '#fd0'
c.lineWidth = 5
c.moveTo(p0.x, p0.y)
c.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y)
c.stroke()

drawPoint(p0)
drawPoint(p1)
drawPoint(p2)
drawPoint(cp)
