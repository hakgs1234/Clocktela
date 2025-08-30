import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark'); localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark'); localStorage.setItem('theme', 'light')
    }
  }, [dark])
  return (
    <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-glow transition glass">
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
