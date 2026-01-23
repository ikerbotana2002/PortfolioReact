import React from 'react';
import './Skills.css';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Lenguajes de Programación',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Angular', level: 70 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
      ]
    },
    {
      category: 'Bases de datos',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      category: 'Herramientas',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'Linux', level: 75 },
        { name: 'AWS', level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Habilidades
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in-up">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-box-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-box">
                    <span className="skill-box-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



