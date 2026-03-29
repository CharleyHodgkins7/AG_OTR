1import SectionHeader from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/siteData";

export default function Process() {
  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Approach"
          title="What to Expect"
          subtitle="A clear, supportive process from your first contact through lasting results."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-[var(--teal)]/20 via-[var(--teal)] to-[var(--teal)]/20 z-0" />

          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full bg-[var(--teal)] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="font-playfair text-3xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
