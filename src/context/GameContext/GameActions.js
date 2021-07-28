export const getGamesStart = () => ({
  type: 'GET_GAMES_START'
});

export const getGamesSuccess = (games) => ({
  type: 'GET_GAMES_SUCCESS',
  payload: games
});

export const getGamesError = () => ({
  type: 'GET_GAMES_ERROR'
});

export const getMyGamesStart = () => ({
  type: 'GET_MY_GAMES_START'
});

export const getMyGamesSuccess = (games) => ({
  type: 'GET_MY_GAMES_SUCCESS',
  payload: games
});

export const getMyGamesError = () => ({
  type: 'GET_MY_GAMES_ERROR'
});

export const getSearchResultsStart = () => ({
  type: 'GET_SEARCH_RESULTS_START'
});

export const getSearchResultsSuccess = (searchResults) => ({
  type: 'GET_SEARCH_RESULTS_SUCCESS',
  payload: searchResults
});

export const getSearchResultsError = () => ({
  type: 'GET_SEARCH_RESULTS_ERROR'
});