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
    <section className="bg-[#E6F2F1]">
      <div className="max-w-7xl mx-auto px-8 py-[220px]">

        {/* HEADING */}
        <div className="text-center mb-48">
          <h2 className="text-[72px] leading-[1.05] text-[#1a2e2e]">
            My Specialties
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="flex flex-row gap-16">

          {services.map((service, index) => {
            // Animation directions
            const animations = [
              { x: -120, y: 0 },   // Left → Right
              { x: 0, y: 120 },    // Bottom → Top
              { x: 120, y: 0 },    // Right → Left
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
                  p-16
                  flex flex-col
                "
              >
                <h3 className="text-[26px] mb-8 text-[#1a2e2e]">
                  {service.title}
                </h3>

                <p className="text-[17px] leading-[1.9] text-[#4a4a4a] mb-20">
                  {service.description}
                </p>

                <div className="mt-auto flex justify-center">
                  <div className="relative w-[260px] h-[260px]">
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
