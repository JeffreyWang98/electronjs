import * as ActionConstants from './ActionConstants'

export function setUserStatus(userId, status) {
  return { type: ActionConstants.SET_USER_STATUS, userId, status }
}

export function addUser(userId) {
  return { type: ActionConstants.ADD_USER, userId }
}
