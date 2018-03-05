msg.innerHTML = 'Click to stop'

const addResult = () => {
	let iterations = 2,
	total = 0

	for (let i = 0; i < iterations; i++) {
		total += Utils.randomRange(0, width)
	}
	result = Math.floor(total / iterations)

	results[result] += 1
},
update = () => {

	for (let n = 0; n < 1000; n++) {
		addResult()
	}
	for (let i = 0; i < width; i++) {
		const h = -results[i]
		c.fillRect(i, height, 1, h)
	}
	if (running) {
		requestAnimationFrame(update)
	}
},
click = () => {
	running = !running
	if (running) {
		update()
	}
},
results = []

let running = true

for (let i = 0; i < width; i++) results[i] = 0

update()

canvas.addEventListener('click', click)
