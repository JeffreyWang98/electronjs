import createStore from './createStore'

// Store Instantiation
const initialState = {
  testVar: 'success',
  chat: {}
}

// Start: Temp code for static app initialization
const store = createStore(initialState)
export default store
