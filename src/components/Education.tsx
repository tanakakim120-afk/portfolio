const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      school: 'National University – Baliwag',
      period: 'Expected Graduation: 2026',
      description: [
        "Dean's Lister",
        'Specialization: Mobile and Web Application Development'
      ]
    },
    {
      id: 2,
      degree: 'Secondary Education (STEM Strand)',
      school: 'PBC Sunbeam School, Inc.',
      period: '2016 – 2022',
      description: [
        'Track Strand: Science, Technology, Engineering and Mathematics',
        'Honors Received: With Honors',
        'Address: Gen. Alejo Santos Rd., Bintog, Plaridel, Bulacan'
      ]
    },
    {
      id: 3,
      degree: 'Primary Education',
      school: 'PBC Sunbeam School, Inc.',
      period: '2010 – 2016',
      description: [
        'Address: Gen. Alejo Santos Rd., Bintog, Plaridel, Bulacan'
      ]
    }
  ]

  return (
    <section id="education" className="py-24 bg-[#E5E5E5] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Education
          </h2>
        </div>

        <div className="space-y-12">
          {educationList.map((edu) => (
            <div key={edu.id} className="relative pl-8 md:pl-0">
              <div className="md:flex md:justify-between md:items-baseline mb-4">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
                  {edu.degree}
                </h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2 md:mt-0 block">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-md font-bold text-gray-600 uppercase tracking-wider mb-4">
                {edu.school}
              </h4>
              <ul className="list-disc list-outside ml-5 text-gray-600 leading-relaxed space-y-2">
                {edu.description.map((item, idx) => (
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

export default Education
