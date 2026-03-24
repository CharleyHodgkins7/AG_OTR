import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/siteData";

interface InlineCTAProps {
  title?: string;
  subtitle?: string;
  variant?: "teal" | "sand" | "orange";
}

export default function InlineCTA({
  title = "Ready to get started?",
  subtitle = "Contact for a free 15-minute consultation.",
  variant = "teal",
}: InlineCTAProps) {
  const bg =
    variant === "teal"
      ? "bg-[var(--teal)]"
      : variant === "sand"
      ? "bg-[var(--sand)]"
      : "bg-[var(--cta-orange)]";

  const textMain = variant === "sand" ? "text-[var(--charcoal)]" : "text-white";
  const textSub = variant === "sand" ? "text-[var(--text-muted)]" : "text-white/80";
  const btnClass =
    variant === "sand"
      ? "bg-[var(--teal)] text-white hover:bg-[var(--teal-dark)]"
      : "bg-white text-[var(--teal)] hover:bg-[var(--sand)]";

  return (
    <div className={`${bg} rounded-2xl px-6 py-8 md:px-10 md:py-10`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className={`font-playfair text-2xl font-semibold ${textMain}`}>{title}</p>
          <p className={`text-sm mt-1 font-inter ${textSub}`}>{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={SITE.phoneHref}
            className={`flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm transition-colors ${btnClass}`}
          >
            <Phone size={15} />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            Book Free Consult
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
