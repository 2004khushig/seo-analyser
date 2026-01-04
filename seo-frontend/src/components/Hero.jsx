// Hero.jsx
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full text-xs sm:text-sm text-gray-300">
            <span className="h-2 w-2 bg-emerald-400 rounded-full" />
            Website Optimization Tools
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Grow Your Website
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              With Better SEO
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl text-sm sm:text-base">
            Analyze your website and get actionable insights to improve rankings,
            traffic, and conversions.
          </p>

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-2xl sm:rounded-full p-1.5 max-w-xl">
              <input
                placeholder="Enter your website URL"
                className="flex-1 bg-transparent px-4 py-2.5 outline-none text-sm placeholder:text-gray-400"
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 px-6 py-2.5 rounded-xl sm:rounded-full font-semibold text-sm mt-2 sm:mt-0">
                Analyze
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              No credit card required. Instant SEO snapshot in under 30 seconds.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-6 lg:mt-0 flex justify-center">
          <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_30px_120px_rgba(15,23,42,1)] flex items-end p-5">
            <div className="bg-white/95 text-gray-900 rounded-2xl p-4 w-full space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">SEO Score</span>
                <span className="font-bold text-emerald-500 text-xl">82</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-1">
                <div className="h-full w-[82%] bg-emerald-500 rounded-full" />
              </div>
              <div className="mt-3 text-xs text-gray-600">
                <p>Meta description: Missing</p>
                <p>Backlinks: 120+ quality links</p>
                <p>Page speed: Needs improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
