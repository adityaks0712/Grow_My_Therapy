import "./globals.css";
import { DM_Serif_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

/* Headline font — warm, professional, therapist-appropriate */
const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

/* Body font — clean, readable, modern */
const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Evidence-based therapy for anxiety, trauma, and burnout. Dr. Maya Reynolds, PsyD offers in-person therapy in Santa Monica and telehealth across California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-sand text-body">
        {children}
      </body>
    </html>
  );
}


