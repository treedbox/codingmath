msg.innerHTML = 'Use Arrow Keyboard: Up, Down, Left, Right'

const ship = Particle.create(width / 2, height / 2, 0, 0),
thrust = Vector.create(0, 0),
update = () => {
  c.clearRect(0, 0, width, height)
  // animation goes here
  ship.accelerate(thrust)
  ship.update()

  c.beginPath()
  c.arc(ship.x, ship.y, 10, 0, Math.PI * 2, false)
  c.fill()

  if (ship.x > width) ship.x = 0
  if (ship.x < 0) ship.x = width
  if (ship.y > height) ship.y = 0
  if (ship.y < 0) ship.y = height

  requestAnimationFrame(update)
},
keyEvent = e => {
  let n = 0
  switch(e.type) {
    case 'keydown':
    n = .1
    break

    case 'keyup':
    n = 0
    break

    default:
  }
  switch(event.keyCode) {
    case 38: // up
    thrust.y = -n
    break

    case 40: // down
    thrust.y = n
    break

    case 37: // left
    thrust.x = -n
    break

    case 39: // right
    thrust.x = n
    break

    default:
    break
  }
}

update()

document.body.addEventListener('keydown', keyEvent)
document.body.addEventListener('keyup', keyEvent)
