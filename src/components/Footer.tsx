import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/app-icon.png"
              alt="SnapDigest"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold text-slate-900">SnapDigest</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-600 transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:support@snapdigest.app" className="text-slate-400 hover:text-slate-600 transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-slate-300">
            © 2026 SnapDigest
          </div>
        </div>
      </div>
    </footer>
  )
}
