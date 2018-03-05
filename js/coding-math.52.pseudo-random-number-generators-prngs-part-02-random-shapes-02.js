//random circles
for (let i = 0; i < 50; i++) {
  const x = random(0, width / 2),
  y = random(0, height / 2)
  radius = random(0, 20)

  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2)
  c.fill()
}

//reatin random with seed number
const seed = new Math.seedrandom(999)

for (let i = 0; i < 50; i++) {
  const x = width / 2 + seed() * width / 2,
  y = height / 2 + seed() * height / 2,
  radius = seed() * 20

  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2)
  c.fill()
}

//reset the seed using the same key (999)
const seed2 = new Math.seedrandom(999)

for (let i = 0; i < 50; i++) {
  const x = width / 2 + seed2() * width / 2,
  y = height / 2 + seed2() * height / 2,
  radius = seed2() * 7

  c.beginPath()
  c.fillStyle = 'white'
  c.arc(x, y, radius, 0, Math.PI * 2)
  c.fill()
}
