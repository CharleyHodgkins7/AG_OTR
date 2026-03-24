"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Call circle */}
      <a
        href={SITE.phoneHref}
        aria-label="Call now"
        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[var(--border)] shadow-lg flex items-center justify-center text-[var(--teal)] hover:bg-[var(--sand-light)] transition-colors"
      >
        <Phone size={19} strokeWidth={2} />
      </a>

      {/* Free Consultation pill */}
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white text-sm font-semibold font-inter px-6 py-3 rounded-full shadow-lg transition-colors"
      >
        <CalendarDays size={16} strokeWidth={2} />
        Free Consultation
      </Link>
    </div>
  );
}
