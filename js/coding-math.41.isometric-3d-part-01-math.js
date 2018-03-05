const randomColor2 = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	return 'rgb(' + r + ',' + g + ',' + b + ')'
},
drawBlock = (x, y, z) => {
	const top = '#eeeeee',
	right = '#cccccc',
	left = '#999999'

	c.save()
	c.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2)

	// draw top
	c.beginPath()
	c.moveTo(0, -z * tileHeight)
	c.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight)
	c.lineTo(0, tileHeight - z * tileHeight)
	c.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight)
	c.closePath()
	c.fillStyle = top
	c.fill()

	// draw left
	c.beginPath()
	c.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight)
	c.lineTo(0, tileHeight - z * tileHeight)
	c.lineTo(0, tileHeight)
	c.lineTo(-tileWidth / 2, tileHeight / 2)
	c.closePath()
	c.fillStyle = left
	c.fill()

	// draw right
	c.beginPath()
	c.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight)
	c.lineTo(0, tileHeight - z * tileHeight)
	c.lineTo(0, tileHeight)
	c.lineTo(tileWidth / 2, tileHeight / 2)
	c.closePath()
	c.fillStyle = right
	c.fill()

	c.restore()
},
drawTile = (x, y, color) => {
	c.save()
	c.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2)

	c.beginPath()
	c.moveTo(0, 0)
	c.lineTo(tileWidth / 2, tileHeight / 2)
	c.lineTo(0, tileHeight)
	c.lineTo(-tileWidth / 2, tileHeight / 2)
	c.closePath()
	c.fillStyle = color
	c.fill()

	c.restore()
},
tileWidth = 50,
tileHeight = 25

c.translate(width / 2, 50)

for (let x = 0; x < 30; x++) {
	for (let y = 0; y < 30; y++) {
		const dx = 15 - x,
		dy = 15 - y,
		dist = Math.sqrt(dx * dx + dy * dy),
		z = Math.cos(dist * .75) * 2 + 2
		drawBlock(x, y, z, randomColor2())
	}
}
