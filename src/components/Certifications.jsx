import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PiCertificateFill } from 'react-icons/pi';
import { certificationsData } from '../data/certificationsData';

const Certifications = () => {
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

  const certifications = [
    {
      id: 1,
      title: 'FUSIONTECH 2025 - Web Design Competition, 3rd Place Winner',
      date: '20/03/2025',
      category: 'Programming',
      description: 'FusionTech 2025 adalah perlombaan tingkat nasional yang diselenggarakan oleh Universitas Teknologi Yogyakarta pada Maret 2025.',
      image: '/images/s_fusiontech.png',
      link: 'https://drive.google.com/file/d/1zDU2d_KFCZ_Vve-ENakE2uUT-6vyhr9v/view?usp=sharing'
    },
    {
      id: 2,
      title: 'BNSP - Junior Mobile Programmer',
      date: '24/01/2025',
      category: 'programming',
      description: 'Saya mengikuti program Bootcamp DigiUp yang diadakan oleh Telkom',
      image: '/images/s_bnsp.png',
      link: 'https://drive.google.com/file/d/1KJtoVQagVnraj1uP9bH9FOCIj6enOwZ2/view?usp=sharing'
    },
    {
      id: 3,
      title: 'DigiUp 2024 - Telkom DigiUp 2024 - Mobile Apps Developer',
      date: '4/11/2024',
      category: 'Programming',
      description: 'DigiUp 2024 adalah program Bootcamp yang diadakan oleh Telkom, disini saya diajari hal - hal tentang Mobile Developer menggunakan Framework Flutter',
      image: '/images/s_digiup.png',
      link: 'https://drive.google.com/file/d/1vWyfvXlmiJNmPoFIsV8ddrAeV5dN1GrF/view?usp=drive_link'
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 5rem',
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
              <PiCertificateFill style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient-certifications)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-certifications" x1="0%" y1="0%" x2="100%" y2="0%">
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
              lineHeight: 1
            }}>./ certifications.json</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: isVisible 
                  ? 'all 0.3s ease'
                  : `opacity 1.2s ease-out ${index * 0.15}s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`
              }}
              onMouseEnter={(e) => {
                if (isVisible) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(96, 165, 250, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (isVisible) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {/* Certificate Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {cert.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4
                }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  flexGrow: 1
                }}>
                  {cert.description}
                </p>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  marginTop: 'auto'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#9ca3af'
                  }}>
                    {cert.date}
                  </p>

                  <Link
                    to={`/certifications/${cert.id}`}
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: '#60a5fa',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          <Link
            to="/certifications"
            style={{
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              color: '#60a5fa',
              padding: '0.7rem 2rem',
              borderRadius: '4rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(96, 165, 250, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View More
          </Link>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #certifications {
            padding: 3rem 1.5rem !important;
          }
          #certifications {
            padding: 3rem 1.5rem !important;
          }

          #certifications > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
