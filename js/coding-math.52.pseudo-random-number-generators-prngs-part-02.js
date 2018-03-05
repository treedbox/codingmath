msg.innerHTML = 'See the log'

console.log('JavaScript Math.random()')
for (let i = 0; i < 10; i++) console.log(Math.random())

console.log('Mersenne Twister - Float')
const mt = new MersenneTwister()

mt.init_genrand(999)

for (let i = 0; i < 10; i++) console.log(mt.random())

console.log('Mersenne Twister - Int32')
for (let i = 0; i < 10; i++) console.log(mt.genrand_int32())

console.log('seedrandom.js - Float')

const seedRandom = new Math.seedrandom(999)
//const original math random intact
for (let i = 0; i < 10; i++) console.log(seedRandom())

console.log('seedrandom.js - int32')
for (let i = 0; i < 10; i++) console.log(seedRandom.int32())

Math.seedrandom(999)
//same 10 numbers each time
//affect Math.random()
console.log('Math.random() modified by seedrandom.js')
for (let i = 0; i < 10; i++) console.log(Math.random())
