import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certificationsList = [
    {
      id: 1,
      title: 'EF SET English Certificate (C1 Advanced)',
      issuer: 'EF SET',
      score: 'Score: 66/100',
      date: 'Issued: May 2026',
      link: 'https://cert.efset.org/en/ug8VW3',
      description: 'Advanced English proficiency in reading and listening comprehension under the CEFR framework.'
    }
  ]

  return (
    <section id="certifications" className="py-24 bg-[#E5E5E5] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Certifications
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {certificationsList.map((cert) => (
            <div key={cert.id} className="border-2 border-black bg-white p-6 relative flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-black text-white shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                        {cert.issuer} | {cert.score}
                      </p>
                    </div>
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-black shrink-0 transition-colors"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                  {cert.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">
                  {cert.date}
                </span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-black uppercase tracking-wider hover:underline flex items-center space-x-1"
                  >
                    <span>Verify</span>
                    <span className="text-xs">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
