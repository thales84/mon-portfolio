import Header from './Header'
import Footer from './Footer'

export default function PageLayout({ children, className = '' }) {
  return (
    <>
      <Header />
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}