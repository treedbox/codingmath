const ball = {
	x: 100,
	y: 100,
	alpha: 1
},
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
update = () => {
	c.clearRect(0, 0, width, height)
	c.globalAlpha = ball.alpha
	c.beginPath()
	c.arc(ball.x, ball.y, 20, 0, Math.PI * 2, false)
	c.fill()
},
tween = (obj, prop, target, duration, easingFunc) => {
	const start = obj[prop],
	change = target - start,
	startTime = new Date()

	const tweenUpdate = () => {
		let time = new Date() - startTime
		
		time < duration ? (
			obj[prop] = easingFunc(time, start, change, duration),
			requestAnimationFrame(tweenUpdate)
		) : (
			time = duration,
			obj[prop] = easingFunc(time, start, change, duration)
		)

		update()
	}
	tweenUpdate()
}

tween(ball, "alpha", 0, 1000, easeInOutQuad)
