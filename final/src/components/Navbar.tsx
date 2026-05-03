import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
