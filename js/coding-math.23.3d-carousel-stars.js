let rotationSpeed = .01,
ypos = 0,
baseAngle = 0

const fl = 300,
cards = [],
numCards = 20,
centerZ = 1000,
radius = 1000,
star = document.createElement('img'),
zsort = (cardA, cardB) => cardB.z - cardA.z,
update = () => {
	baseAngle += rotationSpeed
	cards.sort(zsort)
	c.clearRect(-width / 2, -height / 2, width, height)
	for (let i = 0; i < numCards; i++) {
		const card = cards[i],
		perspective = fl / (fl + card.z)

		c.save()
		c.scale(perspective, perspective)
		c.translate(card.x, ypos)

		c.translate(-card.img.width / 2, -card.img.height / 2)
		c.drawImage(star, 0, 0)

		c.restore()

		card.x = Math.cos(card.angle + baseAngle) * radius
		card.z = centerZ + Math.sin(card.angle + baseAngle) * radius
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
		angle: Math.PI * 2 / numCards * i,
		img: document.createElement('img')
	}
	card.x = Math.cos(card.angle + baseAngle) * radius
	card.z = centerZ + Math.sin(card.angle + baseAngle) * radius
	cards.push(card)
}

c.translate(width / 2, height / 2)
c.font = '200px Arial'

star.src = 'images/star.png'

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
