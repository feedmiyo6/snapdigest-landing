import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SnapDigest - Your News, Curated by AI',
  description: 'AI-powered news reader that curates, summarizes, and reads you the news that matters — in under 5 minutes. Story Mode, audio briefings, and smart personalization.',
  keywords: ['news app', 'AI news', 'news summary', 'audio news', 'daily briefing', 'story mode', 'news reader'],
  authors: [{ name: 'SnapDigest' }],
  openGraph: {
    title: 'SnapDigest - Your News, Curated by AI',
    description: 'AI-powered news reader that curates, summarizes, and reads you the news that matters — in under 5 minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
