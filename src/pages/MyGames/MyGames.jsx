import { useContext, useEffect } from "react";
import Game from "../../components/Game/Game";
import NavBar from "../../components/NavBar/NavBar";
import { getMyGames } from "../../context/GameContext/apiCalls";
import { GameContext } from "../../context/GameContext/GameContext";
import './MyGames.scss';

export default function MyGames() {

  const { games, dispatch } = useContext(GameContext);

  useEffect(() => {
    getMyGames(dispatch);
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className='my-games'>
        {games.map(game => (
          <Game game={game} key={game._id} />
        ))}
      </div>
    </>
  );
}

