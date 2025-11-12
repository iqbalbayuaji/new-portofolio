import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VscFolderOpened } from 'react-icons/vsc';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
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

  const projects = projectsData;

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
          My Projects
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: '#9ca3af',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A collection of my projects. Explore more of my work below!
        </p>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} id="all-projects" style={{
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
          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
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
                {/* Project Image */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Project Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  {/* Category Badge */}
                  <div style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    color: '#60a5fa',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    border: '1px solid rgba(96, 165, 250, 0.3)'
                  }}>
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '0.75rem'
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    flexGrow: 1
                  }}>
                    {project.description}
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
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af'
                    }}>
                      {project.date}
                    </span>
                    <Link
                      to={`/projects/${project.id}`}
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
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 768px) {
            #all-projects {
              padding: 3rem 1.5rem !important;
            }

            #all-projects > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default ProjectsPage;
