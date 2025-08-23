import { ExternalLink, Github, Clock, Users, BookOpen, Calendar, Heart } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Quran Memorization App',
      description: 'Interactive mobile and web application to help Muslims memorize the Holy Quran with progress tracking and audio recitation.',
      status: 'Pending',
      technologies: ['React Native', 'Firebase', 'Audio API', 'ML'],
      icon: BookOpen,
      color: 'bg-primary-700',
      features: ['Audio Recitation', 'Progress Tracking', 'Spaced Repetition', 'Tajweed Guide']
    },
    {
      title: 'HidayaDesk - Productivity Suite',
      description: 'All-in-one productivity dashboard with Islamic bookmarks, prayer reminders, Quran widgets, and Hadith of the day.',
      status: 'Live',
      technologies: ['Electron', 'React', 'TypeScript', 'SQLite'],
      icon: Calendar,
      color: 'bg-primary-800',
      features: ['Smart Bookmarks', 'Prayer Alerts', 'Islamic Widgets', 'Time Tracking'],
      liveUrl: 'https://hidayalab.github.io/hidayadesk/'
    },
    {
      title: 'Amana Fund',
      description: 'Islamic organization providing Qard Hasan (interest-free loans) to help community members in financial need while adhering to Islamic principles.',
      status: 'Live',
      technologies: ['Web Platform', 'Community Outreach', 'Islamic Finance', 'Donation System'],
      icon: Heart,
      color: 'bg-primary-500',
      features: ['Interest-free Loans', 'Community Support', 'Islamic Compliance', 'Financial Assistance'],
      liveUrl: 'https://www.amanafund.org/'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800'
      case 'Beta Testing':
        return 'bg-blue-100 text-blue-800'
      case 'Planning':
        return 'bg-gray-100 text-gray-800'
      case 'Pending':
        return 'bg-orange-100 text-orange-800'
      case 'Live':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Ongoing Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are actively working on innovative solutions that address real needs within the Muslim community. 
            Each project is developed with careful consideration of Islamic principles and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card-elegant overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-xs">{project.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-800/50 dark:to-primary-700/30 rounded-2xl p-8 border border-primary-200 dark:border-primary-600 shadow-lg dark:shadow-primary-900/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to Contribute?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We welcome contributions from developers, designers, and community members who share our vision of 
              building technology that serves the Ummah while upholding Islamic values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get Involved
              </a>
              <a 
                href="https://github.com/hidayalab" 
                className="btn-secondary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}