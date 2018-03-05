const xres = 10,
yres = 11

c.clearRect(0, 0, width, height)
c.fillStyle = 'black'
c.fillRect(0, 0, width, height)
c.font = '12px Courier'
c.translate(width / 2, height / 2)
c.scale(1.5, 1.5)
c.rotate(.1)
c.transform(1.5, .3, .1, 1.5, 0, 0)

for (let y = -height / 2; y < height / 2; y += yres) {
	for (let x = -width / 2; x < width / 2; x += xres) {
		const char = Math.random() < .5 ? '0' : '1'
		c.fillStyle = randomColor()
		c.fillText(char, x, y)
	}
}
