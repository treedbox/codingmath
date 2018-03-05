const springPoint = Vector.create(width / 2, height / 2),
weight = Particle.create(
  Math.random() * width,
  Math.random() * height,
  50,
  Math.random() * Math.PI * 2,
  .5
),
k = .1,
springLength = 100,
update = () => {
  c.clearRect(0, 0, width, height)

  const distance = springPoint.subtract(weight),
  springForce = distance.multiply(k)

  distance.length = distance.length - springLength

  weight.accelerate(springForce)
  weight.update()

  c.beginPath()
  c.arc(weight.x, weight.y, weight.radius, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.arc(springPoint.x, springPoint.y, 4, 0, Math.PI * 2, false)
  c.fill()

  c.beginPath()
  c.moveTo(weight.x, weight.y)
  c.lineTo(springPoint.x, springPoint.y)
  c.stroke()

  requestAnimationFrame(update)
},

move = e => {
  springPoint.x = e.clientX || e.touches[0].clientX
  springPoint.y = e.clientY || e.touches[0].clientY
}

weight.radius = 20,
weight.friction = .95,

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
