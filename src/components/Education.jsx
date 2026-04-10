import React from 'react';

const Education = () => {
  return (
    <section id="education" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="edu-card reveal-hidden">
          <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>🎓 B.Tech. Computer Science & Engineering</h3>
          <p style={{ fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-secondary)' }}>Government Engineering College, West Champaran · Bettiah, Bihar</p>
          <p style={{ color: 'var(--text-muted)' }}>Nov 2022 – May 2026 · <strong style={{ color: 'var(--accent)' }}>CGPA: 8.96 / 10.0</strong></p>
        </div>
      </div>
      <style>{`
        .edu-card {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: 0 10px 40px var(--shadow);
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default Education;
