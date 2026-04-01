'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const testimonials = [
  {
    name: 'Sarah Kim',
    role: 'Product Designer',
    quote: 'SnapDigest replaced my chaotic morning news routine. The audio briefings are a game-changer — I listen while making coffee and I\'m caught up in 5 minutes.',
    rating: 5,
    gradient: 'from-accent-500 to-cyan-400',
  },
  {
    name: 'Alex Rivera',
    role: 'Software Engineer',
    quote: 'Story Mode is addictive in the best way. I actually look forward to catching up on news now instead of dreading the infinite scroll.',
    rating: 5,
    gradient: 'from-violet-500 to-rose-400',
  },
  {
    name: 'Ji-Yeon Park',
    role: 'Graduate Student',
    quote: 'The multi-language feature is incredible. I read news in Korean and English seamlessly. The AI summaries are surprisingly accurate and well-written.',
    rating: 5,
    gradient: 'from-cyan-500 to-accent-400',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Loved by early
            <br />
            <span className="gradient-text">beta testers</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-7 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-dark-200 leading-relaxed mb-6 font-serif italic text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-dark-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
