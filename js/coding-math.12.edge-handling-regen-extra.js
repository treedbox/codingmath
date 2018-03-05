const particles = [],
update = () => {
  c.clearRect(0, 0, width, height)

  // if we have less than 100 particles, create one and add it to the array
  // once we have 100, this will be skipped.
  if (particles.length < 100) {
    const p = Particle.create(
      width / 2,
      height,
      5 + Math.random() * 8,
      -Math.PI / 2 + (Math.random() * .2 - .1),
      .1)

      p.radius = Math.random() * 10 + 2
      p.color = randomColor()

      particles.push(p)
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      p.update()

      c.beginPath()
      c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
      c.fillStyle = p.color
      c.fill()

      if (p.y - p.radius > height)
        p.x = width / 2,
        p.y = height,
        p.speed = 5 + Math.random() * 8,
        p.heading = -Math.PI / 2 + (Math.random() * .2 - .1)
    }

    requestAnimationFrame(update)
  }

  update()
