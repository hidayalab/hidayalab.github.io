import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const nextLabel = language === 'en' ? 'বাংলায় দেখুন' : 'View in English'

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center h-10 px-3 rounded-xl bg-primary-50 hover:bg-primary-100 dark:bg-ink-800 dark:hover:bg-ink-700 text-sm font-semibold text-ink-700 dark:text-ink-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-ink-950"
      aria-label={nextLabel}
      title={nextLabel}
    >
      <span className={language === 'en' ? 'text-primary-700 dark:text-primary-300' : 'opacity-60'}>
        EN
      </span>
      <span className="mx-1 text-ink-300 dark:text-ink-600">/</span>
      <span
        className={`font-bangla ${language === 'bn' ? 'text-primary-700 dark:text-primary-300' : 'opacity-60'}`}
      >
        বাং
      </span>
    </button>
  )
}
