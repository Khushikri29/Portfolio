import React, { useEffect, useState } from 'react';

const WelcomeScreen = ({ onFinish }) => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [activeLine, setActiveLine] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  const text1 = "Hello";
  const text2 = "Welcome to my Portfolio";
  const text3 = "Khushi Kumari";

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let i = 0;
    let j = 0;
    let k = 0;

    const type1 = () => {
      const timer = setInterval(() => {
        setLine1(text1.substring(0, i + 1));
        i++;
        if (i >= text1.length) {
          clearInterval(timer);
          setTimeout(() => {
            setActiveLine(2);
            type2();
          }, 300);
        }
      }, 100);
    };

    const type2 = () => {
      const timer = setInterval(() => {
        setLine2(text2.substring(0, j + 1));
        j++;
        if (j >= text2.length) {
          clearInterval(timer);
          setTimeout(() => {
            setActiveLine(3);
            type3();
          }, 300);
        }
      }, 60);
    };

    const type3 = () => {
      const timer = setInterval(() => {
        setLine3(text3.substring(0, k + 1));
        k++;
        if (k >= text3.length) {
          clearInterval(timer);
          setTimeout(() => {
            setActiveLine(4); // No active line typing
            setTimeout(() => setFadeOut(true), 1000);
            setTimeout(() => {
              document.body.style.overflow = 'auto';
              onFinish();
            }, 2000);
          }, 500);
        }
      }, 80);
    };

    type1();

    return () => {
      document.body.style.overflow = 'auto';
    };
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
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      transition: 'opacity 1s ease-out',
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? 'none' : 'auto'
    }}>
      <div className="serif welcome-item" style={{
        fontSize: '1rem',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase',
        color: '#9a8e88',
        margin: '0.5rem 0',
        height: '1.5em'
      }}>
        {line1}{activeLine === 1 && <span className="typewriter-cursor"></span>}
      </div>
      
      <div className="welcome-item" style={{
        fontSize: '1.5rem',
        color: '#111007',
        margin: '0.5rem 0',
        height: '1.5em'
      }}>
        {line2}{activeLine === 2 && <span className="typewriter-cursor"></span>}
      </div>

      <div className="serif welcome-item" style={{
        fontSize: '3.5rem',
        color: '#a0522d',
        margin: '0.5rem 0',
        textAlign: 'center',
        height: '1.5em'
      }}>
        {line3}{activeLine === 3 && <span className="typewriter-cursor"></span>}
      </div>

      <style>{`
        .welcome-item {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
