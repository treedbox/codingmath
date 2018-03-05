const angle = Math.PI / 4

c.translate(width / 2, height / 2)
c.rotate(angle)

c.beginPath()
c.arc(0, 0, 20, 0, Math.PI * 2, 0)
c.fill()

c.lineWidth = 10
c.beginPath()
c.moveTo(0, 0)
c.lineTo(50, 0)
c.stroke()
