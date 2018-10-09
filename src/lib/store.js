import { generateId } from './hydrate'
import { createTableBodyNode } from './nodes'

export class Store {
  constructor (state) {
    this.state = {
      start: 0,
      size: 10,
      pr: null,
      rows: null
    }
    this.observers = []
    Object.assign(this.state, state)
    if (state.data && typeof state.data === 'object') {
      this.createNodes(state.data)
    }
  }

  registerObserver (observer) {
    this.observers.push(observer)
  }

  setState (state) {
    Object.assign(this.state, state)
    if (state.data && typeof state.data === 'object') {
      this.createNodes(state.data)
    }
    this.notifyObservers()
  }

  notifyObservers () {
    this.observers.forEach(o => o.update(this))
  }

  createNodes (data) {
    this.state.pr = {}
    this.state.rows = []
    for (let i = 0; i < data.rows.length; i++) {
      const item = data.rows[i]
      const id = generateId()
      const vd = {
        id,
        data: item
      }
      this.state.rows.push(vd)
      this.state.pr[vd.id] = createTableBodyNode(item)
    }
  }
}
