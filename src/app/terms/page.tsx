import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - SnapDigest',
  description: 'Terms of Service for SnapDigest mobile application',
}

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-chocolate-800/60 mb-12">Last updated: February 18, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              By downloading, installing, or using SnapDigest (&quot;the App&quot;), you agree to be bound by these 
              Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              SnapDigest is a mobile application that aggregates news from various public sources, provides 
              AI-generated summaries, and offers text-to-speech audio playback. The service is provided 
              &quot;as is&quot; and is free to use with advertisements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>You may use the App without an account (guest mode with limited features)</li>
              <li>Account creation requires a valid email address</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 13 years old to create an account</li>
              <li>One account per person; shared accounts are not permitted</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-chocolate-800/80 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-chocolate-800/80">
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to reverse engineer, decompile, or hack the App</li>
              <li>Scrape, copy, or redistribute content from the App</li>
              <li>Use automated systems or bots to access the App</li>
              <li>Interfere with or disrupt the App&apos;s infrastructure</li>
              <li>Impersonate others or create fake accounts</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">News Content</h3>
            <p className="text-chocolate-800/80 leading-relaxed">
              News articles displayed in the App are sourced from third-party publishers via RSS feeds. 
              The original content remains the property of the respective publishers. We provide summaries 
              and links to original sources.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">App Content</h3>
            <p className="text-chocolate-800/80 leading-relaxed">
              The App&apos;s design, code, and branding are owned by SnapDigest. You may not copy, modify, 
              or distribute these materials without permission.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">AI-Generated Content</h3>
            <p className="text-chocolate-800/80 leading-relaxed">
              Summaries and audio are generated using AI technology. While we strive for accuracy, 
              AI-generated content may contain errors. Always refer to original sources for verification.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Advertisements</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              The App displays advertisements provided by Google AdMob. Ad content is controlled by Google 
              and third-party advertisers, not by SnapDigest. We are not responsible for the content of 
              advertisements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE 
              APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES. NEWS SUMMARIES ARE AI-GENERATED 
              AND MAY NOT BE 100% ACCURATE. WE ARE NOT RESPONSIBLE FOR DECISIONS MADE BASED ON APP CONTENT.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SNAPDIGEST SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              We may terminate or suspend your access to the App at any time, without notice, for conduct 
              that we believe violates these Terms or is harmful to other users or us. You may delete your 
              account at any time through the App settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant 
              changes through the App or via email. Continued use of the App after changes constitutes 
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-chocolate-800/80 leading-relaxed">
              If you have questions about these Terms, please contact us at:<br />
              <a href="mailto:legal@snapdigest.app" className="text-sage-600 hover:underline">legal@snapdigest.app</a>
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
