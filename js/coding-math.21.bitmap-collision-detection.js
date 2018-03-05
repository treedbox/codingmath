const canvas2 = canvas.cloneNode(true),
c2 = canvas2.getContext('2d'),
p = Particle.create(0, height / 2, 10, 0),
resetParticle = () => {
  p.x = 0
  p.y = height / 2
  p.heading = Utils.randomRange(-.1, .1)
},
update = () => {
  c.clearRect(0, 0, width, height)

  p.update()

  c.beginPath()
  c.arc(p.x, p.y, 10, 0, Math.PI * 2, false)
  c.fill()

  const imageData = c2.getImageData(p.x, p.y, 1, 1)

  imageData.data[3] > 0 ? (
    c2.globalCompositeOperation = 'destination-out',
    c2.beginPath(),
    c2.arc(p.x, p.y, 20, 0, Math.PI * 2, false),
    c2.fill(),
    resetParticle()
  ) : p.x > width ? resetParticle() : null

  requestAnimationFrame(update)
}

canvas2.width = width
canvas2.height = height
//insert canvas2 after canvas
document.body.insertBefore(canvas2, canvas.nextSibling)

c2.beginPath()
c2.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false)
c2.fillStyle = randomColor()
c2.fill()

update()
