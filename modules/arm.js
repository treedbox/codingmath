const Arm = {
	x: 0,
	y: 0,
	length: 100,
	angle: 0,
	centerAngle: 0,
	rotationRange: Math.PI / 4,
	parent: null,
	phaseOffset: 0,
	create(length, centerAngle, rotationRange, phaseOffset) {
		const obj = Object.create(this)
		obj.init(length, centerAngle, rotationRange, phaseOffset)
		return obj
	},
	init(length, centerAngle, rotationRange, phaseOffset) {
		this.length = length
		this.centerAngle = centerAngle
		this.rotationRange = rotationRange
		this.phaseOffset = phaseOffset
	},
	set phase(phase) {
		this.angle = this.centerAngle +
		Math.sin(phase + this.phaseOffset) * this.rotationRange
	},
	get endX() {
		let angle = this.angle,
		parent = this.parent
		while(parent) {
			angle += parent.angle
			parent = parent.parent
		}
		return this.x + Math.cos(angle) * this.length
	},
	get endY() {
		let angle = this.angle,
		parent = this.parent
		while(parent) {
			angle += parent.angle
			parent = parent.parent
		}
		return this.y + Math.sin(angle) * this.length
	},
	render(c) {
		c.lineWidth = 5
		c.lineCap = 'round'
		c.beginPath()
		c.moveTo(this.x, this.y)
		c.lineTo(this.endX, this.endY)
		c.stroke()
	}
}
