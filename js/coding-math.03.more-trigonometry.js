let angle = 0

const centerY = height * .5,
centerX = width * .5,
baseAlpha = .5,
offset = .5,
speed = .1,
update = () => {
	const alpha = baseAlpha + Math.sin(angle) * offset,
	color = 'rgba(233, 30, 99, ' + alpha + ')'

	c.clearRect(0, 0, width, height)
	c.beginPath()
	c.fillStyle = color
	c.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
	c.fill()

	angle += speed
	
	requestAnimationFrame(update)
}
update()
