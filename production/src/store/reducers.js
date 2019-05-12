import { combineReducers } from 'redux'
import chatReducer from '../Chat/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const rootReducer = combineReducers({
  chat: chatReducer
})
