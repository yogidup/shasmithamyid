import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 pt-24 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-sm text-indigo-600 dark:text-indigo-400 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                Open for SEO & Content Writing Gigs
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                Helping Brands Rank <br />
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  High & Grow Organically
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Your Name</span>. 
                I specialize in data-driven SEO content strategy that turns readers into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
                >
                  View Case Studies
                </Link>
                <Link
                  href="mailto:your@email.com"
                  className="inline-flex items-center justify-center border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm"
                >
                  Let&apos;s Talk Strategy
                </Link>
              </div>
            </div>
            
            {/* Photo Section */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
                <Image 
                  src="/images/mitha.png"
                  alt="Mitha - SEO Content Writer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills / Stats */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">95%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">Avg. SEO Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">Articles Ranked #1</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2M+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">Organic Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">20+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Expertise */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I don&apos;t just write words; I write results. My approach combines creative storytelling with technical SEO.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 hover:border-indigo-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Keyword Research</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Finding low-hanging fruit and high-intent keywords that your competitors missed.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 hover:border-indigo-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Content Writing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Creating engaging, long-form content that satisfies user intent and search engine algorithms.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 hover:border-indigo-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">SEO Audit</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Analyzing your existing content to identify gaps and opportunities for optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to boost your rankings?</h3>
          <p className="opacity-80 mb-8 text-lg">
            Let&apos;s build a content strategy that actually moves the needle.
          </p>
          <Link
            href="mailto:your@email.com"
            className="inline-flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </main>
  )
}
