const ArmInverse = {
	x: 0,
	y: 0,
	length: 100,
	angle: 0,
	parent: null,
	create(length, x, y, angle) {
		const obj = Object.create(this)
		obj.x = x || this.x
		obj.y = y || this.y
		obj.angle = angle || this.angle
		obj.length = length || this.length
		obj.init(obj.x, obj.y, obj.length, obj.angle)
		console.log(`obj:`, obj)
		return obj
	},
	init(x, y, length, angle) {
		this.x = x
		this.y = y
		this.length = length
		this.angle = angle
	},
	get endX() {
		return this.x + Math.cos(this.angle) * this.length
	},
	get endY() {
		return this.y + Math.sin(this.angle) * this.length
	},
	render(context) {
		context.beginPath()
		context.moveTo(this.x, this.y)
		context.lineTo(this.endX, this.endY)
		context.stroke()
	},
	pointAt(x, y) {
		const dx = x - this.x,
		dy = y - this.y
		this.angle = Math.atan2(dy, dx)
	},
	drag(x, y) {
		this.pointAt(x, y)
		this.x = x - Math.cos(this.angle) * this.length
		this.y = y - Math.sin(this.angle) * this.length
		if (this.parent) {
			this.parent.drag(this.x, this.y)
		}
	}
}
