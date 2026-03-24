import type { Metadata } from "next";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Policies",
  description: "Policies for Amanda J Gretsch, Inc. — occupational therapy, neurofeedback, and biofeedback in Encinitas, CA.",
};

const POLICY_SECTIONS = [
  {
    title: "Scheduling & Appointments",
    content: `Appointments are available by request. To schedule, please contact us by phone at ${SITE.phone} or by email at ${SITE.email}. We offer a free 15-minute phone consultation for new clients to discuss your needs and determine whether our services are the right fit.`,
  },
  {
    title: "Cancellation Policy",
    content:
      "We ask that you provide at least 24 hours notice for appointment cancellations or rescheduling requests. Late cancellations or no-shows may be subject to a fee. We understand that emergencies happen and will do our best to work with you on a case-by-case basis.",
  },
  {
    title: "Payment & Fees",
    content:
      "Payment is due at the time of service. We accept cash, check, and major credit/debit cards. We are an out-of-network provider and do not directly bill insurance. Upon request, we can provide you with a superbill (itemized receipt) that you may submit to your insurance company for potential reimbursement — please check with your insurer regarding out-of-network benefits.",
  },
  {
    title: "Privacy & Confidentiality",
    content:
      "All client information is kept strictly confidential and is protected in accordance with applicable federal and state laws, including HIPAA. We do not share your information with third parties without your written consent, except as required by law.",
  },
  {
    title: "Communication",
    content: `For appointment scheduling and general inquiries, please contact us at ${SITE.phone} or ${SITE.email}. We do our best to respond to all messages within 24 business hours. Please do not use email or voicemail for urgent or emergency matters — in an emergency, call 911 or go to your nearest emergency room.`,
  },
  {
    title: "Scope of Practice",
    content:
      "Amanda J Gretsch, Inc. provides occupational therapy, biofeedback, neurofeedback, and related services. Our services are not a substitute for medical care, diagnosis, or treatment. We work collaboratively with physicians, psychologists, and other healthcare providers as appropriate to support your overall well-being.",
  },
  {
    title: "Telehealth",
    content:
      "Select services may be available via telehealth where clinically appropriate and technically feasible. Please contact us to discuss whether telehealth is an option for your specific needs.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-[var(--sand-light)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)] font-inter mb-3">
            Practice Policies
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-[var(--charcoal)] mb-4">
            Policies
          </h1>
          <p className="text-[var(--text-muted)] font-inter max-w-2xl">
            Please review the following policies before your first appointment. If you have any questions, don&apos;t hesitate to contact us.
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {POLICY_SECTIONS.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm"
              >
                <h2 className="font-playfair text-xl font-semibold text-[var(--charcoal)] mb-3">
                  {section.title}
                </h2>
                <p className="text-[var(--text-muted)] font-inter leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact reminder */}
          <div className="mt-12 bg-[var(--sand)] rounded-2xl p-7 border border-[var(--border)] text-center">
            <p className="font-playfair text-xl font-semibold text-[var(--charcoal)] mb-2">
              Questions about our policies?
            </p>
            <p className="text-[var(--text-muted)] font-inter text-sm mb-4">
              We&apos;re happy to clarify anything before your first visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.phoneHref}
                className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
