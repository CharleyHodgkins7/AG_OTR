import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/siteData";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconYoutube({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About Dr. Amanda", href: "/about" },
  { label: "Conditions We Treat", href: "/conditions" },
  { label: "Treatments & Interventions", href: "/treatments" },
  { label: "Specialized Testing", href: "/specialized-testing" },
  { label: "Occupational Therapy", href: "/occupational-therapy" },
  { label: "Contact", href: "/contact" },
  { label: "Policies", href: "/policies" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      {/* CTA Strip */}
      <div className="bg-[var(--teal)] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-xl font-semibold text-white">
              Ready to take the first step?
            </p>
            <p className="text-white/80 text-sm mt-1 font-inter">
              Contact for a free 15-minute consultation — no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 bg-white text-[var(--teal)] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[var(--sand)] transition-colors"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
              Amanda J Gretsch, Inc.
            </h3>
            <p className="text-white/60 text-sm font-inter mb-6 leading-relaxed">
              PhD-level occupational therapy, neurofeedback, and biofeedback in Encinitas, CA.
              Science-backed care, personalized for you.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook size={20} />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <IconYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 font-inter mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm font-inter transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 font-inter mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-[var(--teal-light)]" />
                  <span className="text-sm font-inter">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-[var(--teal-light)]" />
                  <span className="text-sm font-inter break-all">{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--teal-light)]" />
                  <address className="text-sm font-inter not-italic">
                    {SITE.address}
                    <br />
                    {SITE.city}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs font-inter">
            © {new Date().getFullYear()} Amanda J Gretsch, Inc. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-inter">
            Encinitas, CA · {SITE.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
