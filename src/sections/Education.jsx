import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Shield } from 'lucide-react'
import { data } from '../data'

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-label mb-3">// background</p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white">
            Education & Achievements
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-amber-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-7 border border-amber-400/15 border-animated group"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-400/8 border border-amber-400/20 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-700 text-white leading-snug">
                  {data.education.degree}
                </h3>
                <p className="text-amber-400 text-sm font-mono mt-1">{data.education.university}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-t border-white/6">
                <span className="font-mono text-xs text-slate-500">Graduation</span>
                <span className="font-mono text-xs text-white">{data.education.year}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-white/6">
                <span className="font-mono text-xs text-slate-500">CGPA</span>
                <span className="font-mono text-xs text-amber-400 font-500">{data.education.cgpa}</span>
              </div>
            </div>

            {/* Cyber security emphasis */}
            <div className="mt-5 pt-4 border-t border-white/6">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={12} className="text-cyan-400" />
                <span className="font-mono text-xs text-slate-500">Cybersecurity Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Network Security', 'Cryptography', 'Ethical Hacking', 'SOC Analysis', 'Risk Assessment'].map(area => (
                  <span key={area} className="tech-tag text-xs">{area}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievement card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {data.achievements.map((ach, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 border border-amber-400/15 border-animated group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-float">{ach.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={13} className="text-amber-400" />
                      <span className="font-mono text-xs text-amber-400 uppercase tracking-wider">{ach.year}</span>
                    </div>
                    <h3 className="font-display font-700 text-white text-lg mb-1">{ach.title}</h3>
                    <p className="text-sm text-amber-400/80 font-mono mb-3">{ach.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats summary */}
            <div className="glass rounded-2xl p-5 border border-white/8">
              <p className="font-mono text-xs text-slate-500 mb-4 uppercase tracking-wider">// by the numbers</p>
              <div className="grid grid-cols-2 gap-3">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/3">
                    <div className="font-display font-800 text-xl text-cyan-400 glow-cyan-text">{stat.value}</div>
                    <div className="font-mono text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
