"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you offer in-person therapy or telehealth?",
    answer:
      "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "What types of therapy do you use?",
    answer:
      "My work integrates evidence-based approaches including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to support emotional regulation and long-term change.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "I primarily work with adults experiencing anxiety, trauma, burnout, chronic stress, perfectionism, and overthinking—particularly high-achieving individuals who feel overwhelmed or emotionally exhausted.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I do not accept insurance directly. However, I can provide a superbill that you may submit to your insurance provider for potential out-of-network reimbursement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#E6F2F1] py-[clamp(80px,10vw,160px)]">
      <div className="max-w-7xl mx-auto px-[clamp(16px,4vw,48px)]">

        {/* ALWAYS SIDE-BY-SIDE */}
        <div className="flex items-start gap-[clamp(24px,6vw,80px)]">

          {/* IMAGE — LEFT */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[45%] shrink-0"
          >
            <div className="relative w-full aspect-4/5 overflow-hidden rounded shadow-sm">
              <Image
                src="/images/office1.jpeg"
                alt="Soft ocean tones and calming textures"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT — RIGHT */}
          <div className="w-[55%]">

            <h2 className="text-[clamp(24px,4vw,56px)] mb-[clamp(24px,5vw,60px)] text-[#1a2e2e] leading-[1.1]">
              Frequently Asked Questions
            </h2>

            <div>

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-t border-[#1a2e2e]/30 py-[clamp(14px,2vw,28px)]"
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <span className="text-[clamp(14px,1.8vw,24px)] text-[#1a2e2e] leading-[1.4]">
                        {faq.question}
                      </span>

                      <span className="text-[clamp(16px,2vw,32px)] text-[#1a2e2e]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <p className="mt-[clamp(10px,2vw,20px)] text-[clamp(13px,1.6vw,19px)] leading-[1.9] text-[#4a4a4a]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
