import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const allTechs = ['all', ...new Set(personalInfo.projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? personalInfo.projects 
    : personalInfo.projects.filter(project => 
        project.technologies.includes(filter)
      );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          {allTechs.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;