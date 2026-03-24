"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/siteData";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  return (
    <section className="bg-[var(--teal)] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="Real Results, Real Lives Changed"
          subtitle="Hear from the families and individuals who have experienced transformative care at Amanda J Gretsch, Inc."
          light
        />

        {/* Desktop: 3 cards */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col"
            >
              <Quote size={32} className="text-[var(--cta-orange)] mb-4 flex-shrink-0" />
              <p className="text-white font-inter text-base leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-white/20">
                <p className="text-white font-semibold font-inter">— {t.author}</p>
                <p className="text-white/60 text-sm font-inter mt-0.5">{t.condition}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="mt-12 md:hidden">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
            <Quote size={32} className="text-[var(--cta-orange)] mb-4" />
            <p className="text-white font-inter text-base leading-relaxed italic">
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t border-white/20">
              <p className="text-white font-semibold font-inter">— {TESTIMONIALS[active].author}</p>
              <p className="text-white/60 text-sm font-inter mt-0.5">{TESTIMONIALS[active].condition}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === active ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
