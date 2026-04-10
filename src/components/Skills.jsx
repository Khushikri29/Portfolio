import React from 'react';

const Skills = () => {
  const categories = [
    { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "SQL", "C/C++"] },
    { title: "Frontend", skills: ["React.js", "Next.js", "HTML5", "TailwindCSS", "Bootstrap"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Auth"] },
    { title: "ML / AI", skills: ["Supervised Learning", "LSTM", "LLMs", "RAG", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"] },
    { title: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
    { title: "Cloud & Tools", skills: ["Docker", "AWS", "Linux", "Git", "GitHub", "Postman"] },
    { title: "CS Fundamentals", skills: ["DSA", "OS", "DBMS", "Computer Networks", "OOPs"] }
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title serif reveal-hidden">Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-group reveal-hidden" style={{ transitionDelay: `${idx * 100}ms` }}>
              <h3 style={{ fontSize: '0.8rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="skill-tag scale-hidden" 
                    style={{ transitionDelay: `${(idx * 50) + (sIdx * 30)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-group {
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          transition: var(--transition);
        }
        .skill-tag {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background-color: var(--accent-light);
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Skills;
