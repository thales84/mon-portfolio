'use client'

import PageLayout from '@/components/PageLayout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire envoyé:', formData)
    alert('Message envoyé avec succès!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contactez-<span className="gradient-text">moi</span>
              </h1>
              <p className="text-xl text-white/60">
                Discutons de votre prochain projet extraordinaire
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire de contact */}
              <div className="glass-effect rounded-2xl p-8 hover-lift">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Votre Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Votre Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover-lift shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    📨 Envoyer le message
                  </button>
                </form>
              </div>
              
              {/* Informations de contact */}
              <div className="space-y-8">
                <div className="glass-effect rounded-2xl p-8 hover-lift">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    📞 Coordonnées
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        📧
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p>votre.email@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        📱
                      </div>
                      <div>
                        <p className="font-semibold text-white">Téléphone</p>
                        <p>+33 1 23 45 67 89</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        📍
                      </div>
                      <div>
                        <p className="font-semibold text-white">Localisation</p>
                        <p>Paris, France</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover-lift">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    🌐 Réseaux sociaux
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'GitHub', icon: '🐙', url: '#', color: 'bg-gray-500/20' },
                      { name: 'LinkedIn', icon: '💼', url: '#', color: 'bg-blue-500/20' },
                      { name: 'Twitter', icon: '🐦', url: '#', color: 'bg-sky-500/20' },
                      { name: 'Dribbble', icon: '🎨', url: '#', color: 'bg-pink-500/20' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`${social.color} border border-white/10 rounded-xl p-4 text-center hover-lift group`}
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                          {social.icon}
                        </div>
                        <p className="text-white font-semibold">{social.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}