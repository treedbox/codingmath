const sun = Particle.create(width / 2, height / 2, 0, 0),
planet = Particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2),
update = () => {
	c.clearRect(0, 0, width, height)

	planet.gravitateTo(sun)
	planet.update()

	c.beginPath()
	c.fillStyle = '#ffff00'
	c.arc(sun.x, sun.y, 20, 0, Math.PI * 2, false)
	c.fill()

	c.beginPath()
	c.fillStyle = '#0000ff'
	c.arc(planet.x, planet.y, 5, 0, Math.PI * 2, false)
	c.fill()

	// animation goes here
	requestAnimationFrame(update)
}

sun.mass = 100000

update()
