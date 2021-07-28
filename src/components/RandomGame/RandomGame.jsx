import { useEffect, useState } from 'react';
import axios from 'axios';
import './RandomGame.scss';
import { InfoOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
import Search from '../Search/Search';

export default function RandomGame() {

  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => {
    const fetchRandomGame = async () => {
      const randomId = Math.floor(Math.random() * 500);
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${randomId}?key=${process.env.REACT_APP_RAWG_API_KEY}`);
        setRandomGame(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRandomGame();
  }, []);

  const handleAdd = async (randomGame) => {
    console.log('randomgame', randomGame);
    try {
      const response = await axios.post(`/api/games`, randomGame);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  if (randomGame !== null) {
    return (
      <div className='random'>
        <img src={randomGame.background_image} alt='random-bg' />
        <Search />
        <div className='info'>
          <h1>{randomGame.name}</h1>
          <span className='desc'></span>
          <div className="buttons">
            <button className="add">
              <AddCircleOutlineOutlined />
              <span onClick={() => handleAdd(randomGame)}>Add</span>
            </button>
            <button className="more-info">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return ('Loading...')
  }
}