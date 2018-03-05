c.translate(0, height / 2)
c.scale(1, -1)

let angle = 0

const timer = setInterval(() => {
  angle < Math.PI * 2 ? (
    angle += .01,
    requestAnimationFrame(update)
 ) : (
    clearInterval(timer)
 )
}, 25),
update = () => {
  const x = angle * width / 6
  let y = Math.sin(angle) * width / 6

  c.fillStyle = '#4CAF50'
  c.fillRect(x, y, 5, 5)

  y = Math.cos(angle) * height / 3

  c.fillStyle = randomColor()
  c.fillRect(x, y, 5, 5)

  timer
}
update()
