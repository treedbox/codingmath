const isValid = (e) => {
  if (e.radius > max) return false

  for (let i = 0; i < circles.length; i++) {
    const c = circles[i],
    dx = c.x - e.x,
    dy = c.y - e.y,
    dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < c.radius + e.radius) return false
  }
  return true
},
drawCircle = (e) => {
  //create a hole with big circles
  if (e.radius > max * .5) return
  c.beginPath()
  c.arc(e.x, e.y, e.radius, 0, Math.PI * 2)
  c.fill()
},
createCircle = () => ({
    x: random(0, width),
    y: random(0, height),
    radius: min
  }),
update = () => {
  const e = createCircle()
  let counter = 0

  while(!isValid(e)) {
    e.x = random(0, width),
    e.y = random(0, height)
    counter++
    if (counter > 100000) return
  }

  while(isValid(e)) {
    e.radius++
  }
  e.radius -= 2

  circles.push(e)
  drawCircle(e)
  requestAnimationFrame(update)
},
circles = [],
min = 5,
max = 100

//shadow
c.shadowColor = 'rgba(0,0,0,.5)'
c.shadowOffsetX = c.shadowOffsetY = 5
c.shadowBlur = 10

update()
