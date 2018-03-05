msg.innerHTML = 'Use Arrow Keyboard: Up, Down, Left, Right'

let angle = 0,
turningLeft = false,
turningRight = false,
thrusting = false

const ship = Particle.create(width / 2, height / 2, 0, 0),
thrust = Vector.create(0, 0),
update = () => {
  c.clearRect(0, 0, width, height)

  if (turningRight) angle += .05
  if (turningLeft) angle -= .05

  thrusting ? thrust.length = .1 : thrust.length = 0

  thrust.angle = angle

  ship.accelerate(thrust)
  ship.update()

  if (ship.x > width) ship.x = 0
  if (ship.x < 0) ship.x = width
  if (ship.y > height) ship.y = 0
  if (ship.y < 0) ship.y = height

  c.save()

  c.translate(ship.x, ship.y)
  c.rotate(angle)

  c.beginPath()
  c.moveTo(10, 0)
  c.lineTo(-10, -7)
  c.lineTo(-10, 7)
  c.lineTo(10, 0)
  if (thrusting) c.moveTo(-10, 0), c.lineTo(-18, 0)
  c.stroke()

  c.restore()

  requestAnimationFrame(update)
},
keyEvent = e => {
  let bool = true
  if (e.type === 'keyup') bool = false

  switch(e.keyCode) {
    case 38: // up
    thrusting = bool
    break
    case 37: // left
    turningLeft = bool
    break
    case 39: // right
    turningRight = bool
    default:
    break
  }
}

ship.friction = .99

update()

document.body.addEventListener('keydown', keyEvent)
document.body.addEventListener('keyup', keyEvent)
