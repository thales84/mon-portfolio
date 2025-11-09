import PageLayout from '@/components/PageLayout'
import Image from 'next/image'

export default function About() {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 animate-fade-in-up">
              À Propos de <span className="gradient-text">Moi</span>
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Photo avec effet glass */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <Image
                    src="/images/letps.jpg"
                    alt="Votre Nom - Développeur Web"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                    priority
                  />
                </div>
              </div>
              
              {/* Contenu */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Développeur <span className="gradient-text">Full Stack</span> Passionné
                </h2>
                
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    Je suis un développeur web passionné par la création d&apos;expériences 
                    digitales innovantes et performantes. Avec une expertise en React, 
                    Next.js et Node.js, je transforme des idées en solutions concrètes.
                  </p>
                  
                  <p>
                    Mon approche combine créativité et rigueur technique pour 
                    délivrer des produits qui allient esthétique et fonctionnalité.
                  </p>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    🚀 Compétences Techniques
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'React & Next.js', 'TypeScript', 'Node.js', 'Express',
                      'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git & Docker'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section Expérience */}
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                📈 Mon Parcours
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Développeur Full Stack',
                    company: 'Nom de l\'entreprise',
                    period: '2023 - Présent',
                    description: 'Développement d\'applications web modernes avec React et Node.js',
                    technologies: ['React', 'Node.js', 'MongoDB']
                  },
                  {
                    title: 'Développeur Frontend',
                    company: 'Autre entreprise',
                    period: '2021 - 2023',
                    description: 'Création d\'interfaces utilisateur responsive et accessibles',
                    technologies: ['React', 'TypeScript', 'Tailwind']
                  }
                ].map((exp, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500 hover-lift group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-white/60 bg-white/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}