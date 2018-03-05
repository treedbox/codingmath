const aimGun = (x, y) => {
	gun.angle = Utils.clamp(Math.atan2(y - gun.y, x - gun.x), -Math.PI / 2, -.3)
	update()
},
update = () => {
	c.clearRect(0, 0, width, height)

	c.beginPath()
	c.arc(gun.x, gun.y, 24, 0, Math.PI * 2, false)
	c.fill()

	c.save()
	c.translate(gun.x, gun.y)
	c.rotate(gun.angle)
	c.fillRect(0, -8, 40, 16)
	c.restore()
},
move = e => {
	aimGun(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY)
},
up = e => {
	canvas.removeEventListener('mousemove', move)
	canvas.removeEventListener('touchmove', move)

	canvas.removeEventListener('mouseup', up)
	canvas.removeEventListener('touchend', up)

	canvas.removeEventListener('mouseleave', up)
	canvas.removeEventListener('touchcancel', up)
},
down = e => {
	canvas.addEventListener('mousemove', move)
	canvas.addEventListener('touchmove',move, {passive:true})

	canvas.addEventListener('mouseup', up)
	canvas.addEventListener('touchend', up)

	canvas.addEventListener('mouseleave', up)
	canvas.addEventListener('touchcancel', up)
	aimGun(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY)
},
gun = {
	x: 100,
	y: height,
	angle: -Math.PI / 4
}

update()

canvas.addEventListener('mousedown', down)
canvas.addEventListener('touchstart',down, {passive:true})
