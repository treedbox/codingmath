let towards = true

const fl = 300,
shapes = [],
numShapes = 100,
urlImage = 'images/stars.png',
update = () => {
	c.clearRect(-width / 2, -height / 2, width, height)

	for (let i = 0; i < numShapes; i++) {
		const shape = shapes[i],
		perspective = fl / (fl + shape.z)

		c.save()
		c.translate(shape.x * perspective, shape.y * perspective)
		c.scale(perspective, perspective)

		// square:
		c.fillStyle = shapes[i].color
		c.fillRect(-200, -200, 20, 20)

		// circle:
		c.beginPath()
		c.fillStyle = shapes[i].color
		c.arc(0, 0, 30, 0, Math.PI * 2, false)
		c.fill()
		c.fillStyle = shapes[i].color

		// letter:
		c.fillText(shape.char, -100, -100)

		c.restore()

		// move towards or away
		towards ? (
			shape.z -= 10,
			shape.z < 0 ? shape.z = 10000 : null
		) : (
			shape.z += 10,
			shape.z > 10000 ? shape.z = 0 : null
		)
	}
	requestAnimationFrame(update)
}
msg.innerHTML = 'Click to reverse'

canvas.style.backgroundImage = `url('${urlImage}')`

c.translate(width / 2, height / 2)
c.font = '200px Arial'

for (let i = 0; i < numShapes; i++) {
	shapes[i] = {
		x: Utils.randomRange(-1000, 1000),
		y: Utils.randomRange(-1000, 1000),
		z: Utils.randomRange(0, 10000),
		char: String.fromCharCode(Utils.randomRange(65, 91)),
		color: randomColor()
	}
}

update()

canvas.addEventListener('click', () => towards = !towards)
