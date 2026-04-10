import React, { useState, useEffect } from 'react';

const Navbar = ({ currentTheme, onThemeChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themes = [
    { id: 'default', color: '#a0522d', name: 'Terracotta' },
    { id: 'slate', color: '#c9973a', name: 'Slate & Gold' },
    { id: 'forest', color: '#2d6a4f', name: 'Forest & Cream' },
    { id: 'charcoal', color: '#c47c7c', name: 'Dusty Rose' },
    { id: 'navy', color: '#e8603c', name: 'Navy & Coral' },
    { id: 'graphite', color: '#7a9e7e', name: 'Graphite & Sage' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '10px 40px',
    backgroundColor: 'var(--bg-color)',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none'
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '2rem' }}>👩‍💻</span>
        </a>
        
        {/* Desktop Header */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          
          {/* Theme Switcher */}
          <div style={{ position: 'relative', marginLeft: '1rem' }}>
            <button 
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--accent-color)' }}
              title="Change Theme"
            >
              <i className="fa-solid fa-palette"></i>
            </button>
            
            {isThemeMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: 'var(--card-bg)',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex',
                gap: '0.8rem',
                marginTop: '1rem',
                border: '1px solid var(--card-border)'
              }}>
                {themes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => { onThemeChange(t.id); setIsThemeMenuOpen(false); }}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: t.color,
                      border: currentTheme === t.id ? '2px solid var(--text-main)' : 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    title={t.name}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                ))}
              </div>
            )}
          </div>

          <a href="/Khushi_Kumari_SDE.pdf" download="Khushi_Kumari_SDE.pdf" className="cv-btn">⬇ Download CV</a>
        </div>

        {/* Mobile Toggle */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', fontSize: '1.5rem', display: 'none', color: 'var(--text-main)' }}>
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
             <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'var(--bg-color)',
                flexDirection: 'column',
                padding: '2rem',
                gap: '1.5rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center'
             }}>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                
                <div style={{ display: 'flex', gap: '1rem', margin: '0.5rem 0' }}>
                  {themes.map(t => (
                    <button
                      key={t.id}
                      onClick={() => { onThemeChange(t.id); setIsMobileMenuOpen(false); }}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: t.color,
                        border: currentTheme === t.id ? '2px solid var(--text-main)' : 'none'
                      }}
                    />
                  ))}
                </div>

                <a href="/Khushi_Kumari_SDE.pdf" download="Khushi_Kumari_SDE.pdf" className="cv-btn">⬇ Download CV</a>
             </div>
        )}
      </div>

      <style>{`
        .cv-btn {
          padding: 0.6rem 1.5rem;
          border: 1.5px solid var(--accent-color);
          border-radius: 50px;
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.4s ease;
        }
        .cv-btn:hover {
          background-color: var(--accent-color);
          color: white;
        }
        .nav-desktop a:not(.cv-btn) {
            font-size: 0.95rem;
            font-weight: 500;
        }
        .nav-desktop a:hover {
          color: var(--accent-color);
        }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
