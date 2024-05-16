import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';

const Header = () => {
  return (
    <nav id="nav-wrap">
      <ul id="nav" className="nav">
        <li className="current">
          <Link className="smoothscroll" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="smoothscroll" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="smoothscroll" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="smoothscroll" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="smoothscroll" to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="smoothscroll" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;