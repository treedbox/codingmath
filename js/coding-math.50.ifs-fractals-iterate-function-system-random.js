c.translate(width / 2, 0)

const plot = (x, y, color) => {
  c.fillStyle = color
  c.fillRect(x * 50, height -y * 50, .5, .5)
},
getRule = () => {
  let rand = Math.random()
  return Rules.find(e => {
    if (rand < e.weight) return e
    rand -= e.weight
  })
},
iterate = () => {
  for (let i = 0; i < 100; i++) {
    const rule = getRule()
    x1 = x * rule.a + y * rule.b + rule.tx
    y1 = x * rule.c + y * rule.d + rule.ty,
    x = x1,
    y = y1
    plot(x, y, rule.color)
  }
  requestAnimationFrame(iterate)
},
Rules = [
  {
    a: .85,
    b: .04,
    c: -.04,
    d: Math.random(),
    tx: 0,
    ty: 1.6,
    weight: .85,
    color: 'red'
  },
  {
    a: -.15,
    b: .28,
    c: .26,
    d: Math.random(),
    tx: 0,
    ty: .44,
    weight: .07,
    color: 'green'
  },
  {
    a: .2,
    b: -.26,
    c: .23,
    d: Math.random(),
    tx: 0,
    ty: 1.6,
    weight: .07,
    color: 'blue'
  },
  {
    a: 0,
    b: 0,
    c: 0,
    d: Math.random(),
    tx: 0,
    ty: 0,
    weight: .01,
    color: 'black'
  },
]

let x = Math.random(),
y = Math.random()

iterate()
