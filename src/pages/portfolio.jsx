import React from 'react';
import { Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import HappyGardenerImage from '../assets/cardimages/HappyGardener.jpg';
import FureverFriendsImage from '../assets/cardimages/FureverFriends.jpg';
import WeatherDashboardImage from '../assets/cardimages/weatherdash.jpg';
import WorkdaySchedulerImage from '../assets/cardimages/WorkDayScheduler.jpg';
import PasswordGeneratorImage from '../assets/cardimages/PasswordGenerator.jpg';
import TaskMasterImage from '../assets/cardimages/TaskMasterImage.jpg';
import BookSearchEngineImage from '../assets/cardimages/BookSearchEngineImage.jpg';
import CodeQuizImage from '../assets/cardimages/CodeQuiz.jpg';
import NoteTakerImage from '../assets/cardimages/NoteTaker.jpg';



const projects = [
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
  // Note to me - can add more projects here
];

const PortfolioPage = () => {
    return (
      <div className="portfolio-page">
        {projects.map((project, index) => (
          <Card
            key={index}
            hoverable
            className="project-card"
            cover={
              <div className="image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image"/>
                <div className="overlay">
                  <a href={project.projectLink} className="project-title">{project.title}</a>
                  <a href={project.githubLink}><GithubOutlined className="github-icon"/></a>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>
              </div>
            }
          >
          </Card>
        ))}
      </div>
    );
  };
  
  export default PortfolioPage;