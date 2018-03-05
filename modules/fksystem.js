const FKSystem = {
	arms: null,
	lastArm: null,
	x: 0,
	y: 0,
	phase: 0,
	speed: 0.05,
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
	addArm(length, centerAngle, rotationRange, phaseOffset) {
		const arm = Arm.create(length, centerAngle, rotationRange, phaseOffset)
		this.arms.push(arm)
		if (this.lastArm) arm.parent = this.lastArm
		this.lastArm = arm
		this.update()
	},
	update() {
		for (let i = 0; i < this.arms.length; i++) {
			const arm = this.arms[i]
			arm.phase = this.phase
			arm.parent ? (
				arm.x = arm.parent.endX,
				arm.y = arm.parent.endY
			) : (
				arm.x = this.x,
				arm.y = this.y
			)
		}
		this.phase += this.speed
	},
	render(context) {
		for (let i = 0; i < this.arms.length; i++) {
			this.arms[i].render(context)
		}
	},
	rotateArm(index, angle) {
		this.arms[index].angle = angle
	}
}
