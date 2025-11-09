import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectById } from '@/data/projects'

export default async function ProjectDetail({ params }) {
  // Attendre la résolution de la Promise params
  const { id } = await params
  const project = getProjectById(parseInt(id))
  
  if (!project) {
    notFound()
  }

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projets</Link>
            <span>›</span>
            <span className="text-white">{project.title}</span>
          </nav>

          {/* En-tête du projet */}
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image principale */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-white/40 text-lg">🖼️ {project.title}</span>
                </div>
              </div>
              
              {/* Informations du projet */}
              <div className="space-y-6">
                <div>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
                      ⭐ Projet Phare
                    </span>
                  )}
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                    {project.fullDescription}
                  </p>
                </div>
                
                {/* Métadonnées */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/60 text-sm">Année</div>
                    <div className="text-white font-semibold">{project.year}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/60 text-sm">Durée</div>
                    <div className="text-white font-semibold">{project.duration}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/60 text-sm">Client</div>
                    <div className="text-white font-semibold">{project.client}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/60 text-sm">Statut</div>
                    <div className="text-green-400 font-semibold">✓ Terminé</div>
                  </div>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all hover-lift"
                  >
                    🌐 Voir le site live
                  </Link>
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 text-center bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 hover-lift"
                  >
                    💻 Code source
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Fonctionnalités */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  🚀 Fonctionnalités Principales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4 hover-lift">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Défis et Solutions */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  🎯 Défis Relevés
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-500 hover-lift">
                      <div className="text-white/80 leading-relaxed">
                        {challenge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne latérale */}
            <div className="space-y-8">
              {/* Technologies utilisées */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  🛠️ Technologies
                </h2>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galerie d'écrans */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  📸 Galerie
                </h2>
                <div className="space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 text-center hover-lift cursor-pointer">
                      <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center">
                        <span className="text-white/40">Capture {index + 1}</span>
                      </div>
                      <div className="text-white/60 text-sm mt-2">Aperçu {index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation entre projets */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  🔄 Autres Projets
                </h2>
                <Link 
                  href="/projects"
                  className="block text-center bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors border border-white/20 hover-lift"
                >
                  Voir tous les projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }) {
  // Attendre la résolution de la Promise params
  const { id } = await params
  const project = getProjectById(parseInt(id))
  
  if (!project) {
    return {
      title: 'Projet non trouvé - Portfolio'
    }
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
  }
}

// Génération des pages statiques (optionnel)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}