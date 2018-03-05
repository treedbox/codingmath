msg.innerHTML = 'See the log'

const encode = (message, offset) => {
  let result = ''
  for (let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i)
    char += offset
    result += String.fromCharCode(char)
  }
  return result
},
decode = (message, offset) => {
  let result = ''
  for (let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i)
    char -= offset
    result += String.fromCharCode(char)
  }
  return result
},
message = 'hello world one two three',
encoded = encode(message, 5),
decoded = decode(encoded, 5)

/*
Seed Random
Symmetry key Criptography
both users need the same key
*/
const encodeSeedrandom = (message, seed) => {
  const random = new Math.seedrandom(seed)
  let result = ''
  for (let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i)
    char += random.int32()
    result += String.fromCharCode(char)
  }
  return result
},
decodeSeedrandom = (message, seed) => {
  const random = new Math.seedrandom(seed)
  let result = ''
  for (let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i)
    char -= random.int32()
    result += String.fromCharCode(char)
  }
  return result
},
encodedSeedrandom = encodeSeedrandom(message, 5),
decodedSeedrandom = decodeSeedrandom(encodedSeedrandom, 5)

msg.style.backgroundColor = randomColor()
msg.style.opacity = 1
msg.innerHTML = `<p>message:<br>${message}</p>
<p>encoded:<br>${encoded}</p>
<p>decoded:<br>${decoded}</p>
<strong>With Seed Random:</strong>
<p>encodedSeedrandom:<br>${encodedSeedrandom}</p>
<p>decodedSeedrandom:<br>${decodedSeedrandom}</p>`

console.log(`message:`, message)
console.log(`encoded:`, encoded)
console.log(`decoded:`, decoded)
console.log(`with Seed Random:`)
console.log(`encodedSeedrandom:`, encodedSeedrandom)
console.log(`decodedSeedrandom:`, decodedSeedrandom)
