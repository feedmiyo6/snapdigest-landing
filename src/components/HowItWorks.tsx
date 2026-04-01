'use client'

import { motion } from 'framer-motion'
import { Smartphone, SwatchBook, CheckCircle } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const steps = [
  {
    icon: Smartphone,
    number: '01',
    title: 'Open',
    description: 'Launch SnapDigest and see your personalized news briefing, curated fresh every morning by AI.',
    bg: 'bg-brand-100',
    iconColor: 'text-brand-500',
  },
  {
    icon: SwatchBook,
    number: '02',
    title: 'Swipe',
    description: 'Browse stories in Story Mode. Swipe through cards, tap to dive deeper, or listen to audio summaries.',
    bg: 'bg-sky-100',
    iconColor: 'text-sky-500',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Stay Informed',
    description: 'In under 5 minutes, you\'re caught up on everything that matters. Save stories for later.',
    bg: 'bg-sage-100',
    iconColor: 'text-sage-500',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6">
      {/* Soft background */}
      <div className="absolute inset-0 bg-slate-100/50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Three steps to
            <br />
            <span className="font-serif italic text-brand-500">smarter mornings</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-7 text-center border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl ${step.bg} flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
                <span className="text-slate-300 text-xs font-bold tracking-widest">{step.number}</span>
                <h3 className="text-slate-900 font-bold text-xl mt-1 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
