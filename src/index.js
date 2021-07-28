import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GameContextProvider } from './context/GameContext/GameContext';

ReactDOM.render(
  <GameContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GameContextProvider>,
  document.getElementById('root')
);
