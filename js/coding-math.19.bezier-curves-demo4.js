msg.innerHTML = 'Click to move'

let t = 0,
maxT = 0

const p0 = {
  x: random(0, width),
  y: random(0, height),
},
p1 = {
  x: random(0, width),
  y: random(0, height),
},
p2 = {
  x: random(0, width),
  y: random(0, height),
},
pA = {},
pB = {},
pFinal = {},
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
  c.fillText('t = ' + Utils.roundToPlaces(maxT, 1), 200, 250)
},
draw = () => {
  c.clearRect(0, 0, width, height)

  c.beginPath()
  c.moveTo(p0.x, p0.y)
  c.lineTo(p1.x, p1.y)
  c.lineTo(p2.x, p2.y)
  c.stroke()

  c.beginPath()
  c.arc(p0.x, p0.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(p1.x, p1.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(p2.x, p2.y, 4, 0, Math.PI * 2, false)
  c.fill()


  c.beginPath()
  c.moveTo(p0.x, p0.y)

  for(t = 0; t <= maxT; t += .1) {
    pA.x = Utils.lerp(t, p0.x, p1.x)
    pA.y = Utils.lerp(t, p0.y, p1.y)

    pB.x = Utils.lerp(t, p1.x, p2.x)
    pB.y = Utils.lerp(t, p1.y, p2.y)

    pFinal.x = Utils.lerp(t, pA.x, pB.x)
    pFinal.y = Utils.lerp(t, pA.y, pB.y)

    c.lineTo(pFinal.x, pFinal.y)
  }
  c.stroke()

  c.beginPath()
    c.moveTo(pA.x, pA.y)
  c.lineTo(pB.x, pB.y)
  c.stroke()

  c.beginPath()
  c.arc(pA.x, pA.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pB.x, pB.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pFinal.x, pFinal.y, 4, 0, Math.PI * 2, false)
  c.fill()

  labelPointLeft(p0, 'p0')
  labelPointLeft(p1, 'p1')
  labelPointLeft(p2, 'p2')
  labelPoint(pA, 'pA')
  labelPoint(pB, 'pB')
  labelT()

  maxT += .1
  maxT = Math.min(t, 1)
}

c.font = '16px Arial'

draw()

canvas.addEventListener('click', draw)
