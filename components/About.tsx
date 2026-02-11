import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-8 py-[180px]">

        {/* LEFT–RIGHT LAYOUT */}
        <div className="flex flex-row items-center">

          {/* IMAGE — LEFT (DR. MAYA) */}
          <div className="shrink-0">
            <div className="relative w-[520px] h-[640px]">
              <Image
                src="/images/maya.png"
                alt="Dr. Maya Reynolds, PsyD"
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
            <h2 className="text-[52px] mb-10 text-ink">
              Hi, I’m Dr. Maya Reynolds, PsyD
            </h2>

            <p className="text-muted text-[19px] leading-[1.9] mb-8">
              I’m a licensed clinical psychologist based in Santa Monica, California,
              specializing in therapy for adults experiencing anxiety, trauma,
              and burnout. Many of my clients are high-functioning on the outside,
              yet internally feel overwhelmed, emotionally exhausted, or stuck
              in cycles of overthinking.
            </p>

            <p className="text-muted text-[19px] leading-[1.9] mb-20">
              My approach is warm, collaborative, and grounded in evidence-based
              care. I integrate Cognitive Behavioral Therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to help
              clients feel more regulated, present, and connected to themselves.
            </p>

            {/* HUGE CTA — CENTERED */}
            <div className="flex justify-center">
              <a
                href="#contact"
                className="
                  inline-block
                  border border-ink
                  px-32 py-12
                  text-3xl
                  tracking-widest
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
              >
                LET’S CHAT →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


