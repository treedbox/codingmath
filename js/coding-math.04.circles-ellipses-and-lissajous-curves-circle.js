let angle = 0,
x,
y

const centerX = width / 2,
centerY = height / 2,
radius = 200,
numObjects = 20,
slice = Math.PI * 2 / numObjects

for (let i = 0; i < numObjects; i++) {
  angle = i * slice
  x = centerX + Math.cos(angle) * radius
  y = centerY + Math.sin(angle) * radius
  c.beginPath()
  c.arc(x, y, 10, 0, Math.PI * 2, false)
  c.fill()
}
