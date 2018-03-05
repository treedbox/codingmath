//random landscape
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 70 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 170 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 270 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()

//random with seed make every time be the same random
Math.seedrandom(99)
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 460 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()

Math.seedrandom(99)
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 540 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()

Math.seedrandom(99)
c.beginPath()
for (let x = 0; x < width; x += 20) {
  const y = 610 + Math.random() * 50
  c.lineTo(x, y)
}
c.stroke()

//update random
const update = () => {
  c.clearRect(0, 360, width, 100)
  c.beginPath()
  for (let x = 0; x < width; x += 20) {
    const y = 370 + Math.random() * 50
    c.lineTo(x, y)
  }
  c.stroke()
  requestAnimationFrame(update)
},
//update same seed
updateSeed = () => {
  const seed = new Math.seedrandom(99)
  c.clearRect(0, 660, width, 100)
  c.beginPath()
  for (let x = 0; x < width; x += 20) {
    const y = 670 + seed() * 50
    c.lineTo(x, y)
  }
  c.stroke()
  requestAnimationFrame(updateSeed)
}
update()
updateSeed()
