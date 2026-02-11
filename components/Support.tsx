import Image from "next/image";

export default function Support() {
  return (
    <section className="bg-[#E3F1EF]">
      <div className="max-w-7xl mx-auto flex flex-row items-center py-[200px] px-12 gap-28">

        {/* TEXT — LEFT */}
        <div className="max-w-2xl">

          <h2 className="text-[52px] leading-[1.15] mb-14 text-[#1a2e2e]">
            You don’t have to do this all alone.
          </h2>

          <p className="text-[#4a4a4a] text-[20px] leading-[1.9] mb-14">
            Many of the adults I work with are capable, driven, and outwardly
            successful—yet internally feel overwhelmed, constantly on edge,
            or emotionally exhausted.
          </p>

          <p className="text-[#1a2e2e] text-[20px] font-semibold mb-10">
            You might notice:
          </p>

          {/* DESIGN-FRIENDLY BULLETS */}
          <ul className="space-y-8 text-[19px] text-[#4a4a4a] mb-24">
            <li className="flex items-start gap-4">
              <span className="mt-2 w-2 h-2 bg-[#1a2e2e] rounded-full shrink-0"></span>
              Persistent anxiety or tension that’s hard to quiet
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-2 w-2 h-2 bg-[#1a2e2e] rounded-full shrink-0"></span>
              Difficulty slowing down or truly resting
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-2 w-2 h-2 bg-[#1a2e2e] rounded-full shrink-0"></span>
              Emotional exhaustion or burnout
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-2 w-2 h-2 bg-[#1a2e2e] rounded-full shrink-0"></span>
              Overthinking, self-criticism, or perfectionism
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-2 w-2 h-2 bg-[#1a2e2e] rounded-full shrink-0"></span>
              Feeling disconnected from yourself or others
            </li>
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="
              inline-block
              border-2 border-[#1a2e2e]
              px-28 py-9
              text-xl
              tracking-[0.2em]
              text-[#1a2e2e]
              transition-all
              duration-300
              hover:text-white
            "
          >
            WORK WITH ME →
          </a>

        </div>

        {/* IMAGE — RIGHT (BIGGER) */}
        <div className="shrink-0">
          <div className="relative w-[620px] h-[760px]">
            <Image
              src="/images/support.png"
              alt="Adult sitting quietly near the ocean, reflecting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}


