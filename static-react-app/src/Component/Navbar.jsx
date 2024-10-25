// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Innomatics Labs</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active-link" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active-link" className="nav-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
