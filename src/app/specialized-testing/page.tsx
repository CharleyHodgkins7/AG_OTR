import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InlineCTA from "@/components/ui/InlineCTA";
import { TESTING } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Specialized Testing — QEEG, ERP, Executive Function & More",
  description:
    "Comprehensive specialized testing including QEEG brain mapping, Event Related Potential (ERP), motor skills, executive function, sensory processing, and cognitive skills assessments in Encinitas, CA.",
};

const TESTING_IMAGES: string[] = [
  // 🚩 PLACEHOLDER: Replace with QEEG / brain mapping photo
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=85",
  // 🚩 PLACEHOLDER: Replace with ERP / brain response testing photo
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85",
  // 🚩 PLACEHOLDER: Replace with motor skills assessment photo
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=85",
  // 🚩 PLACEHOLDER: Replace with executive function / cognitive testing photo
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=85",
  // 🚩 PLACEHOLDER: Replace with sensory processing assessment photo
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=85",
  // 🚩 PLACEHOLDER: Replace with cognitive testing photo
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=700&q=85",
];

export default function SpecializedTestingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[var(--teal)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* 🚩 PLACEHOLDER: Replace with testing/assessment room photo */}
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=50"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--sand)] font-inter mb-3">
              Assessment First
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Specialized Testing
            </h1>
            <p className="text-white/80 text-lg font-inter leading-relaxed">
              We provide both traditional and specialized testing to better understand the nature of the challenges you or your child are facing, as well as the most efficacious treatments to directly address these challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTING.map((test, i) => (
              <div
                key={test.title}
                className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] hover:border-[var(--teal-light)] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={TESTING_IMAGES[i]}
                    alt={test.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{test.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-1">
                    {test.subtitle}
                  </p>
                  <h2 className="font-playfair text-xl font-semibold text-[var(--charcoal)] mb-3 leading-tight">
                    {test.title}
                  </h2>
                  <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What to Expect Box */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[var(--sand-light)] rounded-3xl p-8 border border-[var(--border)]">
              <h3 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-4">
                What to Expect During Testing
              </h3>
              <ul className="space-y-3">
                {[
                  "All testing begins with a comprehensive clinical history and interview",
                  "Standardized, evidence-based tools are used throughout",
                  "Testing sessions are non-invasive and adapted to your comfort",
                  "Results are reviewed with you in detail",
                  "A personalized intervention plan is developed based on findings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--teal)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-[var(--text-muted)] font-inter text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--teal)] rounded-3xl p-8">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                Why Specialized Testing Matters
              </h3>
              <p className="text-white/80 font-inter text-sm leading-relaxed mb-5">
                Specialized testing provides an objective window into how your brain and nervous system are actually functioning — not just what symptoms look like from the outside. This guides more targeted, more effective treatment.
              </p>
              <p className="text-white/80 font-inter text-sm leading-relaxed mb-6">
                Results from testing may inform neurofeedback protocols, guide OT approaches, identify specific cognitive challenges, or clarify the most beneficial interventions for your situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--teal)] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[var(--sand)] transition-colors"
              >
                Schedule an Evaluation
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <InlineCTA
              title="Ready to start with a comprehensive evaluation?"
              subtitle="Contact us for a free 15-minute consultation to discuss which assessments may be right for you."
              variant="teal"
            />
          </div>
        </div>
      </section>
    </>
  );
}
