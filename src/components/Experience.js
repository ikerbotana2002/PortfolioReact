import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      title: 'Beca Programa Clave',
      company: 'Mobente Gea Innovation SL',
      period: 'Sep 2025 - Actualidad',
      description: 'Desarrollo web, diseño y entrenamiento de IA, administración de sistemas.',
      technologies: ['React', 'Next.js', 'Node.js', 'IA', 'DevOps']
    },
    {
      title: 'Prácticas Curriculares',
      company: 'Viewnext',
      period: 'Feb 2025 - May 2025',
      description: 'Ciberseguridad, administración de redes y administración de bases de datos.',
      technologies: ['Ciberseguridad', 'Redes', 'SQL', 'Linux']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" />
          Experiencia
        </h2>
        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card fade-in-up">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



