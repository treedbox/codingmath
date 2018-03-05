msg.innerHTML = 'Use Arrow Keyboard: Up, Down, Left, Right'

const drawCharacter = (image, x, y) => {
	c2.clearRect(-width / 2, -50, width, height)
	c2.save()
	c2.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2)

	c2.drawImage(image, -image.width / 2, -image.height)

	c2.restore()
},
moveCharacter = e => {
	switch(e.keyCode) {
		case 37: // left
		if (canMove(charX - 1, charY)) {
			charX--
			drawCharacter(character, charX, charY)
		}
		break
		case 38: // up
		if (canMove(charX, charY - 1)) {
			charY--
			drawCharacter(character, charX, charY)
		}
		break
		case 39: // right
		if (canMove(charX + 1, charY)) {
			charX++
			drawCharacter(character, charX, charY)
		}
		break
		case 40: // down
		if (canMove(charX, charY + 1)) {
			charY++
			drawCharacter(character, charX, charY)
		}
		break

	}
},
canMove = (x, y) => {
	x = Math.floor(x)
	y = Math.floor(y)
	if (y < 0 || y >= grid.length) {
		return false
	}
	if (x < 0 || x >= grid[y].length) {
		return false
	}
	const tile = grid[y][x]
	if (tile < 4 || tile > 14) {
		return false
	}
	return true
},
drawImageTile = (x, y, index) => {
	c.save()
	c.translate(
		(x - y) * tileWidth / 2,
		(x + y) * tileHeight / 2 - 11 + (index < 4 ? 5 : 0)
	)

	c.drawImage(img, index * tileWidth, 0, tileWidth, img.height,
		-tileWidth / 2, 0, tileWidth, img.height)

		c.restore()
	},
	drawBlock = (x, y, z) => {
		const top = "#eeeeee",
		right = "#cccccc",
		left = "#999999"

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

		// // draw right
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
	randomColor2 = () => {
		const r = Math.floor(Math.random() * 255)
		const g = Math.floor(Math.random() * 255)
		const b = Math.floor(Math.random() * 255)
		return "rgb(" + r + "," + g + "," + b + ")"
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
	draw = () => {
		for (let y = 0; y < grid.length; y++) {
			const row = grid[y]
			for (let x = 0; x < row.length; x++) {
				drawImageTile(x, y, row[x])
			}
		}
	},
	onLoad = () => {
		drawCharacter(character, charX, charY)
		document.body.addEventListener('keydown', moveCharacter)
	}
	canvas2 = canvas.cloneNode(true),
	c2 = canvas2.getContext('2d'),
	tileWidth = 60,
	tileHeight = 30,
	charX = 0.5,
	charY = 9.5,
	grid = [
		[15, 15, 15, 14, 13, 10, 3, 2, 1, 0],
		[15, 15, 14, 13, 10, 10, 3, 2, 1, 0],
		[15, 14, 13, 10, 10, 3, 3, 2, 1, 0],
		[14, 13, 10, 9, 3, 3, 2, 1, 0, 0],
		[13, 10, 9, 7, 3, 2, 1, 0, 0, 0],
		[10, 9, 7, 6, 3, 2, 1, 0, 0, 0],
		[9, 7, 6, 5, 3, 2, 1, 1, 1, 1],
		[7, 6, 5, 3, 3, 2, 2, 2, 2, 2],
		[6, 5, 5, 3, 3, 3, 3, 3, 3, 3],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 3]
	],
	img = document.createElement('img'),
	character = document.createElement('img')

	img.src = 'images/tileset.png',

	character.src = "images/ball.png"

	canvas2.width = width
	canvas2.height = height
	//insert after canvas
	document.body.insertBefore(canvas2, canvas.nextSibling)

	c.translate(width / 2, 50)
	c2.translate(width / 2, 50)

	img.addEventListener('load',draw)

	character.addEventListener('load', onLoad)
