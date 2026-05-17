import { motion } from 'framer-motion'
import { data } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic background with a security foundation.</h2>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="surface-card p-6 sm:p-7"
          >
            <p className="section-kicker">{data.education.university}</p>
            <h3 className="text-2xl font-display mt-2">{data.education.degree}</h3>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <div className="meta-card">
                <p className="muted-text text-sm">Graduation</p>
                <p className="text-lg font-medium mt-1">{data.education.year}</p>
              </div>
              <div className="meta-card">
                <p className="muted-text text-sm">CGPA</p>
                <p className="text-lg font-medium mt-1">{data.education.cgpa}</p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="surface-card p-6 sm:p-7"
          >
            <p className="section-kicker">Achievement</p>
            <h3 className="text-2xl font-display mt-2">{data.achievements[0].title}</h3>
            <p className="accent-text mt-3">{data.achievements[0].org}</p>
            <p className="body-copy mt-4">{data.achievements[0].description}</p>
            <div className="meta-card mt-6">
              <p className="muted-text text-sm">Year</p>
              <p className="text-lg font-medium mt-1">{data.achievements[0].year}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
