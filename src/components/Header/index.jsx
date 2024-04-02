import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <Link to="/">Hunter Reed</Link>
      </div>
      <Menu mode="horizontal" theme="dark" className="menu">
        <Menu.Item key="about">
          <Link to="/about">About Me</Link>
        </Menu.Item>
        <Menu.Item key="work">
          <Link to="/work">Work</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact Me</Link>
        </Menu.Item>
        <Menu.Item key="resume">
          <Link to="/resume">Resume</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;

