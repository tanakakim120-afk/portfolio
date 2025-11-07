import { Code2, Rocket, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in building web and mobile applications using React, PHP, Flutter, and modern databases',
    },
    {
      icon: Rocket,
      title: 'AI-Assisted Development',
      description: 'Proficient with GitHub Copilot, Cursor IDE, and LLM-powered tools for rapid, optimized coding',
    },
    {
      icon: Users,
      title: 'Project Leadership',
      description: 'Skilled in managing projects under Iterative Waterfall with strong team collaboration',
    },
    {
      icon: Award,
      title: 'Dean\'s Lister',
      description: 'Academic excellence at National University - Baliwag, BSIT specializing in Mobile & Web',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a BSIT student at National University - Baliwag (Dean's Lister), specializing in Mobile and Web Application development. 
              I have a proven track record of delivering full-stack systems that solve real-world problems for businesses and communities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across web and mobile development using React.js, PHP, Flutter, and modern databases. 
              I leverage AI-assisted development tools like GitHub Copilot and Cursor IDE to accelerate development while maintaining 
              ethical and academically accepted practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With strong project management skills using Iterative Waterfall methodologies, I excel at leading teams, 
              analyzing data, and delivering user-centric solutions. I'm passionate about creating systems that make a real impact.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="h-full flex items-center justify-center">
                <Code2 size={200} className="text-primary-400/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <item.icon className="text-primary-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
