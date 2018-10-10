import { Store } from './store'
import { validateOptions } from './schema'
import { render } from './render'
import { loadData } from './load-data'

export class Table {
  constructor (element, options) {
    validateOptions(options)
    this.element = element
    this.store = new Store(options)
    this.store.registerObserver(this)
    this.render()
    loadData(this.store)
  }

  update () {
    this.render()
  }

  render () {
    render(this.element, this.store)
  }
}
