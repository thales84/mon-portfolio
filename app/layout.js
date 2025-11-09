import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mon Portfolio - Développeur Web',
  description: 'Portfolio professionnel de [Votre Nom]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}