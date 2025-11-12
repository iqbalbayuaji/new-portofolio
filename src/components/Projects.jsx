import { Link } from 'react-router-dom';
import { VscFolderOpened } from 'react-icons/vsc';
import { HiExternalLink } from 'react-icons/hi';
import { HiCodeBracket } from 'react-icons/hi2';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  // Show only first 3 projects
  const projects = projectsData.slice(0, 3);

  return (
    <section id="projects" style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 5rem',
      background: 'transparent',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '500',
            marginBottom: '1rem',
            lineHeight: 1.2,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <span style={{
              fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
              fontWeight: '600',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center'
            }}>
              <VscFolderOpened style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient-projects)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-projects" x1="0%" y1="0%" x2="100%" y2="0%">
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
              WebkitTextFillColor: 'transparent'
            }}>./ my_project.dart</span>
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(to right, #c9ced6ff, #60a5fa)',
            margin: '0 auto'
          }}></div>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                alignItems: 'center',
                '--image-order': index % 2 === 0 ? 1 : 2,
                '--content-order': index % 2 === 0 ? 2 : 1
              }}
            >
              {/* Image */}
              <div
                className="project-image-stack"
                style={{
                  order: index % 2 === 0 ? 1 : 2,
                  borderRadius: '1rem',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  maxWidth: '500px',
                  margin: index % 2 === 0 ? '0' : '0 0 0 auto',
                  position: 'relative',
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(0deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = index % 2 === 0 ? 'scale(1) rotate(-2deg)' : 'scale(1) rotate(2deg)';
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    zIndex: 3,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ 
                order: index % 2 === 0 ? 2 : 1
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '1rem'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: '#9ca3af',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#d1d5db',
                        padding: '0.375rem 0.875rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={project.websiteLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      backgroundColor: '#60a5fa',
                      color: '#fff',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.8125rem',
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
                    <HiExternalLink size={16} />
                    Website
                  </a>
                  <a
                    href={project.codeLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      backgroundColor: 'transparent',
                      color: '#60a5fa',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.8125rem',
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
                    <HiCodeBracket size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link
            to="/projects"
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
        .project-item > div {
          order: 0 !important;
        }

        .project-image-stack::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-image: inherit;
          background-size: cover;
          background-position: center;
          filter: blur(1px) brightness(0.6);
          z-index: 0;
          top: 12px;
          right: -12px;
          transform: rotate(-2deg);
        }

        @media (min-width: 768px) {
          .project-item {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
          
          .project-item > div:first-child {
            order: var(--image-order) !important;
          }
          
          .project-item > div:last-child {
            order: var(--content-order) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
