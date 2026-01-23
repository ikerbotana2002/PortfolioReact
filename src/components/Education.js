import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Máster en Ingeniería Informática',
      institution: 'Universidad de Salamanca',
      period: 'Sep 2025 - Actualidad',
      description: 'Formación avanzada en ingeniería del software, arquitecturas modernas y soluciones de IA aplicada.',
      status: 'En curso'
    },
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad de Salamanca',
      period: 'Sep 2021 - Jul 2025',
      description: 'Especialización en desarrollo de software, tecnologías web y automatización.',
      status: 'Completado'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <FaGraduationCap className="section-icon" />
          Educación
        </h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item fade-in-up">
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className={`education-status ${edu.status === 'Completado' ? 'completed' : 'in-progress'}`}>
                    {edu.status}
                  </span>
                </div>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;



