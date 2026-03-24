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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8497506248!2d-117.29518!3d33.0369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0b6e6d3b3b3b%3A0x0!2s543+Encinitas+Blvd%2C+Encinitas%2C+CA+92024!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amanda J Gretsch, Inc. — 543 Encinitas Blvd, Encinitas CA"
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
                href="https://maps.google.com/?q=543+Encinitas+Blvd+Suite+114+Encinitas+CA+92024"
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
