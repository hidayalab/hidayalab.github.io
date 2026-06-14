import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Code2 } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  const stats = [
    { value: '4+', label: 'Products for the Ummah' },
    { value: '100%', label: 'Faith-conscious' },
    { value: '∞', label: 'Sadaqah jariyah' },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 hero-radial dot-grid"
    >
      {/* Aurora glows */}
      <div className="aurora bg-primary-400 h-72 w-72 -top-10 left-1/4" />
      <div className="aurora bg-gold-300 h-64 w-64 top-20 right-10" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-sm md:text-base font-arabic text-primary-700 dark:text-primary-300 mb-4">
              ﷽
            </p>
            <span className="eyebrow justify-center mb-6 glass px-4 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              Digital solutions for the Ummah
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="heading-xl text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-6">
              Technology with
              <span className="block shimmer-text">barakah &amp; purpose</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 max-w-2xl mx-auto mb-9">
              HidayaSoft builds modern, trustworthy software that empowers the Ummah — from
              interest-free microfinance to school and business management, and tools that bring
              hearts closer to the Qur&apos;an.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <a href="#products" className="btn-primary">
                Explore our products
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#impact" className="btn-secondary">
                <HeartHandshake className="h-5 w-5" />
                Our charity commitment
              </a>
            </div>
          </Reveal>
        </div>

        {/* Feature pills */}
        <Reveal delay={280}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Code2, title: 'Modern & smooth', desc: 'Built with current tech and a polished, intuitive experience.' },
              { icon: ShieldCheck, title: 'Trustworthy', desc: 'Privacy-first, ethical, and aligned with Islamic values.' },
              { icon: HeartHandshake, title: 'Purpose-driven', desc: 'Part of our income flows to Amana Fund for charity.' },
            ].map((f) => (
              <div key={f.title} className="card card-hover p-5 text-left">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 dark:bg-ink-700 mb-3">
                  <f.icon className="h-5 w-5 text-primary-600 dark:text-primary-300" />
                </div>
                <h3 className="font-display font-bold text-ink-900 dark:text-white mb-1">{f.title}</h3>
                <p className="text-sm text-ink-500 dark:text-ink-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={340}>
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-extrabold text-gradient">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-ink-500 dark:text-ink-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}