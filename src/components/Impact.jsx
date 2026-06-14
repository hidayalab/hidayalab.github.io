import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../contexts/LanguageContext'

/* Antique-gold crescent moon with a four-point star. */
function CrescentStar({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8b974" />
          <stop offset="100%" stopColor="#b88a3e" />
        </linearGradient>
      </defs>
      <path d="M118 26a78 78 0 1 0 0 148 62 62 0 1 1 0-148z" fill="url(#moon-grad)" />
      <path
        d="M150 64l6.5 17.5L174 88l-17.5 6.5L150 112l-6.5-17.5L126 88l17.5-6.5z"
        fill="#f3efe6"
      />
    </svg>
  )
}

/* Faint interlocking-circle Islamic pattern. */
function CirclePattern({ className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="impact-circles" width="46" height="46" patternUnits="userSpaceOnUse">
          <circle cx="23" cy="23" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="23" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="46" cy="23" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="23" cy="0" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="23" cy="46" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#impact-circles)" />
    </svg>
  )
}

export default function Impact() {
  const { t } = useLanguage()
  return (
    <section id="impact" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#17294c] via-[#13233f] to-[#0e1b33] px-8 py-14 md:px-16 md:py-20 shadow-glow">
            {/* Geometric circle pattern (left) */}
            <CirclePattern className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[160%] w-[55%] text-white/[0.06]" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#c8a45c]/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b974] mb-5">
                  {t.impact.eyebrow}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.12] text-white mb-6">
                  {t.impact.titlePre}
                  <span className="text-[#d8b974]">{t.impact.titleHighlight}</span>
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-xl mb-9 leading-relaxed">
                  {t.impact.body}
                </p>
                <a
                  href="https://www.amanafund.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f3efe6] hover:bg-white text-[#17294c] font-semibold py-3 px-7 transition-colors duration-300 group"
                >
                  {t.impact.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="hidden lg:flex justify-center">
                <CrescentStar className="h-44 w-44 animate-float" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
