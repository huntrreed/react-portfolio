// src/pages/Home.js
import React from 'react';
import '../assets/css/Home.css';
import ProfileImage from '../assets/me.jpg'; 

const Home = () => {
  return (
    <div className="home">
      <div className="header-content">
        <div className="text-content">
          <h1>I'm Hunter.</h1>
          <p>I am a full stack web developer with a background in marketing. Everything from social media marketing and SEO to content creation and campaign management.</p>
          
          <p>Currently I'm focusing on freelance web development projects, so if you have a project in mind - shoot me a message and let's talk!</p>
          
        </div>
        <div className="image-content">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;