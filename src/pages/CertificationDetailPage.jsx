import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiExternalLink, HiOutlineBadgeCheck } from 'react-icons/hi';

const CertificationDetailPage = () => {
  const { id } = useParams();

  // Certification data - in a real app, this would come from an API or context
  const certifications = [
    {
      id: 1,
      title: 'AI Productivity and AI API Integration for Developers',
      organizer: 'Hacktiv8',
      date: '10/30/2024',
      type: 'Programming',
      description: 'This comprehensive certification program covers AI productivity tools and API integration techniques for modern developers. The course includes hands-on projects with various AI APIs, best practices for integrating AI services into applications, and strategies for leveraging AI to enhance developer productivity. Participants learn to work with popular AI platforms, implement natural language processing, and build intelligent applications.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      credentialCode: 'HAC-AI-2024-001234',
      credentialUrl: '#'
    },
    {
      id: 2,
      title: 'TOEIC Certificate',
      organizer: 'ETS (Educational Testing Service)',
      date: '11/22/2024',
      type: 'Language',
      description: 'The TOEIC (Test of English for International Communication) is a standardized test that measures English language proficiency in a professional context. This certification demonstrates the ability to communicate effectively in English in business, commerce, and industry settings. The test evaluates listening and reading comprehension skills, assessing the candidate\'s ability to understand spoken and written English in workplace scenarios.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      credentialCode: 'TOEIC-2024-567890',
      credentialUrl: '#'
    },
    {
      id: 3,
      title: 'Junior Web Developer Competency Certification',
      organizer: 'BNSP (Indonesian Professional Certification Authority)',
      date: '1/22/2025',
      type: 'Programming',
      description: 'This professional competency certification is issued by the Indonesian Professional Certification Authority (BNSP) through Media Informatika Professional Certification Institute. The certification validates competencies in web development including HTML, CSS, JavaScript, responsive design, and modern web development frameworks. It demonstrates proficiency in building functional, accessible, and user-friendly web applications according to industry standards.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
      credentialCode: 'BNSP-JWD-2025-112233',
      credentialUrl: '#'
    },
    {
      id: 4,
      title: 'React Developer Certification',
      organizer: 'Meta',
      date: '08/15/2024',
      type: 'Programming',
      description: 'Advanced React certification covering hooks, context, performance optimization, and best practices for building scalable applications. This certification demonstrates expertise in React ecosystem including state management, component lifecycle, custom hooks, and modern React patterns. Participants complete real-world projects and demonstrate proficiency in building production-ready React applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      credentialCode: 'META-REACT-2024-445566',
      credentialUrl: '#'
    },
    {
      id: 5,
      title: 'AWS Cloud Practitioner',
      organizer: 'Amazon Web Services',
      date: '07/10/2024',
      type: 'Cloud Computing',
      description: 'Foundational certification demonstrating cloud computing knowledge and AWS services understanding. This certification validates the ability to explain AWS Cloud concepts, AWS services, security, architecture, pricing, and support. It covers core AWS services including compute, network, databases, and storage, as well as AWS deployment and operation best practices.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      credentialCode: 'AWS-CP-2024-778899',
      credentialUrl: '#'
    },
    {
      id: 6,
      title: 'Mobile App Development with Flutter',
      organizer: 'Google',
      date: '06/05/2024',
      type: 'Mobile Development',
      description: 'Comprehensive certification in Flutter framework for building cross-platform mobile applications. This certification covers Flutter fundamentals, widget composition, state management, navigation, API integration, and deployment to both iOS and Android platforms. Participants demonstrate proficiency in building beautiful, natively compiled applications from a single codebase.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      credentialCode: 'GOOGLE-FLUTTER-2024-990011',
      credentialUrl: '#'
    }
  ];

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
              justifyContent: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              color: '#60a5fa',
              padding: '0.7rem 1.5rem',
              borderRadius: '0.75rem',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              border: '2px solid rgba(96, 165, 250, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(96, 165, 250, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <HiExternalLink size={22} />
            View on Google Drive
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationDetailPage;
