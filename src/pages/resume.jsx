// src/pages/Resume.js
import React from 'react';
import '../assets/css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-content">
        <h1 className="resume-title">Hunter Reed Resume</h1>
        <div className="resume-iframe">
          <iframe
            src="../public/pdf/HunterReedResume.pdf"
            width="100%"
            height="500px"
            title="Hunter Reed Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
