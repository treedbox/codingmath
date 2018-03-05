const getWidthFirst = (s,i,c) => {
  if (s) return i > c
  return i < c
},
loadImage = () => {
  const imageAspectRatio = img.width / img.height,
  containerAspectRatio = width / height,
  widthFirst = getWidthFirst(scaleMode, imageAspectRatio, containerAspectRatio)

  let imageWidth,
  imageHeight,
  text = 'Fill'

  switch(widthFirst) {
    case true:
    imageHeight = height
    imageWidth  = imageHeight * imageAspectRatio
    break
    case false:
    imageWidth = width
    imageHeight  = imageWidth / imageAspectRatio
    break
    default:
  }
  c.clearRect(0, 0, width, height)

  c.drawImage(img, 0, 0, img.width, img.height,
    (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight
  )
  if (!scaleMode) text = 'Show All'

  c.fillText(text, width / 2, 100)
  c.fill()
},
img = document.createElement('img')

let scaleMode = true

msg.innerHTML = 'Click to resize'
img.src = 'images/raccoons.jpg'
c.font = '30px Arial'
c.shadowOffsetX = 1
c.shadowOffsetY = 1
c.shadowBlur = 5
c.shadowColor = 'black'
c.fillStyle = 'white'

img.addEventListener('load', loadImage)

canvas.addEventListener('click', () => {
  scaleMode = !scaleMode
  loadImage()
})
