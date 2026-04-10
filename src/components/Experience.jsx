import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "IT Analyst Intern",
      company: "North Bihar Power Distribution Company Ltd. · Patna, India",
      date: "Dec 2025 – Jan 2026",
      points: [
        "Optimized 500K+ SQL records, reducing query latency by 30% through indexing and schema refinement.",
        "Developed LSTM-based load forecasting model to predict electricity demand and support operational planning.",
        "Built backend data pipelines integrating ML outputs into real-time dashboards across 38 districts."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DevStreak · Remote, India",
      date: "May 2025 – Jul 2025",
      points: [
        "Architected scalable React.js frontend supporting 2,000+ concurrent users.",
        "Designed and integrated secure RESTful APIs enabling seamless frontend-backend-ML communication.",
        "Boosted performance by 65% via lazy loading, optimized state management, and async handling."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title serif reveal-hidden">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item slide-left-hidden" style={{ transitionDelay: `${idx * 200}ms` }}>
            <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{exp.company}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{exp.date}</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem' }}>
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} style={{ marginBottom: '0.8rem' }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background-color: var(--accent-color);
          opacity: 0.2;
        }
        .exp-item {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 4rem;
        }
        .exp-item::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 0.5rem;
          width: 10px;
          height: 10px;
          background-color: var(--accent-color);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Experience;
