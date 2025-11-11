import { useState, useEffect, useRef } from 'react';
import { PiGraduationCapFill } from 'react-icons/pi';
import { HiArrowRight } from 'react-icons/hi2';
import logoSmkn from '../assets/images/logo-smkn.png';
import logoMtsn from '../assets/images/logo-mtsn.png';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const educations = [
    {
      id: 1,
      school: 'SMK Negeri 8 Semarang',
      period: '2023 - 2026 (expected)',
      description: 'Currently pursuing Software and Game Development with specialization in Mobile Developer.',
      logo: logoSmkn
    },
    {
      id: 2,
      school: 'MTs Negeri 1 Kota Semarang',
      period: '2020 - 2023',
      description: 'Completed middle school education with focus on academic excellence.',
      logo: logoMtsn
    }
  ];

  return (
    <section ref={sectionRef} id="education" style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 5rem',
      background: 'transparent',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '500',
            marginBottom: '1rem',
            lineHeight: 1.2,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{
              fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
              fontWeight: '600',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center'
            }}>
              <PiGraduationCapFill style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#c9ced6ff" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span style={{
              background: 'linear-gradient(to right, #fff, #c9ced6ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2
            }}>./ education.jsx</span>
          </h2>
        </div>

        {/* Education List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '2000px',
          margin: '0 auto'
        }}>
          {educations.map((edu, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <div
                key={edu.id}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'grid',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? 'translateX(0)' 
                    : fromLeft 
                      ? 'translateX(-100px)' 
                      : 'translateX(100px)',
                  transition: isVisible 
                    ? 'all 0.3s ease'
                    : `opacity 1.2s ease-out ${index * 0.2}s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s`,
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (isVisible) {
                    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(96, 165, 250, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isVisible) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
            >
              {/* Logo */}
              <div style={{
                width: '100px',
                height: '100px',
                // backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
                padding: '0.5rem'
              }}>
                <img 
                  src={edu.logo} 
                  alt={edu.school}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {edu.school}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.8125rem, 1.2vw, 0.9375rem)',
                  color: '#10b981',
                  marginBottom: '0.75rem',
                  fontWeight: '500'
                }}>
                  {edu.period}
                </p>
                <p style={{
                  fontSize: 'clamp(0.8125rem, 1.2vw, 0.9375rem)',
                  color: '#9ca3af',
                  lineHeight: 1.6
                }}>
                  {edu.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #education {
            padding: 3rem 1.5rem !important;
          }

          #education > div > div:last-child > div {
            grid-template-columns: auto 1fr !important;
            gap: 1rem !important;
          }

          #education > div > div:last-child > div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
