// src/pages/Home.js
import React from 'react';
import '../assets/css/Home.css';
import ProfileImage from '../assets/me.jpg'; 

const Home = () => {
  return (
    <div className="home">
      <div className="header-content">
        <div className="text-content">
          <h1>I'm Hunter Reed.</h1>
          <p>I am a new full stack web developer.</p>
          <p>I recently finished the University of Denver's coding bootcamp and am excited to start working in the web development world.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/hunter-reed-8282b7127/"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/huntrreed"><i className="fa fa-github"></i></a>
          </div>
        </div>
        <div className="image-content">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;