import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.init("YOdvloYZiqH3ph6CE");

    emailjs.send("service_b8hqf67", "template_plf0u1r", {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      message: formData.message,
    })
    .then(() => {
      showToast("Thank you! I'll get back to you soon 🌸", 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSending(false);
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      showToast("Oops, something went wrong. Please try again.", 'error');
      setSending(false);
    });
  };

  const showToast = (msg, type) => {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-family: 'DM Sans', sans-serif;
      font-size: .95rem;
      z-index: 9999;
      color: white;
      box-shadow: 0 4px 20px rgba(0,0,0,.15);
      background: ${type === 'success' ? '#6b8f71' : '#c0392b'};
      transition: opacity 0.5s ease;
    `;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 500);
    }, 4000);
  };

  return (
    <section id="contact" className="container">
      <div className="contact-container">
        <div className="contact-info reveal-hidden">
          <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Let's work together</h2>
          <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>I'd love to hear about your project, idea, or opportunity. Drop me a message!</p>
          <div className="contact-links">
            <a href="mailto:khushikumari201280@gmail.com" className="contact-link">
              <i className="fa-regular fa-envelope"></i> Email Me
            </a>
            <a href="https://github.com/Khushikri29" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/khushi-kumari-56ab83271/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form reveal-hidden" onSubmit={handleSubmit} style={{ transitionDelay: '200ms' }}>
          <div className="form-row">
            <input 
              type="text" 
              placeholder="Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            required 
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          />
          <textarea 
            rows="5" 
            placeholder="Message" 
            required 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          <button type="submit" className="submit-btn serif" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template_columns: 1fr 1.5fr;
          gap: 4rem;
        }
        .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link { 
          display: flex; 
          align-items: center; 
          gap: 1rem; 
          font-size: 1.1rem; 
          padding: 0.8rem 1.2rem;
          border: 1px solid var(--text-muted);
          border-radius: 8px;
          width: fit-content;
          color: var(--text-main);
          transition: all 0.4s ease;
        }
        .contact-link:hover { border-color: var(--accent-color); color: var(--accent-color); }
        .contact-link i { font-size: 1.3rem; color: var(--accent-color); }

        .contact-form { display: grid; gap: 1.5rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        input, textarea {
          width: 100%;
          padding: 1rem;
          background: var(--card-bg);
          color: var(--text-main);
          border: 1px solid var(--text-muted);
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: all 0.4s ease;
        }
        input:focus, textarea:focus { border-color: var(--accent-color); }
        .submit-btn {
          background: var(--btn-bg);
          color: var(--btn-text);
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .submit-btn:hover { background-color: var(--btn-hover); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (max-width: 850px) {
          .contact-container { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
