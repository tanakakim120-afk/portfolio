import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Kim G. Tanaka</h3>
            <p className="text-gray-400">
              Full-Stack Developer | AI-Assisted Development Specialist
            </p>
            <p className="text-gray-500 text-sm mt-2">
              National University - Baliwag | Dean's Lister
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/kimtanaka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kimtanaka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tanakakim120@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
