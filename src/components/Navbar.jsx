import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          color: '#fff',
          textDecoration: 'none'
        }}>
          IQBAL PORTFOLIO
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="nav-links">
          <Link to="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'color 0.3s'
          }} onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
             onMouseLeave={(e) => e.target.style.color = '#fff'}>
            HOME
          </Link>
          <Link to="/projects" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'color 0.3s'
          }} onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
             onMouseLeave={(e) => e.target.style.color = '#fff'}>
            PROJECT
          </Link>
          <Link to="/certifications" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'color 0.3s'
          }} onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
             onMouseLeave={(e) => e.target.style.color = '#fff'}>
            CERTIFICATIONS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          display: 'block',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          padding: '1rem'
        }} className="mobile-menu">
          <Link to="/" style={{ display: 'block', color: '#fff', padding: '0.75rem', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/projects" style={{ display: 'block', color: '#fff', padding: '0.75rem', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>PROJECT</Link>
          <Link to="/certifications" style={{ display: 'block', color: '#fff', padding: '0.75rem', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>CERTIFICATIONS</Link>
          <a href="#blog" style={{ display: 'block', color: '#fff', padding: '0.75rem', textDecoration: 'none' }}>BLOG</a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-links {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
