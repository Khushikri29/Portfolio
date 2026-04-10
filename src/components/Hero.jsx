import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{ paddingTop: '10rem', minHeight: '90vh' }}>
      <div className="badge" style={{ animation: 'fadeInUp 0.8s forwards', animationDelay: '0.2s', opacity: 0 }}>✦ Available for new opportunities</div>
      <h1 className="hero-title" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', animation: 'fadeInUp 0.8s forwards', animationDelay: '0.4s', opacity: 0 }}>
        Hi, I'm <br />
        <span className="serif" style={{ color: '#a0522d' }}>Khushi Kumari</span>
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#9a8e88', marginBottom: '2rem', animation: 'fadeInUp 0.8s forwards', animationDelay: '0.6s', opacity: 0 }}>Full Stack Developer & ML Engineer</p>
      <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '3rem', animation: 'fadeInUp 0.8s forwards', animationDelay: '0.8s', opacity: 0 }}>
        Building scalable systems at the intersection of web and AI. Passionate about crafting elegant solutions to complex problems.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', animation: 'fadeInUp 0.8s forwards', animationDelay: '1s', opacity: 0 }}>
        <a href="#projects" className="btn-v btn-filled">View Projects</a>
        <a href="#contact" className="btn-v btn-outlined">Contact Me</a>
      </div>

      <div className="social-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeInUp 0.8s forwards', animationDelay: '1.2s', opacity: 0 }}>
        <a href="https://github.com/Khushikri29" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/khushi-kumari-56ab83271/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://leetcode.com/u/khushikumari29105/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fa-solid fa-code"></i> LeetCode
        </a>
        <a href="mailto:khushikumari201280@gmail.com" className="social-btn">
          <i className="fa-regular fa-envelope"></i> Email
        </a>
      </div>

      <style>{`
        .badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background-color: rgba(160, 82, 45, 0.08); /* Deeper terracotta tint */
          color: #a0522d;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .btn-v {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: 1.5px solid #a0522d;
          transition: all 0.4s ease;
        }
        .btn-filled { background-color: #a0522d; color: white; }
        .btn-outlined { color: #a0522d; }
        .btn-filled:hover { background-color: #8b4513; border-color: #8b4513; }
        .btn-outlined:hover { background-color: #a0522d; color: white; }
        
        .social-btn {
          padding: 0.6rem 1.2rem;
          border: 1px solid #9a8e88;
          border-radius: 50px;
          font-size: 0.9rem;
          color: #111007;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.4s ease;
        }
        .social-btn:hover { border-color: #a0522d; color: #a0522d; }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
