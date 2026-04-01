'use client'

import { Sparkles, Smartphone, Headphones, Brain, Zap, Globe } from 'lucide-react'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from './AnimatedSection'

const features = [
  {
    icon: Sparkles,
    title: 'AI Curation',
    description: 'GPT-4.1 reads thousands of articles and picks the stories that matter to you.',
    gradient: 'from-accent-500/20 to-violet-500/20',
    iconColor: 'text-accent-400',
  },
  {
    icon: Smartphone,
    title: 'Story Mode',
    description: 'Swipe through your news feed like stories. Quick, engaging, and endlessly satisfying.',
    gradient: 'from-cyan-500/20 to-accent-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Headphones,
    title: 'Audio Briefings',
    description: '5-minute daily audio catch-ups. Listen while commuting, exercising, or making coffee.',
    gradient: 'from-violet-500/20 to-rose-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Brain,
    title: 'Smart Personalization',
    description: 'Learns your interests over time. The more you use it, the smarter it gets.',
    gradient: 'from-rose-500/20 to-amber-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: Zap,
    title: 'Breaking News',
    description: 'Real-time alerts for stories that truly matter. No noise, just signal.',
    gradient: 'from-amber-500/20 to-cyan-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Read and listen in English, Korean, or Spanish. More languages coming soon.',
    gradient: 'from-cyan-500/20 to-violet-500/20',
    iconColor: 'text-cyan-400',
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Background transition from dark to slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Everything you need.
            <br />
            <span className="text-dark-300">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Built for people who want to stay informed without doomscrolling.
            Six powerful features, one beautiful app.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <AnimatedItem key={feature.title}>
              <div className="glass-card rounded-2xl p-7 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-dark-400 leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
