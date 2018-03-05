const Vector = {
	_x: 1,
	_y: 0,
	create(x, y) {
		const obj = Object.create(this)
		obj.x = x
		obj.y = y
		return obj
	},
	set x(value) {
		this._x = value
	},
	get x() {
		return this._x
	},
	set y(value) {
		this._y = value
	},
	get y() {
		return this._y
	},
	set angle(angle) {
		const length = this.length
		this._x = Math.cos(angle) * length
		this._y = Math.sin(angle) * length
	},
	get angle() {
		return Math.atan2(this._y, this._x)
	},
	set length(length) {
		const angle = this.angle
		this._x = Math.cos(angle) * length
		this._y = Math.sin(angle) * length
	},
	get length() {
		return Math.sqrt(this._x * this._x + this._y * this._y)
	},
	add(v2) {
		return this.create(this._x + v2.x, this._y + v2.y)
	},
	subtract(v2) {
		return this.create(this._x - v2.x, this._y - v2.y)
	},
	multiply(val) {
		return this.create(this._x * val, this._y * val)
	},
	divide(val) {
		return this.create(this._x / val, this._y / val)
	},
	addTo(v2) {
		this._x += v2.x
		this._y += v2.y
	},
	subtractFrom(v2) {
		console.log(`v2:`, v2)
		this._x -= v2.x
		this._y -= v2.y
	},
	multiplyBy(val) {
		this._x *= val
		this._y *= val
	},
	divideBy(val) {
		this._x /= val
		this._y /= val
	}
}
