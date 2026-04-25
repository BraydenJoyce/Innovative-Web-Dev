import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">The Telephone</span>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
          Home
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          History
        </NavLink>
        <NavLink to="/impact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Impact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
