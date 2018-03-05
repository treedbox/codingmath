msg.innerHTML = 'Move your mouse/touch'

const star0 = {
	x: 200,
	y: 200,
	points: [
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 }
	],
	offset: [
		{ x: 100, y: 0},
		{ x: 40, y: 29},
		{ x: 31, y: 95},
		{ x: -15, y: 48},
		{ x: -81, y: 59},
		{ x: -50, y: 0},
		{ x: -81, y: -59},
		{ x: -15, y: -48},
		{ x: 31, y: -95},
		{ x: 40, y: -29}
	]
},
star1 = {
	x: 600,
	y: 500,
	points: [
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 },
		{x: 0, y: 0 }
	],
	offset: [
		{ x: 100, y: 0},
		{ x: 40, y: 29},
		{ x: 31, y: 95},
		{ x: -15, y: 48},
		{ x: -81, y: 59},
		{ x: -50, y: 0},
		{ x: -81, y: -59},
		{ x: -15, y: -48},
		{ x: 31, y: -95},
		{ x: 40, y: -29}
	]
},
checkStarCollision = (starA, starB) => {
	for(let i = 0; i < starA.points.length; i++) {
		let p0 = starA.points[i],
		p1 = starA.points[(i + 1) % starA.points.length]

		for(let j = 0; j < starB.points.length; j++) {
			let p2 = starB.points[j],
			p3 = starB.points[(j + 1) % starB.points.length]

			if(segmentIntersect(p0, p1, p2, p3)) {
				return true
			}
		}
	}
	return false
},
updateStar = (star) => {
	for(let i = 0; i < star.points.length; i++) {
		star.points[i].x = star.x + star.offset[i].x
		star.points[i].y = star.y + star.offset[i].y
	}
},
segmentIntersect = (p0, p1, p2, p3) => {
	let A1 = p1.y - p0.y,
	B1 = p0.x - p1.x,
	C1 = A1 * p0.x + B1 * p0.y,
	A2 = p3.y - p2.y,
	B2 = p2.x - p3.x,
	C2 = A2 * p2.x + B2 * p2.y,
	denominator = A1 * B2 - A2 * B1

	if(denominator == 0) {
		return null
	}

	let intersectX = (B2 * C1 - B1 * C2) / denominator,
	intersectY = (A1 * C2 - A2 * C1) / denominator,
	rx0 = (intersectX - p0.x) / (p1.x - p0.x),
	ry0 = (intersectY - p0.y) / (p1.y - p0.y),
	rx1 = (intersectX - p2.x) / (p3.x - p2.x),
	ry1 = (intersectY - p2.y) / (p3.y - p2.y)

	if(((rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1)) &&
	((rx1 >= 0 && rx1 <= 1) || (ry1 >= 0 && ry1 <= 1))) {
		return {
			x: intersectX,
			y: intersectY
		}
	} else {
		return null
	}
},
drawStar = (star) => {
	c.beginPath()
	c.moveTo(star.points[0].x, star.points[0].y)
	for(let i = 1; i < star.points.length; i++) {
		c.lineTo(star.points[i].x, star.points[i].y)
	}
	c.closePath()
	c.fill()
},
move = e => {
	c.clearRect(0, 0, width, height)
	star0.x = e.clientX || e.touches[0].clientX
	star0.y = e.clientY || e.touches[0].clientY
	updateStar(star0)
	updateStar(star1)
	if(checkStarCollision(star0, star1)) {
		c.fillStyle = 'red'
	} else {
		c.fillStyle = 'black'
	}
	drawStar(star0)
	drawStar(star1)
}

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
