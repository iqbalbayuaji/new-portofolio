import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';
import { HiCodeBracket } from 'react-icons/hi2';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #001a33 50%, #0a0a1a 75%, #000000 100%)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h1>
          <Link to="/projects" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #001a33 50%, #0a0a1a 75%, #000000 100%)',
      color: '#fff',
      paddingTop: '80px'
    }}>
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '2rem 1.5rem'
      }}>
        {/* Back Button */}
        <Link 
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#60a5fa',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            borderRadius: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <HiArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          {project.title}
        </h1>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{project.date}</span>
          <span style={{ color: '#4b5563' }}>•</span>
          <span style={{
            backgroundColor: 'rgba(96, 165, 250, 0.1)',
            color: '#60a5fa',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '600',
            border: '1px solid rgba(96, 165, 250, 0.3)'
          }}>
            {project.type || 'Individual'}
          </span>
        </div>

        {/* Project Image Carousel */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(300px, 50vh, 500px)',
          borderRadius: '1rem',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img
            src={project.images ? project.images[currentImageIndex] : project.image}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease'
            }}
          />
          
          {/* Navigation Arrows - Only show if multiple images */}
          {project.images && project.images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  prev === 0 ? project.images.length - 1 : prev - 1
                )}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <HiChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  prev === project.images.length - 1 ? 0 : prev + 1
                )}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <HiChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                backdropFilter: 'blur(10px)'
              }}>
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: idx === currentImageIndex ? '#60a5fa' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      padding: 0
                    }}
                    onMouseEnter={(e) => {
                      if (idx !== currentImageIndex) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== currentImageIndex) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                      }
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#60a5fa',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Project Description
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#d1d5db',
            lineHeight: 1.8
          }}>
            {project.fullDescription}
          </p>
        </section>

        {/* My Role Section - Only for Team Projects */}
        {project.type === 'Team' && project.role && (
          <section style={{
            // marginBottom: '3rem',
            // backgroundColor: 'rgba(15, 23, 42, 0.6)',
            // padding: '2rem',
            // borderRadius: '1rem',
            // border: '1px solid rgba(96, 165, 250, 0.2)',
            // backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                My Role in the Team
              </h2>
              <p style={{
                fontSize: '0.90rem',
                color: '#60a5fa',
                fontWeight: '500'
              }}>
                {project.role}
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#e5e7eb',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#60a5fa' }}>✦</span>
                Key Responsibilities
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gap: '0.875rem'
              }}>
                {project.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: '#d1d5db',
                      lineHeight: 1.6,
                      paddingLeft: '0.5rem'
                    }}
                  >
                    <span style={{
                      color: '#60a5fa',
                      fontSize: '1.125rem',
                      flexShrink: 0,
                      marginTop: '0.125rem'
                    }}>▸</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginTop: '3rem',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#60a5fa',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(96, 165, 250, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(96, 165, 250, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#60a5fa';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(96, 165, 250, 0.3)';
            }}
          >
            <HiExternalLink size={20} />
            View Project
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              color: '#60a5fa',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: '2px solid #60a5fa',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <HiCodeBracket size={20} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
