const update = () => {

  c.clearRect(0, 0, width, height)

  if (drawing) {
    c2.beginPath()
    c2.moveTo(arm3.endX, arm3.endY)
  }

  arm.angle = Math.sin(angle) * r

  arm2.angle = Math.cos(angle * .502 + 2) * r2
  arm2.x = arm.endX
  arm2.y = arm.endY

  arm3.angle = Math.sin(angle * 1.498 - .5) * r3
  arm3.x = arm2.endX
  arm3.y = arm2.endY

  angle += .05

  arm.render(c)
  arm2.render(c)
  arm3.render(c)

  if (drawing) {
    c2.lineTo(arm3.endX, arm3.endY)
    c2.stroke()
  }
  if (go) requestAnimationFrame(update)
},
canvas2 = canvas.cloneNode(true),
c2 = canvas2.getContext('2d'),
arm = Arm.create(100, 0),
arm2 = Arm.create(100, 1.3),
arm3 = Arm.create(100, 1.3),
r = random(-3, 3),
r2 = random(-3, 3),
r3 = random(-3, 3)

let drawing = false,
go = true,
angle = 0

msg.innerHTML = 'Click to draw/not draw'

setTimeout(() => drawing = !drawing, 1000)

canvas2.width = width
canvas2.height = height

//insert after canvas
document.body.insertBefore(canvas2, canvas.nextSibling)

arm2.parent = arm
arm3.parent = arm2
c2.lineWidth = .5
c2.strokeStyle = randomColor()

arm.x = width / 2
arm.y = height / 2

console.log(`r:`, r)
console.log(`r2:`, r2)
console.log(`r3:`, r3)

update()

canvas2.addEventListener('click', () => drawing = !drawing)

canvas2.addEventListener('contextmenu', e => {
  e.preventDefault()
  go = !go
  if (go) {
    update()
  }
})
