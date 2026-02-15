"use client"

export default function AnalysisAnimation() {
  return (
    <div className="py-20 animate-fade-in">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-72 h-72">
          <svg className="w-full h-full" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`
                @keyframes pulse-node {
                  0%, 100% { r: 5px; opacity: 0.7; filter: drop-shadow(0 0 2px rgba(34, 211, 238, 0)); }
                  50% { r: 10px; opacity: 1; filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.8)); }
                }
                @keyframes float-node {
                  0%, 100% { transform: translate(0, 0); }
                  25% { transform: translate(2px, -2px); }
                  50% { transform: translate(0, 2px); }
                  75% { transform: translate(-2px, -2px); }
                }
                @keyframes line-draw {
                  0% { stroke-dashoffset: 1000; opacity: 0; }
                  50% { opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 0.8; }
                }
                .node { 
                  animation: pulse-node 2.5s ease-in-out infinite, float-node 4s ease-in-out infinite;
                }
                .line { 
                  stroke: url(#gradient-line);
                  stroke-width: 2;
                  opacity: 0.6;
                  filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.3));
                }
              `}</style>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.9)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.9)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.9)" />
              </linearGradient>
            </defs>

            {/* Connection lines */}
            <line x1="50" y1="50" x2="128" y2="128" className="line" />
            <line x1="206" y1="50" x2="128" y2="128" className="line" />
            <line x1="50" y1="206" x2="128" y2="128" className="line" />
            <line x1="206" y1="206" x2="128" y2="128" className="line" />
            <line x1="50" y1="50" x2="206" y2="50" className="line" style={{ animationDelay: "0.2s" }} />
            <line x1="50" y1="206" x2="206" y2="206" className="line" style={{ animationDelay: "0.4s" }} />

            {/* Corner nodes */}
            <circle cx="50" cy="50" r="5" fill="#06b6d4" className="node" />
            <circle cx="206" cy="50" r="5" fill="#06b6d4" className="node" style={{ animationDelay: "0.3s" }} />
            <circle cx="50" cy="206" r="5" fill="#06b6d4" className="node" style={{ animationDelay: "0.6s" }} />
            <circle cx="206" cy="206" r="5" fill="#06b6d4" className="node" style={{ animationDelay: "0.9s" }} />

            {/* Center node */}
            <circle cx="128" cy="128" r="8" fill="#3b82f6" className="node" />
          </svg>
        </div>

        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-pulse" />
          <div
            className="absolute inset-2 rounded-full border-2 border-blue-500/40 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 shadow-[inset_0_0_30px_rgba(34,211,238,0.1)]" />
        </div>

        {/* Status text with improved styling */}
        <div className="text-center space-y-3">
          <h3 className="text-3xl font-bold text-white font-poppins">Analyzing Media</h3>
          <p className="text-slate-300 flex items-center justify-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span>Scanning Video and Audio Authenticity</span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
          </p>
          <div className="text-slate-400 text-sm space-y-1">
            <p className="font-medium">Running ensemble models...</p>
            <p className="text-xs">CNN • LSTM • Vision Transformer</p>
          </div>
        </div>
      </div>

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
    </div>
  )
}
