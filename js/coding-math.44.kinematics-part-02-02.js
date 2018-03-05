const update = () => {
  c.clearRect(0, 0, width, height)

  leg0.update()
  leg0.render(c)
  leg1.update()
  leg1.render(c)

  requestAnimationFrame(update)
},
listeners = () => {
  document.querySelector('input[name=top_center]').addEventListener('input', e => {
    leg0.arms[0].centerAngle = parseFloat(e.target.value)
    leg1.arms[0].centerAngle = parseFloat(e.target.value)
  })
  document.querySelector('input[name=top_range]').addEventListener('input', e => {
    leg0.arms[0].rotationRange = parseFloat(e.target.value)
    leg1.arms[0].rotationRange = parseFloat(e.target.value)
  })
  document.querySelector('input[name=bottom_center]').addEventListener('input', e => {
    leg0.arms[1].centerAngle = parseFloat(e.target.value)
    leg1.arms[1].centerAngle = parseFloat(e.target.value)
  })
  document.querySelector('input[name=bottom_range]').addEventListener('input', e => {
    leg0.arms[1].rotationRange = parseFloat(e.target.value)
    leg1.arms[1].rotationRange = parseFloat(e.target.value)
  })
  document.querySelector('input[name=bottom_phase]').addEventListener('input', e => {
    leg0.arms[1].phaseOffset = parseFloat(e.target.value)
    leg1.arms[1].phaseOffset = parseFloat(e.target.value)
  })
},
leg0 = FKSystem.create(width / 2, height / 2),
leg1 = FKSystem.create(width / 2, height / 2),
url = 'templates/controls.html'

leg0.addArm(200, Math.PI / 2, Math.PI / 4, 0)
leg0.addArm(180, .87, .87, -1.5)

leg1.phase = Math.PI
leg1.addArm(200, Math.PI / 2, Math.PI / 4, 0)
leg1.addArm(180, .87, .87, -1.5)

//get controls
fetch(url)
.then(response => response.text())
.then(data => {
  section = document.createElement('section')
  section.innerHTML = data
  //insert after canvas
  document.body.insertBefore(section, canvas.nextSibling)

  listeners()

  update()
}).catch(error => console.log('ERROR:', error.message))
