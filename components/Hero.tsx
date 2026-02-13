import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F2EFE9] py-[clamp(100px,10vw,160px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,32px)]">

        {/* ALWAYS SIDE BY SIDE */}
        <div className="flex items-center gap-[clamp(24px,6vw,80px)]">

          {/* IMAGE — LEFT */}
          <div className="w-[35%] shrink-0">
            <div className="relative w-full aspect-square overflow-hidden rounded shadow-sm">
              <Image
                src="/images/santa-monica.jpg"
                alt="Calm coastal scenery in Santa Monica, California"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT — RIGHT */}
          <div className="w-[60%]">

            <h1 className="text-[clamp(26px,4vw,58px)] leading-[1.15] mb-[clamp(16px,3vw,40px)] text-[#1f3a3a]">
              Anxiety, Trauma & Burnout Therapy for Adults in Santa Monica, CA
            </h1>

            <p className="text-[#6b6b6b] mb-[clamp(20px,4vw,48px)] text-[clamp(14px,1.8vw,19px)] leading-[1.8]">
              In-person therapy in Santa Monica and secure telehealth sessions
              available throughout California.
            </p>

            <a
              href="#contact"
              className="
                inline-block
                border-2 border-[#1f3a3a]
                px-[clamp(16px,3vw,32px)]
                py-[clamp(8px,1.5vw,16px)]
                text-[clamp(12px,1.5vw,18px)]
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

