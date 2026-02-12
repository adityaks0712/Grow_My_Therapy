"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-8 py-[180px]">

        {/* LEFT–RIGHT LAYOUT (UNCHANGED) */}
        <div className="flex flex-row items-center">

          {/* IMAGE — LEFT (UNCHANGED) */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="relative w-[520px] h-[640px] overflow-hidden rounded-[4px] shadow-sm">
              <Image
                src="/images/maya.png"
                alt="Dr. Maya Reynolds, PsyD"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* SPACE (UNCHANGED) */}
          <div className="w-[140px]" />

          {/* TEXT — RIGHT */}
          <div className="max-w-xl">

            <h2 className="text-[52px] mb-10 text-[#1f3a3a] leading-[1.15]">
              Hi, I’m Dr. Maya Reynolds, PsyD
            </h2>

            <p className="text-[#6b6b6b] text-[19px] leading-[1.9] mb-8">
              I’m a licensed clinical psychologist based in Santa Monica, California,
              specializing in therapy for adults experiencing anxiety, trauma,
              and burnout. Many of my clients are high-functioning on the outside,
              yet internally feel overwhelmed, emotionally exhausted, or stuck
              in cycles of overthinking.
            </p>

            <p className="text-[#6b6b6b] text-[19px] leading-[1.9] mb-20">
              My approach is warm, collaborative, and grounded in evidence-based
              care. I integrate Cognitive Behavioral Therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to help
              clients feel more regulated, present, and connected to themselves.
            </p>

            {/* REFINED CTA */}
            <div className="flex justify-center">
              <a
                href="#contact"
                className="
                  inline-block
                  border-2 border-[#1f3a3a]
                  px-20 py-6
                  text-xl
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
      </div>
    </section>
  );
}



