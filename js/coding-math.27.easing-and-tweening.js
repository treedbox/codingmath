msg.innerHTML = 'Move your mouse/touch'

const target = {
	x: width,
	y: Math.random() * height
},
position = {
	x: 0,
	y: Math.random() * height
},
ease = .1,
update = () => {
	const dx = target.x - position.x,
	dy = target.y - position.y,
	vx = dx * ease,
	vy = dy * ease

	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.arc(position.x, position.y, 10, 0, Math.PI * 2, false)
	c.fill()

	position.x += vx
	position.y += vy

	requestAnimationFrame(update)
},
move = e => {
	target.x = e.clientX || e.touches[0].clientX
	target.y = e.clientY || e.touches[0].clientY
}

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
