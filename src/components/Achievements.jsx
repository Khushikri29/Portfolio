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
    <section id="achievements" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title serif reveal-hidden">Achievements & Recognition</h2>
        <div className="ach-grid">
          {achievements.map((ach, idx) => (
            ach.type === 'stat' ? (
              <div key={idx} className="stat-card reveal-hidden" style={{ transitionDelay: `${idx * 150}ms` }}>
                <span className="serif" style={{ fontSize: '2.5rem', fontWeight: 800, display: 'block' }}>{ach.val}</span>
                <p style={{ fontWeight: 600 }}>{ach.label}</p>
                <a href={ach.link} target="_blank" rel="noopener noreferrer" className="stat-btn">View Profile</a>
              </div>
            ) : (
              <div key={idx} className="ach-card reveal-hidden" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="ach-header">
                  <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{ach.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{ach.desc}</p>
                {ach.extra && <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{ach.extra}</span>}
              </div>
            )
          ))}
        </div>
      </div>
      <style>{`
        .ach-grid {
          display: grid;
          grid-template_columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .ach-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 20px var(--shadow);
          border-left: 4px solid var(--accent);
          transition: var(--transition);
        }
        .ach-header {
           margin-bottom: 0.8rem;
        }
        .stat-card {
          background: var(--accent-light);
          color: var(--text-primary);
          padding: 2.5rem;
          border-radius: 12px;
          border: 1.5px solid var(--accent);
          text-align: center;
          box-shadow: 0 10px 30px var(--shadow);
        }
        .stat-btn {
          margin-top: 1.2rem;
          display: inline-block;
          padding: 0.6rem 1.2rem;
          background: var(--text-primary);
          color: white;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          transition: all 0.4s ease;
        }
        .stat-btn:hover { background: var(--accent); }
      `}</style>
    </section>
  );
};

export default Achievements;
