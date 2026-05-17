import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { data } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const typed = useTypewriter(data.personal.taglines, { speed: 70, pause: 2000 })

  return (
    <section id="about" className="hero-section">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-28 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div>
            <motion.div {...fadeUp(0.05)} className="eyebrow-pill mb-6">
              <span className="status-dot" />
              Open to software engineering opportunities
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 muted-text text-sm mb-6">
              <MapPin size={15} />
              <span>{data.personal.location}</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] max-w-3xl"
            >
              Building modern product systems with a clean engineering mindset.
            </motion.h1>

            <motion.p {...fadeUp(0.22)} className="hero-subtitle mt-5 max-w-2xl">
              {data.personal.subtitle}
            </motion.p>

            <motion.p {...fadeUp(0.28)} className="body-copy mt-6 max-w-2xl">
              {data.personal.summary}
            </motion.p>

            <motion.div {...fadeUp(0.34)} className="type-strip mt-6">
              <span className="type-label">Now focused on</span>
              <span className="type-value">{typed}</span>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mt-8">
              <a href={`mailto:${data.personal.email}`} className="button-primary">
                <Mail size={16} />
                Email me
              </a>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="surface-card hero-panel"
          >
            <p className="section-kicker">Snapshot</p>
            <div className="space-y-5 mt-5">
              {data.stats.map((stat) => (
                <div key={stat.label} className="hero-stat-row">
                  <div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="muted-text text-sm">{stat.label}</p>
                  </div>
                  <ArrowRight size={18} className="accent-text" />
                </div>
              ))}
            </div>

            <div className="hero-mini-card mt-6">
              <p className="section-kicker">Current role</p>
              <h2 className="text-xl font-semibold mt-2">{data.experience[0].role}</h2>
              <p className="body-copy mt-2">{data.experience[0].company}</p>
              <p className="muted-text text-sm mt-3">{data.experience[0].period}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
