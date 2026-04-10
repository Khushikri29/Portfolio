import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '5rem 0', textAlign: 'center', background: '#1c2b3a', color: '#cbd5e0' }}>
      <div className="container">
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.5rem' }}>👩‍💻</span>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <a href="https://github.com/Khushikri29" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/khushi-kumari-56ab83271/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/khushikumari29105/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="mailto:khushikumari201280@gmail.com" className="footer-icon">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
        <div style={{ width: '50px', height: '1px', background: 'var(--accent)', margin: '0 auto 2rem', opacity: 0.3 }}></div>
        <p className="serif" style={{ color: '#a0aec0', fontSize: '1rem' }}>Crafted with care by Khushi Kumari &copy; 2026</p>
      </div>
      <style>{`
        .footer-icon {
          font-size: 1.6rem;
          color: #cbd5e0;
          transition: all 0.4s ease;
        }
        .footer-icon:hover {
          transform: translateY(-5px);
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
