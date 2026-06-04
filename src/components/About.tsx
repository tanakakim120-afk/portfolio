import { Briefcase, Code2, CheckCircle } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            ABOUT ME
          </h2>
        </div>

        {/* Text content */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-10">
          <p className="text-gray-900 leading-relaxed font-medium text-sm">
            Graduating BSIT student with hands-on experience in full-stack web and mobile application development and Software Quality Assurance (Manual Testing). Experienced in supporting the software development lifecycle through requirements analysis, system development, database management, test execution, bug identification, and validation.
          </p>
          <p className="text-gray-900 leading-relaxed font-medium text-sm">
            Strong understanding of manual testing processes and QA documentation within structured development environments using the Waterfall methodology.
          </p>
          <p className="text-gray-900 leading-relaxed font-medium text-sm">
            Detail-oriented, fast learner, and adaptable with strong analytical and problem-solving skills. Seeking opportunities in Software Development or Software Quality Assurance roles to apply technical skills, contribute to real-world projects, and grow professionally in the IT industry.
          </p>
        </div>

        {/* Explore link */}
        <div className="flex justify-center items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-black mb-16">
          <span className="text-gray-400">|</span>
          <a href="#skills" className="hover:underline">EXPLORE</a>
          <span className="text-gray-400">|</span>
        </div>

        {/* Zig-zag Separator */}
        <div className="flex items-center justify-center my-16 space-x-6">
          <div className="h-[2px] w-24 bg-black"></div>
          <svg className="w-16 h-4 text-black" viewBox="0 0 60 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 6,13 L 14,3 L 22,13 L 30,3 L 38,13 L 46,3 L 54,13" />
          </svg>
          <div className="h-[2px] w-24 bg-black"></div>
        </div>

        {/* Services / Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-3xl mx-auto text-left mt-16 pb-8">
          {/* Development */}
          <div className="relative pl-14">
            <div className="absolute left-0 top-1 text-black opacity-10">
              <Code2 size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold tracking-[0.2em] text-sm mb-2 uppercase text-black">DEVELOPMENT</h3>
            <p className="text-[11px] text-gray-700 leading-relaxed font-semibold">
              I can build full-stack web and mobile applications from scratch, implementing clean, responsive, and performance-optimized architectures.
            </p>
          </div>

          {/* Project Management */}
          <div className="relative pl-14">
            <div className="absolute left-0 top-1 text-black opacity-10">
              <Briefcase size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold tracking-[0.2em] text-sm mb-2 uppercase text-black">PROJECT MANAGEMENT</h3>
            <p className="text-[11px] text-gray-700 leading-relaxed font-semibold">
              I can manage project workflows within Agile/Scrum structures, coordinating team tasks, managing repositories, and ensuring quality releases.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="relative pl-14 md:col-span-2 md:max-w-sm md:mx-auto md:left-[-28px]">
            <div className="absolute left-0 top-1 text-black opacity-10">
              <CheckCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold tracking-[0.2em] text-sm mb-2 uppercase text-black">SOFTWARE QUALITY ASSURANCE</h3>
            <p className="text-[11px] text-gray-700 leading-relaxed font-semibold">
              I can execute rigorous quality checks and debugging workflows to ensure application security, usability, and design precision.
            </p>
          </div>
        </div>

        {/* Zig-zag Separator */}
        <div className="flex items-center justify-center my-16 space-x-6">
          <div className="h-[2px] w-24 bg-black"></div>
          <svg className="w-16 h-4 text-black" viewBox="0 0 60 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 6,13 L 14,3 L 22,13 L 30,3 L 38,13 L 46,3 L 54,13" />
          </svg>
          <div className="h-[2px] w-24 bg-black"></div>
        </div>

      </div>
    </section>
  )
}

export default About
