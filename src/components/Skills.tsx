const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      subsections: [
        { subtitle: 'Front-End', skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Flutter'] },
        { subtitle: 'Back-End', skills: ['PHP', 'Flutter'] },
        { subtitle: 'Database', skills: ['Firebase Firestore', 'MySQL'] },
        { subtitle: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Sublime Text'] },
      ]
    },
    {
      title: 'AI-Assisted Development',
      description: 'Experienced in prompt engineering to accelerate development and problem-solving, ensuring ethical and academically accepted practices.',
      skills: ['GitHub Copilot', 'Cursor IDE', 'Windsurf', 'LLM-powered tools'],
    },
    {
      title: 'Project Management & Leadership',
      description: 'Skilled in managing projects under Iterative Waterfall methodologies. Strong leadership, collaboration, and problem-solving abilities.',
      skills: ['Iterative Waterfall', 'Team Leadership', 'Collaboration', 'Problem-Solving'],
    },
    {
      title: 'Data Analysis',
      description: 'Experienced in cleaning, organizing, and interpreting datasets to support system improvements and decision-making.',
      skills: ['SQL Queries', 'Data Visualization', 'Data Cleaning', 'Dataset Interpretation', 'Reporting'],
    },
    {
      title: 'Productivity & Office Tools',
      skills: ['Microsoft Office Suite', 'Google Workspace', 'Zoom', 'Canva', 'Figma'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-400">{category.title}</h3>
              
              {category.description && (
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
              )}

              {category.subsections ? (
                <div className="space-y-4">
                  {category.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="text-lg font-semibold text-gray-200 mb-3">{subsection.subtitle}:</h4>
                      <div className="flex flex-wrap gap-2 ml-4">
                        {subsection.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600 hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
