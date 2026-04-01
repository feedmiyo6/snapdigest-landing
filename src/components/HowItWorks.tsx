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
    gradient: 'from-accent-500 to-cyan-400',
  },
  {
    icon: SwatchBook,
    number: '02',
    title: 'Swipe',
    description: 'Browse stories in Story Mode. Swipe through cards, tap to dive deeper, or listen to audio summaries.',
    gradient: 'from-cyan-400 to-violet-400',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Stay Informed',
    description: 'In under 5 minutes, you\'re caught up on everything that matters. Save stories for later.',
    gradient: 'from-violet-400 to-rose-400',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Three steps to
            <br />
            <span className="gradient-text">smarter mornings</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center hover:bg-white/[0.06] transition-all duration-300">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="text-dark-500 text-sm font-bold tracking-widest">{step.number}</span>
                <h3 className="text-white font-bold text-2xl mt-2 mb-3">{step.title}</h3>
                <p className="text-dark-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
