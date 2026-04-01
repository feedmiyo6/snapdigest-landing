import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { FeatureGrid } from '@/components/FeatureGrid'
import { HowItWorks } from '@/components/HowItWorks'
import { AppScreenshots } from '@/components/AppScreenshots'
import { Testimonials } from '@/components/Testimonials'
import { DownloadCTA } from '@/components/DownloadCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <AppScreenshots />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
