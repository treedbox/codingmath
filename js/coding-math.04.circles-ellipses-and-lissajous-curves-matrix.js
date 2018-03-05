let drop = 0,
n = 0,
hs = 0

const xres = 15,
yres = 13,
fall = .1,
kanji = [
	'些','佐','叉','唆','嵯','左','差','査','沙','瑳',
	'砂','詐','鎖','裟','坐','座','挫','債','催','再',
	'最','哉','塞','妻','宰','彩','才','採','栽','歳',
	'済','災','采','犀','砕','砦','祭','斎','細','菜',
	'裁','載','際','剤','在','材','罪','財','冴','阪',
	'堺','榊','肴','咲','崎','埼','碕','鷺','作','削',
	'咋','搾','昨','柵','窄','策','索','錯','桜','鮭',
	'笹','匙','冊','刷','察','拶','撮','擦','札','殺',
	'薩','雑','皐','鯖','捌','錆','皿','晒','三','参',
	'山','惨','撒','珊','纂','蚕','賛','餐','残','粛'
],
change = () => {
	n < 3 ? n += .01 : hs < .5 ? hs += .0001 : null
},
timer = setInterval(() => {
	change()
	requestAnimationFrame(update)
}, 100),
colorArr = [
	'#04cf04', '#04cf04', '#04cf04', '#04cf04',
	'#04cf04', '#04cf04', '#04cf04', '#04cf04',
	'#04cf04', '#08ff08', '#04cf04', '08ff08'
],
rain = (x, y) => {
	if (drop > canvas.height / 3) drop = -canvas.height
	if (y > drop && y < -drop * 2 &&
		x > drop && x < -drop * 2){
			drop += .003
			return colorArr[random(0, kanji.length - 1)]
		}
		drop += .003
		return '#04cf04'
	},
	update = () => {
		c.resetTransform()
		c.clearRect(0, 0, width, height)
		c.fillStyle = 'black'
		c.fillRect(0, 0, width, height)
		c.font = '12px Courier'
		c.translate(width / 2, height / 2)
		// c.scale(1.5, 1.5)
		// c.rotate(.1)
		c.transform(n, hs, .5, n, 0, 0)

		for (let y = -height / 2; y < height / 2; y += yres) {
			for (let x = -width / 2; x < width / 2; x += xres) {
				const char = kanji[random(0, kanji.length - 1)]
				c.fillStyle = rain(x, y)
				c.fillText(char, x, y)
			}
		}
		timer
	}

	update()
