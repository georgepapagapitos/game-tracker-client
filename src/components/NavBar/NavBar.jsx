import { useState } from "react";
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import './NavBar.scss';
import logo from '../../logo.svg'
import avatar from '../../avatar.png';

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src={logo} alt='logo' />
          <span>Homepage</span>
          <span>Games</span>
          <span>New & Popular</span>
          <span>My Games</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <Notifications className='icon' />
          <img src={avatar} alt='avatar' />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


