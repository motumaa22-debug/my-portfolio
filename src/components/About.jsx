import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">{personalInfo.about}</p>
          <p className="about-text">
             I'm constantly learning new technologies and best practices to stay at the forefront of web development. Currently exploring microservices architecture, cloud computing, and AI integration. My goal is to create meaningful applications that solve real problems and provide excellent user experiences from both frontend and backend perspectives.
          </p>
          <p className="about-text">
            When I'm not coding, I enjoy contributing to open-source projects, 
            writing technical blogs, and mentoring aspiring developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;