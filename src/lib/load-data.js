import 'es6-promise/auto'
import 'whatwg-fetch'

export function loadData (store) {
  window
    .fetch(store.state.data, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      store.setState({
        data
      })
    })
    .catch(err => {
      throw err
    })
}
