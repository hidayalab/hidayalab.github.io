import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Reveal from './Reveal'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Faith-first',
      description:
        'Every product is built to respect Islamic values and ethics — beneficial, halal, and sincere in intention.',
    },
    {
      icon: ShieldCheck,
      title: 'Trust & privacy',
      description:
        'We protect our users with privacy-first design and the highest standards of digital amanah (trust).',
    },
    {
      icon: Sparkles,
      title: 'Excellence (Ihsan)',
      description:
        'We pursue ihsan in craft — modern, smooth, and reliable software that people love to use.',
    },
    {
      icon: Users,
      title: 'For the Ummah',
      description:
        'We build for real needs of the community, and give back through charity with every step forward.',
    },
  ]

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-4">About HidayaSoft</span>
          <h2 className="heading-xl text-3xl md:text-5xl mb-5">
            Building <span className="text-gradient">digital solutions</span> for the Ummah
          </h2>
          <p className="text-lg text-ink-600 dark:text-ink-300">
            HidayaSoft is a faith-conscious software studio. We craft modern tools that solve real
            problems for Muslim individuals, businesses, schools, and charities — and we channel part
            of our income back to the community through Amana Fund.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <Reveal>
            <h3 className="font-display font-bold text-2xl text-ink-900 dark:text-white mb-5">
              Our mission
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-5">
              We believe technology should serve humanity while honouring divine guidance. Our journey
              began with <span className="font-semibold text-primary-700 dark:text-primary-300">Amana Fund</span> —
              providing interest-free loans (Qard Hasan) to help families build sustainable sources of
              income. We built their website and management software, and we kept going.
            </p>
            <p className="text-ink-600 dark:text-ink-300 mb-6">
              Today we&apos;re building tools for businesses, schools, and seekers of the Qur&apos;an —
              each designed to be smooth, modern, and inspiring for the community it serves.
            </p>
            <div className="glass rounded-2xl p-6 border-primary-100 dark:border-ink-700">
              <p className="text-primary-800 dark:text-primary-200 font-arabic text-xl text-center leading-relaxed">
                وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
              </p>
              <p className="text-ink-500 dark:text-ink-400 text-sm text-center mt-2 italic">
                &ldquo;And that there is nothing for man except what he strives for.&rdquo; — Qur&apos;an 53:39
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="aurora bg-primary-300 h-40 w-40 -top-6 -right-6 opacity-40" />
              <div className="glass rounded-3xl p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { v: '4+', l: 'Products in motion', c: 'text-primary-600 dark:text-primary-300' },
                    { v: '100%', l: 'Faith-conscious', c: 'text-gradient-gold' },
                    { v: '0%', l: 'Riba (interest)', c: 'text-primary-600 dark:text-primary-300' },
                    { v: '24/7', l: 'Dedication', c: 'text-primary-600 dark:text-primary-300' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="bg-white dark:bg-ink-800 rounded-2xl p-5 border border-ink-100 dark:border-ink-700"
                    >
                      <div className={`text-3xl font-display font-extrabold ${s.c}`}>{s.v}</div>
                      <div className="text-sm text-ink-500 dark:text-ink-400 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="card card-hover p-6 h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-display font-bold text-lg text-ink-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-ink-500 dark:text-ink-400">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}