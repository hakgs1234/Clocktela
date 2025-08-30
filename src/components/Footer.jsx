import { site } from '../data/site'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react'
import { useState } from 'react'
import { cn, storage, analytics } from '../lib/utils'

export default function Footer(){
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      const list = storage.get('newsletter', [])
      if (!list.includes(email)) {
        list.push(email)
        storage.set('newsletter', list)
        analytics.track('newsletter_signup', { email })
      }
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const footerLinks = {
    company: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' }
    ],
    services: [
      { label: 'Custom Software', to: '/services' },
      { label: 'AI & Automation', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
      { label: 'Consulting', to: '/services' }
    ],
    resources: [
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Documentation', to: '/docs' },
      { label: 'API Reference', to: '/api' },
      { label: 'Support', to: '/support' }
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
      { label: 'GDPR', to: '/gdpr' }
    ]
  }

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
    { label: 'Twitter', href: 'https://x.com/', icon: Twitter }
  ]

  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl shadow-glow flex items-center justify-center overflow-hidden">
                <img src="/fav.png" alt="Clocktela Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl gradient-text">Clocktela</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-md">
              {site.tagline} We help businesses transform their ideas into powerful, scalable software solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${site.footer.email}`} className="hover:text-brand transition-colors">
                  {site.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>{site.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-brand transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Get the latest insights on software development, AI trends, and industry news.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
              />
              <button 
                type="submit"
                className="btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            {subscribed && (
              <p className="text-green-600 dark:text-green-400 mt-3 text-sm">
                Thanks for subscribing! 🎉
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Clocktela. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.label}
                  to={link.to} 
                  className="text-zinc-500 dark:text-zinc-400 hover:text-brand transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Clocktela
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
