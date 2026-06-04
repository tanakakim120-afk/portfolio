const Projects = () => {
  const projects = [
    {
      title: 'Mayon Time Pieces',
      subtitle: 'Software Quality Assurance Engineer | Backend Developer',
      category: 'Internship Project',
      image: '/portfolio/images/mayontimepieces.png',
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript 5',
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'Supabase',
        'PostgreSQL',
        'PayPal SDK',
        'Recharts'
      ],
      github: 'https://www.mayontime.com/',
      description: 'Mayon Time Pieces is a modern web platform developed using Next.js, React, TypeScript, and Supabase. My primary responsibilities included Software Quality Assurance and Backend Development, ensuring platform reliability, functionality, and overall user experience.',
      responsibilities: [
        'Executed functional, usability, and regression testing across critical system features.',
        'Identified, documented, and tracked software defects.',
        'Collaborated with developers to verify bug fixes and improve system quality.',
        'Assisted in backend development using Supabase and PostgreSQL.',
        'Tested authentication workflows, payment processing, and user-facing features.',
        'Participated in quality assurance reviews to ensure platform reliability and performance.'
      ],
      contributionTags: [
        'Software Quality Assurance',
        'Regression Testing',
        'Bug Tracking',
        'Backend Development',
        'Authentication Testing',
        'Payment Integration Testing'
      ]
    },
    {
      title: 'Vault77',
      subtitle: 'Project Manager | Database Designer',
      category: 'Internship Project',
      image: '/portfolio/images/vault77.png', // Fallback placeholder
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript 5',
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'Supabase',
        'PostgreSQL'
      ],
      github: 'https://vault77.168-144-40-22.nip.io/',
      description: 'Vault77 is a software project derived from the Mayon Time Pieces platform. I served as Project Manager and Database Designer, leading project coordination and designing the database architecture while collaborating closely with the development team.',
      responsibilities: [
        'Led project planning, coordination, and task management.',
        'Designed and created the Entity Relationship Diagram (ERD) for the system database.',
        'Managed communication and collaboration among team members.',
        'Monitored project progress and ensured development milestones were met.',
        'Assisted in software validation and quality review activities.',
        'Worked closely with frontend and backend developers throughout the project lifecycle.'
      ],
      contributionTags: [
        'Project Management',
        'Database Design',
        'ERD Development',
        'Team Leadership',
        'Agile Collaboration',
        'Quality Review'
      ]
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-[#E5E5E5] border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border-2 border-black bg-white flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Project Image */}
                  <div className="aspect-[16/10] w-full border-b-2 border-black overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/600x375/000000/ffffff?text=${project.title.split(' ')[0]}`
                      }}
                    />
                  </div>

                  <div className="p-6">
                    {/* Category & Subtitle */}
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-lg text-gray-900 uppercase tracking-wide leading-snug mb-1">
                      {project.title}
                    </h3>

                    {/* Subtitle / Role */}
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-4">
                      {project.subtitle}
                    </span>

                    {/* Short Description */}
                    <p className="text-xs text-gray-700 font-semibold mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mb-4">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Tech Stack:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-[8px] font-bold uppercase tracking-wider border border-black bg-[#E5E5E5] px-1.5 py-0.5 text-black"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Contributions / Responsibilities */}
                    <div className="mb-4">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Key Responsibilities:</span>
                      <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-1 leading-relaxed font-semibold">
                        {project.responsibilities.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Contribution Tags */}
                    <div className="mb-6">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Contributions:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.contributionTags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[8px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center border-2 border-black py-2.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
                  >
                    View Live Project →
                  </a>
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
