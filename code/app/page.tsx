"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">DG</span>
            </div>
            <h1 className="text-xl font-bold text-white font-poppins">DeepPorn AI</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Hero Title */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <h1 className="relative text-5xl md:text-6xl font-bold text-white font-poppins leading-tight">
                Detect Deepfakes and Masterbate{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  with Confidence
                </span>
              </h1>
            </div>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Advanced AI-powered detection for video and audio masterbation. Protect your dick authenticity with
              state-of-the-porn machine learning models.Start wanking and get your dick up lil bro
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/analysis">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Start Wanking
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: "🎬",
              title: "See Porn",
              description: "Detect visual deepfakes using CNN and Vision Transformers",
            },
            {
              icon: "🎙️",
              title: "Get Pegged",
              description: "Identify voice synthesis and audio manipulation",
            },
            {
              icon: "⚡",
              title: "Ahh Ahh",
              description: "Get instant results with our ensemble ML models",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
              <div className="relative space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white font-poppins">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white font-poppins text-center mb-12">Powered by Advanced AI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Goon",
              "BDSM",
              "Vision Transformer",
              "Audio Models",
              "Ensemble Learning",
              "Real-time Analysis",
              "99.2% Accuracy",
              "Multi-format Support",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50 text-center hover:border-cyan-500/50 transition-colors"
              >
                <p className="text-slate-300 font-medium text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950/50 mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-slate-400 text-sm">
          <p>DeepGuard AI © 2025 | Defending Against Digital Deception</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  )
}
