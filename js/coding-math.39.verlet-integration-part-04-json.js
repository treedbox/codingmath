const points = [],
sticks = [],
bounce = .9,
gravity = .5,
friction = .999,
url = 'jsons/model.json',
distance = (p0, p1) => {
  const dx = p1.x - p0.x,
  dy = p1.y - p0.y

  return Math.sqrt(dx * dx + dy * dy)
},
updateEngine = () => {
  engine.x = engine.baseX + Math.cos(engine.angle) * engine.range
  engine.y = engine.baseY + Math.sin(engine.angle) * engine.range
  engine.angle += engine.speed
},
updatePoints = () => {
  for (let i = 0; i < points.length; i++) {
    const p = points[i]

    if (!p.pinned) {
      const vx = (p.x - p.oldx) * friction,
      vy = (p.y - p.oldy) * friction

      p.oldx = p.x
      p.oldy = p.y
      p.x += vx
      p.y += vy
      p.y += gravity
    }
  }
},
constrainPoints = () => {
  for (let i = 0; i < points.length; i++) {
    const p = points[i]

    if (!p.pinned) {
      const vx = (p.x - p.oldx) * friction,
      vy = (p.y - p.oldy) * friction


      p.x > width ? (
        p.x = width,
        p.oldx = p.x + vx * bounce
      ) : (
        p.x < 0 ? (
          p.x = 0,
          p.oldx = p.x + vx * bounce
        ) : null
      )

      p.y > height? (
        p.y = height,
        p.oldy = p.y + vy * bounce
      ) : (
        p.y < 0 ? (
          p.y = 0,
          p.oldy = p.y + vy * bounce
        ) : null
      )
    }
  }
},
updateSticks = () => {
  for (let i = 0; i < sticks.length; i++) {
    const s = sticks[i],
    dx = s.p1.x - s.p0.x,
    dy = s.p1.y - s.p0.y,
    distance = Math.sqrt(dx * dx + dy * dy),
    difference = s.length - distance,
    percent = difference / distance / 2,
    offsetX = dx * percent,
    offsetY = dy * percent

    if (!s.p0.pinned) {
      s.p0.x -= offsetX
      s.p0.y -= offsetY
    }

    if (!s.p1.pinned) {
      s.p1.x += offsetX
      s.p1.y += offsetY
    }
  }
},
renderPoints = () => {
  for (let i = 0; i < points.length; i++) {
    const p = points[i]

    c.beginPath()
    c.arc(p.x, p.y, 5, 0, Math.PI * 2)
    c.fill()
  }
},
renderSticks = () => {
  for (let i = 0; i < sticks.length; i++) {
    const s = sticks[i]

    if (!s.hidden) {
      c.beginPath()
      c.lineWidth = s.width ? s.width : 1
      c.moveTo(s.p0.x, s.p0.y)
      c.lineTo(s.p1.x, s.p1.y)
      c.lineWidth = 3
      c.stroke()
    }
  }
},
update = () => {
  updatePoints()
  for (let i = 0; i < 5; i++) {
    updateSticks()
    constrainPoints()
  }
  c.clearRect(0, 0, width, height)
  // renderPoints()
  renderSticks()
  requestAnimationFrame(update)
},
parseModel = (data) => {
  for (let i = 0; i < data.points.length; i++) {
    points[i] = data.points[i]
  }

  for(i = 0; i < data.sticks.length; i++) {
    const s = data.sticks[i]

    s.p0 = points[s.p0]
    s.p1 = points[s.p1]
    s.length = distance(s.p0, s.p1)
    sticks[i] = s
  }
  update()
}

fetch(url)
.then(response => response.json())
.then(data => {
  parseModel(data)
}).catch(error => console.log('ERROR:', error.message))
