"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety Therapy",
    description:
      "Support for adults experiencing chronic worry, overthinking, panic symptoms, and persistent tension. Therapy focuses on helping you feel calmer, more grounded, and better able to manage daily stressors.",
    image: "/images/anxiety-trauma.jpg",
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Trauma-informed care for adults impacted by past experiences, including relational and developmental trauma. EMDR and body-based approaches are used to support nervous system regulation and healing.",
    image: "/images/trauma.png",
  },
  {
    title: "Burnout & High-Achiever Stress",
    description:
      "Therapy for professionals and high-achieving adults experiencing emotional exhaustion, perfectionism, or chronic stress. Sessions focus on restoring balance, boundaries, and a sense of internal ease.",
    image: "/images/burnout.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#E6F2F1] py-[clamp(80px,10vw,160px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,48px)]">

        {/* HEADING */}
        <div className="text-center mb-[clamp(40px,8vw,100px)]">
          <h2 className="text-[clamp(26px,5vw,72px)] leading-[1.05] text-[#1a2e2e]">
            My Specialties
          </h2>
        </div>

        {/* ALWAYS SIDE-BY-SIDE */}
        <div className="flex gap-[clamp(16px,4vw,48px)]">

          {services.map((service, index) => {

            const animations = [
              { x: -120, y: 0 },
              { x: 0, y: 120 },
              { x: 120, y: 0 },
            ];

            const initial = animations[index];

            return (
              <motion.div
                key={service.title}
                initial={{ ...initial, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                  flex-1
                  bg-[#E6F2F1]
                  border border-[#1a2e2e]/20
                  p-[clamp(16px,4vw,48px)]
                  flex flex-col
                "
              >
                <h3 className="text-[clamp(16px,2vw,26px)] mb-[clamp(12px,2vw,24px)] text-[#1a2e2e]">
                  {service.title}
                </h3>

                <p className="text-[clamp(13px,1.6vw,17px)] leading-[1.9] text-[#4a4a4a] mb-[clamp(20px,4vw,60px)]">
                  {service.description}
                </p>

                <div className="mt-auto flex justify-center">
                  <div className="relative w-[70%] aspect-square">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

