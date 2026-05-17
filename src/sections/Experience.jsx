import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'
import { data } from '../data'

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
            exp.color === 'cyan'
              ? 'border-cyan-400/40 bg-cyan-400/8 text-cyan-400'
              : 'border-emerald-400/40 bg-emerald-400/8 text-emerald-400'
          }`}
        >
          <Briefcase size={16} />
        </div>
        {index < data.experience.length - 1 && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-cyan-400/20 to-transparent min-h-12" />
        )}
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-6 border-animated group hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-display font-700 text-white text-lg">{exp.role}</h3>
              {exp.badge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.4, type: 'spring' }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono bg-amber-400/10 border border-amber-400/30 text-amber-400"
                >
                  <Award size={10} />
                  {exp.badge}
                </motion.span>
              )}
            </div>
            <p className={`font-display font-600 text-sm ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`}>
              {exp.company}
            </p>
          </div>

          <div className="flex flex-col gap-1 items-end text-right">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <Calendar size={11} />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <MapPin size={11} />
              {exp.location}
            </div>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
              exp.type === 'Full-time'
                ? 'border-cyan-400/20 bg-cyan-400/8 text-cyan-400'
                : 'border-emerald-400/20 bg-emerald-400/8 text-emerald-400'
            }`}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2 + i * 0.06 }}
              className="flex items-start gap-3 text-sm text-slate-400"
            >
              <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400'
              }`} />
              <span className="leading-relaxed">{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-cyan-500/4 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">// work history</p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white">
            Experience
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {data.experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
