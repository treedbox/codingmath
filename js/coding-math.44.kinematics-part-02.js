const update = () => {
  c.clearRect(0, 0, width, height)

  leg0.update()
  leg0.render(c)
  leg1.update()
  leg1.render(c)

  requestAnimationFrame(update)
},
leg0 = FKSystem.create(width / 2, height / 2),
leg1 = FKSystem.create(width / 2, height / 2),
r = random(2, 4),
r2 = random(2, 4)

console.log(`r:`, r)
console.log(`r2:`, r2)

console.log(`leg0.x, leg0.y:`, leg0.x, leg0.y)

leg1.phase = Math.PI
//addArm(length, centerAngle, rotationRange, phaseOffset)
leg0.addArm(200, Math.PI / 2, Math.PI / r, 0)
leg0.addArm(180, .87, .87, -1.5)

leg1.addArm(200, Math.PI / 2, Math.PI / r2, 0)
leg1.addArm(180, .87, .87, -1.5)

update()
