import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "🏆 Best Presentation Award",
      desc: "National Conference on Emerging Technologies (NCETST), 2025",
      extra: 'For published research: "Edge Computing Framework for Smart Classroom IoT"'
    },
    {
      title: "📄 Research Publication",
      desc: 'Published paper: "Edge Computing Framework for Smart Classroom IoT", 2025',
      extra: ''
    },
    {
      title: "🚀 Smart India Hackathon",
      desc: "SIH 2024 & 2025",
      extra: "Developed scalable web-based and technical solutions under time constraints at national level."
    },
    {
      type: 'stat',
      val: "150+",
      label: "LeetCode Problems Solved",
      link: "https://leetcode.com/u/khushikumari29105/"
    },
    {
      title: "🎓 Academic Excellence",
      desc: "CGPA 8.96/10.0",
      extra: "Government Engineering College, West Champaran"
    }
  ];

  return (
    <section id="achievements" className="container">
      <h2 className="section-title serif reveal-hidden">Achievements & Recognition</h2>
      <div className="ach-grid">
        {achievements.map((ach, idx) => (
          ach.type === 'stat' ? (
            <div key={idx} className="stat-card reveal-hidden" style={{ transitionDelay: `${idx * 150}ms` }}>
              <span className="serif" style={{ fontSize: '2.5rem', fontWeight: 800, display: 'block' }}>{ach.val}</span>
              <p>{ach.label}</p>
              <a href={ach.link} target="_blank" rel="noopener noreferrer" className="stat-btn">View Profile</a>
            </div>
          ) : (
            <div key={idx} className="ach-card reveal-hidden" style={{ transitionDelay: `${idx * 150}ms` }}>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{ach.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{ach.desc}</p>
              {ach.extra && <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{ach.extra}</span>}
            </div>
          )
        ))}
      </div>
      <style>{`
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .ach-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          box-shadow: var(--card-shadow);
          border-left: 5px solid var(--accent-color);
        }
        .stat-card {
          background: var(--btn-bg);
          color: var(--btn-text);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }
        .stat-btn {
          margin-top: 1rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--bg-color);
          color: var(--accent-color);
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          transition: all 0.4s ease;
        }
        .stat-btn:hover { opacity: 0.9; }
      `}</style>
    </section>
  );
};

export default Achievements;
