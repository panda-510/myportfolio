import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { data } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const typed = useTypewriter(data.personal.taglines, { speed: 70, pause: 2200 })

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center mesh-bg overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-cyan-500/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Location */}
            <motion.div {...fadeUp(0.15)} className="flex items-center gap-1.5 mb-5">
              <MapPin size={12} className="text-slate-500" />
              <span className="font-mono text-xs text-slate-500">{data.personal.location}</span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.2)} className="mb-4">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-none">
                <span className="text-white glitch" data-text="Aditya">Aditya</span>
                <br />
                <span className="text-white glitch" data-text="Panda">Panda</span>
                <span className="text-cyan-400 glow-cyan-text">.</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div {...fadeUp(0.3)} className="mb-3">
              <p className="font-display text-xl sm:text-2xl text-slate-300 font-500">
                {data.personal.title}
              </p>
            </motion.div>

            {/* Typewriter */}
            <motion.div {...fadeUp(0.35)} className="mb-8 h-8 flex items-center">
              <span className="font-mono text-sm text-slate-500 mr-2">$</span>
              <span className="font-mono text-sm text-cyan-400">{typed}</span>
              <span className="font-mono text-cyan-400 animate-[blink_1s_step-end_infinite] ml-0.5">█</span>
            </motion.div>

            {/* Summary */}
            <motion.p {...fadeUp(0.4)} className="text-slate-400 text-sm leading-relaxed max-w-lg mb-10 font-body">
              {data.personal.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-cyan-400 text-obsidian-950 text-sm font-mono font-500 rounded-lg hover:bg-cyan-300 transition-colors glow-cyan"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={15} />
                Connect
              </motion.a>
              <motion.a
                href={`mailto:${data.personal.email}`}
                className="group flex items-center gap-2 px-6 py-3 border border-cyan-400/30 text-cyan-400 text-sm font-mono rounded-lg hover:bg-cyan-400/8 transition-colors"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={15} />
                Email me
              </motion.a>
              <motion.a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 text-slate-400 rounded-lg hover:text-white hover:border-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Stats card + terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {data.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="glass border-animated rounded-xl p-5 group hover:border-cyan-400/20 transition-all duration-300"
                >
                  <div className="text-3xl font-display font-800 text-cyan-400 glow-cyan-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/2">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="font-mono text-xs text-slate-500 ml-2">aditya@dev ~ whoami</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2">
                <Line label="name" value="Aditya Panda" color="cyan" />
                <Line label="role" value="Software Engineer @ NTT DATA" color="emerald" />
                <Line label="stack" value="React · Node · Python · Flutter" color="amber" />
                <Line label="focus" value="Payments · AI/ML · APIs" color="cyan" />
                <Line label="edu" value="B.E. Cyber Security, Mumbai Univ." color="emerald" />
                <Line label="award" value="🏆 Best Rookie 2024" color="amber" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Line({ label, value, color }) {
  const colors = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
  }
  return (
    <div className="flex gap-3">
      <span className="text-slate-600 w-12 shrink-0">{label}:</span>
      <span className={colors[color]}>{value}</span>
    </div>
  )
}
