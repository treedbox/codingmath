let tx,
ty,
r = 0,
a = 0,
b = 0

const p0 = {
  x: 0,
  y: -321
},
p1 = {
  x: 278,
  y: 160
},
p2 = {
  x: -278,
  y: 160
},
sierpinski = (p0, p1, p2, limit) => {
  if (limit > 0) {
    const pA = {
      x: p0.x + (p1.x - p0.x) * tx,
      y: p0.y + (p1.y - p0.y) * ty
    },
    pB = {
      x: p1.x + (p2.x - p1.x) * tx,
      y: p1.y + (p2.y - p1.y) * ty
    },
    pC = {
      x: p2.x + (p0.x - p2.x) * tx,
      y: p2.y + (p0.y - p2.y) * ty
    }
    sierpinski(p0, pA, pC, limit - 1)
    sierpinski(pA, p1, pB, limit - 1)
    sierpinski(pC, pB, p2, limit - 1)
  } else {
    drawTriangle(p0, p1, p2)
  }
},
drawTriangle = (p0, p1, p2) => {
  c.beginPath()
  c.moveTo(p0.x, p0.y)
  c.lineTo(p1.x, p1.y)
  c.lineTo(p2.x, p2.y)
  c.fill()
},
draw = () => {
  c.clearRect(0, 0, width, height)
  c.save()
  c.translate(width / 2, height / 2)
  c.rotate(r += .01)
  tx = .5 + Math.sin(a += .045) * .25
  ty = .5 + Math.sin(b += .045) * .25
  sierpinski(p0, p1, p2, 7)
  c.restore()
  requestAnimationFrame(draw)
}

draw()
