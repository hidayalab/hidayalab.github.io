import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../contexts/LanguageContext'

const EMAIL = 'hidayasoft@gmail.com'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-custom">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400 mb-6">
            {t.contact.eyebrow}
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink-900 dark:text-white mb-7">
            {t.contact.title}
          </h2>

          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl mx-auto mb-10">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's build something")}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 hover:bg-ink-800 dark:bg-white dark:hover:bg-ink-100 text-white dark:text-ink-900 font-semibold py-4 px-9 transition-all duration-300 hover:-translate-y-0.5 shadow-soft group"
            >
              {t.contact.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-base font-medium text-ink-700 dark:text-ink-200 hover:text-primary-700 dark:hover:text-primary-300 transition-colors underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}