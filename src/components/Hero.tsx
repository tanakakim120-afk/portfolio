import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col">
      {/* Background Split */}
      <div className="absolute inset-0 flex">
        {/* Left Side (Light Gray) */}
        <div className="w-full md:w-3/5 bg-[#E5E5E5] h-full"></div>
        {/* Right Side (Black) with angled edge */}
        <div 
          className="hidden md:block absolute right-0 top-0 h-full bg-black w-3/5"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col md:flex-row relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-20 md:pr-10">
          <p className="text-gray-600 font-bold tracking-[0.3em] uppercase mb-4">
            Hi I Am
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Kim G. <br />
            Tanaka
          </h1>
          <p className="text-xl text-gray-500 mb-8 font-medium">
            Aspiring Software Quality Assurance Engineer
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/tanakakim120-afk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kim-tanaka-11198433a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tanakakim120@gmail.com" className="text-gray-600 hover:text-black">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Content (Portrait) */}
        <div className="w-full md:w-1/2 flex justify-center items-end mt-10 md:mt-0">
          <img 
            src="/portfolio/hero_portrait.jpg" 
            alt="Kim G. Tanaka" 
            className="max-h-[600px] object-contain"
          />
        </div>
      </div>

      {/* Bottom IT Banner */}
      <div className="w-full bg-black text-gray-400 py-12 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 text-[200px] font-bold text-gray-900 opacity-20 pointer-events-none">
            IT
          </div>
          <p className="text-sm tracking-wide max-w-2xl font-medium leading-relaxed relative z-10 text-gray-300">
            BS Information Technology student and Dean's Lister at National University – Baliwag, specializing in web and mobile application development. Experienced in building scalable applications, managing software projects, and leveraging modern AI-assisted development tools to deliver efficient and user-focused solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
