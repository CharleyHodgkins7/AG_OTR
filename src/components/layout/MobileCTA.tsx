"use client";

import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-t border-[var(--border)] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-[72px]">
        {/* Call */}
        <a
          href={SITE.phoneHref}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 text-[var(--teal)] hover:bg-[var(--sand-light)] transition-colors"
        >
          <Phone size={18} strokeWidth={2} />
          <span className="text-[11px] font-semibold font-inter tracking-wide">Call Now</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-[var(--border)]" />

        {/* Book consult */}
        <Link
          href="/contact"
          className="flex flex-[2] items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white transition-colors"
        >
          <CalendarDays size={18} strokeWidth={2} />
          <span className="text-sm font-semibold font-inter">Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}
