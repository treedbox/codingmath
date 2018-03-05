msg.innerHTML = 'Move your mouse/touch or click'

let particles = []

const numParticles = 100,
timer = setInterval(() => {
	requestAnimationFrame(update)
}, 10),
update = () => {
	c.clearRect(0, 0, width,height)

	for (let i = 0; i < numParticles; i++) {
		const p = particles[i]

		p.update()

		c.beginPath()
		c.arc(p.x, p.y, 4, 0, Math.PI * 2, false)
		c.fillStyle = p.color
		c.fill()
	}
	timer
},
createParticles = (x,y)=> {
	particles = []

	for (let i = 0; i < numParticles; i++) {
		const p = Particle.create(
			x || width / 2,
			y || height / 3,
			Math.random() * 5 + 2,
			Math.random() * Math.PI * 2,
			.1)

			p.color = randomColor()

			particles.push(p)
		}
		update()
	},
	start = e => {
		createParticles(e.clientX, e.clientY)
	},
	up = () => {
		canvas.removeEventListener('mousemove', start)
		canvas.removeEventListener('touchmove', start)

		canvas.removeEventListener('mouseup', up)
		canvas.removeEventListener('touchend', up)

		canvas.removeEventListener('mouseleave', up)
		canvas.removeEventListener('mouseleave', up)
	}
	down = () => {
		canvas.addEventListener('mousemove', start)
		canvas.addEventListener('touchmove', start, {passive:true})

		canvas.addEventListener('mouseup', up)
		canvas.addEventListener('touchend', up)

		canvas.addEventListener('mouseleave', up)
		canvas.addEventListener('touchcancel', up)
	}

	createParticles()

	canvas.addEventListener('click', start)

	canvas.addEventListener('mousedown', down)
	canvas.addEventListener('touchstart', down, {passive:true})
