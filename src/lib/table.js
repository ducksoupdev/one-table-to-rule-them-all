import { Store } from './store'
import { validateOptions } from './schema'
import { render } from './render'
import { loadData } from './load-data'

export class Table {
  constructor (element, options) {
    validateOptions(options)
    this.element = element
    const opts = {
      enableHover: false
    }
    Object.assign(opts, options)
    this.store = new Store(opts)
    this.store.registerObserver(this)
    this.render()

    if (typeof options.data === 'string' && /^https?:\/\//i.test(options.data)) {
      loadData(this.store)
    }
  }

  update () {
    this.render()
  }

  render () {
    render(this.element, this.store)
  }
}
