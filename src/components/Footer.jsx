import { data } from '../data'

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 sm:px-6 py-8">
      <div className="surface-card px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
        <p className="muted-text">Built with React, Vite, and Framer Motion.</p>
        <p className="muted-text">© {new Date().getFullYear()} {data.personal.name}</p>
      </div>
    </footer>
  )
}
