import { motion } from 'framer-motion'
import { data } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader kicker="Experience" title="Work that delivered measurable outcomes." />

        <div className="grid gap-5">
          {data.experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="surface-card p-6 sm:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="section-kicker">{item.company}</p>
                  <h3 className="text-2xl font-display mt-2">{item.role}</h3>
                  {item.badge && <span className="info-chip mt-4 inline-flex">{item.badge}</span>}
                </div>

                <div className="text-sm muted-text md:text-right">
                  <p>{item.period}</p>
                  <p className="mt-1">{item.location}</p>
                  <p className="mt-1">{item.type}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="list-card">
                    <span className="list-dot" />
                    <p className="body-copy">{highlight}</p>
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

function SectionHeader({ kicker, title }) {
  return (
    <div className="section-header">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
