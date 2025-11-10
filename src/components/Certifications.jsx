import { PiCertificateFill } from 'react-icons/pi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AI Productivity and AI API Integration for Developers',
      issuer: 'Hilmi',
      date: '10/30/2025',
      category: 'Programming',
      description: 'AI Productivity and AI API Integration for Developers from Hacktiv8',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      link: '#'
    },
    {
      id: 2,
      title: 'TOEIC Certificate',
      issuer: 'Hilmi',
      date: '11/22/2024',
      category: 'Language',
      description: 'This Official TOEIC Listening and Reading Score Certificate, issued by ETS (Educational Testing Service), is awarded to Hilmi Farrel Fijatullah in...',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      link: '#'
    },
    {
      id: 3,
      title: 'Junior Web Developer Competency Certification',
      issuer: 'Hilmi',
      date: '1/22/2025',
      category: 'Programming',
      description: 'This Certificate of Competence, issued by the Indonesian Professional Certification Authority (BNSP) through Media Informatika Professional...',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
      link: '#'
    }
  ];

  return (
    <section id="certifications" style={{
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
        <div style={{ marginBottom: '3rem' }}>
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
          {certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(96, 165, 250, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
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
                  backgroundColor: cert.category === 'Programming' ? '#3b82f6' : '#10b981',
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

                  <a
                    href={cert.link}
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button
            style={{
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              color: '#60a5fa',
              padding: '0.7rem 2rem',
              borderRadius: '4rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
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
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
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
