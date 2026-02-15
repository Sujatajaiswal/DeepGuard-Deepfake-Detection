"use client"

import { useState } from "react"
import Link from "next/link"
import FileUploader from "@/components/file-uploader"
import AnalysisAnimation from "@/components/analysis-animation"
import ResultsPanel from "@/components/results-panel"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function AnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<{
    videoScore: number
    audioScore: number
    verdict: "real" | "deepfake" | null
  } | null>(null)
  const [fileName, setFileName] = useState<string>("")

  const handleUpload = async (file: File) => {
    setFileName(file.name)
    setIsAnalyzing(true)
    setResults(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("http://127.0.0.1:8000/predict-video", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Failed to analyze the video")

      const data = await response.json()

      const videoScore = data.confidence
      const audioScore = data.confidence // placeholder
      const verdict = data.prediction === "fake" ? "deepfake" : "real"

      setResults({ videoScore, audioScore, verdict })
    } catch (err) {
      console.error(err)
      alert("Error analyzing video. Check console or server logs.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setResults(null)
    setFileName("")
    setIsAnalyzing(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">DG</span>
            </div>
            <h1 className="text-xl font-bold text-white font-poppins">DeepGuard AI</h1>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">Home</Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <section className="max-w-3xl mx-auto">
          {!isAnalyzing && !results && (
            <>
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-white mb-4 font-poppins">Detect Media Authenticity</h2>
                <p className="text-lg text-slate-300">Upload a video or audio file to analyze for deepfake content</p>
              </div>
              <FileUploader onUpload={handleUpload} />
            </>
          )}

          {isAnalyzing && <AnalysisAnimation />}

          {results && (
            <>
              <ResultsPanel
                videoScore={results.videoScore}
                audioScore={results.audioScore}
                verdict={results.verdict}
                fileName={fileName}
              />
              <div className="mt-8 text-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  Analyze Another File
                </button>
              </div>
            </>
          )}
        </section>
      </div>

      <AboutSection />
      <Footer />

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
