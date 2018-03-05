const load = () => {
  const hash = location.hash.slice(1)

  let pos = 0

  if (hash != '' && hash != '#') pos = Number(hash)

  pos < codeMath.length - 1 && pos > 0 ? (
    left.href = '#' + (pos - 1),
    right.href = '#' + (pos + 1),

    left.innerHTML = (pos - 1),
    right.innerHTML = (pos + 1)
  ) : (
    pos == 0 ? (
      left.href = '#' + (codeMath.length - 1),
      right.href = '#' + 1,

      left.innerHTML = (codeMath.length - 1),
      right.innerHTML = (pos + 1)
    ) : (
      left.href = '#' + (pos - 1),
      right.href = '#' + 0,

      left.innerHTML = (pos - 1),
      right.innerHTML = 0
    )
  )

  fetch(codeMath[pos])
  .then(response => response.text())
  .then(data => {
    const loader = document.querySelector('.loader'),
    script = document.createElement('script')
    script.innerHTML = data
    loader.appendChild(script)
  }).catch(error => console.log('ERROR:', error.message))
},
navList = value => {
  navLinks.forEach(e => {
    e.parentNode.style.display =
    e.textContent.includes(value) || e.href.includes(value)?
    '' : 'none'
  })
},
codeMath = [
  'js/coding-math.00.angle.js',
  'js/coding-math.01.introduction.js',
  'js/coding-math.02.intro-to-trigonometry.js',
  'js/coding-math.03.more-trigonometry.js',
  'js/coding-math.04.circles-ellipses-and-lissajous-curves-bees.js',
  'js/coding-math.04.circles-ellipses-and-lissajous-curves-circle.js',
  'js/coding-math.04.circles-ellipses-and-lissajous-curves-matrix.js',
  'js/coding-math.04.circles-ellipses-and-lissajous-curves-code.js',
  'js/coding-math.05.arctangent.js',
  // 'js/coding-math.06.vectors-part-01.js',
  'js/coding-math.07.vectors-part-02.js',
  'js/coding-math.08.velocity.js',
  'js/coding-math.09.acceleration.js',
  'js/coding-math.09.acceleration-fireworks.js',
  'js/coding-math.10.advanced-acceleration.js',
  'js/coding-math.10.advanced-acceleration-ship1.js',
  'js/coding-math.10.advanced-acceleration-ship2.js',
  'js/coding-math.11.gravity.js',
  'js/coding-math.11.gravity-orbit.js',
  'js/coding-math.12.edge-handling-bounce.js',
  'js/coding-math.12.edge-handling-regen.js',
  'js/coding-math.12.edge-handling-regen-extra.js',
  'js/coding-math.12.edge-handling-removal.js',
  'js/coding-math.12.edge-handling-wrapping.js',
  'js/coding-math.13.friction-friction1.js',
  'js/coding-math.13.friction-friction2.js',
  'js/coding-math.13.friction-ship2.js',
  'js/coding-math.14.collision-detection-rect-rect.js',
  'js/coding-math.14.collision-detection-rect-point.js',
  'js/coding-math.14.collision-detection-circle-point.js',
  'js/coding-math.14.collision-detection-circle-circle.js',
  'js/coding-math.15.springs-part-01.js',
  'js/coding-math.16.springs-part-02-spring1.js',
  'js/coding-math.16.springs-part-02-spring2.js',
  'js/coding-math.17.particles-optimization-spring1.js',
  'js/coding-math.17.particles-optimization-orbit.js',
  'js/coding-math.18.particles-enhancements.js',
  'js/coding-math.18.particles-enhancements-spring1.js',
  'js/coding-math.18.particles-enhancements-multigravity.js',
  'js/coding-math.19.bezier-curves-01.js',
  'js/coding-math.19.bezier-curves-02.js',
  'js/coding-math.19.bezier-curves-03.js',
  'js/coding-math.19.bezier-curves-demo1.js',
  'js/coding-math.19.bezier-curves-demo2.js',
  'js/coding-math.19.bezier-curves-demo3.js',
  'js/coding-math.19.bezier-curves-demo4.js',
  'js/coding-math.19.bezier-curves-demo5.js',
  'js/coding-math.19.bezier-curves-demo6.js',
  'js/coding-math.20.more-on-bezier-curves-01.js',
  'js/coding-math.20.more-on-bezier-curves-02.js',
  'js/coding-math.20.more-on-bezier-curves-03.js',
  'js/coding-math.21.bitmap-collision-detection.js',
  'js/coding-math.22.3d-postcards-in-space-01.js',
  'js/coding-math.22.3d-postcards-in-space-02.js',
  'js/coding-math.22.3d-postcards-in-space-stars.js',
  'js/coding-math.22.3d-postcards-in-space-postcards.js',
  'js/coding-math.23.3d-carousel-final.js',
  'js/coding-math.23.3d-carousel-postcards.js',
  'js/coding-math.23.3d-carousel-spiral.js',
  'js/coding-math.23.3d-carousel-stars.js',
  'js/coding-math.24.3d-points-and-lines.js',
  'js/coding-math.25.3d-points-and-lines.js',
  'js/coding-math.26.2d-and-3d-coordinate-rotation.js',
  'js/coding-math.26.2d-and-3d-coordinate-rotation-2d.js',
  'js/coding-math.27.easing-and-tweening.js',
  'js/coding-math.28.more-on-easing.js',
  'js/coding-math.28.more-on-easing-click.js',
  'js/coding-math.28.more-on-easing-steering.js',
  'js/coding-math.28.more-on-easing-string.js',
  'js/coding-math.29.tweening-part-01.js',
  'js/coding-math.30.tweening-part-02-tweenBasic.js',
  'js/coding-math.30.tweening-part-02-tweenx.js',
  'js/coding-math.30.tweening-part-02-tweenFull.js',
  'js/coding-math.32.line-intersections-part-01.js',
  'js/coding-math.32.line-intersections-part-01-interactive.js',
  'js/coding-math.33.line-intersections-part-02-parallel.js',
  'js/coding-math.33.line-intersections-part-02-interactive.js',
  'js/coding-math.34.line-intersections-part-03-shapes-star.js',
  'js/coding-math.34.line-intersections-part-03-particles.js',
  'js/coding-math.35.intro-to-fractals-twist.js',
  'js/coding-math.35.intro-to-fractals-sierpinski.js',
  'js/coding-math.35.intro-to-fractals-kochanimated.js',
  'js/coding-math.35.intro-to-fractals-koch.js',
  'js/coding-math.36.verlet-integration-part-01.js',
  'js/coding-math.37.verlet-integration-part-02.js',
  'js/coding-math.38.verlet-integration-part-03.js',
  'js/coding-math.38.verlet-integration-part-03-image.js',
  'js/coding-math.38.verlet-integration-part-03-ragdoll.js',
  'js/coding-math.39.verlet-integration-part-04.js',
  'js/coding-math.39.verlet-integration-part-04-json.js',
  'js/coding-math.39.verlet-integration-part-04-json2.js',
  'js/coding-math.40.fractal-trees.js',
  'js/coding-math.40.fractal-trees-pytree.js',
  'js/coding-math.40.fractal-trees-pytreeanim.js',
  'js/coding-math.40.fractal-trees-treeanim.js',
  'js/coding-math.41.isometric-3d-part-01.js',
  'js/coding-math.41.isometric-3d-part-01-math.js',
  'js/coding-math.42.isometric-3d-part-02.js',
  'js/coding-math.43.kinematics-part-01.js',
  'js/coding-math.43.kinematics-part-01-preview.js',
  'js/coding-math.44.kinematics-part-02.js',
  'js/coding-math.44.kinematics-part-02-02.js',
  'js/coding-math.45.kinematics-part-03.js',
  'js/coding-math.47.weighted-random.js',
  'js/coding-math.49.matrix-math-part-02.js',
  'js/coding-math.50.ifs-fractals-iterate-function-system.js',
  'js/coding-math.50.ifs-fractals-iterate-function-system-random.js',
  'js/coding-math.51.pseudo-random-number-generators-prngs-part-01-middle-square-method.js',
  'js/coding-math.51.pseudo-random-number-generators-prngs-part-01-linear-congrumential-generator-glibc.js',
  'js/coding-math.51.pseudo-random-number-generators-prngs-part-01-linear-congrumential-generator-numerical-recipes.js',
  'js/coding-math.52.pseudo-random-number-generators-prngs-part-02.js',
  'js/coding-math.52.pseudo-random-number-generators-prngs-part-02-cryptography.js',
  'js/coding-math.52.pseudo-random-number-generators-prngs-part-02-random-shapes.js',
  'js/coding-math.52.pseudo-random-number-generators-prngs-part-02-random-shapes-02.js',
  'js/coding-math.53.random-circle-packing.js',
  'js/coding-math.54.dot-product.js',
  'js/coding-math.54.dot-product-angle.js',
  'js/coding-math.55.aspect-ratio.js',
  'js/coding-math.56.box-layout.js',
  'js/coding-math.57.grid-layout.js',
  'js/coding-math.57.grid-layout-02.js',
  'js/coding-math.57.grid-layout-strokes.js',
  'js/coding-math.57.grid-layout-circles.js',
  'js/coding-math.58.array-math-get-color.js',
  'js/coding-math.58.array-math-node-garden.js',
  'js/coding-math.mini-01.js',
  'js/coding-math.mini-02.js',
  'js/coding-math.mini-03.js',
  'js/coding-math.mini-04.js',
  'js/coding-math.mini-06.js',
  'js/coding-math.mini-07.js',
  'js/coding-math.mini-08.js',
  'js/coding-math.mini-08-test1.js',
  'js/coding-math.mini-08-test2.js',
  'js/coding-math.mini-09.js',
  'js/coding-math.mini-09-02.js',
  'js/coding-math.mini-09-03.js',
  'js/coding-math.mini-09-highres.js',
  'js/coding-math.mini-10.js',
  'js/coding-math.mini-10-02.js',
  'js/coding-math.mini-10-circle.js',
  'js/coding-math.mini-11.js',
  'js/coding-math.mini-11-bezier.js',
  'js/coding-math.application-01.js',
  'js/coding-math.application-02.js',
  'js/coding-math.application-02-02.js',
  'js/coding-math.application-03.js',
  'js/coding-math.application-03-02.js',
  'js/coding-math.application-04.js'
],
left = document.querySelector('a.left'),
right = document.querySelector('a.right'),
reload = document.querySelector('.reload'),
msg = document.querySelector('.msg'),
ul = document.querySelector('nav ul'),
filter = document.querySelector('nav input[name=filter]'),
clearFilter = document.querySelector('nav button[name=clear]')

codeMath.forEach((e, i) => {
  const li = document.createElement('li'),
  a = document.createElement('a')

  a.href = '#' + i
  a.textContent = e.substring(15, e.length - 3).replace(/-|\./g, ' ')

  li.appendChild(a)
  ul.appendChild(li)
})

const links = [
  ...document.querySelectorAll('header a'),
  ...document.querySelectorAll('nav li a')
],
navLinks = document.querySelectorAll('nav li a')

window.addEventListener('load', () => {
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      const el = e.target
      location.href = el.href
      location.reload()
    })
  })

  filter.addEventListener('keyup', e => navList(e.target.value))

  clearFilter.addEventListener('click', () => navList(filter.value = ''))
  load()
})
