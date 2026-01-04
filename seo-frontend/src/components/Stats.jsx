// Stats.jsx
import Container from "./Container";

export default function Stats() {
  return (
    <section className="py-14 lg:py-18">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">1M+</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Websites analyzed
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">40+</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              SEO checks
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">90%</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Actionable insights
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
