export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#050816]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-blue-500 rounded-full" />
          <span className="uppercase tracking-widest text-sm">woorank</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <button>Features</button>
          <button>Solutions</button>
          <button>Pricing</button>
          <button>Resources</button>
        </div>

        <button className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
          Free Trial
        </button>
      </div>
    </nav>
  );
}
