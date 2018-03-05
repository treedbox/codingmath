const tileWidth = 60,
tileHeight = 30,
img = document.createElement('img'),
randomColor2 = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
},
drawImageTile = (x, y, index) => {
  c.save()
  c.translate(
    (x - y) * tileWidth / 2,
    (x + y) * tileHeight / 2 + (index < 4 ? 5 : 0)
  )

  c.drawImage(img, index * tileWidth, 0, tileWidth, img.height,
    -tileWidth / 2, 0, tileWidth, img.height)

    c.restore()
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
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        drawImageTile(x, y, Math.floor(Math.random() * 16))
        // drawBlock(x, y, Math.random() * 4, randomColor2())
      }
    }
  }

  c.translate(width / 2, 50)

  img.src = 'images/tileset.png'

  img.addEventListener('load', draw)
