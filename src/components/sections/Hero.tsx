import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { SITE, TRUST_STRIP } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      {/* 🚩 PLACEHOLDER: Replace with Encinitas beach / clinic exterior photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
          alt="Encinitas coastal view"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--teal-dark)]/90 via-[var(--teal)]/75 to-[var(--charcoal)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[var(--cta-orange)]" />
              <span className="text-[var(--cta-orange)] text-sm font-semibold uppercase tracking-widest font-inter">
                Encinitas, CA · PhD, MS, OTR/L
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6">
              Science-Backed Care.
              <br />
              <span className="text-[var(--sand)]">Personalized</span> for You.
            </h1>

            {/* Subheadline */}
            <p className="text-white/85 text-lg md:text-xl font-inter font-light leading-relaxed mb-8 max-w-2xl">
              Dr. Amanda Gretsch offers cutting-edge occupational therapy, neurofeedback, and biofeedback for children, teens, and adults. 25+ years of experience. Every session, 1:1 with Dr. Amanda — never an aide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Free 15-Min Consultation
                <ArrowRight size={18} />
              </Link>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 border border-white/30"
              >
                <Phone size={18} />
                {SITE.phone}
              </a>
            </div>

            {/* Quick trust pills */}
            <div className="flex flex-wrap gap-3">
              {/* Award badge */}
              <a
                href="https://qualitybusinessawards.com/2026/the-best-Occupational-Therapist-in-Encinitas-California/Amanda-J-Gretsch-Inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--cta-orange)]/20 backdrop-blur-sm border border-[var(--cta-orange)]/60 text-white text-xs font-inter font-semibold px-4 py-1.5 rounded-full hover:bg-[var(--cta-orange)]/35 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--cta-orange)] flex-shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                #1 Best OT in Encinitas · 2026
              </a>
              {["PhD Applied Psychophysiology", "25+ Yrs Experience", "1:1 Care — Always", "Free Consultation"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-inter font-medium px-4 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Marquee Strip */}
      <div className="relative z-10 bg-[var(--teal-dark)]/80 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
        <div className="flex animate-none">
          <div className="flex items-center gap-8 px-6 flex-wrap justify-center w-full">
            {TRUST_STRIP.map((item, i) => (
              <span
                key={i}
                className="text-white/80 text-xs font-inter uppercase tracking-widest whitespace-nowrap flex items-center gap-3"
              >
                {i > 0 && <span className="text-[var(--cta-orange)]">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <ChevronDown size={28} className="text-white/50" />
      </div>
    </section>
  );
}
