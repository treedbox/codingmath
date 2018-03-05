c.fillStyle = 'black'
c.fillRect(0, 0, width, height)
c.fillStyle = 'white'

for (let i = 0; i < 800; i++) {
  c.beginPath()
  c.arc(Utils.randomRange(0, width),
  Utils.randomRange(0, height),
  Utils.randomRange(0, 1),
  0, Math.PI * 2, false)
  c.fill()
}
