import { createSelector } from 'reselect'

export const selectChatRoot = (state) => state.chat

export const selectUserStatus = createSelector(
  selectChatRoot,
  (_, userId) => userId,
  (chat, userId) => chat.users[userId].status
)

export const selectUserName = createSelector(
  selectChatRoot,
  (_, userId) => userId,
  (chat, userId) => chat.users[userId].name
)
