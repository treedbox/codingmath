const p = {
	x: width / 2,
	y: height / 2,
	vx: Math.random() * 10 - 5,
	vy: Math.random() * 10 - 5
},
drawLines = () => {
	c.beginPath()

	for (let i = 0; i < lines.length; i++) {
		c.moveTo(lines[i].p0.x, lines[i].p0.y)
		c.lineTo(lines[i].p1.x, lines[i].p1.y)
	}

	c.stroke()
},
segmentIntersect = (p0, p1, p2, p3) => {
	const A1 = p1.y - p0.y,
	B1 = p0.x - p1.x,
	C1 = A1 * p0.x + B1 * p0.y,
	A2 = p3.y - p2.y,
	B2 = p2.x - p3.x,
	C2 = A2 * p2.x + B2 * p2.y,
	denominator = A1 * B2 - A2 * B1,
	intersectX = (B2 * C1 - B1 * C2) / denominator,
	intersectY = (A1 * C2 - A2 * C1) / denominator,
	rx0 = (intersectX - p0.x) / (p1.x - p0.x),
	ry0 = (intersectY - p0.y) / (p1.y - p0.y),
	rx1 = (intersectX - p2.x) / (p3.x - p2.x),
	ry1 = (intersectY - p2.y) / (p3.y - p2.y)

	if (denominator == 0) return null

	return ((rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1)) &&
	((rx1 >= 0 && rx1 <= 1) || (ry1 >= 0 && ry1 <= 1)) ? {
		x: intersectX,
		y: intersectY
	} : null
},
update = () => {
	const p0 = {
		x: p.x,
		y: p.y
	}

	c.clearRect(0, 0, width, height)

	drawLines()

	p.x += p.vx
	p.y += p.vy

	const	p1 = {
		x: p.x,
		y: p.y
	}

	c.fillRect(p.x - 2, p.y - 2, 4, 4)

	for (let i = 0; i < lines.length; i++) {
		const p2 = lines[i].p0,
		p3 = lines[i].p1,
		intersect = segmentIntersect(p0, p1, p2, p3)

		if (intersect) {
			c.beginPath()
			c.strokeStyle = '#fd0'
			c.arc(intersect.x, intersect.y, 20, 0, Math.PI * 2, false)
			c.stroke()
			return
		}
	}
	requestAnimationFrame(update)
},
lines = []

for (let i = 0; i < 10; i++) {
	lines[i] = {
		p0: {
			x: Math.random() * width,
			y: Math.random() * height
		},
		p1: {
			x: Math.random() * width,
			y: Math.random() * height
		}
	}
}

update()
