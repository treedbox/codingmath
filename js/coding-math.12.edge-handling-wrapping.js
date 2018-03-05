const p = Particle.create(
  width / 2,
  height / 2,
  3,
  Math.random() * Math.PI * 2
),
update = () => {
  c.clearRect(0, 0, width, height)

  p.update()

  c.beginPath()
  c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
  c.fill()

  p.wrapping(width, height)

  requestAnimationFrame(update)
}

p.radius = 50

update()
