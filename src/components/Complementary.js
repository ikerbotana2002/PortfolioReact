import React, { useState } from 'react';
import './Complementary.css';
import { FaCertificate, FaTimes } from 'react-icons/fa';

const Complementary = () => {
  const complementaryTraining = [
    {
      title: 'Ganador Hackathon IA Generativa',
      entity: 'Cátedra Viewnext y Universidad de Salamanca',
      period: '2025',
      description: 'Ganador con un proyecto de IA generativa aplicada a la metodología SCRUM.',
      images: [
        {
          src: `${process.env.PUBLIC_URL}/images/hackaton1.png`,
          alt: 'Equipo celebrando el trofeo del hackathon'
        },
        {
          src: `${process.env.PUBLIC_URL}/images/hackaton2.png`,
          alt: 'Equipo posando con el premio del hackathon'
        },
        {
          src: `${process.env.PUBLIC_URL}/images/hackaton3.png`,
          alt: 'Equipo trabajando en laptops durante el hackathon'
        },
        {
          src: `${process.env.PUBLIC_URL}/images/hackaton4.png`,
          alt: 'Vista aérea de los equipos participantes en el hackathon'
        }
      ]
    },
    {
      title: 'Finalista Observatorio Tecnológico',
      entity: 'HP SCDS y Universidad de Salamanca',
      period: '2024 - 2025',
      description: 'Finalista en la categoría de mejores TFGs de Ingeniería Informática.',
      certificate: {
        label: 'Ver certificado',
        href: `${process.env.PUBLIC_URL}/docs/ParticipacionObservatorioHP.pdf`
      },
      image: {
          src: `${process.env.PUBLIC_URL}/images/CertificadoParticipaciónObservatorioHPSCDS.png`,
          alt: 'Certificado de participación en el Observatorio Tecnológico HP SCDS'
      }
    }
  ];

  // Convertimos cada certificación en su propia tarjeta
  const certItems = [
    {
      title: 'Bootcamp Fullstack con React',
      entity: 'Midudev'
    },
    {
      title: 'Artificial Intelligence: Machine Learning and Neural Networks',
      entity: 'USAL (curso de formación específica)',
      certificate: {
        label: 'Ver certificado',
        href: `${process.env.PUBLIC_URL}/docs/diploma_INTELIGENCIA_ARTIFICIAL.pdf`
      }
    },
    {
      title: 'Programación en Python',
      entity: 'USAL (curso de formación específica)',
      certificate: {
        label: 'Ver certificado',
        href: `${process.env.PUBLIC_URL}/docs/diploma_PYTHON.pdf`
      }
    },
    {
      title: 'Ciberinteligencia y Seguridad',
      entity: 'USAL (curso de formación específica)',
      certificate: {
        label: 'Ver certificado',
        href: `${process.env.PUBLIC_URL}/docs/diploma_CIBERINTELIGENCIA.pdf`
      }
    },
    {
      title: 'Google: Inteligencia Artificial y productividad',
      entity: 'Santander Open Academy'
    },
    {
      title: 'Introduction to Cybersecurity',
      entity: 'Cisco Networking Academy'
    }
  ];

  // Añadimos los elementos de certificaciones al array principal
  complementaryTraining.push(...certItems);


  const [activeImage, setActiveImage] = useState(null);

  const closeModal = () => setActiveImage(null);

  return (
    <section id="complementary" className="complementary">
      <div className="container">
        <h2 className="section-title">
          <FaCertificate className="section-icon" />
          Formación Complementaria
        </h2>
        <div className="complementary-grid">
          {complementaryTraining.map((item, index) => (
            <div key={index} className="complementary-card fade-in-up">
              <div className="complementary-header">
                <h3>{item.title}</h3>
                <span className="complementary-period">{item.period}</span>
              </div>
              <p className="complementary-entity">{item.entity}</p>
              {item.description && (
                <p className="complementary-description">{item.description}</p>
              )}

              {item.certifications && (
                <ul className="cert-list">
                  {item.certifications.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
              {item.certificate && (
                <a
                  className="certificate-link"
                  href={item.certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.certificate.label}
                </a>
              )}
              {item.image && (
                <div className="certificate-preview">
                  <button
                    className="certificate-thumb"
                    type="button"
                    onClick={() => setActiveImage(item.image)}
                    style={{ backgroundImage: `url(${encodeURI(item.image.src)})` }}
                    aria-label={item.image.alt}
                  />
                </div>
              )}
              {item.images && (
                <div className="complementary-gallery">
                  <span className="gallery-label">Momentos destacados</span>
                  <div className="gallery-grid">
                    {item.images.map((image) => (
                      <button
                        key={image.alt}
                        className="gallery-thumb"
                        type="button"
                        onClick={() => setActiveImage(image)}
                        style={{ backgroundImage: `url(${image.src})` }}
                        aria-label={image.alt}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {activeImage && (
          <div className="gallery-modal" onClick={closeModal} role="dialog" aria-modal="true">
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-modal-close" onClick={closeModal} aria-label="Cerrar">
                <FaTimes />
              </button>
              <img src={encodeURI(activeImage.src)} alt={activeImage.alt} />
              <p>{activeImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Complementary;

