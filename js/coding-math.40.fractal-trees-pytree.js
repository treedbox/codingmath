const randomRange = (min, max) => {
  return min + Math.random() * (max - min)
},
branchAngleA = randomRange(0, -Math.PI / 2),
tree = (x, y, size, angle, limit) => {
  c.save()
  c.translate(x, y)
  c.rotate(angle)
  c.fillRect(0, 0, size, -size)
  // left branch
  const x0 = 0,
  y0 = -size,
  size0 = Math.abs(Math.cos(branchAngleA) * size),
  angle0 = branchAngleA

  limit > 0 ? tree(x0, y0, size0, angle0, limit - 1) : (
    c.save(),
    c.translate(x0, y0),
    c.rotate(angle0),
    c.fillRect(0, 0, size0, -size0),
    c.restore()
  )
  // right branch
  const x1 = x0 + Math.cos(angle0) * size0,
  y1 = y0 + Math.sin(angle0) * size0,
  size1 = Math.abs(Math.sin(branchAngleA) * size)
  angle1 = angle0 + Math.PI / 2

  limit > 0 ? tree(x1, y1, size1, angle1, limit - 1) : (
    c.save(),
    c.translate(x1, y1),
    c.rotate(angle1),
    c.fillRect(0, 0, size1, -size1),
    c.restore()
  )

  c.restore()
}
tree(width / 2 - 75, height, 150, 0, 12)
