const GameReducer = (state, action) => {
  switch (action.type) {
    case 'GET_GAMES_START':
      return {
        games: [],
        isFetching: true,
        error: false
      };
    case 'GET_GAMES_SUCCESS':
      return {
        games: action.payload,
        isFetching: false,
        error: false
      }
    case 'GET_GAMES_ERROR':
      return {
        games: [],
        isFetching: false,
        error: true
      }
    case 'GET_SEARCH_RESULTS_START':
      return {
        games: [],
        isFetching: true,
        error: false
      };
    case 'GET_SEARCH_RESULTS_SUCCESS':
      return {
        games: action.payload,
        isFetching: false,
        error: false
      }
    case 'GET_SEARCH_RESULTS_ERROR':
      return {
        games: [],
        isFetching: false,
        error: true
      }
    default:
      return { ...state }
  }
}

export default GameReducer;