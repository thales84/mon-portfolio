export const projects = [
  {
    id: 1,
    title: 'Application E-commerce',
    description: 'Une application e-commerce complète avec panier, paiement et dashboard admin',
    fullDescription: `Cette application e-commerce a été développée avec Next.js et propose une expérience d'achat complète et sécurisée. 
    
Le projet inclut un système de gestion de produits, un panier dynamique, un processus de paiement sécurisé via Stripe, et un dashboard administrateur pour gérer les commandes et le catalogue.

J'ai particulièrement travaillé sur l'optimisation des performances et l'expérience utilisateur sur mobile.`,
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'NextAuth'],
    image: '/images/project1.png',
    githubUrl: 'https://github.com/votrenom/ecommerce-app',
    liveUrl: 'https://ecommerce-app-demo.vercel.app',
    featured: true,
    screenshots: [
      '/images/project1-1.png',
      '/images/project1-2.png',
      '/images/project1-3.png'
    ],
    challenges: [
      'Intégration sécurisée de Stripe pour les paiements',
      'Gestion en temps réel du stock des produits',
      'Optimisation du temps de chargement des images'
    ],
    features: [
      'Recherche et filtrage avancé des produits',
      'Panier persistant entre les sessions',
      'Processus de commande en 3 étapes',
      'Dashboard administrateur complet',
      'Notifications en temps réel'
    ],
    year: 2024,
    duration: '3 mois',
    client: 'Startup française'
  },
  {
    id: 2,
    title: 'Plateforme de Blog',
    description: 'Système de blog moderne avec authentification et commentaires en temps réel',
    fullDescription: `Plateforme de blogging complète développée avec React et Node.js, permettant aux utilisateurs de créer, éditer et partager des articles techniques.

Le système inclut une authentification sécurisée, un éditeur de texte enrichi, des commentaires en temps réel et un système de likes. J'ai utilisé Socket.io pour les fonctionnalités en temps réel et PostgreSQL pour une gestion robuste des données.`,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Express'],
    image: '/images/project2.png',
    githubUrl: 'https://github.com/votrenom/blog-platform',
    liveUrl: 'https://blog-platform-demo.vercel.app',
    featured: true,
    screenshots: [
      '/images/project2-1.png',
      '/images/project2-2.png'
    ],
    challenges: [
      'Implémentation des commentaires en temps réel',
      'Sécurisation des routes administrateur',
      'Optimisation du SEO pour les articles'
    ],
    features: [
      'Éditeur de texte enrichi (Markdown)',
      'Système de commentaires en temps réel',
      'Recherche full-text dans les articles',
      'Système de tags et catégories',
      'Dashboard de statistiques'
    ],
    year: 2023,
    duration: '2 mois',
    client: 'Agence digitale'
  },
  {
    id: 3,
    title: 'Application Météo',
    description: 'Application météo avec prévisions en temps réel et graphiques interactifs',
    fullDescription: `Application météo progressive (PWA) offrant des prévisions précises avec une interface utilisateur intuitive. 
    
L'application utilise l'API OpenWeatherMap et propose des graphiques interactifs pour visualiser l'évolution des températures. Elle fonctionne hors-ligne grâce au cache des Service Workers.`,
    technologies: ['React', 'API REST', 'Chart.js', 'PWA', 'Service Workers'],
    image: '/images/project3.png',
    githubUrl: 'https://github.com/votrenom/weather-app',
    liveUrl: 'https://weather-app-demo.vercel.app',
    featured: false,
    screenshots: [
      '/images/project3-1.png',
      '/images/project3-2.png'
    ],
    challenges: [
      'Gestion du cache pour le mode hors-ligne',
      'Optimisation des performances sur mobile',
      'Intégration des graphiques interactifs'
    ],
    features: [
      'Prévisions sur 7 jours',
      'Graphiques interactifs des températures',
      'Fonctionnement hors-ligne',
      'Notifications météo',
      'Interface adaptative selon la météo'
    ],
    year: 2023,
    duration: '1 mois',
    client: 'Projet personnel'
  }
]

export function getProjectById(id) {
  return projects.find(project => project.id === parseInt(id))
}