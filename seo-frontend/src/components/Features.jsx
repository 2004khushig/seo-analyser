// Features.jsx
import Container from "./Container";

export default function Features() {
  const features = [
    "SEO Analysis",
    "Site Crawl",
    "Backlink Monitoring",
    "Competitor Research",
  ];

  return (
    <section className="py-12 lg:py-16 bg-white/5">
      <Container>
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Powerful Features for Every Site
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Discover issues, track changes, and stay ahead of your competitors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-[#050816]/70 border border-white/10 rounded-2xl p-5 hover:border-emerald-400/60 hover:-translate-y-1 transition transform"
            >
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                {feature}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Actionable insights to improve performance.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
