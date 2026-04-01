'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/app-icon.png"
            alt="SnapDigest"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-semibold text-lg text-slate-900">SnapDigest</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="#features"
            className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium hidden sm:block"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium hidden sm:block"
          >
            How It Works
          </Link>
          <a
            href="#testflight"
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            Join Beta
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
