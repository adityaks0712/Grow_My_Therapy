import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="bg-[#F2F8F7] w-full py-32">
      <div className="max-w-7xl mx-auto px-12">

        {/* MAIN LAYOUT ROW */}
        <div className="flex flex-row items-start gap-24">

          {/* LEFT COLUMN — TEXT + BUTTON */}
          <div className="w-1/2 max-w-xl flex flex-col items-start">

            <h2 className="text-[56px] font-serif leading-[1.1] mb-12 text-[#1a2e2e]">
              A Calm Space for Healing
            </h2>

            <div className="space-y-10 text-[#4a4a4a] text-[20px] leading-[1.9]">
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

            {/* BUTTON — Pushed further down for better white space */}
       {/* BUTTON — Proper spacing & cleaner proportions */}
       <div className="mt-20 pt-6">
        <a
        href="#location"
        className="
        inline-block
        border-2 border-[#1a2e2e]
        px-20 py-6
        text-[22px]
        font-semibold
        tracking-[0.25em]
       text-[#1a2e2e]
       uppercase
       transition-all
       duration-300
    ">
    VISIT US →
       </a>
       </div>

          </div>

          {/* RIGHT COLUMN — IMAGES */}
          <div className="w-1/2 flex flex-col gap-10">
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/office2.jpeg"
                alt="Therapy office"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/office3.jpg"
                alt="Office detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}