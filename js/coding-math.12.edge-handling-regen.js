const particles = [],
update = () => {
  c.clearRect(0, 0, width, height)

  for (let i = 0; i < 100; i += 1) {
    const p = particles[i]

    p.update()

    c.beginPath()
    c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
    c.fillStyle = p.color
    c.fill()

    if (p.y - p.radius > height) {
      p.x = width / 2
      p.y = height
      p.speed = Math.random() * 8 + 5
      p.heading = -Math.PI / 2 + (Math.random() * .2 - .1)
    }
  }
  requestAnimationFrame(update)
}

for (let i = 0; i < 100; i += 1) {
  //x, y, speed, direction, grav
  const p = Particle.create(
    width / 2,
    height,
    Math.random() * 8 + 5,
    Math.PI / 2 + (Math.random() * .2 - .1),
    0.1)

    p.radius = Math.random() * 10 + 2
    i === 0 ? p.color = 'black' :
    i === 99 ? p.color = 'white' :
    p.color = randomColor()
    
    particles.push(p)
  }

  update()
