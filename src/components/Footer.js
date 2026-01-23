import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://www.linkedin.com/in/ikerbotana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/ikerbotana2002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <p className="footer-text">
          Desarrollado en React por Iker Botana Vázquez
        </p>
        <p className="footer-copyright">
          © {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;



