import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../components/logo.png';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // Toggle Links

  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div className='logo'>
          <img src={logo} width='43' height='43' alt='Ty DAngelo' />
        </div>
      </div>

      <div className='rightSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
          <Link to='/' className='navLink'>
            <span>Home</span>
          </Link>
          <Link to='/projects' className='navLink'>
            <span>Projects</span>
          </Link>
          <Link to='/contact' className='navLink'>
            <span>Contact</span>
          </Link>
        </div>
        <FontAwesomeIcon
          className='bars'
          onClick={() => setShowLinks(!showLinks)}
          icon={faBars}
          size='2x'
        />
      </div>
    </div>
  );
};

export default Navbar;
