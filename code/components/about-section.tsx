export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8 font-poppins text-center">About DeepGuard AI</h2>

        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 font-poppins">Advanced AI Models</h3>
                <p className="text-slate-400 text-sm">
                  DeepGuard AI uses state-of-the-art ensemble models combining CNN, LSTM, and Vision Transformers to
                  detect visual manipulations with high accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 1 1 0 000 2H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h3a1 1 0 000-2 2 2 0 00-2 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 font-poppins">Multi-Modal Analysis</h3>
                <p className="text-slate-400 text-sm">
                  Analyzes both visual and audio components separately, providing comprehensive detection of synthetic
                  media across multiple modalities.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/30 transition-colors duration-300">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 font-poppins">Research-Driven</h3>
                <p className="text-slate-400 text-sm">
                  Developed as a research project in 2025, DeepGuard AI continuously evolves to detect the latest
                  deepfake generation techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
