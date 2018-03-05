//middle square method
const nextRandom = () => {
  const start = Math.floor(digits / 2),
  end = start + digits

  let n = String(seed * seed)

  while(n.length < digits * 2) n = '0' + n

  seed = parseInt(n.substring(start, end))

  return seed
},
nextRandomFloat = () => nextRandom() / 9999999999,
update = () => {
  for (let x = 0; x < width; x++) {
    if (nextRandomFloat() < .5) c.fillRect(x, y, 1, 1)
  }
  y++
  if (y < height) requestAnimationFrame(update)
},
digits = 10,
times = 0,
results = []

let seed = 1234567890,
y = 0

for (let i = 0; i < 20; i++) {
  console.log(`nextRandomFloat():`, nextRandomFloat())
}

for (let i = 0; i < 100000; i++) {
  const rand = nextRandom()
  if (results[rand]) {
    console.log(`i:`, i)
    break
  }
  results[rand] = true
}

update()
