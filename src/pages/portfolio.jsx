// src/pages/Portfolio.js
import React from 'react';
import { Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import '../assets/css/Portfolio.css';

// Import images
import MansavageImage from '../assets/cardimages/Mansavage.png';
import HappyGardenerImage from '../assets/cardimages/Watering.jpg';
import FureverFriendsImage from '../assets/cardimages/Paws.jpg';
import WeatherDashboardImage from '../assets/cardimages/Sunny.jpg';
import WorkdaySchedulerImage from '../assets/cardimages/WorkDayScheduler.jpg';
import PasswordGeneratorImage from '../assets/cardimages/Passwords.jpg';
import TaskMasterImage from '../assets/cardimages/Tasklist.jpg';
import BookSearchEngineImage from '../assets/cardimages/Books.jpg';
import CodeQuizImage from '../assets/cardimages/CodeQuiz.jpg';
import NoteTakerImage from '../assets/cardimages/Write.jpg';

// Project data
const projects = [
  {
    title: 'Mansavage Media',
    subtitle: 'Photography Portfolio',
    imageUrl: MansavageImage,
    projectLink: 'https://www.mansavage.media/',
    githubLink: 'https://github.com/huntrreed/Mansavage',
  },
  {
    title: 'The Happy Gardener',
    subtitle: 'Interactive Front-End Application',
    imageUrl: HappyGardenerImage,
    projectLink: 'https://nowakedj.github.io/happy-gardener/',
    githubLink: 'https://github.com/NowakEdJ/happy-gardener',
  },
  {
    title: 'Furever Friends',
    subtitle: 'Interactive Full-Stack Application',
    imageUrl: FureverFriendsImage,
    projectLink: 'https://furever-4736d67c9f37.herokuapp.com/',
    githubLink: 'https://github.com/davisjeff500/FurEver-Friends',
  },
  {
    title: 'TaskMaster',
    subtitle: 'MERN application',
    imageUrl: TaskMasterImage,
    projectLink: 'https://task-master-ahzg.onrender.com',
    githubLink: 'https://github.com/33649EK/Task-Master',
  },
  {
    title: 'Weather Dashboard',
    subtitle: 'Server-Side APIs',
    imageUrl: WeatherDashboardImage,
    projectLink: 'https://huntrreed.github.io/Weather-Dashboard/',
    githubLink: 'https://github.com/huntrreed/Weather-Dashboard',
  },
  {
    title: 'Book Search Engine',
    subtitle: 'GraphQL/MERN Application',
    imageUrl: BookSearchEngineImage,
    projectLink: 'https://book-search-engine-zoyf.onrender.com/',
    githubLink: 'https://github.com/huntrreed/book-search-engine?tab=readme-ov-file',
  },
  {
    title: 'Workday Scheduler',
    subtitle: 'Third Party APIs',
    imageUrl: WorkdaySchedulerImage,
    projectLink: 'https://huntrreed.github.io/Work-Day-Scheduler/',
    githubLink: 'https://github.com/huntrreed/Work-Day-Scheduler',
  },
  {
    title: 'Note Taker',
    subtitle: 'Express.js',
    imageUrl: NoteTakerImage,
    projectLink: 'https://note-taker-huntrreed-05349f067777.herokuapp.com/',
    githubLink: 'https://github.com/huntrreed/Note-Taker',
  },
  {
    title: 'Password Generator',
    subtitle: 'Javascript',
    imageUrl: PasswordGeneratorImage,
    projectLink: 'https://huntrreed.github.io/Password-Generator/',
    githubLink: 'https://github.com/huntrreed/Password-Generator',
  },
  {
    title: 'Code Quiz',
    subtitle: 'Web APIs',
    imageUrl: CodeQuizImage,
    projectLink: 'https://huntrreed.github.io/Code-Quiz/',
    githubLink: 'https://github.com/huntrreed/Code-Quiz',
  },
  // Add more projects as needed
];

const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.1 }
};

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="hero-container-work">
        <h1 className="portfolio-header">PORTFOLIO</h1>
      </div>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={variants}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hoverable className="project-card">
              <div className="card-header">
                <a href={project.projectLink} className="project-title">
                  {project.title}
                </a>
              </div>
              <div className="image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <motion.div
                  className="github-icon-container"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <a href={project.githubLink}>
                    <GithubOutlined className="github-icon" />
                  </a>
                </motion.div>
                <div className="project-subtitle-container">
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
