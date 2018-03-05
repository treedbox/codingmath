msg.innerHTML = 'Use Arrow Keyboard: Up, Down, Left, Right'

const fl = 300,
points = [],
centerZ = 1500,
project = () => {
  for (let i = 0; i < points.length; i++) {
    const p = points[i],
    scale = fl / (fl + p.z + centerZ)

    p.sx = p.x * scale
    p.sy = p.y * scale
  }
},
drawLine = (...args) => {
  let p = points[args[0]]

  c.moveTo(p.sx, p.sy)

  for (let i = 1; i < args.length; i++) {
    p = points[args[i]]
    c.lineTo(p.sx, p.sy)
  }
},
translateModel = (x, y, z) => {
  for (let i = 0; i < points.length; i++) {
    points[i].x += x
    points[i].y += y
    points[i].z += z
  }
},
rotateX = angle => {
  const cos = Math.cos(angle),
  sin = Math.sin(angle)

  for (let i = 0; i < points.length; i++) {
    const p = points[i],
    y = p.y * cos - p.z * sin,
    z = p.z * cos + p.y * sin
    p.y = y
    p.z = z
  }
},
rotateY = angle => {
  const cos = Math.cos(angle),
  sin = Math.sin(angle)

  for (let i = 0; i < points.length; i++) {
    const p = points[i],
    x = p.x * cos - p.z * sin,
    z = p.z * cos + p.x * sin
    p.x = x
    p.z = z
  }
},
rotateZ = angle => {
  const cos = Math.cos(angle),
  sin = Math.sin(angle)

  for (let i = 0; i < points.length; i++) {
    const p = points[i],
    x = p.x * cos - p.y * sin,
    y = p.y * cos + p.x * sin
    p.x = x
    p.y = y
  }
},
update = () => {
  c.clearRect(-width / 2, -height / 2, width, height)

  project()

  c.beginPath()
  drawLine(0, 1, 2, 3, 0)
  drawLine(4, 5, 6, 7, 4)
  drawLine(0, 4)
  drawLine(1, 5)
  drawLine(2, 6)
  drawLine(3, 7)
  c.stroke()
},
keyEvent = e => {
  switch(e.keyCode) {
    case 37: // left
    e.ctrlKey ? rotateY(.05) : translateModel(-20, 0, 0)
    break
    case 39: // right
    e.ctrlKey ? rotateY(-.05) : translateModel(20, 0, 0)
    break
    case 38: // up
    e.shiftKey ? translateModel(0, 0, 20) :
    e.ctrlKey ? rotateX(.05) :
    translateModel(0, -20, 0)
    break
    case 40: // down
    e.shiftKey ? translateModel(0, 0, -20) :
    e.ctrlKey ? rotateX(-.05) :
    translateModel(0, 20, 0)
    break
  }
  update()
}

c.translate(width / 2, height / 2)

points[0] = {x: -500, y: -500, z: 500}
points[1] = {x:  500, y: -500, z: 500}
points[2] = {x:  500, y: -500, z: -500}
points[3] = {x: -500, y: -500, z: -500}
points[4] = {x: -500, y: 500, z: 500}
points[5] = {x:  500, y: 500, z: 500}
points[6] = {x:  500, y: 500, z: -500}
points[7] = {x: -500, y: 500, z: -500}

update()

document.body.addEventListener('keydown', keyEvent)
