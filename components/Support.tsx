"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Support() {
  return (
    <section className="bg-[#E3F1EF] py-[clamp(80px,10vw,160px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,48px)] flex items-center gap-[clamp(24px,6vw,80px)]">

        {/* TEXT — LEFT */}
        <div className="w-[52%]">

          <h2 className="text-[clamp(24px,4vw,52px)] leading-[1.15] mb-[clamp(16px,3vw,32px)] text-[#1a2e2e]">
            You don’t have to do this all alone.
          </h2>

          <p className="text-[#4a4a4a] text-[clamp(14px,1.8vw,20px)] leading-[1.9] mb-[clamp(16px,3vw,32px)]">
            Many of the adults I work with are capable, driven, and outwardly
            successful—yet internally feel overwhelmed, constantly on edge,
            or emotionally exhausted.
          </p>

          <p className="text-[#1a2e2e] text-[clamp(14px,1.8vw,20px)] font-semibold mb-[clamp(12px,2vw,20px)]">
            You might notice:
          </p>

          {/* BULLETS */}
          <ul className="space-y-[clamp(10px,2vw,20px)] text-[clamp(13px,1.6vw,19px)] text-[#4a4a4a] mb-[clamp(24px,5vw,60px)]">

            {[
              "Persistent anxiety or tension that’s hard to quiet",
              "Difficulty slowing down or truly resting",
              "Emotional exhaustion or burnout",
              "Overthinking, self-criticism, or perfectionism",
              "Feeling disconnected from yourself or others",
            ].map((item) => (
              <li key={item} className="flex items-start gap-[clamp(6px,1vw,14px)]">
                <span className="mt-2 w-[clamp(6px,0.8vw,10px)] h-[clamp(6px,0.8vw,10px)] bg-[#1a2e2e] rounded-full shrink-0"></span>
                {item}
              </li>
            ))}

          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="
              inline-block
              border-2 border-[#1a2e2e]
              px-[clamp(16px,3vw,36px)]
              py-[clamp(8px,1.5vw,18px)]
              text-[clamp(12px,1.5vw,18px)]
              tracking-[0.2em]
              text-[#1a2e2e]
              uppercase
              transition-all
              duration-300
              hover:bg-[#1a2e2e]
              hover:text-white
            "
          >
            WORK WITH ME →
          </a>

        </div>

        {/* IMAGE — RIGHT */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[44%] shrink-0"
        >
          <div className="relative w-full aspect-4/5 overflow-hidden rounded shadow-sm">
            <Image
              src="/images/support.png"
              alt="Adult sitting quietly near the ocean, reflecting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}




