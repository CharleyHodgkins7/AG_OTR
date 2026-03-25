"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ID = "xwvwklep";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const REFERRAL_SOURCES = [
  "Google Search",
  "Google Maps",
  "Instagram",
  "Facebook",
  "YouTube",
  "Referral from Doctor/Provider",
  "Referral from Friend/Family",
  "Psychology Today",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    referral: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          "How did you hear about us": formData.referral,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "", referral: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[var(--sand-light)] border border-[var(--teal)] rounded-2xl p-10 text-center">
        <CheckCircle size={48} className="text-[var(--teal)] mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-2">
          Message Received!
        </h3>
        <p className="text-[var(--text-muted)] font-inter">
          Thank you for reaching out. Dr. Amanda will be in touch shortly to schedule your free 15-minute consultation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[var(--teal)] font-semibold text-sm font-inter hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
            First Name <span className="text-[var(--cta-orange)]">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Amanda"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Gretsch"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
            Email <span className="text-[var(--cta-orange)]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(760) 555-0100"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
          How did you hear about us?
        </label>
        <select
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all appearance-none"
        >
          <option value="">Select one...</option>
          {REFERRAL_SOURCES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold font-inter text-[var(--charcoal)] mb-1.5">
          Message <span className="text-[var(--cta-orange)]">*</span>
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us a bit about yourself or your child, and what you're hoping to address..."
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--charcoal)] font-inter text-sm focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm font-inter bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={16} />
          Something went wrong. Please try again or call us directly at 760-525-3111.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 font-inter"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
      <p className="text-[var(--text-muted)] text-xs font-inter text-center">
        We typically respond within 24 hours. Your information is kept private.
      </p>
    </form>
  );
}
