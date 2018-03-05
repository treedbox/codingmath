//Linear Congrumential Generator - GLIBC
const nextRandom = () => {
  seed  = (multiplier * seed + increment) % modulus
  return seed
},
nextRandomFloat = () => {
  return nextRandom() / modulus
},
results = [],
update = () => {
  for (let x = 0; x < width; x++) {
    if (nextRandomFloat() < .5) c.fillRect(x, y, 1, 1)
  }
  y++
  if (y < height) requestAnimationFrame(update)
},
multiplier = 1103515245,
increment = 12345,
modulus = Math.pow(2, 31)

let seed = 1,
y = 0

for (let i = 0; i < 100000; i++) {
  const rand = nextRandom()
  if (results[rand]) {
    console.log(`i:`, i)
    break
  }
  results[rand] = true
}

console.log(`results:`, results)
//duplicate at 11154

update()
