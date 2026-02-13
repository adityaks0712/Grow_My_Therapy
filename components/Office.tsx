"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurOffice() {
  return (
    <section className="bg-[#F2F8F7] py-[clamp(80px,10vw,140px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,48px)]">

        {/* ALWAYS SIDE BY SIDE */}
        <div className="flex items-start gap-[clamp(24px,6vw,80px)]">

          {/* LEFT — TEXT */}
          <div className="w-[48%] flex flex-col">

            <h2 className="text-[clamp(24px,4vw,56px)] leading-[1.1] mb-[clamp(16px,3vw,32px)] text-[#1f3a3a]">
              A Calm Space for Healing
            </h2>

            <div className="space-y-[clamp(16px,2.5vw,28px)] text-[#5f5f5f] text-[clamp(14px,1.8vw,20px)] leading-[1.85]">
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

            {/* BUTTON */}
            <div className="mt-[clamp(32px,6vw,60px)]">
              <a
                href="#location"
                className="
                  inline-block
                  border-2 border-[#1f3a3a]
                  px-[clamp(16px,3vw,32px)]
                  py-[clamp(8px,1.5vw,18px)]
                  text-[clamp(12px,1.5vw,18px)]
                  tracking-[0.2em]
                  uppercase
                  text-[#1f3a3a]
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

          {/* RIGHT — IMAGES */}
          <div className="w-[48%] flex flex-col gap-[clamp(16px,3vw,32px)]">

            {/* IMAGE 1 */}
            <motion.div
              initial={{ y: -120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full aspect-4/3 overflow-hidden rounded shadow-sm"
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
              className="relative w-full aspect-4/2 overflow-hidden rounded shadow-sm"
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
