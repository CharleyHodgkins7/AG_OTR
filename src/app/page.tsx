import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ConditionsStrip from "@/components/sections/ConditionsStrip";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import AboutPreview from "@/components/sections/AboutPreview";

export const metadata: Metadata = {
  title: "Amanda J Gretsch, Inc. | Occupational Therapist | Encinitas, CA",
  description:
    "Dr. Amanda Gretsch, PhD, MS, OTR/L — evidence-based occupational therapy, neurofeedback, and biofeedback in Encinitas, CA. Free 15-minute consultation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <ConditionsStrip />
      <Testimonials />
      <Process />
    </>
  );
}
