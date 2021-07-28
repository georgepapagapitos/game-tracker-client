import { useContext, useState } from 'react';
import { getSearchResults } from '../../context/GameContext/apiCalls';
import { GameContext } from '../../context/GameContext/GameContext';
import './Search.scss';

export default function Search() {

  const [search, setSearch] = useState('');

  const { dispatch } = useContext(GameContext);

  const handleClick = (e) => {
    e.preventDefault();
    getSearchResults(dispatch, search);
    setSearch('');
  }

  return (
    <div className='search'>
      <div className='container'>
        <form className='input'>
          <input type='text' placeholder='Search for a game...' value={search} onChange={e => setSearch(e.target.value)} />
          <button onClick={handleClick}>Search</button>
        </form>
      </div>
    </div>
  );
}