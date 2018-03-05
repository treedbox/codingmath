const addResult = () => {
	let iterations = 3,
	total = 0

	for (let i = 0; i < iterations; i++) total += Utils.randomRange(0, 100)

	result = Math.floor(total / iterations)
	results[result]++
},
draw = () => {
	const w = width / 100
	for (let i = 0; i < 100; i++) {
		const h = results[i] * -10
		c.fillRect(w * i, height, w, h)
	}
},
update = () => {
	addResult()
	draw()
	requestAnimationFrame(update)
},
results = []

for (let i = 0; i < 100; i++) results[i] = 0

update()
