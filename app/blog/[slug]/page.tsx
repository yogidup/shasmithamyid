import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPostData, getSortedPostsData } from '../../../lib/blog'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const postData = await getPostData(slug)

  return {
    title: `${postData.title} | Shasmitha`,
    description: postData.description,
  }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: Props) {
  const { slug } = await params
  const postData = await getPostData(slug)

  return (
    <main className="min-h-screen bg-white cute-top-gradient">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Navigation */}
        <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-sky-600 mb-16 transition-all">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Writing
        </Link>

        {/* Header Post */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-gradient-blue-green px-4 py-1.5 rounded-full shadow-accent">
              {postData.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <time className="text-sm font-bold text-slate-400 uppercase tracking-wider">{postData.date}</time>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.05]">
            {postData.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            {postData.description}
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Table of Contents - Desktop Sidebar / Mobile Top */}
          {postData.toc && postData.toc.length > 0 && (
            <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                  Contents
                </h4>
                <nav className="flex flex-col gap-4">
                  {postData.toc.map((item) => (
                    <a 
                      key={item.id} 
                      href={`#${item.id}`}
                      className={`text-sm font-bold transition-all hover:text-sky-600 ${item.level === 3 ? 'pl-4 text-slate-400 text-xs' : 'text-slate-600'}`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Article Body */}
          <div className="flex-1 order-2 lg:order-1">
            <article 
              className="prose prose-slate prose-lg max-w-none 
              prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-headings:scroll-mt-32
              prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-8
              prose-li:text-slate-600 prose-li:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-extrabold
              prose-a:text-sky-600 prose-a:no-underline prose-a:border-b-2 prose-a:border-sky-100 hover:prose-a:bg-sky-50 transition-all
              prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/30 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-slate-700 prose-blockquote:font-medium
              prose-img:rounded-3xl prose-img:shadow-soft"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
            />

            {/* Footer Post */}
            <footer className="mt-32 pt-16 border-t border-slate-100">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden ring-1 ring-sky-100">
                    <Image 
                      src="/images/mitha.png"
                      alt="Mitha"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Written by Mitha</p>
                    <p className="text-xs text-slate-400 font-medium">Profesional SEO Content Writer</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {postData.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100/50 uppercase tracking-widest">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
