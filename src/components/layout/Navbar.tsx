"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/siteData";

const SERVICES_DROPDOWN = [
  { label: "Occupational Therapy", href: "/occupational-therapy", description: "OT, biofeedback & neurofeedback" },
  { label: "Treatments & Interventions", href: "/treatments", description: "15+ evidence-based modalities" },
  { label: "Specialized Testing", href: "/specialized-testing", description: "QEEG, ERP, cognitive & more" },
];

const SERVICES_PATHS = ["/occupational-therapy", "/treatments", "/specialized-testing"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navBg =
    !isHome || scrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
      : "bg-transparent";

  const textColor = !isHome || scrolled ? "text-[var(--charcoal)]" : "text-white";
  const logoColor = !isHome || scrolled ? "text-[var(--teal)]" : "text-white";
  const isServicesActive = SERVICES_PATHS.includes(pathname);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className={`font-playfair font-semibold text-lg lg:text-xl ${logoColor} transition-colors`}>
              Amanda J Gretsch
              <span className={`block text-xs font-inter font-normal tracking-wider uppercase ${!isHome || scrolled ? "text-[var(--teal-light)]" : "text-white/80"}`}>
                PhD, MS, OTR/L · Encinitas, CA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* About */}
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                pathname === "/about" ? "text-[var(--teal)] font-semibold" : `${textColor} hover:text-[var(--teal)]`
              }`}
            >
              About
            </Link>

            {/* Conditions */}
            <Link
              href="/conditions"
              className={`px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                pathname === "/conditions" ? "text-[var(--teal)] font-semibold" : `${textColor} hover:text-[var(--teal)]`
              }`}
            >
              Conditions
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                  isServicesActive ? "text-[var(--teal)] font-semibold" : `${textColor} hover:text-[var(--teal)]`
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden">
                  <div className="p-2">
                    {SERVICES_DROPDOWN.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className={`flex flex-col px-4 py-3 rounded-xl transition-colors group ${
                          pathname === item.href
                            ? "bg-[var(--sand-light)]"
                            : "hover:bg-[var(--sand-light)]"
                        }`}
                      >
                        <span className={`text-sm font-semibold font-inter ${pathname === item.href ? "text-[var(--teal)]" : "text-[var(--charcoal)] group-hover:text-[var(--teal)]"} transition-colors`}>
                          {item.label}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-inter mt-0.5">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                pathname === "/contact" ? "text-[var(--teal)] font-semibold" : `${textColor} hover:text-[var(--teal)]`
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2">
            {/* Phone — desktop only */}
            <a
              href={SITE.phoneHref}
              className={`hidden lg:flex items-center gap-2 text-sm font-medium ${textColor} hover:text-[var(--teal)] transition-colors mr-1`}
            >
              <Phone size={15} />
              {SITE.phone}
            </a>

            {/* Free Consult button — md and up */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Free Consult
            </Link>

            {/* Hamburger — below lg only */}
            <button
              className={`lg:hidden p-2 rounded-md ${textColor}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border)] shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-medium font-inter transition-colors"
            >
              About
            </Link>
            <Link
              href="/conditions"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-medium font-inter transition-colors"
            >
              Conditions
            </Link>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-3 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-medium font-inter transition-colors"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-[var(--border)] pl-3">
                  {SERVICES_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2.5 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-inter transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-[var(--charcoal)] hover:text-[var(--teal)] hover:bg-[var(--sand-light)] rounded-md text-sm font-medium font-inter transition-colors"
            >
              Contact
            </Link>

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
