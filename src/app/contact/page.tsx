import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact — Free 15-Minute Consultation",
  description:
    "Contact Dr. Amanda Gretsch for a free 15-minute consultation. Call 760-525-3111 or send a message. Located at 543 Encinitas Blvd., Ste. 114, Encinitas, CA 92024.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-[var(--teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--sand)] font-inter mb-3">
              Get in Touch
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Start with a Free Consultation
            </h1>
            <p className="text-white/80 text-lg font-inter leading-relaxed">
              Contact Dr. Amanda for a free 15-minute consultation. It's a no-obligation conversation to explore whether our services are the right fit for you or your child.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-full bg-[var(--teal)] flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-xl font-semibold text-[var(--charcoal)]">
                      Send a Message
                    </h2>
                    <p className="text-[var(--text-muted)] text-xs font-inter">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm">
                <h3 className="font-playfair text-xl font-semibold text-[var(--charcoal)] mb-5">
                  Reach Us Directly
                </h3>
                <div className="space-y-5">
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--teal-dark)] transition-colors">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-inter">
                        Phone
                      </p>
                      <p className="font-semibold text-[var(--charcoal)] font-inter group-hover:text-[var(--teal)] transition-colors">
                        {SITE.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={SITE.emailHref}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--teal-dark)] transition-colors">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-inter">
                        Email
                      </p>
                      <p className="font-semibold text-[var(--charcoal)] font-inter break-all group-hover:text-[var(--teal)] transition-colors text-sm">
                        {SITE.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-inter">
                        Location
                      </p>
                      <address className="not-italic font-inter text-[var(--charcoal)] text-sm leading-relaxed">
                        {SITE.address}
                        <br />
                        {SITE.city}
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--sand)] flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[var(--teal)]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-inter">
                        Hours
                      </p>
                      <p className="font-inter text-[var(--charcoal)] text-sm">
                        Mon – Fri, by appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Consult CTA */}
              <div className="bg-[var(--cta-orange)] rounded-2xl p-7 text-white">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  Free 15-Min Consultation
                </h3>
                <p className="text-white/85 text-sm font-inter leading-relaxed mb-5">
                  Not sure where to start? A brief call with Dr. Amanda can help you understand your options and decide if our approach is right for you.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-[var(--cta-orange)] font-semibold px-6 py-3 rounded-full text-sm transition-colors hover:bg-[var(--sand)]"
                >
                  <Phone size={16} />
                  Call {SITE.phone}
                </a>
              </div>

              {/* Directions link */}
              <a
                href="https://maps.google.com/?q=543+Encinitas+Blvd+Suite+114+Encinitas+CA+92024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all font-inter"
              >
                Get Directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width map */}
      <div className="h-96 w-full relative border-t border-[var(--border)]">
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
    </>
  );
}
