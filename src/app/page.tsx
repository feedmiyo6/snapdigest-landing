import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/80 backdrop-blur-md border-b border-sage-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/app-icon.png" 
              alt="SnapDigest" 
              width={40} 
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-sage-600">SnapDigest</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-chocolate-800/70 hover:text-sage-600 transition-colors hidden sm:block">
              Features
            </Link>
            <Link href="#how-it-works" className="text-chocolate-800/70 hover:text-sage-600 transition-colors hidden sm:block">
              How It Works
            </Link>
            <a 
              href="#download" 
              className="bg-sage-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sage-600 transition-colors shadow-soft"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chocolate-800 leading-tight mb-6">
              Your daily news.
              <br />
              <span className="text-sage-500">Summarized. Spoken.</span>
              <br />
              In under 5 minutes.
            </h1>
            <p className="text-lg sm:text-xl text-chocolate-800/70 mb-10 max-w-2xl mx-auto">
              Skip the doomscrolling. SnapDigest curates news from 25+ trusted sources, 
              summarizes what matters, and reads it to you — so you can start your day informed, not overwhelmed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#" 
                className="bg-chocolate-800 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-chocolate-900 transition-colors shadow-soft-lg flex items-center gap-3"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-bold -mt-1">App Store</div>
                </div>
              </a>
              <span className="text-chocolate-800/40">Free • No subscriptions</span>
            </div>
          </div>
          
          {/* App Preview Placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="w-72 h-[580px] bg-cream-200 rounded-[3rem] shadow-soft-lg border-8 border-chocolate-800/10 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-20 h-20 bg-sage-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Image 
                      src="/images/app-icon.png" 
                      alt="SnapDigest" 
                      width={60} 
                      height={60}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-chocolate-800/50 text-sm">App screenshots coming soon</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-sage-400/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-terracotta-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-chocolate-800/60 text-center mb-16 max-w-2xl mx-auto">
            Built for busy people who want to stay informed without losing their morning.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎧',
                title: 'Audio Briefings',
                description: 'Listen to your news while commuting, exercising, or making coffee.',
              },
              {
                icon: '📱',
                title: 'Swipe Stories',
                description: 'Browse news like stories. Swipe through what matters, skip what doesn\'t.',
              },
              {
                icon: '🌍',
                title: '25+ Sources',
                description: 'Curated from NYT, BBC, NPR, Reuters, and more trusted outlets.',
              },
              {
                icon: '🌐',
                title: 'Multi-language',
                description: 'Read and listen in English, Korean, or Spanish.',
              },
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-cream-100 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-chocolate-800/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Three steps to a smarter morning
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Open',
                description: 'Launch SnapDigest and see today\'s curated briefing ready for you.',
              },
              {
                step: '2',
                title: 'Listen',
                description: 'Tap play and let AI-voiced summaries catch you up while you get ready.',
              },
              {
                step: '3',
                title: 'Done',
                description: 'In under 5 minutes, you\'re informed and ready to start your day.',
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-sage-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-chocolate-800/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-20 px-6 bg-sage-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start your morning smarter
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Join thousands of people who&apos;ve reclaimed their mornings from doomscrolling.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-white text-sage-600 px-8 py-4 rounded-2xl font-semibold hover:bg-cream-100 transition-colors shadow-soft-lg"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-60">Download on the</div>
              <div className="text-lg font-bold -mt-1">App Store</div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-chocolate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/app-icon.png" 
                alt="SnapDigest" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">SnapDigest</span>
            </div>
            <div className="flex gap-8 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:support@snapdigest.app" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="text-sm text-white/40">
              © 2026 SnapDigest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
