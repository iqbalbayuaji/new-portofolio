import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
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
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Capabilities />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
