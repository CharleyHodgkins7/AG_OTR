import type { Metadata } from "next";
import Image from "next/image";
import ConditionAccordion from "@/components/ui/ConditionAccordion";
import InlineCTA from "@/components/ui/InlineCTA";

export const metadata: Metadata = {
  title: "Diagnoses & Conditions We Treat",
  description:
    "Amanda J Gretsch, Inc. treats ADHD, anxiety, autism, depression, TBI, sensory processing dysfunction, learning disabilities, cognitive decline, and more in Encinitas, CA.",
};

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[var(--teal)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* 🚩 PLACEHOLDER: Replace with calming ocean/nature image */}
          <Image
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=60"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--sand)] font-inter mb-3">
              Who We Help
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Diagnoses & Conditions We Treat
            </h1>
            <p className="text-white/80 text-lg font-inter leading-relaxed">
              Dr. Amanda works with children, teens, and adults across a wide range of developmental, neurological, and mental health conditions — as well as those seeking to optimize performance and well-being without a formal diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--text-muted)] font-inter mb-10 text-base leading-relaxed border-l-4 border-[var(--teal)] pl-5">
            We provide both traditional and specialized testing to better understand the nature of the challenges you or your child are facing, as well as the most efficacious treatments to directly address these challenges. Click any condition below to learn more.
          </p>

          <ConditionAccordion />

          <div className="mt-16">
            <InlineCTA
              title="Not sure if we're the right fit?"
              subtitle="A free 15-minute consultation is a no-obligation way to find out."
              variant="teal"
            />
          </div>
        </div>
      </section>
    </>
  );
}
