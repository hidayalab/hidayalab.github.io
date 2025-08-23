import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      title: 'Company',
      items: [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Community',
      items: [
        { name: 'GitHub', href: 'https://github.com/hidayalab' },
        { name: 'Discord', href: '#' },
        { name: 'Contribute', href: '#' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Support', href: '#contact' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/hidayalab' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:assalamu@hidayalab.com' },
  ]

  return (
    <footer className="footer-dark">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold footer-text-gradient">
                HidayaLab
              </h3>
              <p className="text-gray-300 mt-2 max-w-md">
                Building technology with Islamic values to serve and empower the global Muslim community.
              </p>
            </div>
            
            <div className="bg-gray-800 dark:bg-primary-800 rounded-lg p-4 mb-6 border border-gray-700 dark:border-primary-600">
              <p className="text-gray-300 font-arabic text-center text-lg">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-gray-400 text-center text-sm mt-1">
                "In the name of Allah, the Most Gracious, the Most Merciful"
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gray-700 dark:bg-primary-800 dark:hover:bg-primary-700 p-2 rounded-lg transition-colors duration-200 border border-gray-700 dark:border-primary-600 hover:border-gray-600 dark:hover:border-primary-500"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {links.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <p>
                © {currentYear} HidayaLab. Made with{' '}
                <Heart className="h-4 w-4 text-red-500 inline mx-1" />{' '}
                for the Ummah.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              "And whoever relies upon Allah - then He is sufficient for him. 
              Indeed, Allah will accomplish His purpose." - Quran 65:3
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}