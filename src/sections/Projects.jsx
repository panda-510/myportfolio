import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ChevronDown, Zap } from 'lucide-react'
import { data } from '../data'

const colorMap = {
  cyan: {
    accent: 'text-cyan-400',
    border: 'border-cyan-400/20',
    bg: 'bg-cyan-400/6',
    glow: 'hover:shadow-cyan-400/8',
    tag: 'tech-tag',
    dot: 'bg-cyan-400',
    badge: 'border-cyan-400/20 bg-cyan-400/8 text-cyan-400',
  },
  emerald: {
    accent: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/6',
    glow: 'hover:shadow-emerald-400/8',
    tag: 'tech-tag emerald',
    dot: 'bg-emerald-400',
    badge: 'border-emerald-400/20 bg-emerald-400/8 text-emerald-400',
  },
  amber: {
    accent: 'text-amber-400',
    border: 'border-amber-400/20',
    bg: 'bg-amber-400/6',
    glow: 'hover:shadow-amber-400/8',
    tag: 'tech-tag amber',
    dot: 'bg-amber-400',
    badge: 'border-amber-400/20 bg-amber-400/8 text-amber-400',
  },
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const c = colorMap[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-2xl border ${c.border} border-animated hover:shadow-lg ${c.glow} transition-all duration-300 overflow-hidden group`}
    >
      {/* Top gradient bar */}
      <div className={`h-0.5 w-full ${c.bg}`} style={{ background: `linear-gradient(90deg, transparent, var(--${project.color === 'cyan' ? 'cyan' : project.color === 'emerald' ? 'emerald' : 'amber'}), transparent)` }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display font-700 text-white text-lg leading-tight">{project.name}</h3>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge}`}>
                  {project.status}
                </span>
              </div>
              <span className={`text-xs font-mono ${c.accent} mt-0.5 block`}>{project.category}</span>
            </div>
          </div>
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className={`p-2 rounded-lg border ${c.border} ${c.accent} hover:${c.bg} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle details"
          >
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.div>
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className={c.tag}>{tech}</span>
          ))}
        </div>

        {/* Expandable impact */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`pt-4 border-t ${c.border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={12} className={c.accent} />
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Impact metrics</span>
                </div>
                <div className="grid gap-2">
                  {project.impact.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2.5"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      <span className="text-sm text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-emerald-500/4 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">// what i've built</p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white">
            Projects
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          <p className="mt-4 text-slate-500 text-sm font-mono">
            Click <span className="text-cyan-400">↓</span> on any card to see impact metrics
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {data.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
