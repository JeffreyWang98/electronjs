import store from '../store'

/**
 * dispatch action
 * @param action
 */
export function dispatchAction(action) {
  return store.dispatch(action)
}

/**
 * get all state of global store
 */
export function getState() {
  return store.getState()
}
