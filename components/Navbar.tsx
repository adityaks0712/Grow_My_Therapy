export default function Navbar() {
  return (
    <header className="w-full bg-[#1a2e2e] sticky top-0 z-50 min-h-[150px] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-10 flex justify-between items-center">

        {/* Brand — Now even bigger */}
        <span className="text-[40px] font-bold tracking-tight text-[#ffffff]">
          Anxiety Therapy
        </span>

        {/* Nav Links — Added large gap and specific white color */}
        <nav className="flex items-center gap-[80px]">
          
          <a
            href="mailto:hello@anxietytherapy.com"
            className="text-[#ffffff] text-[24px] font-semibold hover:opacity-70 transition-opacity"
          >
            Email Us
          </a>

          <a
            href="#contact"
            className="text-[#ffffff] text-[24px] font-semibold hover:opacity-70 transition-opacity"
          >
            Contact Us
          </a>

        </nav>

      </div>
    </header>
  );
}




