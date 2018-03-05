//Linear Congrumential Generator - Numerical Recipes
const nextRandom = () => {
  seed  = (multiplier * seed + increment) % modulus
  return seed
},
nextRandomFloat = () => nextRandom() / modulus,
update = () => {
  for (let x = 0; x < width; x++) {
    if (nextRandomFloat() < .5) {
      c.fillRect(x, y, 1, 1)
    }
  }
  y++
  if (y < height) requestAnimationFrame(update)
},
results = [],
multiplier = 1664525,
increment = 1013904223,
modulus = Math.pow(2, 32)

let seed = 958736,
y = 0

for (let i = 0; i < 1000000; i++) {
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
