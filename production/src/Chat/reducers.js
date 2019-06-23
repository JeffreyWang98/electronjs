import * as AC from './ActionConstants'

const initialState = {
  users: {
    meow: {
      status: 'success'
    }
  }
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
      case AC.ADD_USER:
        return {
          ...state,
          users: {
            ...state.users,
            [action.userId]: {
              name: 'namae',
              status: 'success'
            }
          }
        }
      case AC.SET_USER_STATUS:
        return {
          ...state,
          users: {
            ...state.users,
            [action.userId]: {
              ...state.users[action.userId],
              status: action.status
            }
          }
        }
      default:
        return state
  }
}
