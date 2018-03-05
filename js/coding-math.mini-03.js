const norm = (value, min, max) => {
  return (value - min) / (max - min)
},
lerp = (norm, min, max) => {
  return (max - min) * norm + min
},
map = (value, sourceMin, sourceMax, destMin, destMax) => {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
},
move = e => {
  const radius = map(
    e.clientY || e.touches[0].clientX,
    0,
    height,
    20,
    340
  )

  c.clearRect(0, 0, width, height)
  c.beginPath()
  c.arc(width / 2, height / 2, radius, 0, Math.PI * 2, false)
  c.fill()
}

msg.innerHTML = 'Move your mouse/touch'

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
