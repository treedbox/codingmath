msg.innerHTML = 'Click to move'

let startTime

const start = {
	x: 100,
	y: 100
},
target = {},
change = {},
duration = 1000,
// simple linear tweening - no easing
// t: current time, b: beginning value, c: change in value, d: duration
linearTween = (t, b, c, d) => c * t / d + b,
///////////// QUADRATIC EASING: t^2 ///////////////////
// quadratic easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in value, d: duration
// t and d can be in frames or seconds/milliseconds
easeInQuad = (t, b, c, d) => c * (t /= d) * t + b,
// quadratic easing out - decelerating to zero velocity
easeOutQuad = (t, b, c, d) => -c * (t /= d) * (t - 2) + b,
// quadratic easing in/out - acceleration until halfway, then deceleration
easeInOutQuad = (t, b, c, d) => (t /= d / 2) < 1 ?
c / 2 * t * t + b :
-c / 2 * ((--t) * (t-2) - 1) + b,
drawCircle = (x, y) => {
	c.beginPath()
	c.arc(x, y, 20, 0, Math.PI * 2, false)
	c.fill()
},
update = () => {
	c.clearRect(0, 0, width, height)

	const time = new Date() - startTime
	if (time < duration) {
		const x = easeInOutQuad(time, start.x, change.x, duration),
		y = easeInOutQuad(time, start.y, change.y, duration)

		drawCircle(x, y)
		
		requestAnimationFrame(update)
	} else {
		drawCircle(target.x, target.y)

		start.x = target.x
		start.y = target.y
	}
},
click = e => {
	target.x = e.clientX
	target.y = e.clientY
	change.x = target.x - start.x
	change.y = target.y - start.y
	startTime = new Date()
	update()
}

drawCircle(start.x, start.y)

canvas.addEventListener('click', click)
