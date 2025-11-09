import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      {/* Add more sections here later: About, Projects, Skills, Contact */}
    </div>
  )
}

export default App
