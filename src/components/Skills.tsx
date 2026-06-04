const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Laravel', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'Firebase Firestore', 'Supabase']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Trello', 'GitHub Copilot', 'Cursor IDE', 'Windsurf', 'Cliqq']
    },
    {
      title: 'Professional Skills',
      skills: ['Agile Development', 'Software Testing & Quality Assurance', 'Project Management', 'Team Collaboration', 'Problem Solving', 'Data Analysis']
    }
  ]

  return (
    <section id="skills" className="py-24 bg-[#E5E5E5] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Technical Skills
          </h2>
        </div>

        <div className="space-y-12 text-gray-900">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg border-b-2 border-black pb-2 mb-6 uppercase tracking-wider text-black">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="border-2 border-black bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
