"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONDITIONS } from "@/lib/siteData";

export default function ConditionAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="space-y-3">
      {CONDITIONS.map((condition, i) => {
        const isOpen = openSlug === condition.slug;
        return (
          <div key={condition.slug} id={condition.slug} style={{ scrollMarginTop: "80px" }}>
            {/* CTA between every 4 conditions */}
            {i > 0 && i % 4 === 0 && (
              <div className="my-6 bg-[var(--sand)] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[var(--border)]">
                <div>
                  <p className="font-playfair text-lg font-semibold text-[var(--charcoal)]">
                    Not sure which treatment fits?
                  </p>
                  <p className="text-[var(--text-muted)] text-sm font-inter mt-0.5">
                    A free 15-minute consultation can help clarify the right path.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Book Free Consult
                </Link>
              </div>
            )}

            <div
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "border-[var(--teal-light)] shadow-md bg-white"
                  : "border-[var(--border)] bg-white hover:border-[var(--teal-light)] hover:shadow-sm"
              }`}
            >
              <h3 className="font-playfair text-xl font-semibold text-[var(--charcoal)] m-0">
                <button
                  id={`accordion-btn-${condition.slug}`}
                  onClick={() => toggle(condition.slug)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${condition.slug}`}
                >
                  <div className="flex items-center gap-4">
                    <div aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--teal)] flex-shrink-0" />
                    <div>
                      <span className="font-playfair text-xl font-semibold text-[var(--charcoal)]">
                        {condition.fullTitle}
                      </span>
                      <p className="text-[var(--text-muted)] text-sm font-inter mt-1">
                        {condition.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={`text-[var(--teal)] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`accordion-panel-${condition.slug}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${condition.slug}`}
                  className="px-6 pb-6 border-t border-[var(--border)]"
                >
                  <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] font-inter mb-3">
                        About This Condition
                      </h4>
                      {condition.description.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-[var(--text-muted)] font-inter text-sm leading-relaxed mb-3">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] font-inter mb-3">
                        How We Help
                      </h4>
                      <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed mb-5">
                        {condition.treatment}
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link
                          href="/treatments"
                          className="flex items-center gap-2 text-[var(--teal)] font-semibold text-sm font-inter hover:gap-3 transition-all"
                        >
                          <ArrowRight size={14} aria-hidden="true" />
                          View all treatments
                        </Link>
                        <Link
                          href="/contact"
                          className="flex items-center gap-2 text-[var(--cta-orange)] font-semibold text-sm font-inter hover:gap-3 transition-all"
                        >
                          <ArrowRight size={14} aria-hidden="true" />
                          Book free consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
