const centerX = width / 2,
centerY = height / 2,
maxRadius = 100

for (let i = 0; i < 1000; i++) {
	const radius = Math.sqrt(Math.random()) * maxRadius,
	angle = Utils.randomRange(0, Math.PI * 2),
	x = centerX + Math.cos(angle) * radius,
	y = centerY + Math.sin(angle) * radius

	c.beginPath()
	c.arc(x, y, 1, 0, Math.PI * 2, false)
	c.fill()
}
