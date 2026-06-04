const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'AI Data Annotator',
      company: 'Outlier.ai',
      period: 'March 2026 – Present',
      description: [
        'Contribute to generative AI model improvement through Reinforcement Learning from Human Feedback (RLHF).',
        'Evaluate AI-generated audio and image outputs for quality, consistency, and prompt alignment.',
        'Provide structured feedback and performance scoring to improve multimodal model accuracy.',
        'Perform quality assurance reviews following technical evaluation guidelines.'
      ]
    },
    {
      id: 2,
      role: 'Software Engineer Intern',
      company: 'Argon Software Development Service',
      period: 'November 2025 – February 2026',
      description: [
        'Responsible for developing and maintaining server-side applications, RESTful APIs, and core business logic to support React.js-based systems, ensuring scalability, performance, and reliability.',
        'Designed and managed database structures and Entity-Relationship Diagrams (ERDs) to maintain data integrity and efficient system architecture.',
        'Performed Quality Assurance (QA) activities through manual testing, including test case execution, bug identification, defect reporting, and requirements validation to ensure software quality.',
        'Utilized Trello and Zoho Sprints for task management, ticket tracking, and project monitoring.',
        'Collaborated with frontend developers, QA testers, and stakeholders to deliver aligned and functional backend solutions.',
        'Leveraged AI-assisted development tools and applied ethical prompt engineering practices to improve development efficiency, productivity, and solution quality.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="md:flex md:justify-between md:items-baseline mb-4">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
                  {exp.role}
                </h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2 md:mt-0 block">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-md font-bold text-gray-600 uppercase tracking-wider mb-4">
                {exp.company}
              </h4>
              <ul className="list-disc list-outside ml-5 text-gray-600 leading-relaxed space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
