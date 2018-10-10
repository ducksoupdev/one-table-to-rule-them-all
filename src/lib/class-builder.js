export class ClassBuilder {
  constructor () {
    this.classes = []
  }

  addClass (className) {
    this.classes.push(className)
    return this
  }

  build () {
    return this.classes.join(' ')
  }
}
