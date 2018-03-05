for (let i = 0; i < 100000; i++) {
	const x = Utils.randomDist(0, width, 5),
	y = Utils.randomDist(0, height, 5)

	c.fillRect(x, y, 1, 1)
}
