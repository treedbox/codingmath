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
p3 = {
  x: random(0, width),
  y: random(0, height),
},
pA = {},
pB = {},
pC = {},
pM = {},
pN = {},
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
  c.fillText('t = ' + Utils.roundToPlaces(maxT, 2), 200, 250)
},
draw = () => {
  c.clearRect(0, 0, width, height)

  c.beginPath()
  c.moveTo(p0.x, p0.y)
  c.lineTo(p1.x, p1.y)
  c.lineTo(p2.x, p2.y)
  c.lineTo(p3.x, p3.y)
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
  c.arc(p3.x, p3.y, 4, 0, Math.PI * 2, false)
  c.fill()


  c.beginPath()
  c.moveTo(p0.x, p0.y)

  for(t = 0; t <= maxT; t += Math.abs(dir)) {
    pA.x = Utils.lerp(t, p0.x, p1.x)
    pA.y = Utils.lerp(t, p0.y, p1.y)

    pB.x = Utils.lerp(t, p1.x, p2.x)
    pB.y = Utils.lerp(t, p1.y, p2.y)

    pC.x = Utils.lerp(t, p2.x, p3.x)
    pC.y = Utils.lerp(t, p2.y, p3.y)

    pM.x = Utils.lerp(t, pA.x, pB.x)
    pM.y = Utils.lerp(t, pA.y, pB.y)

    pN.x = Utils.lerp(t, pB.x, pC.x)
    pN.y = Utils.lerp(t, pB.y, pC.y)

    pFinal.x = Utils.lerp(t, pM.x, pN.x)
    pFinal.y = Utils.lerp(t, pM.y, pN.y)

    c.lineTo(pFinal.x, pFinal.y)
  }
  c.stroke()

  c.beginPath()
  c.moveTo(pA.x, pA.y)
  c.lineTo(pB.x, pB.y)
  c.lineTo(pC.x, pC.y)
  c.stroke()

  c.beginPath()
  c.moveTo(pM.x, pM.y)
  c.lineTo(pN.x, pN.y)
  c.stroke()

  c.beginPath()
  c.arc(pA.x, pA.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pB.x, pB.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pC.x, pC.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pM.x, pM.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(pN.x, pN.y, 4, 0, Math.PI * 2, false)
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

  maxT += dir
  if (maxT >= 1) {
    maxT = 1
    dir *= -1
  }
  if (maxT <= 0) {
    maxT = 0
    dir *= -1
  }

  if (animating)
  requestAnimationFrame(draw)
}

let t = 0,
maxT = 0,
dir = .005,
animating = false

msg.innerHTML = 'Click to start/stop'

c.font = '16px Arial'

draw()

canvas.addEventListener('click', () => {
  animating = !animating
  draw()
})
