import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">DG</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white font-poppins">DeepGuard AI</h1>
            <p className="text-xs text-slate-400">Multi-Modal Detection</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
            Docs
          </a>
        </nav>
      </div>
    </header>
  )
}
