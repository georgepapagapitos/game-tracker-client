import { useEffect, useState } from "react";
import axios from 'axios';
import './Games.scss';

import Game from "../Game/Game";

export default function Games() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=385309105bb24ed0bce2c88b2cff8e99&page_size=40`);
        setGames(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGames();
  }, []);

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