import React from 'react';

const Education = () => {
  return (
    <section id="education" className="container">
      <div className="edu-card animate-up">
        <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎓 B.Tech. Computer Science & Engineering</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Government Engineering College, West Champaran · Bettiah, Bihar</p>
        <p style={{ color: '#9a8e88' }}>Nov 2022 – May 2026 · <strong>CGPA: 8.96 / 10.0</strong></p>
      </div>
      <style>{`
        .edu-card {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Education;
