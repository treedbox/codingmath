const update = () => {
  //identifty matrix (don't transform anything at all)
  // c.setTransform(1, 0, 0, 1, 0, 0)
  // c.setTransform(1, 0, 0, 1, 100, 100)
  // c.setTransform(1, 0, 0, 1, 200, 300)

  //scale 3 times in x and 2 times in y
  // c.setTransform(3, 0, 0, 2, 200, 300)

  //translate and rotate
  c.setTransform(cos, sin, -sin, cos, 200, 300)
  c.fillRect(0, 0, 100, 100)

  //apply new transform on top of any existing one
  c.transform(1, 0, 0, 1, 100, 100)
  c.fillRect(0, 0, 100, 100)

  //clear any transform before
  c.setTransform(1, 0, 0, 1, 100, 100)
  c.fillRect(0, 0, 100, 100)

  //rotate and scale at same time
  //rotate matrix x scale matrix
  //sy = 1 is normal
  //sy = 2 twices tall
  sx = 1
  sy = 2
  c.setTransform(cos * sx, sin * sy, -sin * sx, cos * sy, 350, 300)
  c.fillRect(0, 0, 100, 100)

  sx = .5
  sy = 1
  c.setTransform(cos * sx, sin * sy, -sin * sx, cos * sy, 500, 300)
  c.fillRect(0, 0, 100, 100)

  //scale matrix x rotate matrix
  sx = 1
  sy = 2
  c.setTransform(cos * sx, sin * sx, -sin * sy, cos * sy, 400, 0)
  c.fillRect(0, 0, 100, 100)

  sx = 2
  sy = 1
  c.setTransform(cos * sx, sin * sx, -sin * sy, cos * sy, 550, 0)
  c.fillRect(0, 0, 100, 100)

  sx = 2
  sy = .5
  c.setTransform(cos * sx, sin * sx, -sin * sy, cos * sy, 650, 0)
  c.fillRect(0, 0, 100, 100)

  requestAnimationFrame(update)
},
angle = Math.PI / 4,
cos = Math.cos(angle),
sin = Math.sin(angle)

let sx = 1,
sy = 1

update()
