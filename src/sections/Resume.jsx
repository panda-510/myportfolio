import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { data } from '../data'

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="surface-card resume-panel p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-kicker">Resume</p>
              <h2 className="section-title">Download my latest resume.</h2>
              <p className="body-copy mt-4">
Want the complete picture? The PDF version includes detailed information about my professional experience, projects, skills, and educational background.              </p>
            </div>

            <div className="surface-subcard resume-download-card p-5 sm:p-6">
              <div className="resume-file-row">
                <div className="resume-file-icon">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-medium">Aditya_Panda_Resume.pdf</p>
                  <p className="muted-text text-sm mt-1">PDF resume</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={data.personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  <FileText size={16} />
                  Preview
                </a>
                <a
                  href={data.personal.resume}
                  download="Aditya_Panda_Resume.pdf"
                  className="button-primary"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
