import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ConditionsStrip from "@/components/sections/ConditionsStrip";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import AboutPreview from "@/components/sections/AboutPreview";
import InlineCTA from "@/components/ui/InlineCTA";

export const metadata: Metadata = {
  title: "Amanda J Gretsch, Inc. | Occupational Therapist | Encinitas, CA",
  description:
    "Dr. Amanda Gretsch, PhD, MS, OTR/L — evidence-based occupational therapy, neurofeedback, and biofeedback in Encinitas, CA. Free 15-minute consultation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ConditionsStrip />
      <Testimonials />
      <Process />
      <AboutPreview />
      <section className="bg-[var(--off-white)] py-16 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineCTA
            title="Take the first step toward a better quality of life."
            subtitle="Contact Dr. Amanda for a free 15-minute consultation — no obligation, just a conversation."
            variant="teal"
          />
        </div>
      </section>
    </>
  );
}
