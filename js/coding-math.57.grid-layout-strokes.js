const x = y = 5,
rows = columns = 10,
cellWidth = width / columns,
cellHeight = height / rows

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    c.save()
    c.translate(j * cellWidth, i * cellHeight)

    c.beginPath()
    c.lineWidth = random(1, 3)
    for (let n = 0; n < 50; n++) {
      c.lineTo(random(0, cellWidth), random(0, cellHeight))
    }
    c.stroke()

    c.restore()
  }
}
