const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Flutter'],
    },
    {
      title: 'Backend & Database',
      skills: ['PHP', 'MySQL', 'Firebase Firestore', 'Flutter Backend'],
    },
    {
      title: 'Tools & AI Development',
      skills: ['Git & GitHub', 'GitHub Copilot', 'Cursor IDE', 'Windsurf', 'VS Code', 'Figma'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">{category.title}</h3>
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
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Sublime Text',
              'Canva',
              'Microsoft Office',
              'Google Workspace',
              'Zoom',
              'Data Analysis',
              'SQL Queries',
              'Waterfall Methodology',
              'Project Management',
              'Prompt Engineering',
              'Data Visualization',
              'Team Leadership',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
