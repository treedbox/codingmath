msg.innerHTML = 'Move your mouse/touch'

const target = {
	x: width,
	y: Math.random() * height
},
points = [],
numPoints = 100,
ease = .5,
update = () => {
	c.clearRect(0, 0, width, height)

	const leader = {
		x: target.x,
		y: target.y
	}

	for (let i = 0; i < numPoints; i++) {
		const point = points[i]

		point.x += (leader.x - point.x) * ease
		point.y += (leader.y - point.y) * ease
		leader.x = point.x
		leader.y = point.y

		c.beginPath()
		c.arc(point.x, point.y, 10, 0, Math.PI * 2, false)
		c.fill()
	}

	requestAnimationFrame(update)
},
move = e => {
	target.x = e.clientX || e.touches[0].clientX
	target.y = e.clientY || e.touches[0].clientY
}

for (let i = 0; i < numPoints; i++) {
	points.push({
		x: 0,
		y: 0
	})
}

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
