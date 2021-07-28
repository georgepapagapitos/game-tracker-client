import { useContext, useEffect } from "react";
import './Games.scss';
import Game from "../Game/Game";
import { getGames } from "../../context/GameContext/apiCalls";
import { GameContext } from "../../context/GameContext/GameContext";

export default function Games() {

  const { games, dispatch } = useContext(GameContext);

  useEffect(() => {
    getGames(dispatch);
  }, [dispatch]);

  return (
    <div className='games'>
      <div className='container'>
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}