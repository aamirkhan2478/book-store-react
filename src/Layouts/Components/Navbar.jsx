import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Style/navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1>Book Store CMS</h1>
      <ul className="nav">
        <li className="nav-link">
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
