'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type PortfolioItem = {
  title: string
  site: string
  link: string
  description: string
  breakdown: {
    mainKeyword: string
    secondaryKeywords: string[]
    tools: string[]
    sources: string[]
    results: string
  }
}

const articles: PortfolioItem[] = [
  {
    title: "How to Create Educational Worksheets",
    site: "Printablee",
    link: "https://example.com/article-1",
    description: "A comprehensive guide for teachers to create engaging classroom materials with high organic reach.",
    breakdown: {
      mainKeyword: "educational worksheets",
      secondaryKeywords: ["classroom materials", "teacher resources", "printable worksheets"],
      tools: ["Ahrefs", "Canva", "Google Search Console"],
      sources: ["Educational Psychology Journals", "Expert Interviews"],
      results: "Ranked #1 on Google for 'printable educational worksheets' within 2 months."
    }
  },
  {
    title: "Top 10 Learning Activities for Kids",
    site: "Worksheeto",
    link: "https://example.com/article-2",
    description: "Curated list of activities designed to boost cognitive development in children through structured play.",
    breakdown: {
      mainKeyword: "learning activities for kids",
      secondaryKeywords: ["kids activities", "cognitive development", "educational games"],
      tools: ["Semrush", "Grammarly"],
      sources: ["Child Development Experts", "Top Education Blogs"],
      results: "Increased organic traffic to Worksheeto by 25% in the first quarter."
    }
  }
]

const copyItems: PortfolioItem[] = [
  {
    title: "Summer Holiday Social Campaign",
    site: "Instagram/Facebook",
    link: "#",
    description: "Strategic copywriting for a nationwide travel agency social media campaign focusing on conversion.",
    breakdown: {
      mainKeyword: "summer holiday deals",
      secondaryKeywords: ["travel promotions", "last minute vacation"],
      tools: ["FB Ad Library", "ChatGPT (Ideation)"],
      sources: ["Internal Sales Data", "Competitor Analysis"],
      results: "Generated 3x higher engagement rate compared to previous year's campaign."
    }
  }
]

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 p-8 mb-6 hover:shadow-soft transition-all duration-300 group">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-blue-green px-3 py-1 rounded-full shadow-sm">
              {item.site}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-500 mt-3 text-base leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-end w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-50">
          {item.link !== "#" && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-400 hover:text-sky-500 flex items-center gap-2 transition-colors">
              Visit Site <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`text-sm font-bold px-5 py-2 rounded-full transition-all flex items-center gap-2 ${isOpen ? 'bg-sky-50 text-sky-600' : 'bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`}
          >
            {isOpen ? 'Close' : 'Breakdown'} 
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-8 p-8 bg-sky-50/30 rounded-2xl border border-sky-100/50 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-300">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-sky-600 mb-3">SEO Keywords</h4>
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">Main: <span className="text-sky-600">{item.breakdown.mainKeyword}</span></p>
              <div className="flex flex-wrap gap-2">
                {item.breakdown.secondaryKeywords.map(kw => (
                  <span key={kw} className="text-xs bg-white text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100">{kw}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-3">Tech Stack & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {item.breakdown.tools.map(tool => (
                <span key={tool} className="text-sm font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-emerald-100">{tool}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-sky-100/50">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-sky-500 mb-3">Verified Results</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium italic bg-white p-4 rounded-xl border border-sky-100/50">"{item.breakdown.results}"</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Research Sources</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {item.breakdown.sources.map(source => (
                  <span key={source} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'articles' | 'copy'>('articles')

  return (
    <main className="min-h-screen bg-white cute-top-gradient">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Profile Section */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-emerald-300 rounded-full blur-2xl opacity-10 animate-pulse" />
          <div className="relative w-40 h-40 rounded-full border-[6px] border-white shadow-2xl overflow-hidden ring-1 ring-sky-100">
            <Image 
              src="/images/mitha.png"
              alt="Mitha"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
          Hi, I&apos;m <span className="text-gradient-blue-green">Mitha</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-lg text-center">
          I craft SEO content that helps brands rank higher and connect better with their audience.
        </p>

        <div className="flex flex-col items-center gap-20 w-full">
          {/* Find Out More Button */}
          <a href="#about" className="group relative">
            <div className="absolute inset-0 bg-gradient-blue-green rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-blue-green text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 shadow-accent hover:scale-105 active:scale-95 transition-all">
              Find Out More
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </a>

          {/* Workflow Section */}
          <section id="about" className="w-full pt-16 scroll-mt-24">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black text-slate-900 mb-4 text-gradient-blue-green">The Content Strategy</h2>
               <p className="text-slate-500 font-medium max-w-xl mx-auto">
                 My data-driven approach to creating content that doesn&apos;t just look good, but actually ranks and converts.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { 
                  title: 'Deep Research', 
                  desc: 'Analyzing search intent, keyword difficulty, and competitor gaps to find the most profitable opportunities for your brand.', 
                  color: 'from-sky-500 to-sky-400' 
                },
                { 
                  title: 'Topical Authority', 
                  desc: 'Building a content map that covers all aspects of a topic, signaling to Google that your site is a trusted expert in your niche.', 
                  color: 'from-blue-500 to-indigo-500' 
                },
                { 
                  title: 'Strategic Writing', 
                  desc: 'Crafting engaging, human-centric copy that satisfies both complex search engine algorithms and the curiosity of your readers.', 
                  color: 'from-emerald-500 to-emerald-400' 
                }
              ].map((step, i) => (
                <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-soft hover:border-sky-100 transition-all group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  title: 'Technical Optimization', 
                  desc: 'Fine-tuning H-tags, LSI keywords, and meta-data while ensuring every image and link contributes to a perfect On-Page SEO score.', 
                  color: 'from-teal-500 to-emerald-500' 
                },
                { 
                  title: 'Performance Tracking', 
                  desc: 'Monitoring rankings and user behavior post-publish, then performing data-backed updates to maintain and improve search positions over time.', 
                  color: 'from-sky-600 to-blue-500' 
                }
              ].map((step, i) => (
                <div key={i+3} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-soft hover:border-sky-100 transition-all group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {i + 4}
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="w-full pt-20">
            <div className="flex gap-4 justify-center mb-16 bg-slate-50 p-2 rounded-2xl w-fit mx-auto">
              <button 
                onClick={() => setActiveCategory('articles')}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${activeCategory === 'articles' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Articles
              </button>
              <button 
                onClick={() => setActiveCategory('copy')}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${activeCategory === 'copy' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Copywriting
              </button>
            </div>

            <div className="flex flex-col w-full">
              {activeCategory === 'articles' ? (
                articles.map((item, idx) => <PortfolioCard key={idx} item={item} />)
              ) : (
                copyItems.map((item, idx) => <PortfolioCard key={idx} item={item} />)
              )}
            </div>
          </section>

          {/* Contact Section */}
          <footer className="w-full pt-32 pb-16 text-center">
             <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
                
                <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Let&apos;s build something <span className="text-gradient-blue-green" style={{ WebkitTextFillColor: 'initial' }}>- great</span> together.</h3>
                <p className="text-slate-400 mb-10 text-lg relative z-10">Ready to boost your organic growth?</p>
                
                <Link href="mailto:your@email.com" className="relative z-10 inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Send an Email
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
             </div>
             <p className="mt-12 text-slate-300 text-xs font-bold tracking-[0.3em] uppercase">© 2026 MITHA PORTFOLIO</p>
          </footer>
        </div>
      </div>
    </main>
  )
}
