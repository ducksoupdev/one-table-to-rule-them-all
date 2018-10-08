import { initState } from './state.js'
import { initPagination } from './pagination.js'

export function initTable (options) {
  // create state
  const state = initState(options)

  // create pagination
  const pagination = initPagination(state)

  return state
}
