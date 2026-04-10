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
    <section id="skills" className="container">
      <h2 className="section-title serif">Technical Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-group animate-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#b85c38' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .skill-group {
          background: rgba(255, 255, 255, 0.5);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
        }
        .skill-tag {
          background-color: #f0ede8;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Skills;
