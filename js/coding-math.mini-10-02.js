const update = () => {
	c.clearRect(0, 0, width, height)
	for (let i = 0; i < 200; i++) {
		const p = particles[i]
		p.update()
		c.beginPath()
		c.arc(p.x, p.y, 3, 0, Math.PI * 2, false)
		c.fill()
	}
	requestAnimationFrame(update)
},
particles = []

for (let i = 0; i < 200; i++) {
	const p = Particle.create(width / 2, height / 2, 0, 0)
	p.vx = Utils.randomRange(-1, 1)
	p.vy = Utils.randomRange(-1, 1)
	particles.push(p)
}

update()
