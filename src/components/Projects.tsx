import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Tomb Navigation & Contract Management System',
      description: 'Capstone project for Baliwag Municipal Cemetery featuring 360° image-based tomb navigation, kiosk-powered interface, and AI-generated contract records based on user preferences.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'AI Integration'],
      image: '/images/cemetery-kiosk.png',
      github: 'https://github.com/kimtanaka/cemetery-navigation',
    },
    {
      title: 'Brilliante Barbershop Booking System',
      description: 'Full-featured web-based booking system with secure database design, dynamic UI, appointment scheduling, payment handling, and comprehensive record management.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: '/images/barbershop-booking.png',
      github: 'https://github.com/tanakakim120-afk/brilliante-barbershop',
    },
    {
      title: 'FJA Apartment Management System',
      description: 'Web-based system for streamlining tenant records, rent collection, and maintenance requests. Features apartment listings and online application system with secure MySQL data management.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: '/images/apartment-management.png',
      github: 'https://github.com/kimtanaka/apartment-management',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Section - Takes 3 columns */}
                <div className="relative overflow-hidden md:aspect-auto md:col-span-3 bg-gray-900 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content Section - Takes 2 columns */}
                <div className="p-8 md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-bold group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg text-sm border border-primary-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
