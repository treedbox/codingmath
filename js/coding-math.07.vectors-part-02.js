msg.innerHTML = 'See the log'

const v1 = Vector.create(10, 5)
console.log(`v1:`, v1)
/*
v1: {_x: 10,
 _y: 5}
v1.x: 10
v1.y: 5
v1.angle: .4636476090008061
v1.length: 11.180339887498949
*/
const v2 = Vector.create(3, 4),
v3 = v1.add(v2)

console.log(`v3:`, v3)
//{_x: 13,  _y: 9}

console.log(`v1.length:`, v1.length)
//11.180339887498949
const v4 = v1.multiply(2)
console.log(`v4.length:`, v4.length)
//22.360679774997898

v1.addTo(v2)
console.log(`v1.x, v1.y:`, v1.x, v1.y)
//13, 9

v1.subtractFrom(v2)
console.log(`v1.x, v1.y:`, v1.x, v1.y)
//10, 5

v1.multiplyBy(2)
console.log(`v1.x, v1.y:`, v1.x, v1.y)
//20, 10

v1.divideBy(2)
console.log(`v1.x, v1.y:`, v1.x, v1.y)
//10, 5

//not modify the object
console.log(`v1:`, v1)
/*
v1: {_x: 10, _y: 5}
v1.x: 10
v1.y: 5
v1.angle: .4636476090008061
v1.length: 11.180339887498949
*/
