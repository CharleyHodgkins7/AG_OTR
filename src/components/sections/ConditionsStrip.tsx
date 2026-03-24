import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONDITIONS } from "@/lib/siteData";
import { ArrowRight } from "lucide-react";

export default function ConditionsStrip() {
  return (
    <section className="bg-[var(--sand-light)] py-20 lg:py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Diagnoses & Conditions"
          title="We Treat a Wide Range of Conditions"
          subtitle="From childhood developmental concerns to adult neurological conditions — Dr. Amanda works with individuals of all ages."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CONDITIONS.map((condition) => (
            <Link
              key={condition.slug}
              href={`/conditions#${condition.slug}`}
              className="group flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-[var(--border)] hover:border-[var(--teal-light)] hover:shadow-md transition-all duration-200 text-center"
            >
              <span className="text-2xl">{condition.icon}</span>
              <span className="text-xs font-semibold font-inter text-[var(--charcoal)] group-hover:text-[var(--teal)] transition-colors leading-tight">
                {condition.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-[var(--teal)] font-semibold font-inter text-sm hover:gap-3 transition-all"
          >
            View all conditions and how we help
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
