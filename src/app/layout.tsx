import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SnapDigest - Your Daily News, Summarized',
  description: 'Get your daily news briefing in under 5 minutes. AI-powered summaries, audio playback, and 25+ trusted sources.',
  keywords: ['news app', 'daily briefing', 'news summary', 'audio news', 'AI news'],
  authors: [{ name: 'SnapDigest' }],
  openGraph: {
    title: 'SnapDigest - Your Daily News, Summarized',
    description: 'Get your daily news briefing in under 5 minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-chocolate-800">
        {children}
      </body>
    </html>
  )
}
