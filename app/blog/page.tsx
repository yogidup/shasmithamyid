export default function BlogPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide uppercase">
            Blog
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Writing & Thoughts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome to my blog. Here I share my thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="space-y-12">
          {/* Blog Post Placeholder */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-64 h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-sm text-gray-500 dark:text-gray-400">April {i + 10}, 2026</time>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">Technology</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Blog Post Title {i}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    This is a summary of the blog post. It gives readers a quick idea of what the post is about before they click to read more.
                  </p>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
