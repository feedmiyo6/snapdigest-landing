'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const testimonials = [
  {
    name: 'Sarah Kim',
    role: 'Product Designer',
    quote: 'SnapDigest replaced my chaotic morning news routine. The audio briefings are a game-changer — I listen while making coffee and I\'m caught up in 5 minutes.',
    initials: 'SK',
    bg: 'bg-brand-100',
    textColor: 'text-brand-500',
  },
  {
    name: 'Alex Rivera',
    role: 'Software Engineer',
    quote: 'Story Mode is addictive in the best way. I actually look forward to catching up on news now instead of dreading the infinite scroll.',
    initials: 'AR',
    bg: 'bg-lavender-100',
    textColor: 'text-lavender-500',
  },
  {
    name: 'Ji-Yeon Park',
    role: 'Graduate Student',
    quote: 'The multi-language feature is incredible. I read news in Korean and English seamlessly. The AI summaries are surprisingly accurate and well-written.',
    initials: 'JP',
    bg: 'bg-sky-100',
    textColor: 'text-sky-500',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-28 px-6">
      <div className="absolute inset-0 bg-slate-100/50" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Loved by early
            <br />
            <span className="font-serif italic text-brand-500">beta testers</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-honey-400 fill-honey-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center`}>
                  <span className={`${t.textColor} font-semibold text-xs`}>{t.initials}</span>
                </div>
                <div>
                  <div className="text-slate-900 font-medium text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
