const p = Particle.create(width / 2, height / 2, 5, Math.random() * Math.PI * 2, .1),
update = () => {
	c.clearRect(0, 0, width, height)

	p.update()

	c.beginPath()
	c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
	c.fill()

	p.checkEdges(width, height)

	requestAnimationFrame(update)
}

p.radius = 40
p.bounce = -.9

update()
