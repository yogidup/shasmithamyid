import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-slate-900 tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-gradient-blue-green">shasmitha.my.id</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="text-sm font-bold px-4 py-2 rounded-full text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all"
            >
              Blog
            </Link>
            <Link
              href="mailto:your@email.com"
              className="text-sm font-bold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
