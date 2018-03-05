const update = () => {
  c.clearRect(0, 0, canvas.width, canvas.height)

  nodes.forEach(e => {
    c.beginPath()
    c.arc(e.x, e.y, e.radius, 0, Math.PI * 2)
    c.fillStyle = e.color
    c.fill()
  })

  for (let i = 0; i < nodes.length; i++) {
    const nodeA = nodes[i]
    nodeA.x += nodeA.vx + sx
    nodeA.y += nodeA.vy + sy

    nodeA.x > canvas.width ? nodeA.x = 0 :
    nodeA.x < 0 ? nodeA.x = canvas.width : null

    nodeA.y > canvas.height ? nodeA.y = 0 :
    nodeA.y < 0 ? nodeA.y = canvas.height : null

    for (let j = i + 1; j < nodes.length; j++) {
      const nodeB = nodes[j]
      const dx = nodeB.x - nodeA.x,
      dy = nodeB.y - nodeA.y,
      dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDist) {
        c.beginPath()
        c.lineWidth = 1 - dist / maxDist
        c.moveTo(nodeA.x, nodeA.y)
        c.lineTo(nodeB.x, nodeB.y)
        c.strokeStyle = '#607D8B'
        c.stroke()
      }
    }
  }
  requestAnimationFrame(update)
},
move = e => {
  const x = e.clientX || e.touches[0].clientX,
  y = e.clientY || e.touches[0].clientY,
  middleW = canvas.width / 2,
  middleH = canvas.height / 2

  sx = (x - middleW) / 100
  sy = (y - middleH) / 100
},
nodes = [],
maxDist = 100

let sx = 0,
sy = 0

msg.innerHTML = 'Move your mouse/touch'

for (let i = 0; i < 100; i++) {
  nodes.push({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    vx: random(-1.5, 1.5) + sx,
    vy: random(-1.5, 1.5) + sx,
    color: i === 0 ? 'white' : randomColor(),
    radius: random(1,5)
  })
}

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
