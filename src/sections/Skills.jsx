import { motion } from 'framer-motion'
import { data } from '../data'

const groups = [
  ['Languages', 'languages'],
  ['Frontend & Mobile', 'frontend'],
  ['Backend & APIs', 'backend'],
  ['Databases', 'databases'],
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Core Stack</p>
          <h2 className="section-title">Technologies I work with regularly.</h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {groups.map(([title, key], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface-card p-5"
            >
              <p className="section-kicker">{title}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {data.skills[key].map((skill) => (
                  <span key={skill.name} className="tag-chip skill-chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="surface-card p-5 mt-5"
        >
          <p className="section-kicker">Tools & Practices</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.skills.tools.map((tool) => (
              <span key={tool} className="tag-chip">{tool}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
