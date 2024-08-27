import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={require('../assets/ncc_logo.png')} alt="NCC Logo" className="navbar-logo-image" />
      </div>
      <div className="navbar-logo-container">
        <img src={require('../assets/college_logo.png')} alt="College Logo" className="navbar-logo-image" />
      </div>
      <div className="navbar-title">
        National Cadet Corps, VJTI
      </div>
      <div className="navbar-links-container">
        <ul className={isMobileMenuOpen ? 'navbar-links-mobile' : 'navbar-links'}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutncc">About NCC</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#camps">Camps</a>
          </li>
          <li>
            <a href="#enrollment">Enrollment</a>
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




