//random
const random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min
//pallete
const material = [
  '#009688','#00BCD4','#03A9F4','#2196F3','#3F51B5',
  '#4CAF50','#607D8B','#673AB7','#795548','#8BC34A',
  '#9C27B0','#9E9E9E','#CDDC39','#E91E63','#F44336',
  '#FF5722','#FF9800','#FFC107','#FFEB3B'
]
//randomColor
const randomColor = () => {
  return material[random(0,material.length - 1)]
}
//set fill random color by default
c.fillStyle = randomColor()
//set stroke/line random color by default
c.strokeStyle = randomColor()
