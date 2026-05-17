import { motion } from 'framer-motion'
import { data } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">A simpler showcase of the products and tools I’ve built.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {data.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="surface-card p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="section-kicker">{project.category}</p>
                  <h3 className="text-2xl font-display mt-2">{project.name}</h3>
                </div>
                <span className="info-chip">{project.status}</span>
              </div>

              <p className="body-copy mt-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>

              <div className="grid gap-2 mt-6">
                {project.impact.map((item) => (
                  <div key={item} className="list-card compact">
                    <span className="list-dot" />
                    <p className="body-copy">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
