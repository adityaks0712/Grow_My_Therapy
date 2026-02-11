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
    <section className="bg-[#E6F2F1]">
      <div className="max-w-7xl mx-auto px-8 py-[180px]">

        {/* LEFT–RIGHT LAYOUT */}
        <div className="flex flex-row items-start">

          {/* IMAGE — LEFT */}
<motion.div
  initial={{ x: -150, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
  className="shrink-0"
>
  <div className="relative w-[520px] h-[620px] overflow-hidden">
    <Image
      src="/images/office1.jpeg"
      alt="Soft ocean tones and calming textures"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>

          {/* SPACE */}
          <div className="w-[160px]" />

          {/* TEXT — RIGHT */}
          <div className="flex-1 max-w-2xl">

            <h2 className="text-[56px] mb-16 text-ink leading-[1.1]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-t border-ink/30 py-8"
                  >
                    {/* QUESTION ROW */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="
                        w-full
                        flex
                        justify-between
                        items-center
                        text-left
                      "
                    >
                      <span className="text-[24px] text-ink leading-[1.4]">
                        {faq.question}
                      </span>

                      <span className="text-[32px] text-ink">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <p className="mt-6 text-muted text-[19px] leading-[1.9]">
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

