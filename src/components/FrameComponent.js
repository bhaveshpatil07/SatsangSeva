import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../Csss/FrameComponent.css';
import ProfileIcon from '@mui/icons-material/AccountCircleTwoTone';
import axios from 'axios';

const FrameComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [name, setName] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    if (userId) {
      verifyUser(userId);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userId]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const verifyUser = async (userId) => {
    try {
      const resp = await axios.get(`${url}/user/${userId}`);
      const userName = resp.data.user.name;
      if (userName) {
        setName(trimFirstName(userName));
      }
    } catch (e) {
      setUserId(null);
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      console.log(e);
    }
  };

  function trimFirstName(fullName) {
    let names = fullName.split(' ');
    let firstName = names[0];
    return firstName.length > 7 ? firstName.substring(0, 7) + '...' : firstName;
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLoginRedirect = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className={`nav-main ${scrolled ? 'scrolled' : ''}`}>
      <Link className='left-nav no-underline' to="/">
        <img src="/group1.svg" alt="SatsangSeva" />
        <h1 className='font-semibold font-sacramento'>Satsang Seva</h1>
      </Link>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`right-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li className='io' onClick={toggleMenu}><Link to="/">Home</Link></li>
          <li className='io' onClick={toggleMenu}><Link to="/#upcomingEvents">Upcoming Events</Link></li>
          <li className='io' onClick={toggleMenu}><Link to="/#listEvent">List Your Events</Link></li>
          <li className='io' onClick={toggleMenu}><Link to="/categories-page#main">Categories</Link></li>
          {!userId ? (
            <li className='log py-1 px-4 text-xl' onClick={toggleMenu}><Link to="/login">Login</Link></li>
          ) : (
            <li className='log py-1' onClick={toggleMenu}>
              <Link to='/profile-page'>
                <div className="info flex items-center justify-center">
                  <span className='user-name pr-2'>{name}</span>
                  <span className="profile-icon small">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>

              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent;
