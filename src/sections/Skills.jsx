import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { data } from '../data'

function SkillBar({ skill, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const colorMap = {
    cyan: { bar: 'bg-gradient-to-r from-cyan-500 to-cyan-400', text: 'text-cyan-400', glow: 'shadow-cyan-400/30' },
    emerald: { bar: 'bg-gradient-to-r from-emerald-500 to-emerald-400', text: 'text-emerald-400', glow: 'shadow-emerald-400/30' },
    amber: { bar: 'bg-gradient-to-r from-amber-500 to-amber-400', text: 'text-amber-400', glow: 'shadow-amber-400/30' },
  }
  const c = colorMap[skill.color]

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-slate-300">{skill.name}</span>
        <span className={`font-mono text-xs ${c.text}`}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`skill-bar-inner h-full ${c.bar} rounded-full shadow-sm ${c.glow}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ title, skills, icon, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 border-animated"
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg">{icon}</span>
        <h3 className="font-display font-600 text-white text-sm">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const groups = [
    { title: 'Languages', skills: data.skills.languages, icon: '⟨/⟩', delay: 0 },
    { title: 'Frontend & Mobile', skills: data.skills.frontend, icon: '◈', delay: 0.1 },
    { title: 'Backend & AI', skills: data.skills.backend, icon: '⚡', delay: 0.2 },
    { title: 'Databases', skills: data.skills.databases, icon: '◉', delay: 0.3 },
  ]

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-label mb-3">// tech arsenal</p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white">
            Skills
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-emerald-400 to-transparent" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {groups.map((g) => (
            <SkillGroup key={g.title} {...g} />
          ))}
        </div>

        {/* Tools chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <p className="font-mono text-xs text-slate-500 mb-4 uppercase tracking-wider">// tools & practices</p>
          <div className="flex flex-wrap gap-2">
            {data.skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 text-xs font-mono hover:border-cyan-400/30 hover:text-cyan-400 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
