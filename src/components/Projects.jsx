import React, { useState } from 'react';
import erpImg from '../assets/projects/erp.png';
import railmadadImg from '../assets/projects/railmadad.png';
import smartgrowImg from '../assets/projects/smartgrow.png';
import ragchatbotImg from '../assets/projects/ragchatbot.png';
import cropdiseaseImg from '../assets/projects/cropdisease.png';
import invisipenImg from '../assets/projects/invisipen.png';

// Brain MRI / Neurological image for NeuroXplain AI
const neuroxplainImg = 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web', 'AI / ML'];

  const projects = [
    {
      name: "NeuroXplain AI",
      category: "AI / ML",
      image: neuroxplainImg,
      tech: ["Deep Learning", "Explainable AI", "ResNet50", "EfficientNetB3", "DenseNet121"],
      points: [
        "MRI-based neurological disease detection with 97.97% classification accuracy.",
        "Grad-CAM Explainable AI providing clinical saliency maps.",
        "Incorporated neuro-symbolic reasoning into an interactive clinical dashboard."
      ],
      github: "https://github.com/Khushikri29/NeuroXplain-AI",
      live: "https://neuroxplainai.netlify.app/"
    },
    {
      name: "Enterprise ERP Platform",
      category: "Web",
      image: erpImg,
      tech: ["MERN Stack", "Redux", "RBAC", "JWT"],
      points: [
        "Full-stack ERP system supporting 1,000+ concurrent users with RBAC-based authentication.",
        "Architected 25+ REST APIs with Node.js/Express, sub-100ms MongoDB response times."
      ],
      github: "https://github.com/Khushikri29/ERP_BASED-COLLEGE-MANAGEMENT-SYSTEM",
      live: "https://erp-25103.vercel.app/"
    },
    {
      name: "RailMadad — Intelligent Grievance Management",
      category: "Web",
      image: railmadadImg,
      tech: ["React.js", "Node.js", "FastAPI", "NLP", "MongoDB"],
      points: [
        "Scalable app handling 5,000+ monthly complaints with JWT-authenticated RESTful APIs.",
        "NLP-based model to automate complaint routing and improve resolution efficiency."
      ],
      github: "https://github.com/vikrant-kumar-cse/SIHTechVentures",
      live: null
    },
    {
      name: "SmartGrow — AI-Driven AgriTech IoT Platform",
      category: "AI / ML",
      image: smartgrowImg,
      tech: ["React.js", "Node.js", "Socket.io", "TensorFlow", "MongoDB"],
      points: [
        "Real-time IoT monitoring using Socket.io for ESP32 sensor data streaming.",
        "ML-based crop recommendation and anomaly detection improving yield by 25%."
      ],
      github: "https://github.com/rishigup/SMARTGROW",
      live: "https://smartgrow-theta.vercel.app/"
    },
    {
      name: "RAG ChatBot",
      category: "AI / ML",
      image: ragchatbotImg,
      tech: ["Python", "LangChain", "RAG", "LLMs", "Vector DB"],
      points: [
        "AI chatbot using Retrieval-Augmented Generation for context-aware intelligent responses."
      ],
      github: "https://github.com/Khushikri29/RAG_ChatBot",
      live: null
    },
    {
      name: "AI Crop Disease Detection",
      category: "AI / ML",
      image: cropdiseaseImg,
      tech: ["Python", "TensorFlow", "CNN", "Image Classification"],
      points: [
        "ML model detecting crop diseases from leaf images using Convolutional Neural Networks."
      ],
      github: "https://github.com/Khushikri29/AI-Crop-Disease-Detection",
      live: null
    },
    {
      name: "InvisiPen",
      category: "Web",
      image: invisipenImg,
      tech: ["JavaScript", "Canvas API", "Computer Vision"],
      points: [
        "Creative invisible drawing and annotation tool using gesture and color tracking."
      ],
      github: "https://github.com/Khushikri29/InvisiPen",
      live: "https://invisi-pen.vercel.app"
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="section-title serif reveal-hidden">Projects</h2>
        
        {/* Category Filters */}
        <div className="filter-container reveal-hidden" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn serif ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <div key={proj.name} className="project-card reveal-hidden" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="project-img-wrapper">
                <img src={proj.image} alt={proj.name} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="serif project-name">{proj.name}</h3>
                <div className="tag-container" style={{ marginBottom: '1.2rem' }}>
                  {proj.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <ul className="project-points">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
                <div className="project-actions" style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className={`project-btn github-btn ${!proj.live ? 'full-width-btn' : ''}`}>
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .filter-btn {
          padding: 0.6rem 1.5rem;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          border-radius: 50px;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.9rem;
          transition: var(--transition);
          outline: none;
        }
        .filter-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .filter-btn.active {
          background-color: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px var(--shadow);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.4s ease;
          border-top: 4px solid transparent;
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-top: 4px solid var(--accent);
          box-shadow: 0 15px 40px var(--shadow);
        }

        .project-img-wrapper {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          background-color: #f7fafc;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-name { font-size: 1.5rem; margin-bottom: 0.8rem; color: var(--text-primary); }
        .tech-tag {
          display: inline-block;
          font-size: 0.72rem;
          color: var(--accent);
          background-color: var(--accent-light);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          margin-right: 0.4rem;
          margin-bottom: 0.4rem;
          font-weight: 700;
          border: 1px solid var(--border);
        }
        .project-points { margin-bottom: 2rem; font-size: 0.92rem; list-style: disc; padding-left: 1.2rem; color: var(--text-secondary); }
        .project-points li { margin-bottom: 0.5rem; }

        .project-btn {
          flex: 1;
          text-align: center;
          padding: 0.6rem 0;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          transition: all 0.4s ease;
        }
        .full-width-btn { flex: none; width: 100%; }
        .github-btn {
          border: 1px solid var(--text-primary);
          color: var(--text-primary);
        }
        .github-btn:hover { background: var(--text-primary); color: white; }
        .live-btn {
          background: var(--accent);
          color: white;
          border: 1px solid var(--accent);
        }
        .live-btn:hover { background: var(--accent-hover); border-color: var(--accent-hover); }

        @media (max-width: 768px) {
           .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
