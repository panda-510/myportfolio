import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { data } from '../data'

const links = [
  {
    label: 'Email',
    value: data.personal.email,
    href: `mailto:${data.personal.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aditya-panda-520841215',
    href: data.personal.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Adi512',
    href: data.personal.github,
    icon: Github,
  },
  {
    label: 'Phone',
    value: data.personal.phone,
    href: `tel:${data.personal.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="surface-card contact-panel p-6 sm:p-8"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title max-w-2xl">Let’s keep it simple: if there’s a role, project, or collaboration worth discussing, reach out.</h2>
          <p className="body-copy mt-4 max-w-2xl">
            I’m currently based in {data.personal.location} and open to software engineering opportunities, freelance work, and strong product teams.
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {links.map((link, index) => {
              const Icon = link.icon

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="surface-subcard p-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                  <p className="muted-text text-sm mt-4">{link.label}</p>
                  <p className="text-sm sm:text-base font-medium mt-1 break-all">{link.value}</p>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
