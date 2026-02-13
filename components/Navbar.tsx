export default function Navbar() {
  return (
    <header className="w-full bg-[#1a2e2e] sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Brand */}
        <span className="text-white font-bold tracking-tight text-[clamp(18px,3vw,36px)]">
          Therapy for Adults
        </span>

        {/* Nav Links */}
        <nav className="flex items-center gap-[clamp(20px,5vw,80px)]">

          <a
            href="mailto:hello@anxietytherapy.com"
            className="text-white font-semibold text-[clamp(14px,2vw,24px)] transition-opacity duration-300 hover:opacity-70"
          >
            Email Us
          </a>

          <a
            href="#contact"
            className="text-white font-semibold text-[clamp(14px,2vw,24px)] transition-opacity duration-300 hover:opacity-70"
          >
            Contact Us
          </a>

        </nav>
      </div>
    </header>
  );
}
