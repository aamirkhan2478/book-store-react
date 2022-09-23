import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Style/navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1>Book Store CMS</h1>
      <div className="nav-space-between">
        <ul className="nav">
          <li className="nav-link">
            <NavLink to="/">Books</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
        <i className="fa fa-user-o" />
      </div>
    </nav>
  </header>
);

export default Navbar;
