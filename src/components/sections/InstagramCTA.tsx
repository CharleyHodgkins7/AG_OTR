import { SITE } from "@/lib/siteData";

export default function InstagramCTA() {
  return (
    <section className="bg-[var(--sand-light)] py-14 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mb-4">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>
        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[var(--charcoal)] mb-3">
          Follow Along on Instagram
        </h2>
        <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-6">
          Get to know Dr. Amanda beyond the clinic — tips, insights, and a behind-the-scenes look at the practice.
        </p>
        <a
          href={SITE.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-white font-semibold font-inter text-sm px-6 py-3 rounded-full hover:bg-[var(--charcoal-light)] transition-colors"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @dr_amanda_gretsch_ot
        </a>
      </div>
    </section>
  );
}
