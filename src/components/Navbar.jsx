import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { site } from '../data/site'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn, analytics } from '../lib/utils'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Track page views
  useEffect(() => {
    analytics.pageView(location.pathname)
  }, [location])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
    setSearchOpen(false)
  }, [location])

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled 
        ? "backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-soft" 
        : "backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200/50 dark:border-zinc-800"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
            <img src="/fav.png" alt="Clocktela Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl gradient-text">Clocktela</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map(n => (
            <NavLink 
              key={n.to} 
              to={n.to} 
              className={({isActive}) =>
                cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  isActive 
                    ? "text-brand font-semibold" 
                    : "text-zinc-600 dark:text-zinc-300 hover:text-brand"
                )
              }
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Button */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <ThemeToggle />
          
          <Link 
            to="/contact" 
            className="btn-primary text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <ThemeToggle />
          
          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 rounded-xl glass hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search Clocktela..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
          <div className="px-4 py-6">
            <nav className="space-y-2">
              {site.nav.map(n => (
                <NavLink 
                  key={n.to} 
                  to={n.to} 
                  className={({isActive}) =>
                    cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                      isActive 
                        ? "bg-brand text-white shadow-glow" 
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
