const hbox = (arr,spacing, aligment, wrap) => {
  let x = 0,
  y = 0,
  maxHeight = 0,
  ypos = 0

  c.clearRect(0, 0, width, height)

  arr.forEach(e => maxHeight = Math.max(maxHeight, e.h))

  arr.forEach(e => {
    if (wrap && x + e.w + spacing > width) x = 0, y += maxHeight + spacing
    if (aligment === 'bottom') ypos = maxHeight - e.h
    if (aligment === 'center') ypos = (maxHeight - e.h) / 2
    c.fillRect(x, y + ypos, e.w, e.h)
    x += e.w + spacing
  })
},
click = () => {
  n < 2 ? n++ : n = 0
  hbox(items, 5, align[n], true)
},
items = []

let align = ['bottom', 'center', 'top'],
n = 0

msg.innerHTML = 'Click to change'

for (let i = 0; i < 110; i++) {
  items.push({
    w:  20 + random(0, 80),
    h:  20 + random(0, 80)
  })
}

hbox(items, 5, align[n], true)

canvas.addEventListener('click', click)
