import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { data } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className={`navbar-shell ${scrolled ? 'navbar-solid' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('about')} className="brand-mark" aria-label="Go to top">
            <span className="brand-badge">AP</span>
            <span className="brand-name text-xs sm:text-sm font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase">
              Aditya Panda
            </span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {data.nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="icon-button"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary hidden sm:inline-flex"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="icon-button md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mobile-panel md:hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {data.nav.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link inline-flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link inline-flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
