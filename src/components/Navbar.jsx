import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    backgroundColor: 'var(--bg-navbar)',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none',
    borderBottom: '1px solid var(--border)'
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--accent)', fontWeight: 700 }}>KK</span>
        </a>
        
        {/* Desktop Links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <a href="/Khushi_Kumari_SDE.pdf" download="Khushi_Kumari_SDE.pdf" className="cv-btn">⬇ Download CV</a>
        </div>

        {/* Mobile Toggle */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', fontSize: '1.5rem', display: 'none', color: 'var(--text-primary)' }}>
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
             <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'var(--bg-navbar)',
                flexDirection: 'column',
                padding: '2rem',
                gap: '1.5rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid var(--border)'
             }}>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)}>Achievements</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <a href="/Khushi_Kumari_SDE.pdf" download="Khushi_Kumari_SDE.pdf" className="cv-btn">⬇ Download CV</a>
             </div>
        )}
      </div>

      <style>{`
        .cv-btn {
          padding: 0.6rem 1.5rem;
          border: 2px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.4s ease;
          background-color: transparent;
        }
        .cv-btn:hover {
          background-color: var(--accent);
          color: white;
        }
        .nav-desktop a:not(.cv-btn) {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        .nav-desktop a:hover {
          color: var(--accent);
        }
        @media (max-width: 1000px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
