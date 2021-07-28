import { createContext, useReducer } from "react";
import GameReducer from './GameReducer';

const initialState = {
  games: [],
  isFetching: false,
  error: false
};

export const GameContext = createContext(initialState);

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </GameContext.Provider>
  );
}