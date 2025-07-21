import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../assets/logo.png';
import cubeImg from '../assets/rubiks-cube.png';

interface NavbarProps {
  onCubeClick: () => void;
}

const navLinks = [
  { to: '/', label: 'Projects' },
  { to: '/about', label: 'About' },
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
  const location = useLocation();

  return (
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
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 