import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="hero-container">
        <h1 className="resume-header">Resume</h1>
      </div>
      <motion.div
        className="resume-content"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="resume-iframe-container">
          <iframe
            className="resume-iframe"
            src="/pdf/HunterReedResume.pdf"
            title="Hunter Reed Resume"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
