import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Frontend Developer', 'Backend Developer', 'React Expert', 'UI Enthusiast', 'Problem Solver'];
  
  useEffect(() => {
    const currentRole = roles[index % roles.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profileImg} alt={personalInfo.name} className="profile-image" />
          </div>
          
          <h1>Hi, I'm <span>{personalInfo.name}</span></h1>
          <h2 className="typing-text">I'm a <span className="typed-text">{text}</span><span className="cursor">|</span></h2>
          <p>Building exceptional digital experiences that make a difference</p>
          
          <div className="button-group">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="#projects" className="btn-secondary">View Work</a>
            <a href="/resume.pdf" download className="btn-secondary">
              <FaDownload /> Resume
            </a>
          </div>
          
          <div className="social-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;