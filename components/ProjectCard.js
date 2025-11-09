import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden hover-lift group relative">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ⭐ Projet Phare
          </span>
        </div>
      )}
      
      <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white/40 group-hover:text-white/60 transition-colors">
          🖼️ Image du projet
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-white/5 text-white/60 px-3 py-1 rounded-full text-sm border border-white/10">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex space-x-3 pt-4 border-t border-white/10">
          <Link 
            href={project.githubUrl}
            className="flex-1 text-center bg-white/10 text-white py-2 px-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20 hover-lift text-sm"
            target="_blank"
          >
            Code
          </Link>
          <Link 
            href={`/projects/${project.id}`}
            className="flex-1 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-3 rounded-lg hover:shadow-lg transition-all hover-lift text-sm"
          >
            Voir le projet
          </Link>
        </div>
      </div>
    </div>
  )
}