msg.innerHTML = 'Click to move'

let	easing = true

const target = {
	x: width,
	y: Math.random() * height
},
position = {
	x: 0,
	y: Math.random() * height
},
ease = .1,
easeTo = (position, target, ease) => {
	const dx = target.x - position.x,
	dy = target.y - position.y
	
	position.x += dx * ease
	position.y += dy * ease

	return Math.abs(dx) < .1 && Math.abs(dy) < .1 ? (
		position.x = target.x,
		position.y = target.y,
		console.log('stop'),
		false
	) : true
},
update = () => {
	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.arc(position.x, position.y, 10, 0, Math.PI * 2, false)
	c.fill()

	easing = easeTo(position, target, ease)

	if (easing) requestAnimationFrame(update)
},
click = e => {
	target.x = e.clientX
	target.y = e.clientY

	if (!easing) easing = true, update()
}

update()

canvas.addEventListener('click', click)
