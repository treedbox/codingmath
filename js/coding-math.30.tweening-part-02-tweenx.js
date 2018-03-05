const ball = {
	x: 100,
	y: 100
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
	c.beginPath()
	c.arc(ball.x, ball.y, 20, 0, Math.PI * 2, false)
	c.fill()
},
tweenX = (obj, targetX, duration, easingFunc) => {
	const startX = obj.x,
	changeX = targetX - startX,
	startTime = new Date(),
	tweenXUpdate = () => {
		let time = new Date() - startTime

		time < duration ?(
			obj.x = easingFunc(time, startX, changeX, duration),
			requestAnimationFrame(tweenXUpdate)
		) : (
			time = duration,
			obj.x = easingFunc(time, startX, changeX, duration)
		)

		update()
	}
	tweenXUpdate()
}

tweenX(ball, 800, 1000, easeInOutQuad)
