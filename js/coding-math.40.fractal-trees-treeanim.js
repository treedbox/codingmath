const p0 = {
	x: width / 2,
	y: height - 50
},
p1 = {
	x: width / 2,
	y: 50
},
trunkRatio = .35,
tAS = .01,
tBS = .01437,
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
},
draw = () => {
	c.clearRect(0, 0, width, height)

	branchAngleA = Math.cos(tA += tAS) * Math.PI / 2
	branchAngleB = Math.cos(tB += tBS) * Math.PI / 2

	tree(p0, p1, 8)

	requestAnimationFrame(draw)
}

let branchAngleA,
branchAngleB,
tA = Math.PI,
tB = 0

draw()
