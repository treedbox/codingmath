canvas.style.backgroundColor = 'black'

let angle = 0

const arm = {
  x: 0,
  y: 0,
  length: width < height ? width / 2 : height / 2,
  angle: 0
}

const update = () => {
  // c.clearRect(0, 0, canvas.width, canvas.height)
  arm.angle = Math.sin(angle) * 3.1378
  angle += 0.05

  c.beginPath()
  c.moveTo(width / 2, height / 2)
  c.lineWidth = 1
  c.lineCap = 'round'
  c.strokeStyle = randomColor()
  c.lineTo(width / 2 + Math.cos(arm.angle) * arm.length,
  height / 2 + Math.sin(arm.angle) * arm.length)
  c.stroke()

  requestAnimationFrame(update)
}
update()

console.log(`width / 2:`, width / 2)
console.log(`height / 2:`, height / 2)
console.log(`arm.angle:`, arm.angle)
console.log(`Math.cos(arm.angle):`, Math.cos(arm.angle))
console.log(`Math.sin(arm.angle):`, Math.sin(arm.angle))
console.log(`width / 2 + Math.cos(arm.angle) * arm.length:`, width / 2 + Math.cos(arm.angle) * arm.length)
console.log(`height / 2 + Math.sin(arm.angle) * arm.length:`, height / 2 + Math.sin(arm.angle) * arm.length)
