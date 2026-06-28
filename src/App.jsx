import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HifzQalbPage from './pages/HifzQalb'

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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={isBangla ? 'https://hidayasoft.com/?lang=bn' : 'https://hidayasoft.com/'} />
        <meta property="og:site_name" content="HidayaSoft" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:image" content="https://hidayasoft.com/logo.png" />
        <meta property="og:image:alt" content="HidayaSoft — Digital Solutions for the Ummah" />
        <meta property="og:locale" content={isBangla ? 'bn_BD' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content="https://hidayasoft.com/logo.png" />
        <link rel="canonical" href={isBangla ? 'https://hidayasoft.com/?lang=bn' : 'https://hidayasoft.com/'} />
        <link rel="alternate" href="https://hidayasoft.com/" hreflang="en" />
        <link rel="alternate" href="https://hidayasoft.com/?lang=bn" hreflang="bn" />
        <link rel="alternate" href="https://hidayasoft.com/" hreflang="x-default" />
      </Helmet>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Impact />
              <Contact />
            </>
          } />
          <Route path="/hifzqalb" element={<HifzQalbPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App