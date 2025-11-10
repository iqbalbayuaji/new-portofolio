import { VscTerminal } from 'react-icons/vsc';

const Capabilities = () => {
  const capabilities = [
    {
      id: 1,
      icon: '</>',
      title: 'Front-End Developer',
      description: 'Creating stunning user interfaces with modern frameworks',
      skills: ['React','Tailwindcss']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Developer',
      description: 'Crafting seamless mobile experiences for iOS and Android platforms',
      skills: ['Flutter', 'GetX']
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user experiences',
      skills: ['Figma']
    }
  ];

  return (
    <section id="capabilities" style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 5rem',
      background: 'rgba(10, 10, 26, 1)',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '500',
            marginBottom: '1rem',
            lineHeight: 1,
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
              <VscTerminal style={{
                background: 'linear-gradient(to right, #fff, #c9ced6ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fill: 'url(#gradient-capabilities)'
              }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-capabilities" x1="0%" y1="0%" x2="100%" y2="0%">
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
            }}>./ capabilities.dart</span>
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(to right, #c9ced6ff, #60a5fa)',
            margin: '0 auto'
          }}></div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }} className="capabilities-grid">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="capability-card"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
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
              {/* Icon */}
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                marginBottom: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {capability.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '0.75rem'
              }}>
                {capability.title}
              </h3>

              {/* Description */}
              <p style={{
                color: '#9ca3af',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {capability.description}
              </p>

              {/* Skills Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {capability.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#d1d5db',
                      padding: '0.375rem 0.875rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#d1d5db';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Capabilities;
