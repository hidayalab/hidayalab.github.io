import { Heart, Shield, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Faith-First Development',
      description: 'Every line of code we write is guided by Islamic principles and values, ensuring our products align with the faith.'
    },
    {
      icon: Shield,
      title: 'Trust & Privacy',
      description: 'We prioritize user privacy and data security, following the highest standards of digital ethics and transparency.'
    },
    {
      icon: Zap,
      title: 'Innovation & Excellence',
      description: 'We strive for excellence in everything we build, combining innovation with the wisdom of Islamic teachings.'
    }
  ]

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About HidayaLab
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a digital Islamic technology company dedicated to creating software solutions 
            that serve the Muslim community while upholding the highest standards of faith and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At HidayaLab, we believe technology should serve humanity while respecting divine guidance. 
              Our mission is to bridge the gap between modern digital solutions and Islamic values, 
              creating tools that empower individuals and strengthen communities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We focus on developing practical solutions for everyday challenges faced by Muslims worldwide, 
              from masjid management systems to educational tools and productivity applications.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <p className="text-primary-800 font-arabic text-lg text-center">
                "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ"
              </p>
              <p className="text-primary-700 text-sm text-center mt-2 italic">
                "And that there is nothing for man except what he strives for" - Quran 53:39
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="accent-pattern rounded-2xl p-8 border border-primary-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary-800">100%</div>
                  <div className="text-sm text-gray-600">Faith Compliant</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">∞</div>
                  <div className="text-sm text-gray-600">Community Impact</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card-elegant p-6">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary-800" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}