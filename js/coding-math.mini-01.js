const norm = (value, min, max) => {
	return (value - min) / (max - min)
},
values = [7, 5, 21, 18, 33, 12, 27, 18, 9, 23, 14, 6, 31, 25, 17, 13, 29],
min = Math.min.apply(null, values),
max = Math.max.apply(null, values)

c.beginPath()

for (let i = 0; i < values.length; i++) {
	const normValue = norm(values[i], min, max),
	x = width / (values.length - 1) * i,
	y = height - height * normValue

	i == 0 ? c.moveTo(x, y) : c.lineTo(x, y)
}

c.stroke()

// points
for (let i = 0; i < values.length; i++) {
	const normValue = norm(values[i], min, max),
	x = width / (values.length - 1) * i,
	y = height - height * normValue

	c.beginPath()
	c.arc(x, y, 4, 0, Math.PI * 2, false)
	c.fill()
}
