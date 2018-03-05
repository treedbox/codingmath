msg.innerHTML = 'Click to move'

let t = 0

const p0 = {
  x: random(0, width),
  y: random(0, height),
},
p1 = {
  x: random(0, width),
  y: random(0, height),
},
pA = {},
labelPoint = (p, name) => {
  c.fillText(name, p.x + 10, p.y + 10)
  c.fillText('x: ' + Math.round(p.x), p.x + 10, p.y + 25)
  c.fillText('y: ' + Math.round(p.y), p.x + 10, p.y + 40)
},
labelPointLeft = (p, name) => {
  c.fillText(name, p.x - 40, p.y - 40)
  c.fillText('x: ' + Math.round(p.x), p.x - 40, p.y - 25)
  c.fillText('y: ' + Math.round(p.y), p.x - 40, p.y - 10)
},
labelT = () => {
  c.fillText('t = ' + Utils.roundToPlaces(t, 1), 200, 250)
},
draw = () => {
  c.clearRect(0, 0, width, height)

  c.beginPath()
  c.arc(p0.x, p0.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(p1.x, p1.y, 4, 0, Math.PI * 2, false)
  c.fill()

  pA.x = Utils.lerp(t, p0.x, p1.x)
  pA.y = Utils.lerp(t, p0.y, p1.y)

  c.beginPath()
  c.arc(pA.x, pA.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.moveTo(p0.x, p0.y)
  c.lineTo(pA.x, pA.y)
  c.stroke()

  labelPointLeft(p0, 'p0')
  labelPointLeft(p1, 'p1	')
  labelPoint(pA, 'pA')
  labelT()

  t += .1
  t = Math.min(t, 1)
}

c.font = '16px Arial'

draw()

canvas.addEventListener('click', draw)
