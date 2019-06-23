import createStore from './createStore'

// Store Instantiation
const initialState = {
  user: {
    // Basic user information
    userId: 0,
    name: '',
    birthday: '',
    email: '',
    profilePicture: '',
    friends: {},
    games: {}
  },
  games: [
    // List of all games with info in cache
    {
      gameId: 0
    }
  ]
}

// Start: Temp code for static app initialization
const store = createStore(initialState)
export default store
