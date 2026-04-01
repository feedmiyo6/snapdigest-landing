import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <Image
              src="/images/app-icon.png"
              alt="SnapDigest"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-white">SnapDigest</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-dark-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-dark-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:support@snapdigest.app"
              className="text-dark-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="text-sm text-dark-500">
            &copy; 2026 SnapDigest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
