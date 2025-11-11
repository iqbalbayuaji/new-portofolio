import { useState, useEffect, useRef } from 'react';
import { HiMail } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
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

  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: <FaLinkedin size={28} />,
      link: 'https://www.linkedin.com/in/muhammad-iqbal-bayuaji-39474b227/',
      color: '#0077b5'
    },
    {
      id: 2,
      name: 'GitHub',
      icon: <FaGithub size={28} />,
      link: 'https://github.com/iqbalbayuaji',
      color: '#333'
    },
    {
      id: 3,
      name: 'Instagram',
      icon: <FaInstagram size={28} />,
      link: 'https://www.instagram.com/iqbal.baiu_',
      color: '#E4405F'
    }
  ];

  const contactInfo = [
    {
      id: 1,
      name: 'Email',
      icon: <MdEmail size={28} />,
      value: 'Iqbalbayuaji201@gmail.com',
      color: '#ea4335'
    },
    {
      id: 2,
      name: 'Telegram',
      icon: <FaTelegram size={28} />,
      value: '@iqbal bayuaji',
      color: '#0088cc'
    },
    {
      id: 3,
      name: 'Discord',
      icon: <FaDiscord size={28} />,
      value: 'iqbald',
      color: '#5865F2'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" style={{
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
              <HiMail style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient-contact)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-contact" x1="0%" y1="0%" x2="100%" y2="0%">
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
            }}>./ get_in_touch.dart</span>
          </h2>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          color: '#d1d5db',
          marginBottom: '3rem',
          lineHeight: 1.6,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.2s'
        }}>
          Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }} className="contact-grid">
          {/* Left Column - Social Links */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 1.2s ease-out 0.4s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Social Media
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = `${social.color}60`;
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: `${social.color}20`,
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    flexShrink: 0
                  }}>
                    {social.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#fff',
                      margin: 0
                    }}>
                      {social.name}
                    </h4>
                  </div>
                  <div style={{
                    color: social.color,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <HiArrowRight size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'opacity 1.2s ease-out 0.4s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Contact Info
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {contactInfo.map((contact) => (
                <div
                  key={contact.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = `${contact.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: `${contact.color}20`,
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: contact.color,
                    flexShrink: 0
                  }}>
                    {contact.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#9ca3af',
                      marginBottom: '0.25rem'
                    }}>
                      {contact.name}
                    </h4>
                    <p style={{
                      fontSize: '0.9375rem',
                      fontWeight: '500',
                      color: '#fff',
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            © 2025 Muhammad Iqbal Bayuaji. All rights reserved.
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #contact {
            padding: 3rem 1.5rem !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
