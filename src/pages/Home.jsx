import React from 'react';
import '../assets/css/Home.css';
import SiderImage from '../assets/me.jpg';

import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="header-content">
        <h1>I'm Hunter Reed.</h1>
        <p>I am a new full stack web developer.</p>
        <p>I recently finished the University of Denver's coding bootcamp and am excited to start working in the web development world.</p>
        <div className="social-links">
          <a href="#facebook"><i className="fa fa-facebook"></i></a>
          <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="#instagram"><i className="fa fa-instagram"></i></a>
          <a href="#github"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Home;