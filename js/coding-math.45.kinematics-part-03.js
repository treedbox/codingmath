msg.innerHTML = 'Move your mouse/touch'

const update = () => {
  c.clearRect(0, 0, width, height)

  c.lineCap = 'round'
  c.lineWidth = 20

  iks.render(c)
  requestAnimationFrame(update)
},
move = e => {
  const x = e.clientX || e.touches[0].clientX,
  y = e.clientY || e.touches[0].clientY

  iks.drag(x, y)
},
iks = IKSystem.create(width / 2, height / 2)

for (let i = 0; i < 100; i++) {
  iks.addArm(10)
}

console.log(`iks.arms:`, iks.arms)

update()

canvas.addEventListener('mousemove', move)
canvas.addEventListener('touchmove', move, {passive:true})
