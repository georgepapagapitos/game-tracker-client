import { useEffect, useState } from 'react';
import axios from 'axios';
import './RandomGame.scss';
import { InfoOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';

export default function RandomGame() {

  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => {
    const fetchRandomGame = async () => {

      const randomId = Math.floor(Math.random() * 500);

      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${randomId}?key=385309105bb24ed0bce2c88b2cff8e99`);
        console.log(response.data);
        setRandomGame(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRandomGame();
  }, []);

  if (randomGame !== null) {
    return (
      <div className='random'>
        <img src={randomGame.background_image} alt='random-bg' />
        <div className='info'>
          <h1>{randomGame.name}</h1>
          <span className='desc'></span>
          <div className="buttons">
            <button className="add">
              <AddCircleOutlineOutlined />
              <span>Add</span>
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