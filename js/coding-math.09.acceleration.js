const p = Particle.create(100, height, 10, -Math.PI / 2),
accel = Vector.create(.1, .1),
update = () => {
  c.clearRect(0, 0, width, height)

  p.accelerate(accel)

  p.update()
  c.beginPath()
  c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
  c.fill()

  requestAnimationFrame(update)
}
update()
