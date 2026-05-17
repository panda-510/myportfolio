import { useState, useEffect } from 'react'

export function useTypewriter(texts, { speed = 80, deleteSpeed = 40, pause = 2000 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    if (!texts || texts.length === 0) return

    if (waiting) {
      const t = setTimeout(() => setWaiting(false), pause)
      return () => clearTimeout(t)
    }

    const current = texts[textIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
      }, speed + Math.random() * 30)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      setWaiting(true)
      setDeleting(true)
      return
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
      }, deleteSpeed)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }
  }, [charIndex, deleting, waiting, textIndex, texts, speed, deleteSpeed, pause])

  return displayed
}
