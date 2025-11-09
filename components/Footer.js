export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="glass-effect border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Tandjong Paul Sylvain</h3>
            <p className="text-white/60">Créateur d&apos;expériences digitales exceptionnelles</p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { name: 'GitHub', icon: '🐙', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'Twitter', icon: '🐦', url: '#' },
              { name: 'Email', icon: '📧', url: 'mailto:votre@email.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover-lift hover:bg-white/20 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Tandjong Paul Sylvain. Tous droits réservés. 
            <span className="text-white/40"> Made with ❤️ et Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}