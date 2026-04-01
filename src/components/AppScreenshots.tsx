'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { Headphones, Bookmark, TrendingUp, Bell, Share2 } from 'lucide-react'

const screens = [
  {
    title: 'Story Mode',
    subtitle: 'Swipe through stories',
    gradient: 'from-accent-600 via-accent-500 to-cyan-500',
    icon: TrendingUp,
    content: (
      <div className="space-y-3 px-1">
        <div className="rounded-xl bg-white/10 p-3">
          <div className="h-2 w-3/4 bg-white/30 rounded mb-2" />
          <div className="h-2 w-1/2 bg-white/20 rounded" />
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="h-2 w-full bg-white/30 rounded mb-2" />
          <div className="h-2 w-2/3 bg-white/20 rounded" />
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="h-2 w-5/6 bg-white/30 rounded mb-2" />
          <div className="h-2 w-1/3 bg-white/20 rounded" />
        </div>
      </div>
    ),
  },
  {
    title: 'Audio Briefing',
    subtitle: '5-min daily catch-up',
    gradient: 'from-violet-600 via-violet-500 to-rose-500',
    icon: Headphones,
    content: (
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white/80 border-b-[12px] border-b-transparent ml-1.5" />
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="w-2/5 h-full bg-white/40 rounded-full" />
        </div>
        <div className="flex justify-between w-full text-[10px] text-white/40">
          <span>2:04</span>
          <span>5:00</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Smart Alerts',
    subtitle: 'Breaking news that matters',
    gradient: 'from-rose-600 via-rose-500 to-amber-500',
    icon: Bell,
    content: (
      <div className="space-y-3 px-1">
        <div className="rounded-xl bg-white/10 p-3 flex items-start gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-300 mt-0.5 flex-shrink-0" />
          <div>
            <div className="h-2 w-24 bg-white/30 rounded mb-1.5" />
            <div className="h-1.5 w-full bg-white/15 rounded" />
          </div>
        </div>
        <div className="rounded-xl bg-white/10 p-3 flex items-start gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-300 mt-0.5 flex-shrink-0" />
          <div>
            <div className="h-2 w-20 bg-white/30 rounded mb-1.5" />
            <div className="h-1.5 w-full bg-white/15 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Save & Share',
    subtitle: 'Bookmark and share cards',
    gradient: 'from-cyan-600 via-cyan-500 to-accent-500',
    icon: Share2,
    content: (
      <div className="space-y-3 px-1">
        <div className="rounded-xl bg-white/10 p-3 flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-3/4 bg-white/30 rounded" />
            <div className="h-1.5 w-1/2 bg-white/15 rounded" />
          </div>
          <Bookmark className="w-4 h-4 text-white/40 flex-shrink-0" />
        </div>
        <div className="rounded-xl bg-white/10 p-3 flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-2/3 bg-white/30 rounded" />
            <div className="h-1.5 w-1/3 bg-white/15 rounded" />
          </div>
          <Bookmark className="w-4 h-4 text-cyan-300 fill-cyan-300 flex-shrink-0" />
        </div>
      </div>
    ),
  },
]

export function AppScreenshots() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">App Preview</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Beautiful. Intuitive.
            <br />
            <span className="text-dark-300">Designed for you.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`rounded-[2rem] bg-gradient-to-b ${screen.gradient} p-[1px] h-full`}>
                <div className="rounded-[calc(2rem-1px)] bg-dark-900/90 p-5 pb-8 h-full">
                  {/* Mini header */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${screen.gradient} flex items-center justify-center`}>
                      <screen.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{screen.title}</div>
                      <div className="text-dark-400 text-xs">{screen.subtitle}</div>
                    </div>
                  </div>
                  {/* Screen content */}
                  {screen.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
