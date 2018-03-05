msg.innerHTML = 'Move your mouse/touch'

let rotationSpeed = .01,
ypos = 0,
baseAngle = 0

const fl = 300,
cards = [],
numCards = 200,
centerZ = 1000,
zsort = (cardA, cardB) => cardB.z - cardA.z,
update = () => {
	cards.sort(zsort)

	baseAngle += rotationSpeed

	c.clearRect(-width / 2, -height / 2, width, height)

	for (let i = 0; i < numCards; i++) {
		const card = cards[i],
		perspective = fl / (fl + card.z)

		c.save()
		c.scale(perspective, perspective)
		c.translate(card.x, card.y + ypos)
		c.globalAlpha = Utils.map(card.y, 2000, -2000, 1, 0)

		c.beginPath()
		c.arc(0, 0, 40, 0, Math.PI * 2, false)
		c.fill()

		c.restore()

		card.x = Math.cos(card.angle + baseAngle) * card.radius
		card.z = centerZ + Math.sin(card.angle + baseAngle) * card.radius
		card.y -= 10

		if (card.y < -2000) card.y = 2000
	}
	requestAnimationFrame(update)
},
move = e => {
	const x = e.clientX || e.touches[0].clientX,
	y = e.clientY || e.touches[0].clientY

	rotationSpeed = (x - width / 2) * .00005
	ypos = (y- height / 2) * 2
}

for (let i = 0; i < numCards; i++) {
	const card = {
		angle: Utils.randomRange(0, Math.PI * 2),
		radius: Utils.randomRange(100, 1100),
		y: Utils.randomRange(2000, -2000)
	}

	card.x = Math.cos(card.angle + baseAngle) * card.radius
	card.z = centerZ + Math.sin(card.angle + baseAngle) * card.radius
	cards.push(card)
}

c.translate(width / 2, height / 2)

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
