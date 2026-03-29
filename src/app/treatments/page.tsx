import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TREATMENTS } from "@/lib/siteData";
import { img } from "@/lib/imagePath";

export const metadata: Metadata = {
  title: "Treatments & Interventions",
  description:
    "Biofeedback, neurofeedback, neurostimulation, PEMF, Interactive Metronome, sound therapies, ACT, CBT, executive function training and more at Amanda J Gretsch, Inc. in Encinitas, CA.",
};

const CATEGORY_IMAGES: Record<string, string> = {
  "Biofeedback & Neurofeedback":
    // 🚩 PLACEHOLDER: Replace with neurofeedback/biofeedback equipment photo
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85",
  "Neurostimulation":
    "/images/amanda-neurofeedback.png",
  "Sensory, Motor & Sound Therapies":
    // 🚩 PLACEHOLDER: Replace with sensory/OT therapy photo
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=85",
  "Psychotherapy-Informed Approaches":
    // 🚩 PLACEHOLDER: Replace with therapy session photo
    "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=85",
  "Skills Training":
    // 🚩 PLACEHOLDER: Replace with skills training / work session photo
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=85",
};

const CATEGORY_ALT: Record<string, string> = {
  "Biofeedback & Neurofeedback": "Neurofeedback brain training equipment",
  "Neurostimulation": "Neurostimulation therapy",
  "Sensory, Motor & Sound Therapies": "Sensory integration therapy",
  "Psychotherapy-Informed Approaches": "Therapy session",
  "Skills Training": "Executive function skills training",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[var(--charcoal)] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          {/* 🚩 PLACEHOLDER: Replace with clinic interior / treatment room photo */}
          <Image
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=60"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--sand)] font-inter mb-3">
              How We Help
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Treatments & Interventions
            </h1>
            <p className="text-white/80 text-lg font-inter leading-relaxed">
              In addition to traditional occupational therapy, biofeedback, and neurofeedback, Dr. Amanda utilizes a variety of carefully selected treatment methods. Each intervention is chosen to address your or your child's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Jump Nav */}
      <section className="bg-white border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {TREATMENTS.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex-shrink-0 text-xs font-semibold font-inter px-4 py-2 rounded-full text-[var(--text-muted)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] transition-colors whitespace-nowrap"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <div className="bg-[var(--off-white)]">
        {TREATMENTS.map((cat, ci) => (
          <section
            key={cat.category}
            id={cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            style={{ scrollMarginTop: "80px" }}
            className={`py-16 lg:py-24 ${
              ci % 2 === 1 ? "bg-[var(--sand-light)]" : "bg-[var(--off-white)]"
            } border-t border-[var(--border)]`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Text */}
                <div className={ci % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
                    {ci % 2 === 0 ? "Treatment Modality" : "Intervention"}
                  </p>
                  <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-8 leading-tight">
                    {cat.category}
                  </h2>
                  <div className="space-y-6">
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--teal-light)] hover:shadow-sm transition-all"
                      >
                        <h3 className="font-playfair text-lg font-semibold text-[var(--charcoal)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={ci % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                    <Image
                      src={img(CATEGORY_IMAGES[cat.category])}
                      alt={CATEGORY_ALT[cat.category]}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/30 to-transparent" />
                  </div>

                  {/* CTA on alternating sections */}
                  {ci % 2 === 0 && (
                    <div className="mt-6 bg-[var(--teal)] rounded-2xl p-6 text-white">
                      <p className="font-playfair text-lg font-semibold mb-2">
                        Questions about {cat.category}?
                      </p>
                      <p className="text-white/80 text-sm font-inter mb-4">
                        Schedule a free 15-minute consultation to learn how these interventions might help you.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[var(--teal)] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[var(--sand)] transition-colors"
                      >
                        Book Free Consult
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

    </>
  );
}
