import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('About')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActive(section)
      setMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-lg shadow-black/30' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('about')}
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded border border-cyan-400/40 flex items-center justify-center glow-cyan">
              <span className="font-mono text-cyan-400 text-sm font-bold">AP</span>
            </div>
            <span className="font-display font-700 text-white text-sm hidden sm:block">
              aditya<span className="text-cyan-400">.</span>dev
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {data.nav.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 text-sm font-mono transition-colors ${
                  active === item ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
                whileHover={{ y: -1 }}
              >
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md bg-cyan-400/8 border border-cyan-400/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">
                  {active === item && <span className="text-cyan-400/60 mr-1">//</span>}
                  {item.toLowerCase()}
                </span>
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              ./hire-me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-5 h-px bg-cyan-400"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-5 h-px bg-slate-400"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-5 h-px bg-cyan-400"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass-strong flex flex-col pt-24 pb-8 px-8 border-l border-cyan-400/10"
          >
            <div className="flex flex-col gap-2">
              {data.nav.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(item)}
                  className={`text-left py-3 px-4 rounded-lg font-mono text-sm transition-colors ${
                    active === item
                      ? 'text-cyan-400 bg-cyan-400/8 border border-cyan-400/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/4'
                  }`}
                >
                  <span className="text-cyan-400/40 mr-2">0{i + 1}.</span>
                  {item.toLowerCase()}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/6">
              <p className="font-mono text-xs text-slate-500 mb-3">// connect</p>
              <a
                href={`mailto:${data.personal.email}`}
                className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono"
              >
                {data.personal.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
