import Link from "next/link";
import { Brain, Activity, ClipboardList, Zap, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES_OVERVIEW } from "@/lib/siteData";

const ICONS: Record<string, React.ReactNode> = {
  brain: <Brain size={28} aria-hidden="true" />,
  activity: <Activity size={28} aria-hidden="true" />,
  clipboard: <ClipboardList size={28} aria-hidden="true" />,
  zap: <Zap size={28} aria-hidden="true" />,
};

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Comprehensive, Individualized Care"
          subtitle="Every client begins with a detailed evaluation. From there, Dr. Amanda designs a personalized plan drawing from a wide range of cutting-edge, evidence-based modalities."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_OVERVIEW.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-2xl p-7 border border-[var(--border)] hover:border-[var(--teal-light)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--sand-light)] flex items-center justify-center text-[var(--teal)] mb-5 group-hover:bg-[var(--teal)] group-hover:text-white transition-all duration-300">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-[var(--charcoal)] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm font-inter leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex items-center gap-1.5 text-[var(--teal)] text-sm font-semibold font-inter group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight size={15} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* Differentiator callout */}
        <div className="mt-10 bg-[var(--teal)] rounded-2xl p-8 md:p-10 text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl font-semibold text-white mb-3">
            &ldquo;You will never be treated by an assistant or aide.&rdquo;
          </blockquote>
          <p className="text-white/80 font-inter max-w-2xl mx-auto">
            Dr. Amanda spends 100% of your treatment time with you — a personal commitment to individualized care that makes all the difference.
          </p>
        </div>
      </div>
    </section>
  );
}
