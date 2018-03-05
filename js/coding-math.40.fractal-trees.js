const p0 = {
	x: width / 2,
	y: height - 50
},
p1 = {
	x: width / 2,
	y: 50
},
randomRange = (min, max) => {
	return min + Math.random() * (max - min)
},
tree = (p0, p1, limit) => {
	const dx = p1.x - p0.x,
	dy = p1.y - p0.y,
	dist = Math.sqrt(dx * dx + dy * dy),
	angle = Math.atan2(dy, dx),
	branchLength = dist * (1 - trunkRatio),
	pA = {
		x: p0.x + dx * trunkRatio,
		y: p0.y + dy * trunkRatio
	},
	pB = {
		x: pA.x + Math.cos(angle + branchAngleA) * branchLength,
		y: pA.y + Math.sin(angle + branchAngleA) * branchLength,
	},
	pC = {
		x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
		y: pA.y + Math.sin(angle + branchAngleB) * branchLength,
	}

	c.beginPath()
	c.moveTo(p0.x, p0.y)
	c.lineTo(pA.x, pA.y)
	c.stroke()

	limit > 0 ? (
		tree(pA, pC, limit - 1),
		tree(pA, pB, limit - 1)
	) : (
		c.beginPath(),
		c.moveTo(pB.x, pB.y),
		c.lineTo(pA.x, pA.y),
		c.lineTo(pC.x, pC.y),
		c.stroke()
	)

	branchAngleA += randomRange(-.02, .02)
	branchAngleB += randomRange(-.02, .02)
	trunkRatio += randomRange(-.02, .02)
}

let branchAngleA = randomRange(-Math.PI / 2, Math.PI / 2),
branchAngleB = randomRange(-Math.PI / 2, Math.PI / 2),
trunkRatio = randomRange(.25, .75)

tree(p0, p1, 8)
