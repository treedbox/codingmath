msg.innerHTML = 'Move your mouse/touch'

const arr = [3, 4, 5, 5, 6, 7, 8, 9, 0],
handler = e => {
  console.log(`e:`, e)
},
arrGrid = [],
arrGrid2 = [],
numColumns = 10,
get = (row, col) => {
  return arrGrid2[row * numColumns + col]
},
set = (row, col, value) => {
  arrGrid2[row * numColumns + col] = value
},
size = 20,
imageData = c.getImageData(0, 0, 200, 200),
getPixel = (x, y) => {
  const index = (y * imageData.width + x) * 4,
  red = imageData.data[index],
  green = imageData.data[index + 1],
  blue = imageData.data[index + 2],
  alpha = imageData.data[index + 3] / 255
  console.log(`index:`, index)
  console.log(`imageDatadata:`, imageData.data)
  return `rgba(${red},${green},${blue},${alpha})`
},
move = e => {
  const color = getPixel(e.clientX || e.touches[0].clientX,
    e.clientY || e.touches[0].clientY)
    document.body.style.backgroundColor = color
  }

  console.log(`arr:`, arr)

  console.log(`Array.forEach()`)

  arr.forEach(handler)

  console.log(`Array Reverse`)

  for (let i = arr.length - 1; i >= 0; i--) {
    const e = arr[i]
    console.log(`e:`, e)
  }

  console.log(`Remove all same element (5) with Array Reverse`)
  console.log(`Original:`)
  console.log(`arr:`, arr)

  for (let i = arr.length - 1; i >= 0; i--) {
    const e = arr[i]
    if (e === 5) {
      arr.splice(i, 1)
    }
  }
  console.log(`Splice:`)
  console.log(`arr:`, arr)

  console.log(`Array Grid:`)


  for (let i = 0; i < 10; i++) {
    arrGrid[i] = []
  }
  arrGrid[2][3] = 'Hello'
  console.log(`arrGrid[2][3]:`, arrGrid[2][3])
  console.log(`arrGrid:`, arrGrid)

  console.log(`Array Grid2:`)

  set(4, 5, 'Foo')

  console.log(`get(4, 5):`, get(4, 5))

  console.log(`Get and Set Canvas color`)
  canvas.style.backgroundColor = 'transparent'

  for (let i = 0; i < 200; i+= size) {
    for (let j = 0; j < 200; j+= size) {
      c.fillStyle = '#' +  Math.floor(Math.random() * 0xffffff).toString(16)
      c.fillRect(i, j, size, size)

    }
  }

  canvas.addEventListener('mousemove', move)
  canvas.addEventListener('touchmove', move, {passive:true})
