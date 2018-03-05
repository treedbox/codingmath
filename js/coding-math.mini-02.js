const lerp = (norm, min, max) => (max - min) * norm + min,
update = () => {
	c.clearRect(0, 0, width, height)

	c.globalAlpha = lerp(t, maxAlpha, minAlpha)

	c.beginPath()
	c.arc(
		lerp(t, minX, maxX),
		lerp(t, minY, maxY),
		lerp(t, minRadius, maxRadius),
		0,
		Math.PI * 2,
		false
	)
	c.fill()

	t += .005
	if (t > 1) t = 0

	requestAnimationFrame(update)
},
minX = 50,
maxX = width - 50,
minY = 100,
maxY = height - 100,
minAlpha = 0,
maxAlpha = 1,
minRadius = 10,
maxRadius = 400

let t = 0

update()
