import React from 'react';
import './Projects.css';
import { FaFolder, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'EDUCAQuest',
      description:
        'Juego educativo desarrollado para la Fundación Montemadrid; incluye preguntas, niveles y sistema de gamificación.',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/ikerbotana2002/EDUCAQuest',
      image: `${process.env.PUBLIC_URL}/images/educaquest.png`
    },
    {
      title: 'Wordle',
      description:
        'Implementación del juego Wordle con interfaz y lógica de palabras, desarrollado en Ensamblador.',
      technologies: ['Assembly'],
      github: 'https://github.com/ikerbotana2002/Wordle',
      image: `${process.env.PUBLIC_URL}/images/wordle.png`
    },
    {
      title: '5illo',
      description: 'Script interactivo que simula el juego de cartas tradicional.',
      technologies: ['Bash'],
      github: 'https://github.com/ikerbotana2002/5illo',
      image: `${process.env.PUBLIC_URL}/images/5illo.png`
    },
    {
      title: 'Flappy Bird',
      description:
        'Variación del clásico Flappy Bird implementado en Unity.',
      technologies: ['C#', 'Unity'],
      github: 'https://github.com/ikerbotana2002/Flappy-Bird',
      image: `${process.env.PUBLIC_URL}/images/flappy.png`
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaFolder className="section-icon" />
          Proyectos
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-image">
                <div
                  className="project-placeholder"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {tech}
                    </span>
                  ))}
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



