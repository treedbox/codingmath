const x = y = 5,
cellWidth = cellHeight = 60,
rows = Math.floor(height / cellHeight),
columns = Math.floor(width / cellWidth)

for (let i = 0; i < rows; i++) {
  for (let ii = 0; ii < columns; ii++) {
    c.save()
    c.translate(ii * cellWidth, i * cellHeight)

    c.fillRect(x, y, cellWidth - x * 2, cellHeight - y * 2)

    c.restore()
  }
}
