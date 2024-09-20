import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/nav.css';

function Navbar() {
  return (
    
    <div className='navbar'>
          <ul className='nav'>
            <Link  className="a" to='/'><li>Home</li></Link>
            <Link   className="a" to='/second'><li>About</li></Link>
            <Link   className="a" to='/third'><li>Contact</li></Link>
            <Link   className="a" to='/fourth'><li>Services</li></Link>
          </ul>
       
      </div>
  );
}

export default Navbar;
