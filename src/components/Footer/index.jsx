import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AntFooter className="footer">
      <div className="social-icons">
        <a href="https://github.com/huntrreed"><GithubOutlined /></a>
        <a href="https://www.linkedin.com/in/hunter-reed-8282b7127/"><LinkedinOutlined /></a>
        <a href="https://twitter.com"><TwitterOutlined /></a>
      </div>
    </AntFooter>
  );
};

export default Footer;