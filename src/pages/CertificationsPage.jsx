import { useState, useEffect, useRef } from 'react';
import { PiCertificateFill } from 'react-icons/pi';

const CertificationsPage = () => {
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
      title: 'AI Productivity and AI API Integration for Developers',
      issuer: 'Hacktiv8',
      date: '10/30/2024',
      category: 'Programming',
      description: 'AI Productivity and AI API Integration for Developers from Hacktiv8',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      link: '#'
    },
    {
      id: 2,
      title: 'TOEIC Certificate',
      issuer: 'ETS',
      date: '11/22/2024',
      category: 'Language',
      description: 'This Official TOEIC Listening and Reading Score Certificate, issued by ETS (Educational Testing Service), is awarded to Muhammad Iqbal Bayuaji in recognition of English language proficiency.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      link: '#'
    },
    {
      id: 3,
      title: 'Junior Web Developer Competency Certification',
      issuer: 'BNSP',
      date: '1/22/2025',
      category: 'Programming',
      description: 'This Certificate of Competence, issued by the Indonesian Professional Certification Authority (BNSP) through Media Informatika Professional Certification Institute.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
      link: '#'
    },
    {
      id: 4,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '08/15/2024',
      category: 'Programming',
      description: 'Advanced React certification covering hooks, context, performance optimization, and best practices for building scalable applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      link: '#'
    },
    {
      id: 5,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '07/10/2024',
      category: 'Cloud Computing',
      description: 'Foundational certification demonstrating cloud computing knowledge and AWS services understanding.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      link: '#'
    },
    {
      id: 6,
      title: 'Mobile App Development with Flutter',
      issuer: 'Google',
      date: '06/05/2024',
      category: 'Mobile Development',
      description: 'Comprehensive certification in Flutter framework for building cross-platform mobile applications.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      link: '#'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #001a33 50%, #0a0a1a 75%, #000000 100%)',
      color: '#fff',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '4rem 5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          My Certifications
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: '#9ca3af',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A collection of my professional certifications and achievements. Continuous learning and skill development.
        </p>
      </section>

      {/* Certifications Section */}
      <section ref={sectionRef} id="all-certifications" style={{
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
                    backgroundColor: cert.category === 'Programming' ? '#3b82f6' : cert.category === 'Language' ? '#10b981' : cert.category === 'Cloud Computing' ? '#f59e0b' : '#8b5cf6',
                    color: '#fff',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {cert.category}
                  </div>
                </div>

                {/* Certificate Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}>
                    {cert.title}
                  </h3>

                  {/* Description */}
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
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 768px) {
            #all-certifications {
              padding: 3rem 1.5rem !important;
            }

            #all-certifications > div > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default CertificationsPage;
