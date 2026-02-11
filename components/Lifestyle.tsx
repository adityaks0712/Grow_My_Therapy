import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="bg-[#EDE9E2]">
      <div className="max-w-7xl mx-auto px-8 py-[160px]">

        {/* FORCED LEFT–RIGHT LAYOUT */}
        <div className="flex flex-row items-center">

          {/* TEXT — LEFT */}
          <div className="max-w-xl">
            <h2 className="text-[42px] leading-[1.2] mb-6 text-ink">
              Live a fulfilling life.
            </h2>

            <p className="text-muted mb-4 text-[18px] leading-[1.8]">
              Life can feel overwhelming when you’re balancing work,
              relationships, and personal expectations.
            </p>

            <p className="text-muted text-[18px] leading-[1.8]">
              Therapy provides a calm, supportive space to slow down,
              reflect, and move forward with clarity.
            </p>

            {/* CTA — BOTTOM */}
            <div className="mt-12">
              <a
                href="#contact"
                className="
                  inline-block
                  border border-ink
                  px-8 py-3
                  text-sm
                  tracking-wide
                  transition-all
                  duration-300
                  hover:bg-ink
                  hover:text-white
                "
              >
                GET IN TOUCH →
              </a>
            </div>
          </div>

          {/* SPACE BETWEEN TEXT & IMAGE */}
          <div className="w-[120px]" />

          {/* IMAGE — RIGHT */}
          <div className="shrink-0">
            <div className="relative w-[520px] h-[420px]">
              <Image
                src="/images/lifestyle.png"
                alt="Calm lifestyle moment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

