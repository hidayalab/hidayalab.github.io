import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import {
  AmanaPreview,
  ErpPreview,
  SchoolPreview,
  HifzPreview,
} from './ProductPreviews'

const STATUS_STYLES = {
  Live: 'bg-primary-700 text-primary-50',
  Building: 'bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300',
  'In progress': 'bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300',
}

export default function Products() {
  const products = [
    {
      title: 'Amana Fund',
      tagline: 'Interest-free micro-finance',
      description:
        'Qard Hasan loans that help families build a lasting source of income. We built Amana\u2019s website and management software.',
      status: 'Live',
      preview: AmanaPreview,
      href: 'https://www.amanafund.org/',
      external: true,
    },
    {
      title: 'HidayaERP',
      tagline: 'Finance, simplified',
      description:
        'Inventory, customers, suppliers, purchases, sales and payments — with a customized dashboard to watch every flow.',
      status: 'Building',
      preview: ErpPreview,
    },
    {
      title: 'School Management',
      tagline: 'For schools & investors',
      description:
        'Track teachers, students, staff and investor records — with attendance, expenses, and salary & tuition handling.',
      status: 'Building',
      preview: SchoolPreview,
    },
    {
      title: 'Hifzul Qalb',
      tagline: 'A friend for your hifz',
      description:
        'For those memorizing the Qur\u2019an and revising again and again — a companion that reminds you of the verses you forget.',
      status: 'In progress',
      preview: HifzPreview,
    },
  ]

  return (
    <section id="products" className="section-padding bg-[#f6f2ea] dark:bg-ink-950">
      <div className="container-custom">
        <Reveal className="max-w-3xl mb-14">
          <span className="eyebrow mb-5">What we build</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-primary-900 dark:text-white">
            Software in service of faith and community.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={(index % 3) * 100} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] bg-[#ece7d9] dark:bg-ink-900 overflow-hidden">
                {/* Preview */}
                <div className="relative px-6 pt-12 pb-6">
                  <span
                    className={`chip absolute left-5 top-5 z-10 ${STATUS_STYLES[product.status]}`}
                  >
                    {product.status}
                  </span>
                  <product.preview />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-7 pb-8">
                  <h3 className="font-serif text-2xl text-primary-900 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600 dark:text-gold-400">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {product.description}
                  </p>
                  <a
                    href={product.href || '#contact'}
                    {...(product.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-800 dark:text-primary-300"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
