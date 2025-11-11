import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import CertificationsPage from './pages/CertificationsPage'
import CertificationDetailPage from './pages/CertificationDetailPage'
import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #001a33 50%, #0a0a1a 75%, #000000 100%)',
      color: '#fff', 
      margin: 0, 
      padding: 0 
    }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/certifications/:id" element={<CertificationDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
