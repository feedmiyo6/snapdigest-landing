'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { Headphones, Bookmark, TrendingUp, Bell, Share2 } from 'lucide-react'

const screens = [
  {
    title: 'Story Mode',
    subtitle: 'Swipe through stories',
    bg: 'bg-brand-50',
    border: 'border-brand-100',
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-500',
    icon: TrendingUp,
    content: (
      <div className="space-y-2 px-1">
        <div className="rounded-xl bg-brand-100/60 p-3">
          <div className="h-2 w-3/4 bg-brand-300/50 rounded mb-2" />
          <div className="h-2 w-1/2 bg-brand-200/50 rounded" />
        </div>
        <div className="rounded-xl bg-brand-100/60 p-3">
          <div className="h-2 w-full bg-brand-300/50 rounded mb-2" />
          <div className="h-2 w-2/3 bg-brand-200/50 rounded" />
        </div>
        <div className="rounded-xl bg-brand-100/60 p-3">
          <div className="h-2 w-5/6 bg-brand-300/50 rounded mb-2" />
          <div className="h-2 w-1/3 bg-brand-200/50 rounded" />
        </div>
      </div>
    ),
  },
  {
    title: 'Audio Briefing',
    subtitle: '5-min daily catch-up',
    bg: 'bg-lavender-100/50',
    border: 'border-lavender-200/60',
    iconBg: 'bg-lavender-100',
    iconColor: 'text-lavender-500',
    icon: Headphones,
    content: (
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-16 h-16 rounded-full bg-lavender-200/60 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-lavender-500/70 border-b-[10px] border-b-transparent ml-1" />
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="w-2/5 h-full bg-lavender-400/60 rounded-full" />
        </div>
        <div className="flex justify-between w-full text-[10px] text-slate-400">
          <span>2:04</span>
          <span>5:00</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Smart Alerts',
    subtitle: 'Breaking news that matters',
    bg: 'bg-honey-100/50',
    border: 'border-honey-200/60',
    iconBg: 'bg-honey-100',
    iconColor: 'text-honey-500',
    icon: Bell,
    content: (
      <div className="space-y-2 px-1">
        <div className="rounded-xl bg-honey-100/60 p-3 flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="h-2 w-24 bg-honey-300/50 rounded mb-1.5" />
            <div className="h-1.5 w-full bg-honey-200/50 rounded" />
          </div>
        </div>
        <div className="rounded-xl bg-honey-100/60 p-3 flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-honey-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="h-2 w-20 bg-honey-300/50 rounded mb-1.5" />
            <div className="h-1.5 w-full bg-honey-200/50 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Save & Share',
    subtitle: 'Bookmark and share cards',
    bg: 'bg-sky-100/50',
    border: 'border-sky-200/60',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-500',
    icon: Share2,
    content: (
      <div className="space-y-2 px-1">
        <div className="rounded-xl bg-sky-100/60 p-3 flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-3/4 bg-sky-300/50 rounded" />
            <div className="h-1.5 w-1/2 bg-sky-200/50 rounded" />
          </div>
          <Bookmark className="w-4 h-4 text-slate-300 flex-shrink-0" />
        </div>
        <div className="rounded-xl bg-sky-100/60 p-3 flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-2/3 bg-sky-300/50 rounded" />
            <div className="h-1.5 w-1/3 bg-sky-200/50 rounded" />
          </div>
          <Bookmark className="w-4 h-4 text-sky-400 fill-sky-400 flex-shrink-0" />
        </div>
      </div>
    ),
  },
]

export function AppScreenshots() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">App Preview</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Beautiful. Intuitive.
            <br />
            <span className="text-slate-400">Designed for you.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`rounded-2xl ${screen.bg} border ${screen.border} p-5 pb-7 h-full hover:shadow-md transition-all duration-300`}>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={`w-8 h-8 rounded-lg ${screen.iconBg} flex items-center justify-center`}>
                    <screen.icon className={`w-4 h-4 ${screen.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm">{screen.title}</div>
                    <div className="text-slate-400 text-xs">{screen.subtitle}</div>
                  </div>
                </div>
                {screen.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
