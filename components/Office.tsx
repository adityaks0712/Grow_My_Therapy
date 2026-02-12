"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurOffice() {
  return (
    <section className="bg-[#F2F8F7] w-full py-32">
      <div className="max-w-7xl mx-auto px-12">

        {/* MAIN LAYOUT ROW (UNCHANGED) */}
        <div className="flex flex-row items-start gap-24">

          {/* LEFT COLUMN — TEXT + BUTTON */}
          <div className="w-1/2 max-w-xl flex flex-col items-start">

            <h2 className="text-[56px] font-serif leading-[1.1] mb-10 text-[#1f3a3a]">
              A Calm Space for Healing
            </h2>

            <div className="space-y-8 text-[#5f5f5f] text-[20px] leading-[1.85]">
              <p>
                Therapy takes place in a quiet, thoughtfully designed office in
                Santa Monica, California. The space is intended to feel grounded,
                private, and welcoming—offering a sense of ease from the moment
                you arrive.
              </p>

              <p>
                In-person sessions are available for clients located in the Santa
                Monica area, with secure telehealth options offered across
                California.
              </p>

              <p>
                The office environment reflects the therapeutic approach—calm,
                attentive, and intentionally paced—so you can focus on the work
                that matters most.
              </p>
            </div>

            {/* REFINED BUTTON */}
            <div className="mt-20 pt-6">
              <a
                href="#location"
                className="
                  inline-block
                  border-2 border-[#1f3a3a]
                  px-16 py-5
                  text-[18px]
                  font-medium
                  tracking-[0.2em]
                  text-[#1f3a3a]
                  uppercase
                  transition-all
                  duration-300
                  hover:bg-[#1f3a3a]
                  hover:text-white
                "
              >
                VISIT US →
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN — IMAGES (UNCHANGED LAYOUT) */}
          <div className="w-1/2 flex flex-col gap-10">

            {/* IMAGE 1 */}
            <motion.div
              initial={{ y: -120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full h-[500px] overflow-hidden rounded-[6px] shadow-sm"
            >
              <Image
                src="/images/office2.jpeg"
                alt="Therapy office"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
              className="relative w-full h-[250px] overflow-hidden rounded-[6px] shadow-sm"
            >
              <Image
                src="/images/office3.jpg"
                alt="Office detail"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
