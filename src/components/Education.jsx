import React from 'react';

const Education = () => {
  return (
    <section id="education" className="container">
      <div className="edu-card reveal-hidden">
        <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎓 B.Tech. Computer Science & Engineering</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Government Engineering College, West Champaran · Bettiah, Bihar</p>
        <p style={{ color: 'var(--text-muted)' }}>Nov 2022 – May 2026 · <strong>CGPA: 8.96 / 10.0</strong></p>
      </div>
      <style>{`
        .edu-card {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          box-shadow: var(--card-shadow);
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Education;
