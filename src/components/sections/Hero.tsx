import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, TRUST_STRIP } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="bg-[var(--teal)] flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
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
              <p className="text-white/80 text-lg font-inter font-light leading-relaxed mb-8 max-w-md">
                1:1 occupational therapy, neurofeedback & biofeedback — always with Dr. Amanda, never an aide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-9">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 border border-white/30"
                >
                  <Phone size={18} />
                  {SITE.phone}
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://qualitybusinessawards.com/2026/the-best-Occupational-Therapist-in-Encinitas-California/Amanda-J-Gretsch-Inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[var(--cta-orange)]/20 border border-[var(--cta-orange)]/60 text-white text-xs font-inter font-semibold px-4 py-1.5 rounded-full hover:bg-[var(--cta-orange)]/35 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--cta-orange)] flex-shrink-0">
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

            {/* Right: Circle image */}
            <div className="hidden lg:flex justify-center lg:justify-end items-center">
              <div className="relative w-[460px] h-[460px] xl:w-[520px] xl:h-[520px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl bg-[var(--teal-light)]">
                <Image
                  src="https://images.unsplash.com/photo-1576765608622-067973a79f53?w=800&h=800&fit=crop&crop=faces,top"
                  alt="Dr. Amanda Gretsch with a patient"
                  fill
                  className="object-cover object-center"
                  priority
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Trust Marquee Strip */}
      <div className="bg-[var(--teal-dark)]/80 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
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
