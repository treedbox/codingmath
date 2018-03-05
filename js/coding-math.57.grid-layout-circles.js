const x = y = 5,
rows = columns = 50,
rand = Math.random(),
cellWidth = width / columns,
cellHeight = height / rows,
radius = Math.min(cellWidth, cellHeight) / 2

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    c.save()
    c.translate(j * cellWidth, i * cellHeight)

    const sin = Math.sin(j * i * rand) * .25 + .75

    c.beginPath()
    c.arc(cellWidth / 2, cellHeight / 2, radius * sin, 0, Math.PI * 2)
    c.fill()
    
    c.restore()
  }
}
