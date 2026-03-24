"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/siteData";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Conditions", href: "/conditions" },
  { label: "Treatments", href: "/treatments" },
  { label: "Testing", href: "/specialized-testing" },
  { label: "OT Services", href: "/occupational-therapy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    !isHome || scrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
      : "bg-transparent";

  const textColor =
    !isHome || scrolled ? "text-[var(--charcoal)]" : "text-white";

  const logoColor =
    !isHome || scrolled ? "text-[var(--teal)]" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className={`font-playfair font-semibold text-lg lg:text-xl ${logoColor} transition-colors`}>
              Amanda J Gretsch
              <span className={`block text-xs font-inter font-normal tracking-wider uppercase ${!isHome || scrolled ? "text-[var(--teal-light)]" : "text-white/80"}`}>
                PhD, MS, OTR/L · Encinitas, CA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                    active
                      ? "text-[var(--teal)] font-semibold"
                      : `${textColor} hover:text-[var(--teal)]`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className={`flex items-center gap-2 text-sm font-medium ${textColor} hover:text-[var(--teal)] transition-colors`}
            >
              <Phone size={15} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Free Consult
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-md ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border)] shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-medium font-inter transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-[var(--border)] space-y-2">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 px-3 py-2 text-[var(--teal)] font-semibold text-sm"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
              >
                Book Free 15-Min Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
