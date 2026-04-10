import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '5rem 0', textAlign: 'center', background: '#f0ebe3', borderTop: '1px solid rgba(160, 82, 45, 0.1)' }}>
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
        <div style={{ width: '50px', height: '1.5px', background: '#a0522d', margin: '0 auto 2rem', opacity: 0.2 }}></div>
        <p className="serif" style={{ color: '#111007', fontSize: '1.1rem' }}>Crafted with care by Khushi Kumari &copy; 2026</p>
      </div>
      <style>{`
        .footer-icon {
          font-size: 1.6rem;
          color: #a0522d;
          transition: all 0.4s ease;
        }
        .footer-icon:hover {
          transform: translateY(-5px);
          color: #8b4513;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
