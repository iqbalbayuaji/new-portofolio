import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiExternalLink, HiOutlineBadgeCheck } from 'react-icons/hi';
import { certificationsData } from '../data/certificationsData';

const CertificationDetailPage = () => {
  const { id } = useParams();

  // Certification data - in a real app, this would come from an API or context
  const certifications = certificationsData;

  const certification = certifications.find(c => c.id === parseInt(id));

  if (!certification) {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Certification Not Found</h1>
          <Link to="/certifications" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            ← Back to Certifications
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'Programming':
        return '#3b82f6';
      case 'Language':
        return '#10b981';
      case 'Cloud Computing':
        return '#f59e0b';
      case 'Mobile Development':
        return '#8b5cf6';
      default:
        return '#60a5fa';
    }
  };

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
          to="/certifications"
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
          Back to Certifications
        </Link>

        {/* Certification Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          {certification.title}
        </h1>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{certification.date}</span>
          <span style={{ color: '#4b5563' }}>•</span>
          <span style={{
            backgroundColor: `${getTypeColor(certification.type)}15`,
            color: getTypeColor(certification.type),
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '600',
            border: `1px solid ${getTypeColor(certification.type)}30`
          }}>
            {certification.type}
          </span>
          <span style={{ color: '#4b5563' }}>•</span>
          <span style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            {certification.organizer}
          </span>
        </div>

        {/* Certification Image */}
        <div style={{
          width: '100%',
          height: 'clamp(300px, 50vh, 500px)',
          borderRadius: '1rem',
          overflow: 'hidden',
          marginBottom: '3rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img
            src={certification.image}
            alt={certification.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Description */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            About This Certification
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#d1d5db',
            lineHeight: 1.8
          }}>
            {certification.description}
          </p>
        </section>

        {/* Credential Code */}
        <section style={{
          marginBottom: '2rem',
          // backgroundColor: 'rgba(15, 23, 42, 0.6)',
          // padding: '2rem',
          // borderRadius: '1rem',
          // border: '2px solid rgba(96, 165, 250, 0.3)',
          // backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative corner accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            // background: 'radial-gradient(circle at top right, rgba(96, 165, 250, 0.15), transparent)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <HiOutlineBadgeCheck 
              size={32}
              style={{
                color: '#fff',
                flexShrink: 0
              }}
            />
            <h3 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: '600',
              color: '#fff',
              margin: 0
            }}>
              Credential ID
            </h3>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem 1.25rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(96, 165, 250, 0.2)'
          }}>
            <p style={{
              fontSize: '1.25rem',
              color: '#60a5fa',
              fontWeight: '600',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
              margin: 0,
              textAlign: 'left'
            }}>
              {certification.credentialCode}
            </p>
          </div>
        </section>

        {/* View Certificate Button */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <a
            href={certification.credentialUrl}
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
            View on Google Drive
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationDetailPage;
