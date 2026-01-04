import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-sky-500/40">
              w
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-50">
              whatrank (by digicaptain)
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
              <button
                key={item}
                className="relative hover:text-sky-400 transition group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:brightness-110 transition-all text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-sky-500/40">
            Free Trial
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background gradient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/40 text-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm shadow-sky-500/40">
              🚀 Website Optimization Platform
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
              Grow Your Website
              <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                With Smarter SEO
              </span>
            </h1>

            <p className="text-slate-300 max-w-xl text-base sm:text-lg">
              Run a complete SEO audit in seconds and get prioritized, actionable recommendations to improve rankings, traffic, and visibility.
            </p>

            <div className="flex max-w-xl bg-slate-900/60 border border-sky-500/30 rounded-full shadow-xl shadow-sky-900/40 overflow-hidden backdrop-blur-xl">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 px-6 py-4 outline-none text-sm sm:text-base text-slate-100 placeholder:text-slate-400 bg-transparent"
              />

              <button
                onClick={() => {
                  if (!url.trim()) return;
                  navigate(`/loading?url=${encodeURIComponent(url)}`);
                }}
                className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:brightness-110 transition text-white px-6 sm:px-8 text-sm font-semibold"
              >
                Analyze
              </button>

            </div>

            <p className="text-xs text-slate-400">
              Free report · No credit card required · Takes ~10 seconds
            </p>
          </div>

          {/* RIGHT – SCORE CARD */}
          <div className="flex justify-center">
            <div className="w-[360px] sm:w-[380px] bg-slate-900/60 border border-sky-500/30 rounded-3xl shadow-2xl shadow-sky-900/60 p-6 sm:p-7 space-y-5 backdrop-blur-2xl">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Overall SEO Score
                </span>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  82
                </span>
              </div>

              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              </div>

              <ul className="text-sm text-slate-300 space-y-2 pt-2">
                <li className="flex items-center justify-between">
                  <span>Meta description</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-300 border border-red-500/40">
                    Missing
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Page speed</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40">
                    Needs improvement
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Backlinks</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                    Healthy
                  </span>
                </li>
              </ul>

              <button className="w-full mt-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/40 text-sky-200 py-3 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-1">
                View Full Report →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Everything You Need to Improve SEO
          </h2>
          <p className="text-slate-300 text-sm sm:text-base text-center max-w-2xl mx-auto mb-12">
            Understand your site at a glance with powerful audits, smart crawling, and clear next steps that actually move the needle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SEO Audit",
                icon: "📊",
                accent: "from-sky-400 to-blue-500",
              },
              {
                title: "Site Crawl",
                icon: "🕷️",
                accent: "from-cyan-400 to-sky-500",
              },
              {
                title: "On-page Issues",
                icon: "⚠️",
                accent: "from-amber-400 to-orange-500",
              },
              {
                title: "Actionable Fixes",
                icon: "🛠️",
                accent: "from-emerald-400 to-teal-400",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-slate-900/60 border border-slate-700/80 rounded-2xl p-7 text-center shadow-lg shadow-slate-950/80 hover:shadow-sky-900/70 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden backdrop-blur-xl"
              >
                <div
                  className={`absolute inset-x-16 -top-24 h-40 bg-gradient-to-b ${item.accent} opacity-20 blur-3xl group-hover:opacity-40 transition`}
                />
                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-50">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    Clear insights that help you prioritize, fix, and grow faster.
                  </p>
                  <div className="mt-4 text-sky-300 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition">
                    Learn more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-12 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                1M+
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm uppercase tracking-wide">
                Websites Analyzed
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                40+
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm uppercase tracking-wide">
                SEO Checks
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                90%
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm uppercase tracking-wide">
                Actionable Insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white">
        {/* Decorative blur */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center space-y-8">
          <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Ready to Improve Your SEO?
          </h3>

          <p className="max-w-2xl mx-auto text-sky-100 text-base sm:text-lg">
            Get a complete, beautiful SEO audit with clear recommendations and prioritized fixes — delivered in under 10 seconds.
          </p>

          <div className="flex justify-center">
            <button className="group bg-white text-sky-700 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 text-sm sm:text-base">
              Get Free SEO Report
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-sky-100/80">
            No credit card required · 100% free analysis
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs sm:text-sm text-slate-400 bg-slate-950 border-t border-slate-800">
        © 2026 SEO Analyzer · Demo Project
      </footer>
    </div>
  );
}
