import React from 'react';
import './About.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jfif';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              Hola, soy <span className="highlight">Iker Botana Vázquez</span>
            </h1>
            <h2 className="about-subtitle">Ingeniero Informático</h2>
            <p className="about-description">
              Titulado en Ingeniería Informática, actualmente estudiando el Máster en Ingeniería Informática.
            </p>
            <p className="about-description">
              Apasionado por la tecnología y el desarrollo de software. Me encanta crear soluciones innovadoras y aprender nuevas tecnologías. Actualmente enfocado en el desarrollo web y el entrenamiento de IA para la automatización de tareas.
            </p>
            <div className="about-social">
              <a 
                href="https://www.linkedin.com/in/ikerbotana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/ikerbotana2002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="social-link"
                aria-label="Ir a contacto"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="about-buttons">
              <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img
                  src={profilePhoto}
                  alt="Iker Botana Vázquez"
                  className="profile-photo"
                />
              </div>
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



