import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../assets/logo.png';
import cubeImg from '../assets/rubiks-cube.png';

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

const Navbar: React.FC<NavbarProps> = ({ onCubeClick }) => {
  const [hovered, setHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onCubeClick}
            tabIndex={0}
            role="button"
            aria-label="Rubik's Cube Easter Egg"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onCubeClick(); }}
          >
            <img
              src={hovered ? cubeImg : logoImg}
              alt={hovered ? "Rubik's Cube Logo" : "AT Logo"}
              className="logo-img"
            />
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
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
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