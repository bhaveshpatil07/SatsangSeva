import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../Csss/FrameComponent.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const FrameComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(null);
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

  useEffect(() => {
    verifyToken();
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const verifyToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserId(null);
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    } else {
      const exp = jwtDecode(token).exp;
      const currentTime = Math.floor(Date.now() / 1000);
      const isExpired = exp < currentTime;
      if (isExpired) {
        setUserId(null);
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        alert("Session Expired! Login Again.");
        navigate("/login");
      }
    }
  };

  const verifyUser = async (userId) => {
    try {
      const resp = await axios.get(`${url}/user/${userId}`);
      const userName = resp.data.user.name;
      if (userName) {
        setName(trimFirstName(userName));
      }
      if (resp.data.user.profile) {
        setProfile(resp.data.user.profile);
      }
      verifyToken();
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

  const goToTop = ()=>{
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`nav-main ${scrolled ? 'scrolled' : ''}`}>
      <Link className='left-nav no-underline' to="/#home" onClick={goToTop}>
        <img src="/group1.svg" alt="SatsangSeva" />
        <h1 className='font-semibold font-sacramento'>Satsang Seva</h1>
      </Link>
      <div className='hamburger-menu pt-2' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`right-nav ${isMenuOpen ? 'active' : ''} pt-2`}>
        <ul>
          <li className='io' onClick={()=>{toggleMenu(); goToTop();}}><Link to="/#home">Home</Link></li>
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
                  {profile ?
                    <img className='profile-icon small' src={profile} alt="User Profile"/> :
                    <span className="profile-icon small">
                      {name.charAt(0).toUpperCase()}
                    </span>}
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
