import PageLayout from '@/components/PageLayout'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Mes <span className="gradient-text">Projets</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations les plus récentes et innovantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}