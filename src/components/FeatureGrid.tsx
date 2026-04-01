'use client'

import { Sparkles, Smartphone, Headphones, Brain, Zap, Globe } from 'lucide-react'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from './AnimatedSection'

const features = [
  {
    icon: Sparkles,
    title: 'AI Curation',
    description: 'GPT-4.1 reads thousands of articles and picks the stories that matter to you.',
    bg: 'bg-brand-100',
    iconColor: 'text-brand-500',
  },
  {
    icon: Smartphone,
    title: 'Story Mode',
    description: 'Swipe through your news feed like stories. Quick, engaging, endlessly satisfying.',
    bg: 'bg-sky-100',
    iconColor: 'text-sky-500',
  },
  {
    icon: Headphones,
    title: 'Audio Briefings',
    description: '5-minute daily audio catch-ups. Listen while commuting, exercising, or making coffee.',
    bg: 'bg-lavender-100',
    iconColor: 'text-lavender-500',
  },
  {
    icon: Brain,
    title: 'Smart Personalization',
    description: 'Learns your interests over time. The more you use it, the smarter it gets.',
    bg: 'bg-sage-100',
    iconColor: 'text-sage-500',
  },
  {
    icon: Zap,
    title: 'Breaking News',
    description: 'Real-time alerts for stories that truly matter. No noise, just signal.',
    bg: 'bg-honey-100',
    iconColor: 'text-honey-500',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Read and listen in English, Korean, or Spanish. More languages coming soon.',
    bg: 'bg-sky-100',
    iconColor: 'text-sky-500',
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Everything you need.
            <br />
            <span className="text-slate-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Built for people who want to stay informed without doomscrolling.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <AnimatedItem key={feature.title}>
              <div className="rounded-2xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-md transition-all duration-300 group h-full bg-white">
                <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-1.5">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
