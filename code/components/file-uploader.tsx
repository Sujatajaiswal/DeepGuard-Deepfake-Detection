"use client"

import type React from "react"
import { useState, useRef } from "react"

interface FileUploaderProps {
  onUpload: (file: File) => void
}

export default function FileUploader({ onUpload }: FileUploaderProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(e.type === "dragenter" || e.type === "dragover")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file && (file.type.startsWith("video/") || file.type.startsWith("audio/"))) {
      onUpload(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onUpload(file)
    }
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`relative p-12 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden group ${
        isDragActive
          ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          : "border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

      <input ref={fileInputRef} type="file" accept="video/*,audio/*" onChange={handleFileSelect} className="hidden" />

      <div className="relative flex flex-col items-center gap-4 text-center">
        <div className="relative group/icon">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-0 group-hover/icon:opacity-60 transition-all duration-300 animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-2 border-cyan-500/60 flex items-center justify-center group-hover/icon:scale-110 transition-transform duration-300">
            <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
              />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 font-poppins">Drop your file here</h3>
          <p className="text-slate-400 text-base">or click to select a video or audio file</p>
          <p className="text-slate-500 text-sm mt-2">MP4, AVI, WAV, MP3 and other formats supported</p>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="mt-6 group/btn relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="relative">Browse Files</span>
        </button>
      </div>
    </div>
  )
}
