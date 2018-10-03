'use strict';

class Color {
  constructor (r = 0, g = 0, b = 0) {
    this.set(r, g, b);
  }

  copy (color) {
    this.set(color.r, color.g, color.b);
  }

  set (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toHex () {
    const hex = (this.r * 255) << 16 ^ (this.g * 255) << 8 ^ (this.b * 255) << 0;
    return '#' + ('000000' + hex.toString(16)).slice(-6)
  }
}

class Vector2 {
  constructor (x = 0, y = 0) {
    this.set(x, y);
  }

  set (x, y) {
    this.x = x;
    this.y = y;
  }
}

class Shape {
  constructor () {
    this.color = new Color();
    this.position = new Vector2();
    this.size = new Vector2(10, 10);
  }

  draw (context) {
    context.fillStyle = this.color.toHex();

    context.fillRect(this.position.x, this.position.y,
      this.size.x, this.size.y);
  }
}

const PURPLE = new Color(103 / 255, 58 / 255, 183 / 255);
const PINK = new Color(228 / 255, 41 / 255, 144 / 255);

window._moduleLoaded = true;

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const shapes = [];

const rect = new Shape();
rect.color.copy(PURPLE);
rect.size.set(200, 60);
rect.position.set(20, 10);
shapes.push(rect);

const square = new Shape();
square.color.copy(PINK);
square.size.set(120, 120);
square.position.set(200, 100);
shapes.push(square);

shapes.forEach(shape => {
  shape.draw(context);
});
