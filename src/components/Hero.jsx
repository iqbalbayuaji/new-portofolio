import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const welcomeTexts = [
    'WELCOME',      // English
    'SELAMAT DATANG', // Indonesian
    'ようこそ',      // Japanese
    'BIENVENUE',    // French
    '환영합니다',    // Korean
    'BIENVENIDO',   // Spanish
    'WILLKOMMEN',   // German
    '欢迎',         // Chinese
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWelcomeIndex((prev) => (prev + 1) % welcomeTexts.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 100); // Small delay before showing new text
      }, 500); // Wait for exit animation (0.5s)
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [welcomeTexts.length]);

  // Floating images data (you'll need to replace these with your actual images)
  const floatingImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400', position: 'top-left', delay: 0, rotation: -2 },
    { id: 2, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', position: 'top-center-left', delay: 0.2, rotation: 5 },
    { id: 3, src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400', position: 'bottom-left', delay: 0.4, rotation: -3 },
    { id: 4, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400', position: 'top-right', delay: 0.1, rotation: 2 },
    { id: 5, src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400', position: 'top-center-right', delay: 0.3, rotation: -5 },
    { id: 6, src: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400', position: 'bottom-right', delay: 0.5, rotation: 6 },
  ];

  const getPositionStyles = (position) => {
    const positions = {
      'top-left': { top: '15%', left: '10%' },
      'top-center-left': { top: '35%', left: '6%' },
      'bottom-left': { bottom: '17%', left: '12%' },
      'top-right': { top: '15%', right: '8%' },
      'top-center-right': { top: '30%', right: '5%' },
      'bottom-right': { bottom: '20%', right: '10%' },
    };
    return positions[position] || {};
  };

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #001a33 50%, #0a0a1a 75%, #000000 100%)'
    }}>
      {/* Floating Images */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {floatingImages.map((img) => (
          <div
            key={img.id}
            style={{
              position: 'absolute',
              ...getPositionStyles(img.position),
              width: '8rem',
              height: '10rem',
              opacity: 0.2,
              transform: `translate(${mousePosition.x * (img.delay + 1)}px, ${mousePosition.y * (img.delay + 1)}px) rotate(${img.rotation}deg) scale(1)`,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.transform = `translate(${mousePosition.x * (img.delay + 1)}px, ${mousePosition.y * (img.delay + 1)}px) rotate(${img.rotation}deg) scale(1.15)`;
              const imgElement = e.currentTarget.querySelector('img');
              imgElement.style.boxShadow = '0 0 30px 8px rgba(59, 130, 246, 0.3), 0 0 60px 15px rgba(59, 130, 246, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.2';
              e.currentTarget.style.transform = `translate(${mousePosition.x * (img.delay + 1)}px, ${mousePosition.y * (img.delay + 1)}px) rotate(${img.rotation}deg) scale(1)`;
              const imgElement = e.currentTarget.querySelector('img');
              imgElement.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
            }}
          >
            <img
              src={img.src}
              alt={`Project ${img.id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                transition: 'box-shadow 0.3s ease-out'
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '80rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          overflow: 'hidden',
          height: 'clamp(2rem, 6vw, 4.5rem)',
          position: 'relative'
        }}>
          <div 
            key={currentWelcomeIndex}
            style={{
              animation: isAnimating 
                ? 'slideOut 0.5s ease-in forwards' 
                : 'slideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {welcomeTexts[currentWelcomeIndex]}
          </div>
        </h1>
        
        <style>{`
          @keyframes slideIn {
            0% {
              transform: translateY(-120%);
              opacity: 0;
            }
            // 50% {
            //   opacity: 0.5;
            // }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes slideOut {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            // 50% {
            //   opacity: 0.5;
            // }
            100% {
              transform: translateY(120%);
              opacity: 0;
            }
          }
        `}</style>
        
        <p style={{
          color: '#9ca3af',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginBottom: '1rem',
          maxWidth: '42rem',
          margin: '0 auto 1rem'
        }}>
          I craft digital experiences that push boundaries.
          <br />
          Where code meets creativity, magic happens.
        </p>
        
        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }} className="button-container">
          <button 
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e5e5';
              e.currentTarget.querySelector('svg').style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
            }}
          >
            View My Work
            <svg 
              style={{ width: '1.25rem', height: '1.25rem', transition: 'transform 0.3s' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button 
            style={{
              backgroundColor: 'transparent',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: '600',
              border: '2px solid #fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '1.5rem',
          height: '2.5rem',
          border: '2px solid #fff',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0.5rem'
        }}>
          <div style={{
            width: '0.25rem',
            height: '0.75rem',
            backgroundColor: '#fff',
            borderRadius: '9999px'
          }}></div>
        </div>
      </div>

      {/* Side Icons
      <div style={{
        position: 'absolute',
        left: '2rem',
        bottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <button style={{
          width: '2.5rem',
          height: '2.5rem',
          backgroundColor: '#1f2937',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}>
          <span style={{ fontSize: '0.875rem' }}>🔊</span>
        </button>
      </div>

      <div style={{
        position: 'absolute',
        right: '2rem',
        bottom: '2rem'
      }}>
        <button style={{
          width: '2.5rem',
          height: '2.5rem',
          backgroundColor: '#1f2937',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          color: '#fff'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}>
          <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div> */}

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        @media (min-width: 640px) {
          .button-container {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
