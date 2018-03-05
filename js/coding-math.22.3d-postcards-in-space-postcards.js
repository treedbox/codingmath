let towards = true

const fl = 300,
cards = [],
numCards = 21,
urlImage = 'images/stars.png',
update = () => {
	c.clearRect(-width / 2, -height / 2, width, height)

	for (let i = 0; i < numCards; i++) {
		const card = cards[i],
		perspective = fl / (fl + card.z)

		c.save()

		c.translate(card.x * perspective, card.y * perspective)
		c.scale(perspective, perspective)
		c.translate(-card.img.width / 2, -card.img.height / 2)

		c.drawImage(card.img, 0, 0)

		c.restore()

		// move towards or away
		towards ? (
			card.z -= 5,
			card.z < 0 ? card.z = 5000 : null
		) : (
			card.z += 5,
			card.z > 5000 ? card.z = 0 : null
		)
	}
	requestAnimationFrame(update)
}

msg.innerHTML = 'Click to reverse'

canvas.style.backgroundImage = `url('${urlImage}')`

c.translate(width / 2, height / 2)
c.font = '200px Arial'

for (let i = 0; i < numCards; i++) {
	const card = {
		x: Utils.randomRange(-1000, 1000),
		y: Utils.randomRange(-1000, 1000),
		z: Utils.randomRange(0, 5000),
		img: document.createElement('img')
	}
	card.img.src = 'images/postcard' + (i % 7) + '.jpg'
	cards.push(card)
}


update()

canvas.addEventListener('click', () => towards = !towards)
