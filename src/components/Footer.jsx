import { motion } from 'framer-motion'
import { data } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-slate-600">
          <span className="text-cyan-400/40">{'<'}</span>
          built with React + Vite + Framer Motion
          <span className="text-cyan-400/40">{'/>'}</span>
        </div>
        <div className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {data.personal.name} · Mumbai, India
        </div>
        <motion.div
          className="font-mono text-xs text-slate-600 flex items-center gap-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Open to work
        </motion.div>
      </div>
    </footer>
  )
}
