const p = Particle.create(
  width / 2,
  height / 2,
  10,
  Math.random() * Math.PI * 2
),
friction = Vector.create(.15, 0),
update = () => {
  c.clearRect(0, 0, width, height)

  friction.angle = p.heading

  p.speed > friction.length ? p.speed -= friction.length : p.speed = 0

  p.update()

  c.beginPath()
  c.arc(p.x,
    p.y,
    p.radius,
    0,
    Math.PI * 2,
    false)
    c.fill()

    requestAnimationFrame(update)
  }

  p.radius = 10

  update()
