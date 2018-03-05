const IKSystem = {
	x: 0,
	y: 0,
	arms: null,
	lastArm: null,
	create(x, y) {
		const obj = Object.create(this)
		obj.init(x, y)
		return obj
	},
	init(x, y) {
		this.x = x
		this.y = y
		this.arms = []
	},
	addArm(length) {
		const arm = ArmInverse.create(length)
		this.lastArm ? (
			arm.x = this.lastArm.endX,
			arm.y = this.lastArm.endY,
			arm.parent = this.lastArm
		) : (
			arm.x = this.x,
			arm.y = this.y
		)
		this.arms.push(arm)
		this.lastArm = arm
	},
	render(context) {
		for (let i = 0; i < this.arms.length; i++) {
			this.arms[i].render(context)
		}
	},
	drag(x, y) {
		this.lastArm.drag(x, y)
	}
}
