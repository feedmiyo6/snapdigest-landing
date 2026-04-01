'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      {/* Soft pastel background blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px]" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-lavender-200/30 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-sm font-medium text-brand-600">Now in beta — free to try</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Your morning news,
              <br />
              <span className="font-serif italic text-brand-500">curated by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-500 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              SnapDigest reads thousands of articles and delivers the stories that
              matter — in under 5 minutes. Swipe, listen, stay informed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#testflight"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-medium text-base transition-all duration-200 hover:bg-slate-800 hover:shadow-lg"
              >
                Download on TestFlight
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-slate-600 px-7 py-3.5 rounded-full font-medium text-base transition-colors hover:text-slate-900"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex items-center gap-5 justify-center lg:justify-start text-sm text-slate-400"
            >
              <span>iOS only</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>No ads</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Free during beta</span>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Soft shadow */}
              <div className="absolute -inset-4 bg-brand-300/20 blur-[40px] rounded-full" />

              {/* Phone frame */}
              <div className="relative w-[270px] sm:w-[290px] h-[560px] sm:h-[600px] bg-slate-900 rounded-[3rem] shadow-xl overflow-hidden border-[6px] border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-white">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-7 pt-10 pb-2">
                    <span className="text-slate-900 text-xs font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 rounded-sm bg-slate-900/40" />
                      <div className="w-4 h-2.5 rounded-sm bg-slate-900/40" />
                      <div className="w-6 h-2.5 rounded-sm bg-slate-900/60" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pb-3">
                    <h3 className="text-slate-900 text-lg font-bold">Good Morning ☀️</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Your daily briefing is ready</p>
                  </div>

                  {/* News cards */}
                  <div className="px-4 space-y-2.5">
                    <div className="rounded-2xl bg-brand-50 border border-brand-100 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-brand-500" />
                        </div>
                        <span className="text-xs text-brand-600 font-medium">Top Story</span>
                      </div>
                      <div className="text-slate-900 text-sm font-semibold leading-snug">AI Transforms How We Consume Daily News</div>
                      <div className="text-slate-400 text-xs mt-1.5 leading-relaxed">New AI tools are revolutionizing the way millions stay informed...</div>
                      <div className="flex items-center gap-3 mt-2.5">
                        <span className="text-xs text-slate-400">Reuters</span>
                        <span className="text-xs text-slate-300">3 min read</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-sky-100/50 border border-sky-200/60 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-sky-200 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-sky-500" />
                        </div>
                        <span className="text-xs text-sky-500 font-medium">Technology</span>
                      </div>
                      <div className="text-slate-900 text-sm font-semibold leading-snug">Global Tech Summit Announces Breakthrough</div>
                      <div className="text-slate-400 text-xs mt-1.5 leading-relaxed">Leaders gather to discuss the future of sustainable tech...</div>
                      <div className="flex items-center gap-3 mt-2.5">
                        <span className="text-xs text-slate-400">BBC</span>
                        <span className="text-xs text-slate-300">2 min read</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-sage-100/50 border border-sage-200/60 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-sage-200 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-sage-500" />
                        </div>
                        <span className="text-xs text-sage-500 font-medium">World</span>
                      </div>
                      <div className="text-slate-900 text-sm font-semibold leading-snug">Climate Accord Reaches New Milestone</div>
                      <div className="text-slate-400 text-xs mt-1.5">Nations agree on ambitious targets...</div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-2 left-3 right-3 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-around px-4">
                    <div className="w-5 h-5 rounded bg-brand-400/40" />
                    <div className="w-5 h-5 rounded-full bg-slate-200" />
                    <div className="w-5 h-5 rounded bg-slate-200" />
                    <div className="w-5 h-5 rounded bg-slate-200" />
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
