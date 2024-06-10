import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  )
}

export default App
