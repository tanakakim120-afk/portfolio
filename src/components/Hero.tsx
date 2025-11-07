import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Kim G. Tanaka</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer | AI-Assisted Development | Project Manager
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Results-driven BSIT student with a track record of shipping full-stack systems (web, mobile). 
            Skilled in AI-assisted development with practical project leadership to deliver reliable, user-centric products.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/kimtanaka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110 glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kimtanaka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110 glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tanakakim120@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110 glow"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 glow font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-medium border border-gray-700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-500" size={32} />
      </a>
    </section>
  )
}

export default Hero
