'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/contact', label: 'Contact' }
  ]

  // Sur la page d'accueil, le header est transparent au début
  const isHomePage = pathname === '/'
  const headerBackground = isHomePage && !isScrolled 
    ? 'bg-transparent' 
    : 'glass-effect shadow-lg'

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBackground}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover-lift"
          >
            Tandjong Paul Sylvain
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === link.href 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } hover-lift`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden text-white text-2xl hover-lift z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect rounded-b-2xl p-6 animate-fade-in shadow-xl">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 border-l-2 ${
                    pathname === link.href
                      ? 'bg-white/20 text-white border-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10 border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}