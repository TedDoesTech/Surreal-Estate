import React from 'react';
import '../styles/navbar.css';
import logo from '../Images/logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="navbar-links">
      <ul>
        <li className="navbar-links-item" />
        <a href="View Property">View Property</a>
        <li className="navbar-links-item" />
        <a href="Add New Property">Add New Property</a>
      </ul>
    </div>
  </div>
);

export default Navbar;
