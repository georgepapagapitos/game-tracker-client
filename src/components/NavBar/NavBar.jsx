import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../avatar.png';
import './NavBar.scss';

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <Link to='/' className='link'>
            <span>Homepage</span>
          </Link>
          <Link to='/games' className='link'>
            <span>My Games</span>
          </Link>
        </div>
        <div className="right">
          <img src={avatar} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
}