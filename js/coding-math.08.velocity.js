const particles = [],
numParticles = 100,
update = () => {
	c.clearRect(0, 0, width, height)

	for (let i = 0; i < numParticles; i++) {
		const p = particles[i]
		p.update()

		c.beginPath()
		c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
		c.fill()
	}
	requestAnimationFrame(update)
}

for (let i = 0; i < numParticles; i++) {
	particles.push(Particle.create(
		width / 2,
		height / 2,
		Math.random() * 4 + 1,
		Math.random() * Math.PI * 2))
	}

	update()
