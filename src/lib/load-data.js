export function loadData (store) {
  const dataObj = store.state.data()
  if (!!dataObj && (typeof dataObj === 'object' || typeof dataObj === 'function') && typeof dataObj.then === 'function') {
    dataObj.then(data => store.setState({ data }))
  } else if (!!dataObj && typeof dataObj === 'object') {
    store.setState({ data: dataObj })
  } else {
    throw new Error('Data is not a Promise or object!')
  }
}
