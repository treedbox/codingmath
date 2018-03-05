let zero = true

const particles = [],
update = () => {
	c.clearRect(0, 0, width, height)

	particles.length !== 0 ? console.log(particles.length) :
	 zero ? (console.log(particles.length), zero = false) : null

	particles.forEach((e, i) => {
		e.update()

		c.beginPath()
		c.arc(e.x, e.y, e.radius, 0, Math.PI * 2, false)
		c.fill()
	})
	//test if some particle in array if off Screen
	Particle.offScreenRemove(particles, width, height)

	requestAnimationFrame(update)
}

for (let i = 0; i < 100; i++) {
	const p = Particle.create(
		width / 2,
		height / 2,
		Math.random() * 5 + 2,
		Math.random() * Math.PI * 2)
		p.radius = 10
		particles.push(p)
	}

	update()
