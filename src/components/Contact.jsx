import { Mail, MessageCircle, Send, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project idea? Want to collaborate? Or simply want to learn more about our work? 
            We'd love to hear from you. Let's build something meaningful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you're a developer interested in contributing, a mosque looking for management solutions, 
              or someone with an idea for Islamic tech innovation, we're here to listen and collaborate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-800" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    For general inquiries, project discussions, or collaboration opportunities.
                  </p>
                  <a href="mailto:assalamu@hidayalab.com" className="text-primary-800 hover:text-primary-900 font-medium">
                    assalamu@hidayalab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Community Discussion</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Join our community discussions about Islamic tech and development.
                  </p>
                  <a href="#" className="text-primary-700 hover:text-primary-800 font-medium">
                    Join Discord Server
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Based In</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Serving the global Muslim community from various locations worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <h4 className="font-semibold text-primary-900 mb-2">🤝 Partnership Opportunities</h4>
              <p className="text-primary-800 text-sm mb-3">
                We're always looking to partner with organizations, developers, and community leaders 
                who share our vision of ethical technology development.
              </p>
              <ul className="text-primary-700 text-sm space-y-1">
                <li>• Open source contributors</li>
                <li>• Islamic organizations</li>
                <li>• Technology partners</li>
                <li>• Community sponsors</li>
              </ul>
            </div>
          </div>

          <div className="card-elegant p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-primary-600 rounded-lg bg-white dark:bg-primary-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-primary-600 rounded-lg bg-white dark:bg-primary-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-primary-600 rounded-lg bg-white dark:bg-primary-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="Tell us about your project, idea, or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}