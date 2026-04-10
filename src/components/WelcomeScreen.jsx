import React, { useEffect, useState } from 'react';

const WelcomeScreen = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const name = "Khushi Kumari";

  useEffect(() => {
    // Prevent scrolling during welcome
    document.body.style.overflow = 'hidden';

    const timers = [
      setTimeout(() => setStep(1), 400),   // "Hello"
      setTimeout(() => setStep(2), 1000),  // "Welcome to my Portfolio"
      setTimeout(() => setStep(3), 1600),  // Start "Khushi Kumari" stagger
      setTimeout(() => setFadeOut(true), 2800),
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        onFinish();
      }, 3800)
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#faf7f2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: center,
      alignItems: center,
      zIndex: 9999,
      transition: 'opacity 1s ease-out',
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? 'none' : 'auto'
    }}>
      <div className="serif" style={{
        fontSize: '1rem',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase',
        color: '#9a8e88',
        margin: '0.5rem 0',
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        Hello
      </div>
      <div style={{
        fontSize: '1.5rem',
        color: '#1a1614',
        margin: '0.5rem 0',
        opacity: step >= 2 ? 1 : 0,
        transform: step >= 2 ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        Welcome to my Portfolio
      </div>
      <div className="serif" style={{
        fontSize: '3.5rem',
        color: '#b85c38',
        margin: '0.5rem 0',
        textAlign: 'center',
        opacity: step >= 3 ? 1 : 0
      }}>
        {name.split('').map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transition: 'all 0.4s ease',
              transitionDelay: `${i * 50}ms`,
              opacity: step >= 3 ? 1 : 0,
              transform: step >= 3 ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

// Add helper for centered style since I used it above
const center = 'center';

export default WelcomeScreen;
