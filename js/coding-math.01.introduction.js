const update = () => {
	c.clearRect(0, 0, width, height)

	c.strokeStyle = randomColor()
	for (let i = 0; i < 100; i++) {
		c.beginPath()
		c.moveTo(Math.random() * width, Math.random() * height)
		c.lineTo(Math.random() * width, Math.random() * height)
		c.stroke()
	}
}
update()

canvas.addEventListener('click', update)
