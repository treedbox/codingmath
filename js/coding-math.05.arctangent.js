msg.innerHTML = 'Move your mouse/touch'

let arrowX = width / 2,
arrowY = height / 2,
dx = dy = a = angle = 0

const update = () => {
  arrowX = width / 2 + Math.cos(a) * height * .4
  arrowY = height / 2 + Math.sin(a) * height * .4
  a += .01
  c.clearRect(0, 0, width, height)

  c.save()
  c.translate(arrowX, arrowY)
  c.rotate(angle)

  c.beginPath()
  c.moveTo(20, 0)
  c.lineTo(-20, 0)
  c.moveTo(20, 0)
  c.lineTo(10, -10)
  c.moveTo(20, 0)
  c.lineTo(10, 10)
  c.lineCap = 'round'
  c.lineWidth = 5
  c.stroke()

  c.restore()
  requestAnimationFrame(update)
},
move = e => {
  const x = e.clientX || e.touches[0].clientX,
  y = e.clientY || e.touches[0].clientY

  dx = x - arrowX
  dy = y - arrowY
  
  angle = Math.atan2(dy, dx)
}

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
