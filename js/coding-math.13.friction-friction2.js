const p = Particle.create(
  width / 2,
  height / 2,
  10,
  Math.random() * Math.PI * 2
),
update = () => {
  c.clearRect(0, 0, width, height)

  p.speed *= friction
  p.update()

  c.beginPath()
  c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
  c.fill()

  requestAnimationFrame(update)
},
friction = .97

p.radius = 10

update()
