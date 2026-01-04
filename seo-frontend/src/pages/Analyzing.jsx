import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const steps = [
  "Connecting to website",
  "Crawling pages",
  "Analyzing SEO factors",
  "Checking content & structure",
  "Generating recommendations",
];

export default function Analyzing() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const url = params.get("url");

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!url) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1200);

    // After animation → go to report
    const timeout = setTimeout(() => {
      navigate(`/report?url=${encodeURIComponent(url)}`);
    }, steps.length * 1200 + 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [url, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-slate-900/70 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">

        <h2 className="text-2xl font-extrabold text-center mb-2">
          Analyzing your website
        </h2>

        <p className="text-slate-400 text-sm text-center mb-8 break-all">
          {url}
        </p>

        {/* Progress bar */}
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-700"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <ul className="space-y-3 text-sm">
          {steps.map((step, index) => (
            <li
              key={step}
              className={`flex items-center gap-2 ${
                index <= currentStep
                  ? "text-sky-400"
                  : "text-slate-500"
              }`}
            >
              {index <= currentStep ? "✔" : "•"} {step}
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-500 text-center mt-8">
          This usually takes under 10 seconds
        </p>
      </div>
    </div>
  );
}
