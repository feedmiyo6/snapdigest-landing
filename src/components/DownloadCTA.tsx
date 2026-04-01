'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function DownloadCTA() {
  return (
    <section id="testflight" className="relative py-28 px-6 overflow-hidden">
      {/* Soft pastel background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50 to-brand-100/30" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-lavender-200/20 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5 leading-tight">
            Ready to transform
            <br />
            <span className="font-serif italic text-brand-500">how you read news?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto mb-8 leading-relaxed">
            Join our beta and be among the first to experience the future of news.
            Free, no ads, no commitment.
          </p>

          <motion.a
            href="#testflight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-200 hover:bg-slate-800 hover:shadow-xl"
          >
            Download on TestFlight
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <div className="mt-6 flex items-center justify-center gap-5 text-sm text-slate-400">
            <span>iOS 17+</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Free during beta</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>No account needed</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
