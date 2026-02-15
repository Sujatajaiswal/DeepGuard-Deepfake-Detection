interface ResultsPanelProps {
  videoScore: number
  audioScore: number
  verdict: "real" | "deepfake" | null
  fileName: string
}

export default function ResultsPanel({ videoScore, audioScore, verdict, fileName }: ResultsPanelProps) {
  const avgScore = (videoScore + audioScore) / 2

  const getVerdictColor = (v: string | null) => {
    if (v === "real") return "from-emerald-500/20 to-teal-500/10"
    if (v === "deepfake") return "from-red-500/20 to-rose-500/10"
    return "from-slate-500/20 to-slate-500/10"
  }

  const getVerdictTextColor = (v: string | null) => {
    if (v === "real") return "text-emerald-400"
    if (v === "deepfake") return "text-red-400"
    return "text-slate-400"
  }

  const getVerdictBorder = (v: string | null) => {
    if (v === "real") return "border-emerald-500/50"
    if (v === "deepfake") return "border-red-500/50"
    return "border-slate-500/50"
  }

  return (
    <div className="space-y-6">
      {/* File info */}
      <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
        <p className="text-slate-400 text-sm">Analyzed File:</p>
        <p className="text-white font-semibold truncate">{fileName}</p>
      </div>

      {/* Main verdict */}
      <div
        className={`relative p-8 rounded-xl border bg-gradient-to-br ${getVerdictColor(verdict)} ${getVerdictBorder(verdict)} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

        <div className="relative text-center space-y-4">
          <div className="flex justify-center gap-3">
            {verdict === "real" ? (
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-3xl font-bold font-poppins mb-2">
              <span className={getVerdictTextColor(verdict)}>
                {verdict === "real" ? "Likely Real" : "Likely Deepfake"}
              </span>
            </h3>
            <p className="text-slate-300">
              Confidence Score: <span className="font-semibold">{avgScore.toFixed(1)}%</span>
            </p>
          </div>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Video Score */}
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm mb-1">Video Deepfake Score</p>
              <p className="text-2xl font-bold text-white font-poppins">{videoScore.toFixed(1)}%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: `${videoScore}%` }} />
          </div>
        </div>

        {/* Audio Score */}
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-colors duration-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm mb-1">Audio Deepfake Score</p>
              <p className="text-2xl font-bold text-white font-poppins">{audioScore.toFixed(1)}%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${audioScore}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
