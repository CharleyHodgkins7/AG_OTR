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
      {/* Above-fold SBS: contact info left, map right */}
      <section className="flex flex-col lg:flex-row min-h-screen">

        {/* Left: teal info panel */}
        <div className="lg:w-[38%] bg-[var(--teal)] flex flex-col justify-center px-8 sm:px-12 lg:px-14 pt-36 pb-14 lg:pt-32 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--sand)] font-inter mb-3">
            Get in Touch
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Start with a Free Consultation
          </h1>
          <p className="text-white/75 text-base font-inter leading-relaxed mb-10">
            A no-obligation 15-minute call with Dr. Amanda — find out if we&apos;re the right fit for you or your child.
          </p>

          {/* Contact rows */}
          <div className="space-y-6 mb-10">
            <a href={SITE.phoneHref} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white/55 text-xs font-inter uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-white font-semibold font-inter group-hover:text-[var(--sand)] transition-colors">{SITE.phone}</p>
              </div>
            </a>

            <a href={SITE.emailHref} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white/55 text-xs font-inter uppercase tracking-wider font-semibold">Email</p>
                <p className="text-white font-semibold font-inter text-sm break-all group-hover:text-[var(--sand)] transition-colors">{SITE.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white/55 text-xs font-inter uppercase tracking-wider font-semibold">Location</p>
                <address className="not-italic text-white font-inter text-sm leading-relaxed">
                  {SITE.address}<br />{SITE.city}
                </address>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white/55 text-xs font-inter uppercase tracking-wider font-semibold">Hours</p>
                <p className="text-white font-inter text-sm">Mon – Fri, by appointment</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors font-inter"
            >
              <Phone size={16} />
              Call for Free Consultation
            </a>
            <a
              href="https://maps.google.com/?q=543+Encinitas+Blvd+Suite+114+Encinitas+CA+92024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors font-inter border border-white/25"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right: map — fills remaining space */}
        <div className="lg:w-[62%] h-72 lg:h-auto relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0!2d-117.2805166!3d33.045753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c6c265e4acd%3A0x597a35de3cb999ad!2sAmanda+J+Gretsch%2C+Inc.!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amanda J Gretsch, Inc. — 543 Encinitas Blvd, Encinitas CA"
          />
        </div>

      </section>

      {/* Contact form — below fold */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>
    </>
  );
}
