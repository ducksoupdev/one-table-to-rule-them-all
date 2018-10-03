export class Color {
  constructor (r = 0, g = 0, b = 0) {
    this.set(r, g, b)
  }

  copy (color) {
    this.set(color.r, color.g, color.b)
  }

  set (r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  toHex () {
    const hex = (this.r * 255) << 16 ^ (this.g * 255) << 8 ^ (this.b * 255) << 0
    return '#' + ('000000' + hex.toString(16)).slice(-6)
  }
}

export class Vector2 {
  constructor (x = 0, y = 0) {
    this.set(x, y)
  }

  set (x, y) {
    this.x = x
    this.y = y
  }
}
