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
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/app-icon.png"
            alt="SnapDigest"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="font-bold text-lg text-white">SnapDigest</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-dark-300 hover:text-white transition-colors text-sm font-medium hidden sm:block cursor-pointer"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-dark-300 hover:text-white transition-colors text-sm font-medium hidden sm:block cursor-pointer"
          >
            How It Works
          </Link>
          <a
            href="#testflight"
            className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow cursor-pointer"
          >
            Join Beta
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
