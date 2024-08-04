import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
import '../../assets/css/Header.css';

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav id="nav-wrap">
        <div className="site-name">
          Hunter Reed
        </div>
        <div className="hamburger" onClick={toggleModal}>
          <FaBars />
        </div>
        <ul id="nav" className="nav">
          <li className={location.pathname === '/' ? 'current' : ''}>
            <Link className="smoothscroll" to="/">
              Home
            </Link>
          </li>
          <li className={location.pathname === '/resume' ? 'current' : ''}>
            <Link className="smoothscroll" to="/resume">
              Resume
            </Link>
          </li>
          <li className={location.pathname === '/portfolio' ? 'current' : ''}>
            <Link className="smoothscroll" to="/portfolio">
              Work
            </Link>
          </li>
          <li className={location.pathname === '/contact' ? 'current' : ''}>
            <Link className="smoothscroll" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </nav>
      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Link className="smoothscroll" to="/" onClick={toggleModal}>
              Home
            </Link>
            <Link className="smoothscroll" to="/resume" onClick={toggleModal}>
              Resume
            </Link>
            <Link className="smoothscroll" to="/portfolio" onClick={toggleModal}>
              Work
            </Link>
            <Link className="smoothscroll" to="/contact" onClick={toggleModal}>
              Contact
            </Link>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
