c.translate(width / 2, height / 2)

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
drawTriangle = (p0, p1, p2) => {
  c.beginPath()
  c.moveTo(p0.x, p0.y)
  c.lineTo(p1.x, p1.y)
  c.lineTo(p2.x, p2.y)
  c.fill()
},
sierpinski = (p0, p1, p2, limit) => {
  if (limit > 0) {
    const pA = {
      x: (p0.x + p1.x) / 2,
      y: (p0.y + p1.y) / 2
    },
    pB = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2
    },
    pC = {
      x: (p2.x + p0.x) / 2,
      y: (p2.y + p0.y) / 2
    }

    sierpinski(p0, pA, pC, limit - 1)
    sierpinski(pA, p1, pB, limit - 1)
    sierpinski(pC, pB, p2, limit - 1)
  } else {
    drawTriangle(p0, p1, p2)
  }
}

sierpinski(p0, p1, p2, 8)
