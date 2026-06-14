import BrandMark from './BrandMark'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const columns = [
    {
      title: t.footer.productsTitle,
      items: [
        { name: 'Amana Fund', href: 'https://www.amanafund.org/' },
        { name: 'HidayaERP', href: '#products' },
        { name: 'School Management', href: '#products' },
        { name: 'Hifzul Qalb', href: '#products' },
      ],
    },
    {
      title: t.footer.connectTitle,
      items: [
        { name: 'hidayasoft@gmail.com', href: 'mailto:hidayasoft@gmail.com' },
        { name: 'About', href: '#about' },
        { name: 'Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="footer-dark">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2 max-w-md">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <BrandMark className="h-9 w-9" />
              <span className="text-2xl font-display font-extrabold text-white">
                HidayaSoft
              </span>
            </a>
            <p className="text-ink-200 text-lg mb-4">{t.footer.tagline}</p>
            <p className="text-ink-400 leading-relaxed">{t.footer.note}</p>
          </div>

          {columns.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3.5">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-ink-200 hover:text-primary-300 transition-colors duration-200"
                    >
                      {t.footer.items[item.name] || item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-800 pt-7 mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-ink-400 text-sm">
              © {currentYear} {t.footer.copyright}
            </p>
            <a
              href="https://hidayasoft.com"
              className="text-ink-400 hover:text-primary-300 text-sm transition-colors"
            >
              hidayasoft.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}