import { createBodyNode } from './nodes.js'
import { generateId } from './hydrate.js'

let state = null

export function initState (is) {
  state = {
    start: 0,
    size: 50,
    total: 10000,
    pr: {},
    data: null
  }

  Object.assign(state, is)

  if (state.data) {
    for (let i = 0; i < state.data.length; i++) {
      const p = state.data[i]
      if (!p['id']) {
        p['id'] = generateId()
      }
      state.pr[p.id] = createBodyNode(p)
    }
  }

  return state
}
