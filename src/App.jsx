import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const { language, t } = useLanguage()
  const isBangla = language === 'bn'

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-100 transition-colors duration-300">
      <Helmet>
        <html lang={language} />
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:locale" content={isBangla ? 'bn_BD' : 'en_US'} />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <link rel="canonical" href={isBangla ? 'https://hidayasoft.com/?lang=bn' : 'https://hidayasoft.com/'} />
        <link rel="alternate" href="https://hidayasoft.com/" hreflang="en" />
        <link rel="alternate" href="https://hidayasoft.com/?lang=bn" hreflang="bn" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App