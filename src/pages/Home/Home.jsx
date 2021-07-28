import NavBar from "../../components/NavBar/NavBar";
import RandomGame from "../../components/RandomGame/RandomGame";
import Games from '../../components/Games/Games';

import './Home.scss';

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <RandomGame />
      <Games />
    </div>
  );
}

