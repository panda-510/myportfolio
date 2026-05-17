import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check } from 'lucide-react'
import { data } from '../data'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(data.personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      label: 'Email',
      value: data.personal.email,
      href: `mailto:${data.personal.email}`,
      icon: Mail,
      color: 'cyan',
      action: copyEmail,
      actionIcon: copied ? Check : Copy,
      actionLabel: copied ? 'Copied!' : 'Copy',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aditya-panda',
      href: data.personal.linkedin,
      icon: Linkedin,
      color: 'emerald',
    },
    {
      label: 'GitHub',
      value: 'github.com/aditya510',
      href: data.personal.github,
      icon: Github,
      color: 'amber',
    },
  ]

  const colorMap = {
    cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-400/8', border: 'border-cyan-400/20' },
    emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-400/8', border: 'border-emerald-400/20' },
    amber: { icon: 'text-amber-400', bg: 'bg-amber-400/8', border: 'border-amber-400/20' },
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <p className="section-label mb-4">// get in touch</p>
          <h2 className="font-display text-4xl sm:text-6xl font-800 text-white leading-none">
            Let's build
            <span className="text-cyan-400 glow-cyan-text"> something</span>
            <br />
            <span className="text-slate-400">great together.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-lg mx-auto mb-12 leading-relaxed"
        >
          I'm open to SDE-1 opportunities, freelance projects, and interesting technical conversations.
          Based in <span className="text-white">{data.personal.location}</span>, working globally.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {links.map((link, i) => {
            const c = colorMap[link.color]
            const Icon = link.icon
            const ActionIcon = link.actionIcon

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className={`glass rounded-2xl p-5 border ${c.border} border-animated group`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={18} className={c.icon} />
                </div>
                <p className="font-mono text-xs text-slate-500 mb-1">{link.label}</p>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`font-mono text-xs ${c.icon} hover:underline break-all`}
                >
                  {link.value}
                </a>

                <div className="flex gap-2 mt-4 justify-center">
                  {link.href.startsWith('http') && (
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${c.border} ${c.icon} text-xs font-mono hover:${c.bg} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Send size={11} />
                      Visit
                    </motion.a>
                  )}
                  {link.action && (
                    <motion.button
                      onClick={link.action}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${c.border} ${c.icon} text-xs font-mono hover:${c.bg} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ActionIcon size={11} />
                      {link.actionLabel}
                    </motion.button>
                  )}
                  {!link.href.startsWith('http') && !link.action && (
                    <motion.a
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${c.border} ${c.icon} text-xs font-mono hover:${c.bg} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Send size={11} />
                      Send
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-slate-500 font-mono text-xs"
        >
          <MapPin size={12} />
          {data.personal.location} · Available remotely worldwide
        </motion.div>
      </div>
    </section>
  )
}
