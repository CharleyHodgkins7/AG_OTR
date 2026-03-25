import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Heart, MapPin, Star, ArrowRight } from "lucide-react";
import { CREDENTIALS } from "@/lib/siteData";
import { img } from "@/lib/imagePath";

export const metadata: Metadata = {
  title: "About Dr. Amanda Gretsch",
  description:
    "Meet Dr. Amanda Gretsch, PhD, MS, OTR/L — 25+ years of occupational therapy experience, 18+ years in private practice in Encinitas, CA. Specializing in neurofeedback, biofeedback, and applied psychophysiology.",
};

const ADVANCED_TRAINING = [
  "Biofeedback & Neurofeedback",
  "Neurostimulation (tDCS, tACS, AVE, PEMF)",
  "Interactive Metronome",
  "Safe and Sound Protocol (SSP)",
  "Therapeutic Listening®",
  "Integrated Listening Systems (iLS)",
  "Social Thinking® Methodology",
  "Zones of Regulation®",
  "Acceptance and Commitment Therapy (ACT)",
  "Cognitive Behavioral Therapy (CBT)",
  "Rational Emotive Behavioral Therapy (REBT)",
  "Dolphin Neurostim® MPS",
  "Handwriting Without Tears®",
  "Loops and Other Groups",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[var(--sand-light)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* 🚩 PLACEHOLDER: Replace with Encinitas beach/clinic background */}
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=60"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--sand-light)]/80 to-[var(--sand-light)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
              Meet the Doctor
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--charcoal)] leading-tight mb-4">
              Dr. Amanda Gretsch
              <span className="block text-[var(--teal)] text-2xl md:text-3xl mt-2 font-normal italic">
                PhD, MS, OTR/L
              </span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg font-inter leading-relaxed">
              Applied psychophysiologist and occupational therapist with 25+ years of experience — and a genuine passion for helping clients overcome challenges and build new skills.
            </p>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="bg-[var(--teal-dark)] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F4845F" stroke="#F4845F" strokeWidth="1"/>
            </svg>
            <div>
              <p className="text-white font-semibold font-inter text-sm leading-tight">
                #1 Best Occupational Therapist in Encinitas · 2026
              </p>
              <p className="text-white/60 text-xs font-inter">Quality Business Awards · Top 1% of US businesses · 95%+ quality score</p>
            </div>
          </div>
          <a
            href="https://qualitybusinessawards.com/2026/the-best-Occupational-Therapist-in-Encinitas-California/Amanda-J-Gretsch-Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-semibold font-inter text-[var(--cta-orange)] border border-[var(--cta-orange)]/50 px-4 py-1.5 rounded-full hover:bg-[var(--cta-orange)]/10 transition-colors"
          >
            View Award
          </a>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Images */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src={img("/images/amanda-headshot.jpg")}
                  alt="Dr. Amanda Gretsch, PhD, MS, OTR/L — Occupational Therapist in Encinitas, CA"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <Image
                    src={img("/images/amanda-with-child.png")}
                    alt="Dr. Amanda Gretsch with a child in occupational therapy session"
                    fill
                    className="object-cover object-[center_30%]"
                    unoptimized
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <Image
                    src={img("/images/teddy.png")}
                    alt="Teddy, Dr. Amanda's dog who joins at the clinic for therapeutic support"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </div>
              {/* Teddy caption */}
              <p className="text-[var(--text-muted)] text-xs font-inter text-center italic">
                Teddy often joins Dr. Amanda at the clinic, providing comfort and therapeutic support.
              </p>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 leading-tight">
                What Makes Amanda J Gretsch, Inc. Unique?
              </h2>

              <div className="space-y-5 text-[var(--text-muted)] font-inter leading-relaxed">
                <p>
                  Dr. Amanda combines her expertise in occupational therapy and applied psychophysiology to provide highly individualized, evidence-based care. Each client begins with a comprehensive, detailed evaluation designed to identify the most effective and cutting-edge interventions for their unique needs.
                </p>
                <p>
                  One of the hallmarks of Dr. Amanda's practice is her commitment to personalized care — she spends 100% of your treatment time with you. <strong className="text-[var(--charcoal)]">You will never be treated by an assistant or aide.</strong>
                </p>
                <p>
                  Dr. Amanda has over 25 years of experience as an occupational therapist and has owned and operated her private clinic for more than 18 years. She holds a PhD in applied psychophysiology, where her doctoral research focused on the effects of PEMF on irritable bowel syndrome (IBS). She also holds both bachelor's and master's degrees in occupational therapy.
                </p>
                <p>
                  Dr. Amanda feels privileged to work alongside so many incredible individuals and families. Her passion is helping clients overcome challenges, build new skills, and improve their quality of life.
                </p>
              </div>

              {/* Credential Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {/* Award pill */}
                <a
                  href="https://qualitybusinessawards.com/2026/the-best-Occupational-Therapist-in-Encinitas-California/Amanda-J-Gretsch-Inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[var(--teal)] text-white text-sm font-inter font-semibold px-4 py-2 rounded-full hover:bg-[var(--teal-dark)] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  #1 Best OT in Encinitas 2026
                </a>
                {CREDENTIALS.map((c) => (
                  <span
                    key={c}
                    className="bg-[var(--sand)] border border-[var(--border)] text-[var(--charcoal)] text-sm font-inter font-medium px-4 py-2 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Personal */}
              <div className="mt-10 bg-[var(--sand-light)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={18} className="text-[var(--teal)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold font-inter text-[var(--charcoal)] text-sm">Outside the Clinic</p>
                    <p className="text-[var(--text-muted)] text-sm font-inter leading-relaxed mt-1">
                      A Solana Beach native, Dr. Amanda and her husband raised their three sons in Encinitas. When she isn't working, you can find her lifting weights, playing golf or pickleball, hiking, reading, or spending time with family and friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Training */}
      <section className="bg-[var(--sand)] py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Education & Credentials */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-4">
                Education & Credentials
              </p>
              <h2 className="font-playfair text-3xl font-semibold text-[var(--charcoal)] mb-8 leading-tight">
                A Foundation of Deep Expertise
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Award size={20} />,
                    label: "PhD — Applied Psychophysiology",
                    detail: "Doctoral research: effects of PEMF on irritable bowel syndrome (IBS)",
                  },
                  {
                    icon: <BookOpen size={20} />,
                    label: "MS — Occupational Therapy",
                    detail: "Master's degree in occupational therapy",
                  },
                  {
                    icon: <BookOpen size={20} />,
                    label: "BS — Occupational Therapy",
                    detail: "Bachelor's degree in occupational therapy",
                  },
                  {
                    icon: <Star size={20} />,
                    label: "OTR/L — Licensed Occupational Therapist",
                    detail: "Registered and licensed occupational therapist",
                  },
                  {
                    icon: <Heart size={20} />,
                    label: "25+ Years Clinical Experience",
                    detail: "18+ years as owner-operator of private practice",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold font-inter text-[var(--charcoal)]">{item.label}</p>
                      <p className="text-[var(--text-muted)] text-sm font-inter mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Training */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-4">
                Advanced Training & Certifications
              </p>
              <h2 className="font-playfair text-3xl font-semibold text-[var(--charcoal)] mb-8 leading-tight">
                Specialized Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADVANCED_TRAINING.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-[var(--border)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] flex-shrink-0" />
                    <span className="text-sm font-inter text-[var(--charcoal-light)]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 text-[var(--teal)] font-semibold font-inter text-sm hover:gap-3 transition-all"
                >
                  Explore all treatments & interventions
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[var(--teal)] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-playfair text-3xl md:text-4xl text-white italic leading-relaxed">
            &ldquo;Her passion is helping clients overcome challenges, build new skills, and improve their quality of life.&rdquo;
          </p>
        </div>
      </section>

    </>
  );
}
