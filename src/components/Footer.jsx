import { data } from '../data'

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 sm:px-6 py-8">
      <div className="surface-card px-5 py-4 flex items-center justify-center text-sm">
        <p className="muted-text text-center">© {new Date().getFullYear()} {data.personal.name}</p>
      </div>
    </footer>
  )
}
