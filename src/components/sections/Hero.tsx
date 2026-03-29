import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, TRUST_STRIP } from "@/lib/siteData";
import { img } from "@/lib/imagePath";

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen">
      {/* Beach background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img("/images/encinitas-beach.png")}
          alt="Encinitas coastal view"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Mobile: darken from bottom so text is readable over beach */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/85 via-[var(--charcoal)]/50 to-[var(--charcoal)]/20 lg:hidden" />
        {/* Desktop: dark sweep right half only */}
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--charcoal)]/85 via-[var(--charcoal)]/50 to-transparent hidden lg:block" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

            {/* Image — centered blob on mobile, left column on desktop */}
            <div className="flex justify-center lg:justify-start items-center">
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[460px] lg:h-[460px] xl:w-[520px] xl:h-[520px] overflow-hidden shadow-2xl bg-[var(--teal-light)]"
                style={{ borderRadius: "42% 58% 62% 38% / 45% 38% 62% 55%" }}
              >
                <Image
                  src={img("/images/hero-family.png")}
                  alt="Mom and daughter hugging warmly"
                  fill
                  className="object-cover object-center"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
                <div className="h-px w-8 bg-[var(--cta-orange)]" />
                <span className="text-[var(--cta-orange)] text-sm font-semibold uppercase tracking-widest font-inter">
                  Encinitas, CA · PhD, MS, OTR/L
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-5">
                Science-Backed Care.
                <br />
                <span className="text-[var(--sand)]">Personalized</span> for You.
              </h1>

              {/* Short subheadline */}
              <p className="text-white/80 text-lg font-inter font-light leading-relaxed mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
                1:1 occupational therapy, neurofeedback & biofeedback — always with Dr. Amanda, never an aide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 lg:mb-9">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 border border-white/30"
                >
                  <Phone size={18} aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <a
                  href="https://qualitybusinessawards.com/2026/the-best-Occupational-Therapist-in-Encinitas-California/Amanda-J-Gretsch-Inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[var(--cta-orange)]/20 border border-[var(--cta-orange)]/60 text-white text-xs font-inter font-semibold px-4 py-1.5 rounded-full hover:bg-[var(--cta-orange)]/35 transition-colors"
                >
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--cta-orange)] flex-shrink-0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  #1 Best OT in Encinitas · 2026
                </a>
                {["25+ Yrs Experience", "1:1 Care — Always", "Free Consultation"].map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 border border-white/20 text-white/90 text-xs font-inter font-medium px-4 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Trust Marquee Strip */}
      <div className="relative z-10 bg-[var(--teal-dark)]/80 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
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
    </section>
  );
}
