import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-bg w-full">
      <div className="max-w-7xl mx-auto px-8 py-[100px]">

        {/* LEFT–RIGHT LAYOUT */}
        <div className="flex flex-row items-center">

          {/* IMAGE — LEFT (BIGGER, SQUARE) */}
          <div className="shrink-0">
            <div className="relative w-[640px] h-[640px]">
              <Image
                src="/images/santa-monica.jpg"
                alt="Calm coastal scenery in Santa Monica, California"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SPACE */}
          <div className="w-[140px]" />

          {/* TEXT — RIGHT */}
          <div className="max-w-xl">
            <h1 className="text-[60px] leading-[1.15] mb-8 text-ink">
              Anxiety, Trauma & Burnout Therapy for Adults in Santa Monica, CA
            </h1>

            <p className="text-muted mb-24 text-[19px] leading-[1.85]">
              In-person sessions in Santa Monica and telehealth across California.
            </p>
          </div>

        </div>

      {/* CTA — CENTERED AND BIGGER */}
        <div className="flex justify-center items-center mt-10">
          <a
            href="#contact"
            className="
              inline-block
              border-2 border-ink
              px-16 py-8
              text-[24px]
              font-medium
              tracking-[0.2em]
              text-ink
              uppercase
              transition-all
              duration-300
              hover:bg-ink hover:text-white
            "
          >
            Schedule a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}




