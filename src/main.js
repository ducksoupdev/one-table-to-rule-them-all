import Shape from './lib/Shape.js'
import {PURPLE, PINK} from './lib/colors.js'

window._moduleLoaded = true

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

const shapes = []

const rect = new Shape()
rect.color.copy(PURPLE)
rect.size.set(200, 60)
rect.position.set(20, 10)
shapes.push(rect)

const square = new Shape()
square.color.copy(PINK)
square.size.set(120, 120)
square.position.set(200, 100)
shapes.push(square)

shapes.forEach(shape => {
  shape.draw(context)
})
