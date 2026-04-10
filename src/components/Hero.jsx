import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{ paddingTop: '12rem', minHeight: '90vh' }}>
      <div className="badge animate-up" style={{ animationDelay: '0.2s' }}>✦ Available for new opportunities</div>
      <h1 className="hero-title animate-up" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', animationDelay: '0.4s' }}>
        Hi, I'm <br />
        <span className="serif" style={{ color: '#b85c38' }}>Khushi Kumari</span>
      </h1>
      <p className="animate-up" style={{ fontSize: '1.5rem', color: '#9a8e88', marginBottom: '2rem', animationDelay: '0.6s' }}>Full Stack Developer & ML Engineer</p>
      <p className="animate-up" style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '3rem', animationDelay: '0.8s' }}>
        Building scalable systems at the intersection of web and AI. Passionate about crafting elegant solutions to complex problems.
      </p>
      
      <div className="animate-up" style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', animationDelay: '1s' }}>
        <a href="#projects" className="btn-v btn-filled">View Projects</a>
        <a href="#contact" className="btn-v btn-outlined">Contact Me</a>
      </div>

      <div className="social-links animate-up" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animationDelay: '1.2s' }}>
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
          background-color: rgba(184, 92, 56, 0.08);
          color: #b85c38;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .btn-v {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: 1.5px solid #b85c38;
          transition: all 0.4s ease;
        }
        .btn-filled { background-color: #b85c38; color: white; }
        .btn-outlined { color: #b85c38; }
        .btn-filled:hover { background-color: transparent; color: #b85c38; }
        .btn-outlined:hover { background-color: #b85c38; color: white; }
        
        .social-btn {
          padding: 0.6rem 1.2rem;
          border: 1px solid #9a8e88;
          border-radius: 50px;
          font-size: 0.9rem;
          color: #1a1614;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.4s ease;
        }
        .social-btn:hover { border-color: #b85c38; color: #b85c38; }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
