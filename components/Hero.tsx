import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F2EFE9] w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-[140px]">

        {/* LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">

          {/* IMAGE */}
          <div className="relative w-full h-[420px] lg:w-[600px] lg:h-[600px] rounded-[6px] overflow-hidden shadow-sm">
            <Image
              src="/images/santa-monica.jpg"
              alt="Calm coastal scenery in Santa Monica, California"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="max-w-xl text-center lg:text-left">

            <h1 className="text-3xl lg:text-[58px] leading-[1.15] mb-8 text-[#1f3a3a]">
              Anxiety, Trauma & Burnout Therapy for Adults in Santa Monica, CA
            </h1>

            <p className="text-[#6b6b6b] mb-12 text-base lg:text-[19px] leading-[1.8]">
              In-person therapy in Santa Monica and secure telehealth sessions
              available throughout California.
            </p>

            {/* CTA — Inline for Better Flow */}
            <a
              href="#contact"
              className="
                inline-block
                border-2 border-[#1f3a3a]
                px-10 py-4
                lg:px-14 lg:py-6
                text-sm lg:text-lg
                tracking-[0.15em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#1f3a3a]
                hover:text-white
              "
            >
              Schedule a Consultation →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
