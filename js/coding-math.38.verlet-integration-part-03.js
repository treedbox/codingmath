const points = [],
sticks = [],
forms = [],
images = [],
bounce = .9,
gravity = .5,
friction = .999,
loadImage = url => {
	const img = document.createElement('img')

	img.src = url
	return img
},
distance = (p0, p1) => {
	const dx = p1.x - p0.x,
	dy = p1.y - p0.y

	return Math.sqrt(dx * dx + dy * dy)
},
updatePoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i],
		vx = (p.x - p.oldx) * friction
		vy = (p.y - p.oldy) * friction

		p.oldx = p.x
		p.oldy = p.y
		p.x += vx
		p.y += vy
		p.y += gravity
	}
},
constrainPoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i],
		vx = (p.x - p.oldx) * friction
		vy = (p.y - p.oldy) * friction


		p.x > width ? (
			p.x = width,
			p.oldx = p.x + vx * bounce
		) : (
			p.x < 0 ? (
				p.x = 0,
				p.oldx = p.x + vx * bounce
			) : null
		)

		p.y > height? (
			p.y = height,
			p.oldy = p.y + vy * bounce
		) : (
			p.y < 0 ? (
				p.y = 0,
				p.oldy = p.y + vy * bounce
			) : null
		)
	}
},
updateSticks = () => {
	for (let i = 0; i < sticks.length; i++) {
		const s = sticks[i],
		dx = s.p1.x - s.p0.x,
		dy = s.p1.y - s.p0.y,
		distance = Math.sqrt(dx * dx + dy * dy),
		difference = s.length - distance,
		percent = difference / distance / 2,
		offsetX = dx * percent,
		offsetY = dy * percent

		s.p0.x -= offsetX
		s.p0.y -= offsetY
		s.p1.x += offsetX
		s.p1.y += offsetY
	}
},
renderPoints = () => {
	for (let i = 0; i < points.length; i++) {
		const p = points[i]
		c.beginPath()
		c.arc(p.x, p.y, 5, 0, Math.PI * 2)
		c.fill()
	}
},
renderSticks = () => {
	for (let i = 0; i < sticks.length; i++) {
		const s = sticks[i]
		if (!s.hidden) {
			c.beginPath()
			c.strokeStyle = s.color ? s.color : '#fd0'
			c.lineWidth = s.width ? s.width : 2
			c.moveTo(s.p0.x, s.p0.y)
			c.lineTo(s.p1.x, s.p1.y)
			c.stroke()
		}
	}
},
renderForms = () => {
	for (let i = 0; i < forms.length; i++) {
		const f = forms[i]
		c.beginPath()
		c.fillStyle = f.color
		c.moveTo(f.path[0].x, f.path[0].y)
		for (let j = 1; j < f.path.length; j++) {
			c.lineTo(f.path[j].x, f.path[j].y)
		}
		c.fill()
	}
},
renderImages = () => {
	for (let i = 0; i < images.length; i++) {
		const image = images[i],
		w = distance(image.path[0], image.path[1]),
		h = distance(image.path[0], image.path[3]),
		dx = image.path[1].x - image.path[0].x,
		dy = image.path[1].y - image.path[0].y,
		angle = Math.atan2(dy, dx)

		c.save()
		c.translate(image.path[0].x, image.path[0].y)
		c.rotate(angle)
		c.drawImage(image.img, 0, 0, w, h)
		c.restore()
	}
},
update = () => {
	updatePoints()
	for (let i = 0; i < 5; i++) {
		updateSticks()
		constrainPoints()
	}
	c.clearRect(0, 0, width, height)
	renderPoints()
	renderSticks()
	renderForms()
	// renderImages()
	requestAnimationFrame(update)
}

points.push({
	x: 100,
	y: 100,
	oldx: 100 + Math.random() * 50 - 25,
	oldy: 100 + Math.random() * 50 - 25
})
points.push({
	x: 200,
	y: 100,
	oldx: 200,
	oldy: 100
})
points.push({
	x: 200,
	y: 200,
	oldx: 200,
	oldy: 200
})
points.push({
	x: 100,
	y: 200,
	oldx: 100,
	oldy: 200
})

sticks.push({
	p0: points[0],
	p1: points[1],
	length: distance(points[0], points[1]),
	color: 'red',
	width: 5
})
sticks.push({
	p0: points[1],
	p1: points[2],
	length: distance(points[1], points[2])
})
sticks.push({
	p0: points[2],
	p1: points[3],
	length: distance(points[2], points[3])
})
sticks.push({
	p0: points[3],
	p1: points[0],
	length: distance(points[3], points[0])
})
sticks.push({
	p0: points[0],
	p1: points[2],
	length: distance(points[0], points[2]),
	hidden: true
})

forms.push({
	path: [
		points[0],
		points[1],
		points[2],
		points[3]
	]
})

images.push({
	path: [
		points[0],
		points[1],
		points[2],
		points[3]
	],
	img: loadImage('images/cat.jpg')
})

update()
