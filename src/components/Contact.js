import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Faltan variables de entorno de EmailJS');
      setStatus('missing-config');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        {
          publicKey
        }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (error) {
      console.error('Error enviando el correo:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <FaEnvelope className="section-icon" />
          Contacto
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">¡Hablemos!</h3>
            <p className="contact-description">
              Estoy abierto a oportunidades de colaboración, proyectos interesantes, etc.
              No dudes en contactarme.
            </p>
            <div className="contact-details">
              <a href="mailto:ikerbotana@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>ikerbotana@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ikerbotana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ikerbotana2002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {status === 'success' && (
              <p className="form-status success">¡Mensaje enviado con éxito!</p>
            )}
            {status === 'error' && (
              <p className="form-status error">
                Ocurrió un error al enviar. Inténtalo de nuevo en unos segundos.
              </p>
            )}
            {status === 'missing-config' && (
              <p className="form-status error">
                Falta configurar EmailJS. Revisa las variables de entorno.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



