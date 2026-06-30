import Link from "next/link";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function LocationStrip() {
  return (
    <section className="bg-[var(--sand)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] aspect-[4/3] lg:aspect-auto lg:h-80 relative">
            <iframe
              src="https://www.google.com/maps?q=527+Encinitas+Blvd+Suite+208+Encinitas+CA+92024&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amanda J Gretsch, Inc. — 527 Encinitas Blvd, Encinitas CA"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
              Find Us
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 leading-tight">
              Located in the Heart of Encinitas, CA
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold font-inter text-[var(--charcoal)] text-sm">Address</p>
                  <address className="not-italic text-[var(--text-muted)] font-inter text-sm mt-0.5 leading-relaxed">
                    {SITE.address}<br />{SITE.city}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold font-inter text-[var(--charcoal)] text-sm">Phone</p>
                  <a href={SITE.phoneHref} className="text-[var(--text-muted)] hover:text-[var(--teal)] font-inter text-sm mt-0.5 transition-colors">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold font-inter text-[var(--charcoal)] text-sm">Hours</p>
                  <p className="text-[var(--text-muted)] font-inter text-sm mt-0.5">
                    Monday – Friday, by appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=527+Encinitas+Blvd+Suite+208+Encinitas+CA+92024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all font-inter"
              >
                <ExternalLink size={15} />
                Get Directions
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors font-inter"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
