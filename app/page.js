import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function Home() {
  return (
    <PageLayout className="pt-0">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Effets de particules */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          {/* Avatar/Bulle */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover-lift">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
              TPS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Bonjour, je suis <span className="gradient-text"> Tandjong Paul Sylvain </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Développeur Full Stack passionné par la création d&apos;expériences web 
            <span className="text-yellow-300"> modernes et performantes</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/projects" 
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover-lift shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">🚀 Voir mes projets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            
            <Link 
              href="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover-lift backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">💬 Discutons</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-xl text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Technologies et outils que j&apos;utilise pour donner vie à vos projets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Frontend', 
                icon: '🎨',
                skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: 'Backend', 
                icon: '⚙️',
                skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
                color: 'from-purple-500 to-pink-500'
              },
              { 
                title: 'Outils', 
                icon: '🛠️',
                skills: ['Git', 'Docker', 'Figma', 'VS Code'],
                color: 'from-orange-500 to-red-500'
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-2xl p-8 hover-lift group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Projets Réalisés' },
              { number: '3+', label: 'Années d\'Expérience' },
              { number: '5+', label: 'Technologies Maîtrisées' },
              { number: '100%', label: 'Satisfaction Client' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-effect rounded-2xl p-6 hover-lift">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}