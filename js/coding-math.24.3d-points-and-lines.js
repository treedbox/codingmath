let rotationSpeed = .01,
ypos = 0,
baseAngle = 0

const fl = 300,
points = [],
numPoints = 200,
centerZ = 2000,
radius = 1500,
update = () => {
	baseAngle += rotationSpeed

	c.clearRect(-width / 2, -height / 2, width, height)

	c.beginPath()
	c.lineWidth = 3

	for (let i = 0; i < numPoints; i++) {
		const point = points[i],
		perspective = fl / (fl + point.z)

		c.save()

		c.scale(perspective, perspective)
		c.translate(point.x, point.y + ypos)

		i == 0 ? c.moveTo(0, 0) : c.lineTo(0, 0)

		c.restore()

		point.x = Math.cos(point.angle + baseAngle) * radius
		point.z = centerZ + Math.sin(point.angle + baseAngle) * radius
	}
	c.stroke()
	requestAnimationFrame(update)
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	rotationSpeed = (x - width / 2) * .00005
	ypos = (y- height / 2) * 2
}

for (let i = 0; i < numPoints; i++) {
	const point = {
		angle: .2 * i,
		y: 2000 - 4000 / numPoints * i + Math.random() * 500
	}

	point.x = Math.cos(point.angle + baseAngle) * radius
	point.z = centerZ + Math.sin(point.angle + baseAngle) * radius
	points.push(point)
}

c.translate(width / 2, height / 2)

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
