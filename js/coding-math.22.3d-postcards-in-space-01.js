const fl = 300,
shapePos = {
	x: 5000,
	y: 300,
	z: 10000
},
perspective = fl / (fl + shapePos.z),
urlImage = 'images/stars.png'

canvas.style.backgroundImage = `url('${urlImage}')`

c.translate(width / 2, height / 2)
c.translate(shapePos.x * perspective, shapePos.y * perspective)
c.scale(perspective, perspective)
c.fillRect(-100, -100, 200, 200)
