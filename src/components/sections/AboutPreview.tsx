import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Heart } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--sand-light)] py-20 lg:py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              {/* 🚩 PLACEHOLDER: Replace with Dr. Amanda's professional headshot */}
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85"
                alt="Dr. Amanda Gretsch, PhD, MS, OTR/L"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--teal-dark)]/30 to-transparent" />
            </div>
            {/* Floating credential card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-[var(--border)] max-w-[200px]">
              <p className="font-playfair text-2xl font-bold text-[var(--teal)]">25+</p>
              <p className="text-xs font-inter text-[var(--text-muted)] mt-1 leading-tight">
                Years of occupational therapy experience
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest font-inter text-[var(--teal)] mb-3">
              Meet Dr. Amanda
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--charcoal)] leading-tight mb-6">
              What Makes Amanda J Gretsch, Inc. Unique?
            </h2>
            <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-6">
              Dr. Amanda combines her expertise in occupational therapy and applied psychophysiology to provide highly individualized, evidence-based care. Each client begins with a comprehensive, detailed evaluation designed to identify the most effective and cutting-edge interventions for their unique needs.
            </p>
            <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-8">
              A Solana Beach native, Dr. Amanda has owned and operated her private clinic in Encinitas for more than 18 years. Her beloved dog, Teddy, often joins her at the clinic and provides an extra layer of comfort and therapeutic support.
            </p>

            {/* Credential pills */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: <Award size={16} />, text: "PhD in Applied Psychophysiology" },
                { icon: <Clock size={16} />, text: "25+ Years · 18+ Years Private Practice" },
                { icon: <Heart size={16} />, text: "100% of treatment time with Dr. Amanda — always" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--teal)] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-inter text-[var(--charcoal-light)]">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--teal)] font-semibold font-inter hover:gap-3 transition-all group"
            >
              Full bio & credentials
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
