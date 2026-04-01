'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-500/20 rounded-full blur-[128px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">Powered by GPT-4.1</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              Your News.
              <br />
              <span className="gradient-text">Curated by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-dark-300 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              SnapDigest uses AI to curate, summarize, and read you the news
              that matters — in under 5 minutes. Swipe through stories like
              TikTok, but for staying informed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#testflight"
                className="group inline-flex items-center justify-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-glow-lg hover:scale-[1.02] cursor-pointer"
              >
                Join the Beta
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:bg-white/5 cursor-pointer"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-dark-400"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Free during beta
              </span>
              <span>iOS only</span>
              <span>No ads</span>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-accent-500/20 blur-[80px] rounded-full scale-110" />

              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-dark-800 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-dark-950 rounded-b-2xl z-20" />

                {/* Screen content */}
                <div className="absolute inset-[3px] rounded-[2.75rem] overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-8 pt-12 pb-4">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 rounded-sm bg-white/50" />
                      <div className="w-4 h-2.5 rounded-sm bg-white/50" />
                      <div className="w-6 h-2.5 rounded-sm bg-white/70" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pb-3">
                    <h3 className="text-white text-lg font-bold">Good Morning</h3>
                    <p className="text-dark-400 text-xs mt-0.5">Your daily briefing is ready</p>
                  </div>

                  {/* Story cards */}
                  <div className="px-4 space-y-3">
                    <div className="rounded-2xl bg-gradient-to-br from-accent-500/20 to-violet-500/20 border border-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-accent-400/30" />
                        <span className="text-xs text-accent-300 font-medium">Top Story</span>
                      </div>
                      <div className="text-white text-sm font-semibold leading-snug">AI Transforms How We Consume Daily News</div>
                      <div className="text-dark-400 text-xs mt-2 leading-relaxed">New AI tools are revolutionizing the way millions stay informed...</div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs text-dark-500">Reuters</span>
                        <span className="text-xs text-dark-500">3 min read</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500/15 to-accent-500/10 border border-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-cyan-400/30" />
                        <span className="text-xs text-cyan-300 font-medium">Technology</span>
                      </div>
                      <div className="text-white text-sm font-semibold leading-snug">Global Tech Summit Announces Breakthrough</div>
                      <div className="text-dark-400 text-xs mt-2 leading-relaxed">Leaders gather to discuss the future of sustainable tech...</div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs text-dark-500">BBC</span>
                        <span className="text-xs text-dark-500">2 min read</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-rose-500/15 to-amber-500/10 border border-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-rose-400/30" />
                        <span className="text-xs text-rose-300 font-medium">World</span>
                      </div>
                      <div className="text-white text-sm font-semibold leading-snug">Climate Accord Reaches New Milestone</div>
                      <div className="text-dark-400 text-xs mt-2 leading-relaxed">Nations agree on ambitious targets...</div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-3 left-4 right-4 h-14 rounded-2xl bg-dark-800/90 backdrop-blur-md border border-white/5 flex items-center justify-around px-6">
                    <div className="w-6 h-6 rounded-md bg-accent-500/40" />
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                    <div className="w-6 h-6 rounded-md bg-white/10" />
                    <div className="w-6 h-6 rounded-md bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
