import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import InlineCTA from "@/components/ui/InlineCTA";

export const metadata: Metadata = {
  title: "Occupational Therapy, Biofeedback & Neurofeedback",
  description:
    "PhD-level occupational therapy, biofeedback, neurofeedback, and neurostimulation in Encinitas, CA. Evidence-based, personalized care for children, teens, and adults.",
};

const OT_CAPABILITIES = [
  "Sensory integration therapy to improve sensory processing and regulation",
  "Biofeedback and neurofeedback to enhance self-regulation and brain function",
  "Stress management and coping skills training to reduce anxiety and build resilience",
  "Executive function skills training to improve organization, focus, and daily planning",
  "Mindfulness interventions for emotional balance and focus",
  "Social Thinking® interventions to support communication and relationships",
  "Neurostimulation interventions and other brain-based approaches to optimize neural efficiency",
];

const WHO_WE_SERVE = [
  {
    label: "Children",
    description:
      "Supporting school success, sensory challenges, developmental delays, ADHD, and ASD.",
    icon: "🧒",
  },
  {
    label: "Teenagers",
    description:
      "Helping teens navigate anxiety, executive function challenges, social communication, and academic demands.",
    icon: "🧑",
  },
  {
    label: "Adults",
    description:
      "Addressing recovery from brain injury, cognitive decline, anxiety, depression, and peak performance goals.",
    icon: "🧓",
  },
];

export default function OccupationalTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[var(--sand-light)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
                Core Services
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-[var(--charcoal)] leading-tight mb-5">
                Occupational Therapy,{" "}
                <span className="text-[var(--teal)]">
                  Biofeedback & Neurofeedback
                </span>
              </h1>
              <p className="text-[var(--text-muted)] text-lg font-inter leading-relaxed mb-6">
                As a PhD-level applied psychophysiologist and occupational therapist, Dr. Amanda integrates traditional OT methods with advanced, evidence-based interventions that address the mind, body, and nervous system.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
                >
                  Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all"
                >
                  View All Treatments
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                {/* 🚩 PLACEHOLDER: Replace with Dr. Amanda in session / clinic photo */}
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85"
                  alt="Dr. Amanda Gretsch providing occupational therapy"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[var(--teal)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-semibold text-white">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHO_WE_SERVE.map((item) => (
              <div key={item.label} className="bg-white/10 border border-white/20 rounded-2xl p-7 text-white">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-playfair text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-white/75 font-inter text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is OT */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
                The Foundation
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 leading-tight">
                What is Occupational Therapy?
              </h2>
              <div className="space-y-4 text-[var(--text-muted)] font-inter leading-relaxed">
                <p>
                  Occupational Therapy (OT) is a client-centered, evidence-based profession that helps individuals of all ages develop, recover, or optimize the skills they need to participate fully in daily life. Occupations are the meaningful activities people do every day — from self-care and schoolwork to work tasks, play, and leisure.
                </p>
                <p>
                  Dr. Amanda works with children, teens, and adults who may experience challenges with attention, learning, sensory processing, emotional regulation, executive functioning, or recovery from injury or illness.
                </p>
                <p>
                  Her approach is comprehensive and holistic, addressing the mind, body, and nervous system to support functional independence, well-being, and performance.
                </p>
              </div>

              <div className="mt-8 space-y-2.5">
                {OT_CAPABILITIES.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[var(--teal)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-inter text-[var(--charcoal-light)]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                {/* 🚩 PLACEHOLDER: Replace with OT assessment / clinic interior photo */}
                <Image
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=85"
                  alt="Occupational therapy assessment session"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-[var(--sand)] rounded-2xl p-6 border border-[var(--border)]">
                <p className="font-playfair text-lg font-semibold text-[var(--charcoal)] mb-2">
                  Together, these services are tailored to each individual's goals —
                </p>
                <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed">
                  Whether it's supporting a child's success in school, helping an adult recover from a brain injury, or assisting someone in achieving peak performance in work, sports, or creative pursuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biofeedback */}
      <section id="biofeedback" className="bg-[var(--sand-light)] py-20 lg:py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl lg:order-2">
              {/* 🚩 PLACEHOLDER: Replace with biofeedback session photo */}
              <Image
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=85"
                alt="Biofeedback therapy session"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
                Mind-Body Regulation
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-5 leading-tight">
                What is Biofeedback?
              </h2>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-4">
                Biofeedback interventions are evidence-based techniques that teach individuals how to gain greater awareness and control over their body's physiological processes. Using non-invasive sensors, biofeedback provides real-time information about muscle activity (EMG), skin conductance (GSR), temperature, breathing patterns, and heart rate variability (HRV).
              </p>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-4">
                This data helps individuals learn to regulate stress responses, improve relaxation, enhance focus, and support emotional and physical well-being.
              </p>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed">
                Biofeedback is particularly beneficial for managing anxiety, ADHD, chronic pain, headaches, sleep difficulties, and the effects of stress or trauma — as well as for those looking to optimize performance in school, work, or sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neurofeedback */}
      <section id="neurofeedback" className="bg-[var(--off-white)] py-20 lg:py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              {/* 🚩 PLACEHOLDER: Replace with neurofeedback session / brain mapping photo */}
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85"
                alt="Neurofeedback brain training"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
                Brain Training
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-5 leading-tight">
                What is Neurofeedback?
              </h2>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-4">
                Neurofeedback is a specialized type of biofeedback that helps individuals train their brain's electrical activity for improved regulation and performance. Using sensors placed on the scalp, neurofeedback provides real-time feedback about brainwave patterns, allowing the brain to gradually learn healthier, more balanced activity over time.
              </p>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed mb-4">
                At our clinic, we utilize <strong className="text-[var(--charcoal)]">amplitude training</strong> (teaching the brain to increase or decrease specific brainwave frequencies) and <strong className="text-[var(--charcoal)]">infralow neurofeedback</strong> (targeting very slow brainwave activity to support network-level regulation and stabilization of the nervous system).
              </p>
              <p className="text-[var(--text-muted)] font-inter leading-relaxed">
                Neurofeedback is an evidence-based, non-invasive intervention that can support attention, emotional regulation, sleep, and cognitive performance. It is widely used for ADHD, autism spectrum disorder, anxiety, depression, traumatic brain injury, and neurological conditions — as well as by individuals seeking peak mental performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neurostimulation */}
      <section className="bg-[var(--sand-light)] py-20 lg:py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
              Advanced Techniques
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-5">
              Neurostimulation
            </h2>
            <p className="text-[var(--text-muted)] font-inter leading-relaxed">
              Neurostimulation interventions are non-invasive techniques that use gentle electrical or auditory stimulation to support healthy brain and nervous system function.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "tDCS",
                subtitle: "Transcranial Direct Current Stimulation",
                description:
                  "Delivers a low-level direct current to modulate cortical excitability and support attention, mood, and cognitive performance.",
              },
              {
                title: "tACS",
                subtitle: "Transcranial Alternating Current Stimulation",
                description:
                  "Uses rhythmic alternating currents to gently entrain brain oscillations, supporting optimal brainwave patterns.",
              },
              {
                title: "AVE",
                subtitle: "Audiovisual Entrainment",
                description:
                  "Rhythmic flashes of light and pulses of sound that guide the brain into specific brainwave patterns.",
              },
              {
                title: "PEMF",
                subtitle: "Pulsed Electromagnetic Field",
                description:
                  "Low-frequency electromagnetic stimulation to enhance cellular function, reduce inflammation, and support neurological recovery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--teal-light)] hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--teal)] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xs font-inter">{item.title}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-inter mb-2">{item.subtitle}</p>
                <p className="text-sm font-inter text-[var(--charcoal-light)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--off-white)] py-16 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineCTA
            title="Ready to start your personalized care plan?"
            subtitle="Every journey begins with a comprehensive evaluation. Contact us for a free 15-minute consultation."
            variant="teal"
          />
        </div>
      </section>
    </>
  );
}
