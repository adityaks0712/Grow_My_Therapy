"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F2EFE9] py-[clamp(80px,8vw,180px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,32px)]">

        {/* ALWAYS SIDE BY SIDE */}
        <div className="flex items-center gap-[clamp(24px,6vw,140px)]">

          {/* IMAGE */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[35%] shrink-0"
          >
            <div className="relative w-full aspect-4/5 overflow-hidden rounded shadow-sm">
              <Image
                src="/images/maya.png"
                alt="Dr. Maya Reynolds, PsyD"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="w-[60%]">

            <h2 className="text-[clamp(24px,4vw,52px)] mb-[clamp(16px,3vw,40px)] text-[#1f3a3a] leading-[1.15]">
              Hi, I’m Dr. Maya Reynolds, PsyD
            </h2>

            <p className="text-[#6b6b6b] text-[clamp(14px,1.8vw,19px)] leading-[1.8] mb-[clamp(16px,2vw,32px)]">
              I’m a licensed clinical psychologist based in Santa Monica, California,
              specializing in therapy for adults experiencing anxiety, trauma,
              and burnout. Many of my clients are high-functioning on the outside,
              yet internally feel overwhelmed, emotionally exhausted, or stuck
              in cycles of overthinking.
            </p>

            <p className="text-[#6b6b6b] text-[clamp(14px,1.8vw,19px)] leading-[1.8] mb-[clamp(24px,4vw,80px)]">
              My approach is warm, collaborative, and grounded in evidence-based
              care. I integrate Cognitive Behavioral Therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to help
              clients feel more regulated, present, and connected to themselves.
            </p>

            <a
              href="#contact"
              className="
                inline-block
                border-2 border-[#1f3a3a]
                px-[clamp(16px,3vw,80px)]
                py-[clamp(8px,1.5vw,24px)]
                text-[clamp(12px,1.5vw,20px)]
                tracking-[0.15em]
                uppercase
                transition-all
                duration-300
                text-[#1f3a3a]
                hover:bg-[#1f3a3a]
                hover:text-white
              "
            >
              LET’S CHAT →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
