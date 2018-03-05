msg.innerHTML = 'Drag an Drop the circles'

const angleBetween = (v0, v1) => {
  const dp = dotProduct(v0, v1),
  mag0 = mag(v0),
  mag1 = mag(v1)
  return Math.acos(dp / mag0 / mag1)
},
mag = v => Math.sqrt(v.x * v.x + v.y * v.y),
normalize = v => {
  const m = mag(v)
  return {
    x: v.x / m,
    y: v.y / m
  }
},
dotProduct = (v0, v1) => v0.x * v1.x + v0.y * v1.y,
vector = (p0, p1) => ({
  x: p1.x - p0.x,
  y: p1.y - p0.y
}),
drawLines = () => {
  c.beginPath()
  c.moveTo(p1.x, p1.y)
  c.lineTo(p0.x, p0.y)
  c.lineTo(p2.x, p2.y)
  c.stroke()
},
drawPoints = arr => {
  arr.forEach(e => {
    c.beginPath()
    c.arc(e.x, e.y, 10, 0, Math.PI * 2)
    c.fillStyle = e.color
    c.fill()
  })
},
update = () => {
  c.clearRect(0, 0, width, height)
  drawPoints([p0,p1,p2])
  drawLines()

  const v0 = vector(p1, p0),
  v1 = vector(p2, p0)

  let angle = angleBetween(v0, v1)
  angle = Math.round(angle * 180 / Math.PI)

  c.font = '30px Arial'
  c.fillStyle = randomColor()
  c.fillText('Angle between Red and Blue is: ' +angle, 30, 90)
},
hitTest = (p, x, y) => {
  const dx = p.x - x,
  dy = p.y - y
  return Math.sqrt(dx * dx + dy * dy) <= 10
},
findDragPoint = (x, y) => {
  if (hitTest(p0, x, y)) return p0
  if (hitTest(p1, x, y)) return p1
  if (hitTest(p2, x, y)) return p2
  return null
},
move = e => {
  dragPoint.x = e.clientX || e.touches[0].clientX
  dragPoint.y = e.clientY || e.touches[0].clientY
  update()
},
up = e => {
  canvas.removeEventListener('mousemove', move)
  canvas.removeEventListener('touchmove', move)

  canvas.removeEventListener('mouseup', up)
  canvas.removeEventListener('touchend', up)

  canvas.removeEventListener('mouseleave', up)
  canvas.removeEventListener('touchcancel', up)
},
down = e => {
  const x = e.clientX || e.touches[0].clientX,
  y = e.clientY || e.touches[0].clientY

  dragPoint = findDragPoint(x, y)
  if (dragPoint) {
    dragPoint.x = x
    dragPoint.y = y

    update()

    canvas.addEventListener('mousemove', move)
    canvas.addEventListener('touchmove',move, {passive:true})

    canvas.addEventListener('mouseup', up)
    canvas.addEventListener('touchend', up)

    canvas.addEventListener('mouseleave', up)
    canvas.addEventListener('touchcancel', up)
  }
},
p0 = {
  x: 200,
  y: 400,
  color: 'rgba(255, 0, 0, .7)' //red
},
p1 = {
  x: 250,
  y: 200,
  color: 'rgba(0, 255, 0, .7)' //green
},
p2 = {
  x: 350,
  y: 150,
  color: 'rgba(0, 0, 255, .7)' //blue
}

let dragPoint = {}

update()

canvas.addEventListener('mousedown', down)
canvas.addEventListener('touchstart',down, {passive:true})
