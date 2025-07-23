import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../assets/logo.png';
import cubeImg from '../assets/rubiks-cube.png';
import awakeLogo from '../assets/awake_logo.png';
import asleepLogo from '../assets/asleep_logo.png';

interface NavbarProps {
  onCubeClick: () => void;
}

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/awards', label: 'Awards' },
  { to: '/extracurriculars', label: 'Extracurriculars' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' },
];

const getHoustonLogo = () => {
  // Houston is in America/Chicago timezone (CST/CDT)
  const now = new Date();
  // Get current time in Houston (America/Chicago)
  // Use Intl.DateTimeFormat to get hour in 24h format
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'America/Chicago',
  });
  const hour = parseInt(formatter.format(now), 10);
  // Awake: 8 <= hour < 22
  if (hour >= 8 && hour < 22) {
    return awakeLogo;
  } else {
    return asleepLogo;
  }
};

const Navbar: React.FC<NavbarProps> = ({ onCubeClick }) => {
  const [hovered, setHovered] = useState(false); // for Rubik's Cube effect only
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLegendModal, setShowLegendModal] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div
            className="navbar-logo"
            onMouseEnter={() => setShowLegendModal(true)}
            onMouseLeave={() => setShowLegendModal(false)}
            onFocus={() => setShowLegendModal(true)}
            onBlur={() => setShowLegendModal(false)}
            onClick={onCubeClick}
            tabIndex={0}
            role="button"
            aria-label="Rubik's Cube Easter Egg"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onCubeClick(); }}
            style={{ position: 'relative' }}
          >
            <img
              src={hovered ? cubeImg : getHoustonLogo()}
              alt={hovered ? "Rubik's Cube Logo" : "Logo (shows if I'm awake: 8am–10pm, or asleep: 10pm–8am, Houston time)"}
              className="logo-img"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            {showLegendModal && (
              <div className="logo-tooltip-bubble" role="tooltip">
                <div>I'm available from 8am to 10pm Houston time (CST/CDT), but you can also tell from the logo 😉!</div>
              </div>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <ul className="navbar-links desktop-nav">
            {navLinks.map(link => (
              <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
                <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h3>Navigation</h3>
            <button 
              className="close-menu-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* <line x1="6" y1="6" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="6" x2="6" y2="18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/> */}
              </svg>
            </button>
          </div>
          <ul className="mobile-nav-links">
            {navLinks.map(link => (
              <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
                <Link to={link.to} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar; 