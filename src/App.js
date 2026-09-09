import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import './App.css';
import Contact from './components/Contact';
import useReveal from './hooks/useReveal';
import { certifications, education, experience, highlights, projects, skillGroups, social } from './data/portfolio';

const nav = [['Inicio', 'home'], ['Sobre mí', 'about'], ['Experiencia', 'experience'], ['Educación', 'education'], ['Stack', 'skills'], ['Proyectos', 'projects'], ['Contacto', 'contact']];

function SectionHeading({ eyebrow, title, copy }) {
  const naturalTitles = {
    'Reconocimientos y aprendizaje continuo.': 'Reconocimientos y certificaciones',
    'Experiencia construyendo en contextos reales.': 'Experiencia profesional',
    'Base académica, evolución constante.': 'Educación'
  };
  const naturalEyebrows = { '06 / Más allá del código': '06 / Formación complementaria' };
  return <header className="section-heading" data-reveal><span>{naturalEyebrows[eyebrow] || eyebrow}</span><h2>{naturalTitles[title] || title}</h2>{copy && <p>{copy}</p>}</header>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-42% 0px -50%' });
    nav.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Ir al inicio"><span>IB</span><em>Full-Stack Developer</em></a>
      <nav className={open ? 'is-open' : ''} aria-label="Navegación principal">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <FiX /> : <FiMenu />}</button>
    </header>
  </>;
}

function Hero() {
  useEffect(() => {
    const move = (event) => document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    const moveY = (event) => document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    window.addEventListener('pointermove', move); window.addEventListener('pointermove', moveY);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointermove', moveY); };
  }, []);
  return <section id="home" className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-copy">
      <p className="kicker">Zamora - Salamanca</p>
      <h1>Iker Botana<br /><strong>Vázquez</strong></h1>
      <p className="hero-intro">Full-Stack Developer / Software Engineer. Desarrollo aplicaciones web y trabajo tanto en frontend como en backend.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explorar proyectos <FiArrowDownRight /></a><a className="button secondary" href="#contact">Hablemos</a></div>
    </div>
    <div className="hero-aside" aria-label="Resumen profesional">
      <div className="code-window"><div className="window-bar"><span /><span /><span /></div><pre><code><b>const</b> developer = {'{'}{`\n  `}name: <i>'Iker'</i>,{`\n  `}focus: [<i>'product'</i>, <i>'quality'</i>],{`\n  `}status: <i>'building'</i>{`\n`}{'}'};</code></pre><div className="terminal-line"><span>~/portfolio</span><b> production-ready_</b></div></div>
      <div className="social-row"><a href={social.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href={social.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div>
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll</span><FiArrowDownRight /></a>
  </section>;
}

function About() { return <section id="about" className="section about-section"><SectionHeading eyebrow="01 / Perfil" title="Sobre mí" /><div className="about-layout"><div className="portrait-wrap" data-reveal><img src={require('./assets/profile.jfif')} alt="Iker Botana Vázquez" width="520" height="520" /><div className="portrait-label"></div></div><div className="about-copy" data-reveal><p className="lead">Soy graduado en Ingeniería Informática y actualmente curso el Máster en Ingeniería Informática.</p><p>Me interesa el desarrollo de software y aprender nuevas tecnologías. Actualmente trabajo en desarrollo web full-stack y también tengo interés en la automatización y la inteligencia artificial aplicada.</p><div className="principles"><div><span>01</span><b>Frontend</b><p>Interfaces web accesibles y adaptables.</p></div><div><span>02</span><b>Backend</b><p>Aplicaciones, servicios y bases de datos.</p></div><div><span>03</span><b>Herramientas</b><p>Control de versiones, sistemas y despliegue.</p></div></div></div></div></section>; }

function Timeline({ id, heading, items, educationMode = false }) { return <section id={id} className="section timeline-section"><SectionHeading eyebrow={educationMode ? '03 / Formación' : '02 / Trayectoria'} title={heading} /><div className="timeline">{items.map((item, index) => <article className="timeline-item" data-reveal key={item.company || item.title}><div className="timeline-index">0{index + 1}</div><div><p className="timeline-period">{item.period}</p><h3>{item.role || item.title}</h3><h4>{item.company || item.institution}</h4><p>{item.description}</p>{item.status && <span className="status">{item.status}</span>}{item.technologies && <div className="tags">{item.technologies.map(t => <span key={t}>{t}</span>)}</div>}</div></article>)}</div></section>; }

function Skills() { return <section id="skills" className="section skills-section"><SectionHeading eyebrow="04 / Tecnologías" title="Habilidades y tecnologías" copy="Tecnologías con las que trabajo, organizadas por área." /><div className="skills-list">{skillGroups.map((group, i) => <article key={group.title} data-reveal><span>0{i + 1}</span><h3>{group.title}</h3><div>{group.skills.map(skill => <b key={skill}>{skill}</b>)}</div></article>)}</div></section>; }

function Projects() { return <section id="projects" className="section projects-section"><SectionHeading eyebrow="05 / Proyectos" title="Proyectos" /><div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.featured ? 'featured' : ''}`} data-reveal key={project.title}><a className="project-media" href={project.github} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} en GitHub`}><img loading={index ? 'lazy' : 'eager'} src={project.image} alt={`Vista previa de ${project.title}`} /><span><FiArrowUpRight /></span></a><div className="project-info"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></div><a href={project.github} target="_blank" rel="noreferrer" aria-label={`Código de ${project.title}`}><FiGithub /></a></div></article>)}</div></section>; }

function Recognition() { return <section id="recognition" className="section recognition-section"><SectionHeading eyebrow="06 / Más allá del código" title="Reconocimientos y aprendizaje continuo." /><div className="highlights">{highlights.map((item, index) => <article key={item.title} data-reveal>{item.images ? <div className="highlight-collage">{item.images.slice(0, 3).map((src, i) => <img loading="lazy" src={src} alt={`Hackathon IA Generativa, momento ${i + 1}`} key={src} />)}</div> : <div className="certificate-art"><span>HP</span><b>Finalista<br />Observatorio<br />Tecnológico</b></div>}<div className="highlight-copy"><span>{item.period}</span><h3>{item.title}</h3><h4>{item.entity}</h4><p>{item.description}</p>{item.certificate && <a href={item.certificate} target="_blank" rel="noreferrer">Ver certificado <FiArrowUpRight /></a>}</div></article>)}</div><div className="cert-list">{certifications.map(cert => <div key={cert.title} data-reveal><span>Certificación</span><h3>{cert.title}</h3><p>{cert.entity}</p>{cert.href && <a href={cert.href} target="_blank" rel="noreferrer" aria-label={`Ver certificado ${cert.title}`}><FiArrowUpRight /></a>}</div>)}</div></section>; }

function Footer() { return <footer><a href="#home" className="footer-brand">IB<span>© {new Date().getFullYear()}</span></a><p>Diseñado y desarrollado por Iker Botana.</p><div><a href={social.github} target="_blank" rel="noreferrer">GitHub</a><a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#home">Volver arriba ↑</a></div></footer>; }

export default function App() {
  useReveal();
  return <><a className="skip-link" href="#main">Saltar al contenido</a><Header /><main id="main"><Hero /><About /><Timeline id="experience" heading="Experiencia construyendo en contextos reales." items={experience} /><Timeline id="education" heading="Base académica, evolución constante." items={education} educationMode /><Skills /><Projects /><Recognition /><Contact /></main><Footer /></>;
}
