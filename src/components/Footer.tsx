import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black pt-16 pb-8 flex flex-col items-center">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="p-4 mb-8 text-white hover:text-gray-400 transition-colors"
      >
        <ArrowUp size={32} />
      </button>

      <div className="flex space-x-6 mb-8">
        <a href="https://github.com/tanakakim120-afk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kim-tanaka-11198433a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:tanakakim120@gmail.com" className="text-white hover:text-gray-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>

      <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold">
        @2026 Kim G. Tanaka
      </p>
    </footer>
  )
}

export default Footer
