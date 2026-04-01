'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function DownloadCTA() {
  return (
    <section id="testflight" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      {/* Large gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-500/15 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-violet-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to transform
            <br />
            <span className="gradient-text">how you read news?</span>
          </h2>
          <p className="text-dark-300 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Join our beta and be among the first to experience the future of news.
            Free, no ads, no commitment.
          </p>

          <motion.a
            href="#testflight"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-3 bg-white text-dark-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-200 shadow-glow-lg cursor-pointer"
          >
            Download on TestFlight
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-dark-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Free during beta
            </span>
            <span>iOS 17+</span>
            <span>No account needed</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
