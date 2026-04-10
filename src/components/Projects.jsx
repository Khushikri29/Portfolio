import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Enterprise ERP Platform",
      tech: "MERN Stack · Redux · RBAC · JWT",
      points: [
        "Full-stack ERP system supporting 1,000+ concurrent users with RBAC-based authentication.",
        "Architected 25+ REST APIs with Node.js/Express, sub-100ms MongoDB response times."
      ],
      github: "https://github.com/Khushikri29/ERP_BASED-COLLEGE-MANAGEMENT-SYSTEM"
    },
    {
      name: "RailMadad — Intelligent Grievance Management",
      tech: "React.js · Node.js · FastAPI · NLP · MongoDB",
      points: [
        "Scalable app handling 5,000+ monthly complaints with JWT-authenticated RESTful APIs.",
        "NLP-based model to automate complaint routing and improve resolution efficiency."
      ],
      github: "https://github.com/vikrant-kumar-cse/SIHTechVentures"
    },
    {
      name: "SmartGrow — AI-Driven AgriTech IoT Platform",
      tech: "React.js · Node.js · Socket.io · TensorFlow · MongoDB",
      points: [
        "Real-time IoT monitoring using Socket.io for ESP32 sensor data streaming.",
        "ML-based crop recommendation and anomaly detection improving yield by 25%."
      ],
      github: "https://github.com/rishigup/SMARTGROW"
    },
    {
      name: "RAG ChatBot",
      tech: "Python · LangChain · RAG · LLMs · Vector DB",
      points: [
        "AI chatbot using Retrieval-Augmented Generation for context-aware intelligent responses."
      ],
      github: "https://github.com/Khushikri29/RAG_ChatBot"
    },
    {
      name: "AI Crop Disease Detection",
      tech: "Python · TensorFlow · CNN · Image Classification",
      points: [
        "ML model detecting crop diseases from leaf images using Convolutional Neural Networks."
      ],
      github: "https://github.com/Khushikri29/AI-Crop-Disease-Detection"
    },
    {
      name: "InvisiPen",
      tech: "JavaScript · Canvas API · Computer Vision",
      points: [
        "Creative invisible drawing and annotation tool using gesture and color tracking."
      ],
      github: "https://github.com/Khushikri29/InvisiPen"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title serif reveal-hidden">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card reveal-hidden" style={{ transitionDelay: `${idx * 150}ms` }}>
            <h3 className="serif project-name">{proj.name}</h3>
            <p className="project-tech">{proj.tech}</p>
            <ul className="project-points">
              {proj.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-github">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 25px var(--accent-glow);
        }
        .project-name { font-size: 1.6rem; margin-bottom: 1rem; color: var(--text-main); }
        .project-tech { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .project-points { flex-grow: 1; margin-bottom: 2rem; font-size: 0.95rem; list-style: disc; padding-left: 1rem; color: var(--text-main); }
        .project-points li { margin-bottom: 0.5rem; }
        .project-github {
          align-self: flex-start;
          padding: 0.6rem 1.2rem;
          border: 1px solid var(--text-main);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          transition: all 0.4s ease;
        }
        .project-github:hover { background: var(--text-main); color: var(--bg-color); }
        
        @media (max-width: 768px) {
           .projects-grid {
              grid-template-columns: 1fr;
           }
        }
      `}</style>
    </section>
  );
};

export default Projects;
