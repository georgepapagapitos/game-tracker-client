import { getGamesStart, getGamesSuccess, getGamesError, getSearchResultsStart, getSearchResultsSuccess, getSearchResultsError } from "./GameActions";
import axios from 'axios';

export const getGames = async (dispatch) => {
  dispatch(getGamesStart());
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=40`);
    dispatch(getGamesSuccess(response.data.results));
  } catch (err) {
    dispatch(getGamesError());
  }
}

export const getSearchResults = async (dispatch, search) => {
  dispatch(getSearchResultsStart());
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${search}&page_size=40`);
    dispatch(getSearchResultsSuccess(response.data.results));
  } catch (err) {
    dispatch(getSearchResultsError());
  }
}