msg.innerHTML = 'Move your mouse/touch'

const p1 = Particle.create(
  Utils.randomRange(0, width),
  Utils.randomRange(0, height),
  Utils.randomRange(0, 50),
  Utils.randomRange(0, Math.PI * 2),
.2
),
p2 = Particle.create(
  Utils.randomRange(0, width),
  Utils.randomRange(0, height),
  Utils.randomRange(0, 50),
  Utils.randomRange(0, Math.PI * 2),
  .2
),
p3 = Particle.create(
  Utils.randomRange(0, width),
  Utils.randomRange(0, height),
  Utils.randomRange(0, 50),
  Utils.randomRange(0, Math.PI * 2),
  .2
),
k = .01,
//distance between each particle
springLength = 200,
update = () => {
	c.clearRect(0, 0, width, height)

	//avoid particle escape from width and height
	p1.checkEdges(width, height)
	p2.checkEdges(width, height)
	p3.checkEdges(width, height)

	p1.update()
	p2.update()
	p3.update()

	c.beginPath()
	c.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2, false)
	c.fillStyle = p1.color
	c.fill()

	c.beginPath()
	c.arc(p2.x, p2.y, p2.radius, 0, Math.PI * 2, false)
	c.fillStyle = p2.color
	c.fill()

	c.beginPath()
	c.arc(p3.x, p3.y, p3.radius, 0, Math.PI * 2, false)
	c.fillStyle = p3.color
	c.fill()

	//line
	c.beginPath()
	c.moveTo(p3.x, p3.y)
	c.lineTo(p1.x, p1.y)
	c.lineTo(p2.x, p2.y)
	c.lineTo(p3.x, p3.y)
	c.strokeStyle = '#ccc'
	c.stroke()

	requestAnimationFrame(update)
},
move = e => {
	p1.x = e.clientX || e.touches[0].clientX
	p1.y = e.clientY || e.touches[0].clientY
}
p1.radius = p2.radius = p3.radius = 20,
p1.friction = p2.friction = p3.friction = .95
p1.gravity = p2.gravity = p3.gravity = random(0, 5)

p1.addSpring(p2, k, springLength)
p1.addSpring(p3, k, springLength)

p2.addSpring(p1, k, springLength)
p2.addSpring(p3, k, springLength)

p3.addSpring(p1, k, springLength)
p3.addSpring(p2, k, springLength)

p1.color = randomColor()
p2.color = randomColor()
p3.color = randomColor()


update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
