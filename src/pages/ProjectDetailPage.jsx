import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const ProjectDetailPage = () => {
  const { id } = useParams();

  // Project data - in a real app, this would come from an API or context
  const projects = [
    {
      id: 1,
      title: 'MuslimTime',
      description: 'An Islamic-themed web app to read the Qur\'an, listen to recitations, track prayer times, and handle authentication with email verification and OTP.',
      fullDescription: 'MuslimTime is a comprehensive Islamic web application designed to help Muslims practice their faith with modern technology. The application features a complete Qur\'an reader with multiple translations, audio recitations from renowned reciters, and accurate prayer time calculations based on location. The authentication system includes email verification and OTP for secure user access. Users can track their prayer history, set reminders, and customize their reading experience with various themes and fonts.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800'
      ],
      category: 'Web Development',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      date: '10/30/2024',
      type: 'Individual',
      status: 'Live',
      link: '#',
      features: [
        'Complete Qur\'an with multiple translations',
        'Audio recitations from renowned reciters',
        'Prayer time calculations based on location',
        'Email verification and OTP authentication',
        'Prayer history tracking',
        'Customizable themes and fonts'
      ],
      challenges: 'The main challenge was implementing accurate prayer time calculations for different locations worldwide and ensuring the Qur\'an text rendering was perfect across all devices.',
      outcome: 'Successfully launched with over 1,000 active users in the first month, with positive feedback on the user interface and accuracy of prayer times.'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product management, shopping cart, and payment integration.',
      fullDescription: 'A comprehensive e-commerce solution built with modern web technologies. This platform provides a complete online shopping experience with product browsing, advanced search and filtering, shopping cart management, secure checkout process, and payment integration with Stripe. The admin panel allows for easy product management, order tracking, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      images: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800'
      ],
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      date: '09/15/2024',
      type: 'Team',
      status: 'Development',
      link: '#',
      role: 'Frontend Developer',
      responsibilities: [
        'Designed and implemented the user interface using React and modern UI libraries',
        'Developed responsive product catalog with advanced filtering and search functionality',
        'Integrated Stripe payment gateway for secure checkout process',
        'Collaborated with backend team to implement RESTful API endpoints',
        'Optimized application performance and implemented lazy loading for images'
      ],
      features: [
        'Product catalog with search and filters',
        'Shopping cart and wishlist',
        'Secure payment processing with Stripe',
        'Order tracking and history',
        'Admin dashboard for product management',
        'Customer reviews and ratings'
      ],
      challenges: 'Implementing a secure payment system and ensuring the platform could handle high traffic during sales events.',
      outcome: 'Currently in beta testing with select users, preparing for public launch with enhanced security features.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A mobile-first task management application with real-time collaboration features.',
      fullDescription: 'A powerful task management application built with Flutter for cross-platform mobile deployment. Features include real-time collaboration, task assignment, deadline tracking, and team communication. The app uses Firebase for backend services, providing real-time updates and offline support.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800'
      ],
      category: 'Mobile Development',
      technologies: ['Flutter', 'Firebase', 'GetX'],
      date: '08/22/2024',
      type: 'Individual',
      status: 'Live',
      link: '#',
      features: [
        'Real-time task updates',
        'Team collaboration tools',
        'Deadline tracking and reminders',
        'Offline mode support',
        'File attachments',
        'Activity timeline'
      ],
      challenges: 'Ensuring smooth real-time synchronization across multiple devices while maintaining offline functionality.',
      outcome: 'Successfully deployed on both iOS and Android with 4.5-star rating and growing user base.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing projects and skills.',
      fullDescription: 'A sleek and modern portfolio website built with React and styled with Tailwind CSS. Features smooth animations powered by Framer Motion, responsive design for all devices, and optimized performance. The site includes sections for projects, skills, experience, and contact information.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
      ],
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      date: '07/10/2024',
      type: 'Individual',
      status: 'Live',
      link: '#',
      features: [
        'Smooth scroll animations',
        'Responsive design',
        'Project showcase',
        'Skills visualization',
        'Contact form',
        'Dark mode support'
      ],
      challenges: 'Creating smooth animations that work well across all devices without impacting performance.',
      outcome: 'Successfully launched with excellent performance scores and positive feedback on design.'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather dashboard with real-time data visualization and forecasting.',
      fullDescription: 'An interactive weather dashboard that provides real-time weather data and forecasts using the OpenWeather API. Features include current weather conditions, 7-day forecast, interactive charts powered by Chart.js, and location-based weather tracking.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      images: [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
      ],
      category: 'Web Development',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      date: '06/05/2024',
      type: 'Individual',
      status: 'Development',
      link: '#',
      features: [
        'Real-time weather data',
        '7-day forecast',
        'Interactive charts',
        'Location-based tracking',
        'Weather alerts',
        'Historical data visualization'
      ],
      challenges: 'Handling API rate limits and creating meaningful data visualizations for weather patterns.',
      outcome: 'In active development with core features implemented and testing phase ongoing.'
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A social media application with posts, comments, likes, and real-time notifications.',
      fullDescription: 'A full-featured social media application built with React Native for cross-platform mobile deployment. Includes user profiles, post creation with image uploads, commenting system, real-time notifications, and direct messaging. Uses Firebase for backend services and Redux for state management.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800',
      images: [
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
      ],
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
      date: '05/18/2024',
      type: 'Team',
      status: 'Live',
      link: '#',
      role: 'Mobile Developer',
      responsibilities: [
        'Built cross-platform mobile application using React Native',
        'Implemented real-time messaging system with Firebase',
        'Developed user authentication and profile management features',
        'Created custom UI components following design specifications',
        'Integrated push notifications for real-time updates'
      ],
      features: [
        'User profiles and authentication',
        'Post creation with media upload',
        'Comments and likes',
        'Real-time notifications',
        'Direct messaging',
        'Follow/unfollow system'
      ],
      challenges: 'Implementing efficient real-time updates and managing complex state across the application.',
      outcome: 'Successfully launched with growing user engagement and positive app store reviews.'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            backgroundColor: project.status === 'Live' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            color: project.status === 'Live' ? '#10b981' : '#f59e0b',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '600',
            border: `1px solid ${project.status === 'Live' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
          }}>
            {project.status}
          </span>
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

        {/* CTA Button */}
        {project.link !== '#' && (
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#60a5fa',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#60a5fa';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Live Project →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
