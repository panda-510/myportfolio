import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { useCursor } from './hooks/useCursor'

export default function App() {
  const { dotRef, ringRef } = useCursor()

  // Prevent layout shift on load
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      {/* Custom cursor — hidden on touch devices */}
      <div className="hidden md:block">
        <div ref={dotRef} className="cursor-dot" />
        <div ref={ringRef} className="cursor-ring" />
      </div>

      {/* Atmospheric overlays */}
      <div className="noise-overlay" />
      <div className="scanline" />

      {/* Canvas background */}
      <Background />

      {/* App shell */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          {/* Divider */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          </div>

          <Experience />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
          </div>

          <Projects />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
          </div>

          <Skills />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
          </div>

          <Education />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
          </div>

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
