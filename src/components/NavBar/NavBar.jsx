import avatar from '../../avatar.png';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='left'>
          <span>Homepage</span>
          <span>My Games</span>
        </div>
        <div className="right">
          <img src={avatar} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
}