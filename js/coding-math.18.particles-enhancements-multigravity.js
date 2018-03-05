msg.innerHTML = 'Click to stop/play. Longpress/Mouse right click to overlap/normal'

let go = true,
clear = true

const numParticles = 100,
sun1 = Particle.create(random(10, width - 10), random(10, height - 10), 0, 0),
sun2 = Particle.create(random(20, width - 20), random(20, height - 20), 0, 0),
emitter = {
  x: 100,
  y: 0
},
draw = (p, color) => {
  c.beginPath()
  c.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)

  color ? c.fillStyle = color : c.fillStyle = p.color

  c.fill()
},
update = () => {
  if (clear) c.clearRect(0, 0, width, height)

  draw(sun1, 'yellow')
  draw(sun2, '#fd0')

  for (let i = 0; i < numParticles; i++) {
    const p = particles[i]

    p.update()

    draw(p)
    if (p.x > width || p.x < 0 || p.y > height || p.y < 0) {
      p.x = emitter.x
      p.y = emitter.y
      p.speed = Utils.randomRange(7, 8)
      p.heading = Math.PI / 2 + Utils.randomRange(-.1, .1)
    }
  }
  if (go) requestAnimationFrame(update)
},
particles = []

sun1.mass = 10000
sun1.radius = 10
sun2.mass = 20000
sun2.radius = 20

for (let i = 0; i < numParticles; i++) {
  const p = Particle.create(
    emitter.x,
    emitter.y,
    Utils.randomRange(7, 8),
    Math.PI / 2 + Utils.randomRange(-.1, .1)
  )

  p.addGravitation(sun1)
  p.addGravitation(sun2)
  p.radius = 5

  i === 0 ? p.color = 'black' :
  i === numParticles - 1 ? p.color = 'white' :
  p.color = randomColor()

  particles.push(p)
}

update()

canvas.addEventListener('click', () => {
  go = !go
  if (go) update()
})

canvas.addEventListener('contextmenu', e => {
  e.preventDefault()
  clear = !clear
})
