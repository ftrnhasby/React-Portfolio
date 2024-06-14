import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'
import { ContactSection } from './components/ContactSection'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default App
