import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const valueIcons = [Heart, ShieldCheck, Sparkles, Users]
  const values = t.about.values
  const statColors = [
    'text-primary-700 dark:text-primary-300',
    'text-primary-700 dark:text-primary-300',
    'text-gold-600 dark:text-gold-400',
    'text-primary-700 dark:text-primary-300',
  ]

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-4">{t.about.eyebrow}</span>
          <h2 className="heading-xl text-3xl md:text-5xl mb-5">
            {t.about.titlePre}
            <span className="text-gradient">{t.about.titleHighlight}</span>
            {t.about.titlePost}
          </h2>
          <p className="text-lg text-ink-600 dark:text-ink-300">{t.about.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <Reveal>
            <h3 className="font-display font-bold text-2xl text-ink-900 dark:text-white mb-5">
              {t.about.missionTitle}
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-5">
              {t.about.missionP1Pre}
              <span className="font-semibold text-primary-700 dark:text-primary-300">
                {t.about.missionP1Bold}
              </span>
              {t.about.missionP1Post}
            </p>
            <p className="text-ink-600 dark:text-ink-300 mb-6">{t.about.missionP2}</p>
            <div className="glass rounded-2xl p-6 border-primary-100 dark:border-ink-700">
              <p className="text-primary-800 dark:text-primary-200 font-arabic text-xl text-center leading-relaxed">
                وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
              </p>
              <p className="text-ink-500 dark:text-ink-400 text-sm text-center mt-2 italic">
                {t.about.verseTrans}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="aurora bg-primary-300 h-40 w-40 -top-6 -right-6 opacity-40" />
              <div className="glass rounded-3xl p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-5">
                  {t.about.stats.map((s, i) => (
                    <div
                      key={s.l}
                      className="bg-white dark:bg-ink-800 rounded-2xl p-5 border border-ink-100 dark:border-ink-700"
                    >
                      <div className={`text-3xl font-display font-extrabold ${statColors[i]}`}>{s.v}</div>
                      <div className="text-sm text-ink-500 dark:text-ink-400 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = valueIcons[index]
            return (
              <Reveal key={value.title} delay={index * 80}>
                <div className="card card-hover p-6 h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}