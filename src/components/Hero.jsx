import { ArrowRight, Star, Code, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-24 geometric-pattern">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary-600 mb-4">
              Assalamu Alaikum wa Rahmatullahi wa Barakatuh
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Building Technology with
              <span className="block text-gradient">Islamic Values</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              HidayaLab combines modern technology with timeless Islamic principles to create 
              software products that serve and empower the Muslim community worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center"
            >
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-elegant p-6">
              <Code className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Built with cutting-edge technologies and best practices</p>
            </div>
            
            <div className="card-elegant p-6">
              <Star className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Islamic Values</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Every product respects and upholds Islamic principles</p>
            </div>
            
            <div className="card-elegant p-6">
              <Users className="h-8 w-8 text-primary-700 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Designed to serve and strengthen Muslim communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}