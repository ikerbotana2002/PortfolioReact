import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { social } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const update = ({ target }) => setForm(current => ({ ...current, [target.name]: target.value }));
  const submit = async (event) => {
    event.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) { setStatus('config'); return; }
    setSending(true); setStatus('');
    try {
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        reply_to: form.email,
        from_name: form.name,
        from_email: form.email,
        message: form.message
      }, { publicKey });
      setForm({ name: '', email: '', message: '' }); setStatus('success');
    } catch { setStatus('error'); } finally { setSending(false); }
  };
  return <section id="contact" className="section contact-section">
    <div className="contact-pitch" data-reveal><span>07 / Contacto</span><h2>Contacto</h2><p>Puedes escribirme para hablar sobre oportunidades profesionales, colaboraciones o proyectos.</p><a href={`mailto:${social.email}`}><FiMail /> {social.email} <FiArrowUpRight /></a><div><a href={social.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href={social.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a></div></div>
    <form onSubmit={submit} data-reveal><div className="field"><label htmlFor="name">Tu nombre</label><input id="name" name="name" value={form.name} onChange={update} placeholder="Nombre" required /></div><div className="field"><label htmlFor="email">Tu email</label><input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="nombre@empresa.com" required /></div><div className="field"><label htmlFor="message">¿En qué estás pensando?</label><textarea id="message" name="message" value={form.message} onChange={update} placeholder="Cuéntame sobre el proyecto o la oportunidad…" rows="5" required /></div><button className="button primary" disabled={sending}>{sending ? 'Enviando…' : <>Enviar mensaje <FiSend /></>}</button><div className="form-status" role="status" aria-live="polite">{status === 'success' && 'Mensaje enviado. Te responderé pronto.'}{status === 'error' && 'No se pudo enviar. Puedes escribirme directamente por email.'}{status === 'config' && 'El formulario no está configurado en este entorno. Escríbeme por email.'}</div></form>
  </section>;
}
