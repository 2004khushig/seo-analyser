// CTA.jsx
import Container from "./Container";

export default function CTA() {
  return (
    <section className="bg-white text-gray-900 py-14">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold text-center lg:text-left">
            Ready to improve your SEO?
          </h3>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md shadow-blue-500/30">
            Start Free Trial
          </button>
        </div>
      </Container>
    </section>
  );
}
