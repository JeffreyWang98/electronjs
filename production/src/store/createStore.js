import thunk from 'redux-thunk'
import { compose, applyMiddleware, createStore } from 'redux'
import { rootReducer, makeRootReducer } from './reducers'

export default (initialState = {}) => {
  // Middleware Configuration
  const middleware = [thunk]

  // Store Enhancers
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
    // ?
  }

  // Store Instantiation and Hot Module Replacement Setup
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(makeRootReducer(store.asyncReducers))
    })
  }

  return store
}
