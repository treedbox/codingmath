const arm = Arm.create(100, 0),
arm2 = Arm.create(100, 1.3),
arm3 = Arm.create(100, 1.3),
update = () => {
  c.clearRect(0, 0, width, height)
  arm.angle = Math.sin(angle) * 1.2
  arm2.angle = Math.cos(angle * .5) * .92
  arm3.angle = Math.sin(angle * 1.5) * 1.34
  arm2.x = arm.endX
  arm2.y = arm.endY
  arm3.x = arm2.endX
  arm3.y = arm2.endY
  angle += 0.05
  arm.render(c)
  arm2.render(c)
  arm3.render(c)
  requestAnimationFrame(update)
}

let angle = 0

arm2.parent = arm
arm3.parent = arm2

arm.x = width / 2
arm.y = height / 2

console.log(`arm.endX:`, arm.endX)
console.log(`arm.endY:`, arm.endY)

console.log(`arm:`, arm)
console.log(`arm2:`, arm2)
console.log(`arm3:`, arm3)

update()
