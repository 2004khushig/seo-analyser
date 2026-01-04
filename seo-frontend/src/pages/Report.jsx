import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Report() {
  const [params] = useSearchParams();
  const url = params.get("url");

  const normalizedUrl = url?.startsWith("http")
    ? url
    : `https://${url}`;
    
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  const downloadPDF = () => {
    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SEO Report - ${normalizedUrl}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; background: white; }
            h1 { color: #059669; font-size: 32px; }
            h2 { color: #059669; font-size: 24px; }
            h3 { color: #374151; font-size: 20px; }
            .score { font-size: 72px; font-weight: bold; background: linear-gradient(90deg, #10b981, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0; }
            .stat-card { text-align: center; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; }
            .stat-number { font-size: 36px; font-weight: bold; }
            .passed { color: #10b981; }
            .medium { color: #f59e0b; }
            .high { color: #ef4444; }
            .issue { background: #fef2f2; border: 1px solid #fecaca; padding: 12px; margin: 10px 0; border-radius: 8px; }
            .recommendation { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; margin: 12px 0; border-radius: 8px; }
            .url { word-break: break-all; color: #6b7280; font-size: 14px; }
            @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <h1>SEO Report</h1>
          <p class="url">${normalizedUrl}</p>
          <p>Analyzed on ${new Date().toLocaleString()}</p>
          
          <div style="margin: 40px 0;">
            <p style="color: #6b7280; margin-bottom: 8px;">Overall SEO Score</p>
            <div class="score">${summary.avgScore}</div>
            <div style="width: 100%; height: 8px; background: #e5e7eb; border-radius: 4px; margin: 20px 0; overflow: hidden;">
              <div style="height: 100%; background: linear-gradient(90deg, #10b981, #06b6d4); width: ${summary.avgScore}%;"></div>
            </div>
            <p style="color: #6b7280;">Based on ${summary.totalPages} page(s)</p>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number passed">${summary.passed}</div>
              <p>Passed</p>
            </div>
            <div class="stat-card">
              <div class="stat-number medium">${summary.improve}</div>
              <p>Needs Improvement</p>
            </div>
            <div class="stat-card">
              <div class="stat-number high">${summary.errors}</div>
              <p>Errors</p>
            </div>
          </div>

          ${issues?.High?.length > 0 ? `
            <h2>Errors (${summary.errors})</h2>
            ${issues.High.map(issue => `<div class="issue"><h3>${issue.title}</h3><p>Affected pages: ${issue.count}</p></div>`).join('')}
          ` : ''}

          ${issues?.Medium?.length > 0 ? `
            <h2>Needs Improvement (${summary.improve})</h2>
            ${issues.Medium.map(issue => `<div class="issue"><h3>${issue.title}</h3><p>Affected pages: ${issue.count}</p></div>`).join('')}
          ` : ''}

          ${recommendations.length > 0 ? `
            <h2>Recommendations</h2>
            ${recommendations.map(rec => `<div class="recommendation"><h3>${rec.title}</h3><p>Priority: ${rec.severity}</p>${rec.affectedPages?.length > 0 ? `<p>Affected pages: ${rec.affectedPages.length}</p>` : ''}</div>`).join('')}
          ` : '<p style="color: #10b981; font-size: 18px;">Your site is in great shape! 🎯</p>'}
        </body>
      </html>
    `);
    
    reportWindow.document.close();
    reportWindow.print();
  };

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    fetch("http://localhost:5000/analyze/site", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: normalizedUrl }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("REPORT DATA 👉", res);
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load report");
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
        Analyzing website…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
        {error}
      </div>
    );
  }

  const { summary, issues, recommendations } = data;

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">
                SEO Report
              </h1>
              <p className="text-slate-400 break-all text-sm">{normalizedUrl}</p>
            </div>
            <button
              onClick={downloadPDF}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              📄 Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* WEBSITE PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          <img
            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(
              normalizedUrl
            )}?w=600`}
            alt="Website preview"
            className="w-56 h-36 object-cover rounded-lg border border-slate-700 bg-slate-900"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400?text=Preview+Unavailable";
            }}
          />

          <div>
            <p className="text-lg font-semibold">{normalizedUrl}</p>
            <p className="text-slate-400 text-sm">
              Analyzed on {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      {/* SCORE + STATS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <p className="text-slate-400 text-sm mb-2">Overall SEO Score</p>

          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {summary.avgScore}
          </h2>

          <div className="mt-6 h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400"
              style={{ width: `${summary.avgScore}%` }}
            />
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Based on {summary.totalPages} page(s)
          </p>
        </div>

        {/* CLICKABLE STATS */}
        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
          <div
            onClick={() => setActiveFilter("passed")}
            className="cursor-pointer bg-slate-900/60 border border-slate-800 hover:border-emerald-400 transition rounded-2xl p-6 text-center flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-extrabold text-emerald-400">
              {summary.passed}
            </h3>
            <p className="text-slate-400 text-sm mt-1">Passed</p>
          </div>

          <div
            onClick={() => setActiveFilter("medium")}
            className="cursor-pointer bg-slate-900/60 border border-slate-800 hover:border-amber-400 transition rounded-2xl p-6 text-center flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-extrabold text-amber-400">
              {summary.improve}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Needs Improvement
            </p>
          </div>

          <div
            onClick={() => setActiveFilter("high")}
            className="cursor-pointer bg-slate-900/60 border border-slate-800 hover:border-red-400 transition rounded-2xl p-6 text-center flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-extrabold text-red-400">
              {summary.errors}
            </h3>
            <p className="text-slate-400 text-sm mt-1">Errors</p>
          </div>
        </div>
      </section>

      {/* FILTERED LIST */}
      {activeFilter && (
        <section className="max-w-7xl mx-auto px-6 py-6">
          <h3 className="text-lg font-bold mb-4">
            {activeFilter === "passed" && "Passed Checks"}
            {activeFilter === "medium" && "Needs Improvement"}
            {activeFilter === "high" && "Errors"}
          </h3>

          {activeFilter === "passed" ? (
            <p className="text-slate-400 text-sm">
              These checks are already optimized ✅
            </p>
          ) : (
            issues?.[
              activeFilter === "high" ? "High" : "Medium"
            ]?.map((issue) => (
              <div
                key={issue.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 mb-3"
              >
                <p className="font-semibold">❌ {issue.title}</p>
                <p className="text-xs text-slate-400">
                  Affected pages: {issue.count}
                </p>
              </div>
            ))
          )}

          <button
            onClick={() => setActiveFilter(null)}
            className="mt-4 text-sm text-sky-400 hover:underline"
          >
            Clear filter
          </button>
        </section>
      )}

      {/* RECOMMENDATIONS */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-extrabold mb-6">
            Recommendations
          </h3>

          {recommendations.length === 0 ? (
            <p className="text-slate-400">
              Your site is in great shape 🎯
            </p>
          ) : (
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                >
                  <p className="font-semibold mb-1">
                    💡 {rec.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    Priority: {rec.severity}
                  </p>
                  {rec.affectedPages?.length > 0 && (
                    <p className="text-xs text-slate-500 mt-1">
                      Affected pages: {rec.affectedPages.length}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-800">
        © 2026 SEO Analyzer · Demo Project
      </footer>
    </div>
  );
}
