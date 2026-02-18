import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - SnapDigest',
  description: 'Privacy Policy for SnapDigest mobile application',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-cream-100 border-b border-sage-500/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/app-icon.png" 
              alt="SnapDigest" 
              width={40} 
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-sage-600">SnapDigest</span>
          </Link>
          <Link href="/" className="text-sage-600 hover:text-sage-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-chocolate-800/60 mb-12">Last updated: February 18, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              SnapDigest (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Account Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>Email address (for account creation and authentication)</li>
              <li>Display name (optional)</li>
              <li>Profile preferences (news categories, notification settings)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>Articles viewed, saved, and listened to</li>
              <li>App usage patterns (to improve recommendations)</li>
              <li>Device information (device type, OS version, for troubleshooting)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>Precise location data</li>
              <li>Contacts or address book</li>
              <li>Photos or camera access</li>
              <li>Payment information (app is free, ad-supported)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>To provide and personalize our news service</li>
              <li>To save your reading preferences and history</li>
              <li>To generate audio summaries in your preferred language</li>
              <li>To send notifications (if enabled)</li>
              <li>To improve our service and fix bugs</li>
              <li>To display relevant, non-personalized advertisements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-chocolate-800/80 leading-relaxed mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li><strong>Supabase</strong> - Authentication and data storage (hosted in secure cloud infrastructure)</li>
              <li><strong>OpenAI</strong> - Text-to-speech audio generation (text only, no personal data)</li>
              <li><strong>Google AdMob</strong> - Advertising (subject to Google&apos;s privacy policy)</li>
              <li><strong>News sources</strong> - RSS feeds from public news outlets (NYT, BBC, NPR, etc.)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              Your data is stored securely using Supabase, which provides enterprise-grade security including 
              encryption at rest and in transit, row-level security, and SOC 2 compliance. We do not sell 
              your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-chocolate-800/80 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Opt out of notifications</li>
            </ul>
            <p className="text-chocolate-800/80 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@snapdigest.app" className="text-sage-600 hover:underline">privacy@snapdigest.app</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              SnapDigest is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If you believe a child has provided us with personal 
              information, please contact us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              If you have questions about this privacy policy, please contact us at:<br />
              <a href="mailto:privacy@snapdigest.app" className="text-sage-600 hover:underline">privacy@snapdigest.app</a>
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-6 bg-chocolate-800 text-white">
        <div className="max-w-4xl mx-auto text-center text-sm text-white/60">
          © 2026 SnapDigest. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
