import Link from 'next/link'
import { getSortedPostsData } from '../../lib/blog'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="min-h-screen bg-white cute-top-gradient">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
            Writing & <span className="text-gradient-blue-green">Insights</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Sharing my thoughts on SEO, content strategy, and digital growth.
          </p>
        </div>

        <div className="grid gap-12">
          {allPostsData.map(({ slug, date, title, description, category, tags }) => (
            <article key={slug} className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 hover:shadow-soft transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-blue-green px-3 py-1 rounded-full shadow-sm">
                      {category}
                    </span>
                    <time className="text-sm font-bold text-slate-400">{date}</time>
                  </div>
                  
                  <Link href={`/blog/${slug}`}>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors cursor-pointer">
                      {title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-2">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:gap-3 transition-all">
                    Read Article 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
