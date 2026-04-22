import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Est-ce que tu m\'aimes ?',
  description: 'Une question simple. Une réponse qui change tout.',
  openGraph: {
    title: 'Est-ce que tu m\'aimes ?',
    description: 'Une question simple. Une réponse qui change tout.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
