import './Game.scss';

export default function Game({ game }) {
  return (
    <div className='game'>
      <img src={game.background_image} alt='' />
      <span className='game-title'>{game.name}</span>
    </div>
  );
}