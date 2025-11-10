import { useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleMouseMove}
      style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 5rem',
      background: 'transparent',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        alignItems: 'center'
      }} className="about-grid">
        
        {/* Left Side - Text Content */}
        <div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '500',
            marginBottom: '2rem',
            lineHeight: 1.5,
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
              <BiCodeAlt style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient-about)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-about" x1="0%" y1="0%" x2="100%" y2="0%">
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
            }}>./ about.dart</span>
          </h2>

          <div style={{
            color: '#d1d5db',
            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Hi! I'm <strong style={{ color: '#fff' }}>Muhammad Iqbal Bayuaji</strong>, I am a vocational high school student at SMKN 8 Semarang majoring in Software Engineering, with a strong interest and foundational skills in <strong style={{ color: '#fff' }}>Mobile Application</strong> and <strong style={{ color: '#fff' }}>Front-End Web Development</strong>. I am passionate about learning new technologies and taking on real-world challenges. Through school projects and independent learning, I have gained practical experience in Web Development, Mobile development, and project collaboration.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
          </div>
        </div>

        {/* Right Side - Profile Photo (will be added) */}
        <div className="about-photo-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '0',
          paddingLeft: '8rem'
        }}>
          <div className="about-photo" style={{
            width: '280px',
            height: '280px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: '#9ca3af',
            overflow: 'hidden',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            {/* Replace this with your profile photo */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
              <div>Profile Photo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .about-grid {
          grid-template-columns: 1fr !important;
        }

        .about-photo-container {
          padding-left: 0 !important;
          justify-content: center !important;
          margin-top: 2rem;
        }

        .about-photo {
          width: 200px !important;
          height: 200px !important;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .about-photo-container {
            padding-left: 2rem !important;
            margin-top: 0;
          }

          .about-photo {
            width: 240px !important;
            height: 240px !important;
          }
        }

        @media (min-width: 1024px) {
          .about-photo-container {
            padding-left: 8rem !important;
          }

          .about-photo {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
