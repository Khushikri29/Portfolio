import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid #eee' }}>
      <div className="container">
        <a href="#" className="serif" style={{ fontSize: '2rem', color: '#b85c38', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>KK</a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://github.com/Khushikri29" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" style={{ fontSize: '1.5rem' }}></i></a>
          <a href="https://www.linkedin.com/in/khushi-kumari-56ab83271/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin" style={{ fontSize: '1.5rem' }}></i></a>
          <a href="https://leetcode.com/u/khushikumari29105/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code" style={{ fontSize: '1.5rem' }}></i></a>
          <a href="mailto:khushikumari201280@gmail.com"><i className="fa-regular fa-envelope" style={{ fontSize: '1.5rem' }}></i></a>
        </div>
        <p className="serif">Crafted with care by Khushi Kumari &copy; 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
