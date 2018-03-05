const bees = [],
numBees = random(1,500),
beeSize = random(0,30),
color = randomColor(),
Bee = {
	create() {
		const obj = Object.create(this)
		obj.init.apply(obj, arguments)
		return obj
	},
	init(foo, bar) {
		console.log(foo, bar)

		this.angleX = Math.random() * Math.PI * 2
		this.angleY = Math.random() * Math.PI * 2
		this.speedX = Math.random() * .1 - .05
		this.speedY = Math.random() * .1 - .05
	},
	update() {
		const x = Math.cos(this.angleX) * (width / 2 - beeSize),
		y = Math.sin(this.angleY) *  (height / 2 - beeSize)

		this.angleX += this.speedX
		this.angleY += this.speedY

		c.beginPath()
		c.fillStyle = color
		c.strokeStyle = '#000'
		c.arc(width / 2 + x, height / 2 + y, beeSize, 0, Math.PI * 2, false)
		c.fill()
		c.stroke()
	}
},
update = () => {
	c.clearRect(0, 0, width, height)
	bees.forEach(e => e.update())

	requestAnimationFrame(update)
}

for (let i = 0; i < numBees; i++) {
	bees.push(Bee.create('foo', 'bar'))
}

update()
