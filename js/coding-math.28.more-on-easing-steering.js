msg.innerHTML = 'Move your mouse/touch'

let angle = 0,
targetAngle = 0

const ease = .05,
wheel = document.createElement('img'),
update = () => {
	c.clearRect(0, 0, width, height)

	angle += (targetAngle - angle) * ease

	c.save()
	c.translate(width / 2, height / 2)
	c.rotate(angle)

	c.drawImage(wheel, -wheel.width / 2, -wheel.height / 2)

	c.restore()
	requestAnimationFrame(update)
},
move = e => {
	const x = e.clientX || e.touches[0].clientX

	targetAngle = Utils.map(x, 0, width, -Math.PI, Math.PI)
}

wheel.src = 'images/wheel.png'

wheel.addEventListener('load', update)

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
