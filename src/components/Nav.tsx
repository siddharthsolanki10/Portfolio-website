import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'home', path: '/' },
    { name: 'work', path: '/work' },
    { name: 'about', path: '/about' },
    { name: 'blog', path: '/blog' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="nav" id="nav" role="navigation" aria-label="Main navigation">
        <BrandLogo size="nav" variant="primary" asLink={true} to="/" />

        {/* Desktop Links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'close' : 'menu'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};
