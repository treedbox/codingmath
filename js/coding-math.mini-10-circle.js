const centerX = width / 2,
centerY = height / 2,
maxRadius = 200,
r = random(10, maxRadius),
r2 = random(10, maxRadius)

for (let i = 0; i < 10; i++) {
	const radius = r,
	angle = Math.PI * 2 / 10 * i,
	x = centerX + Math.cos(angle) * radius,
	y = centerY + Math.sin(angle) * radius

	c.beginPath()
	c.arc(x, y, 5, 0, Math.PI * 2, false)
	c.fill()
}

for (let i = 0; i < 10; i++) {
	const radius = r2,
	angle = Math.PI * 2 / 10 * i,
	x = centerX + Math.cos(angle) * radius,
	y = centerY + Math.sin(angle) * radius

	c.beginPath()
	c.arc(x, y, 5, 0, Math.PI * 2, false)
	c.fill()
}
