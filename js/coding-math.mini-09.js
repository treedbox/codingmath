const addResult = () => {
	const r0 = Utils.randomRange(0, 100),
	r1 = Utils.randomRange(0, 100),
	result = Math.floor((r0 + r1) / 2)

	results[result]++
},
draw = () => {
	const w = width / 100
	for (let i = 0; i < 100; i++) {
		const h = results[i] * -10
		c.fillStyle = i < 50 ? color1 : color2
		c.fillRect(w * i, height, w, h)
	}
},
update = () => {
	addResult()
	draw()
	requestAnimationFrame(update)
},
results = [],
color1 = randomColor(),
color2 = randomColor()

for (let i = 0; i < 100; i++) results[i] = 0

update()
