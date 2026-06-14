import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import BrandMark from './BrandMark'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.impact, href: '#impact' },
    { name: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'header-blur shadow-soft' : 'header-blur'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#home" className="flex items-center gap-2.5 group">
            <BrandMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[18deg]" />
            <span className="text-xl font-display font-extrabold tracking-tight text-ink-900 dark:text-white">
              Hidaya<span className="text-gradient">Soft</span>
            </span>
          </a>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="mx-2 h-6 w-px bg-ink-100 dark:bg-ink-700" />
            <LanguageToggle />
            <ThemeToggle />
            <a href="#contact" className="btn-primary ml-2 !py-2 !px-5 text-sm">
              {t.nav.getInTouch}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-ink-700 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-ink-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1 border-t border-ink-100 dark:border-ink-800">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-ink-700 dark:text-ink-200 hover:bg-primary-50 dark:hover:bg-ink-800 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full mt-2"
              >
                {t.nav.getInTouch}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}