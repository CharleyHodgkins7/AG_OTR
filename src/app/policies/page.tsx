import type { Metadata } from "next";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Payment policies, cancellation policies, HIPAA notice of privacy practices, and insurance information for Amanda J Gretsch, Inc. in Encinitas, CA.",
};

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
            Please review the following policies before your first appointment. Questions? Call us at{" "}
            <a href={SITE.phoneHref} className="text-[var(--teal)] font-semibold hover:underline">
              {SITE.phone}
            </a>.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--off-white)] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Payment Policies */}
          <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-1">
              Payment Policies and Procedures
            </h2>
            <p className="text-xs text-[var(--text-muted)] font-inter mb-5">Effective date: 9/1/25</p>
            <div className="space-y-4 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              <p>
                Amanda J Gretsch, Inc. (AJG) is considered an <strong className="text-[var(--charcoal)]">out-of-network provider</strong> for all insurance companies. Payment is due at the time of treatment.
              </p>
              <p>
                As an out-of-network provider, some insurance companies will reimburse you for a portion of the fees paid for occupational therapy services. It is highly recommended that if you are seeking reimbursement from your insurance company that you call to verify your benefits. Please be aware that policies change from time to time, so it is strongly advised that you call them periodically while receiving treatment.
              </p>
              <p>For patients who have out-of-network coverage, there are two options after payment:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>You can be provided with a <strong className="text-[var(--charcoal)]">Superbill</strong> (invoice that contains all necessary insurance codes) and these invoices can then be submitted to your insurance company, if you choose.</li>
                <li>You can provide us with your insurance information and our medical biller will directly submit your bills to your insurance company.</li>
              </ol>
              <p>
                Please be aware that to avoid a fee when requesting that AJG rebill invoices due to insurance company requirements, AJG must be made aware within two months of the date of the invoice.
              </p>
            </div>
          </div>

          {/* Insurance Questions */}
          <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-5">
              Recommended Questions to Ask Your Insurance Provider
            </h2>
            <ul className="space-y-3 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              {[
                "What is my out-of-network deductible? How much has been met this year?",
                "What portion of my services will be reimbursed?",
                <>Does my plan allow reimbursement for each of the following therapy codes?
                  <ul className="mt-2 ml-4 space-y-1 text-xs text-[var(--charcoal-light)]">
                    <li><strong>Evaluations:</strong> 97165, 97166, 97167</li>
                    <li><strong>Treatment:</strong> 97530, 97112, 97110, 97535</li>
                  </ul>
                </>,
                "Do I need a referral from a physician to obtain reimbursement?",
                "Do I need pre-authorization to obtain reimbursement?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--teal)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits of Private Pay */}
          <div className="bg-[var(--sand-light)] rounded-2xl p-7 md:p-8 border border-[var(--border)]">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-4">
              What are the Benefits of Private Pay?
            </h2>
            <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              Insurance companies require a diagnosis and often have policies regarding reimbursement that restrict the type, length, frequency, and duration of services. We have found that without the limitations and restraints placed by insurance providers, patients are able to avail themselves of the most up-to-date, evidence-based interventions for a duration that helps maximize outcomes. Finally, if confidentiality is a concern, the information will not become part of an individual's permanent medical file.
            </p>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-5">
              Payment Options
            </h2>
            <div className="space-y-5 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-1">1. Cash or Check</p>
                <p>We are happy to accept payment by cash or check at the time of the appointment. However, if you wish to schedule ongoing therapy sessions, you will be required to keep a valid credit card on file. The credit card will not be charged unless there is a no-show/late cancellation or if the patient chooses to use it to pay for treatment.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-1">2. Credit Cards</p>
                <p>For your convenience, we accept payment via Visa, MasterCard, and American Express. All information is maintained securely through our electronic medical records (EMR), scheduling, and billing system.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-1">3. Health Savings Account (HSA) or Flexible Spending Account (FSA)</p>
                <p>Via issued HSA or FSA credit card (this allows for services to be paid using pre-tax dollars). Please be aware that patients will also need to keep a credit card on file in the event that there are insufficient funds in the HSA or FSA account.</p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-4">
              Cancellation Policy
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              <p>
                AJG strives to provide you with the best, most consistent care possible. Scheduling is often consistent in nature with standing appointments on an ongoing basis. Attending these appointments is an essential part of treatment and patient management.
              </p>
              <p>
                With the exception of illness, a minimum of <strong className="text-[var(--charcoal)]">24 hours notice</strong> before the scheduled appointment is required for any cancellation or change (please note that if your appointment is on a Monday, the 24 hours <strong className="text-[var(--charcoal)]">excludes the weekend</strong>). If you do not cancel your appointment at {SITE.phone} within 24 hours, you will be charged a <strong className="text-[var(--charcoal)]">late cancellation/no-show fee of $225.00</strong>.
              </p>
            </div>
          </div>

          {/* Good Faith Estimate */}
          <div className="bg-[var(--sand-light)] rounded-2xl p-7 md:p-8 border border-[var(--border)]">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-4">
              Good Faith Estimate Notice
            </h2>
            <div className="space-y-3 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              <p>
                You have the right to receive a "Good Faith Estimate" explaining how much your medical care will cost. Under the law, health care providers need to give patients who do not have insurance or who are not using insurance an estimate of the bill for medical items and services.
              </p>
              <p>
                You have a right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item.
              </p>
              <p>
                If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Make sure to save a copy or picture of your Good Faith Estimate.
              </p>
              <p>
                For questions or more information about your right to a Good Faith Estimate, visit{" "}
                <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[var(--teal)] hover:underline">
                  www.cms.gov/nosurprises
                </a>{" "}
                or call 1-800-985-3059.
              </p>
            </div>
          </div>

          {/* HIPAA */}
          <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--border)] shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-[var(--charcoal)] mb-4">
              HIPAA Notice of Privacy Practices
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] font-inter text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-1">Purpose of this Notice</p>
                <p>We are required by law to maintain the privacy of your protected health information (PHI). This notice applies to all records of the health care and services you received by Amanda J. Gretsch, Inc. (AJG). This notice will tell you about the ways in which we may use and disclose your PHI.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-1">AJG's Commitment</p>
                <p>We are required by law to: (1) keep your PHI private; (2) give you this notice; (3) follow the terms of this notice; (4) train our personnel concerning privacy and confidentiality; and (5) mitigate any breach of privacy/confidentiality.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-2">How We May Use and Disclose Information about You</p>
                <div className="space-y-2">
                  {[
                    { title: "For Treatment", body: "We may use and disclose your PHI to personnel involved in your care at AJG, or to health care providers outside AJG who may be involved in your medical care." },
                    { title: "For Payment", body: "We may use and disclose your PHI so that treatment and services may be billed to your insurance company or a third party." },
                    { title: "For Health Care Operations", body: "We may use and disclose your PHI for our business operations, including quality review and staff performance evaluation." },
                    { title: "As Required by Law", body: "We will disclose your PHI when required to do so by federal, state, or local law." },
                    { title: "Appointment Reminders", body: "We may use and disclose medical information to contact you as a reminder that you have an appointment." },
                  ].map((item) => (
                    <div key={item.title} className="pl-4 border-l-2 border-[var(--border)]">
                      <p className="font-semibold text-[var(--charcoal-light)]">{item.title}</p>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-[var(--charcoal)] mb-2">Your Rights</p>
                <ul className="space-y-1 pl-4">
                  {[
                    "Right to Request Restrictions on use/disclosure of your PHI",
                    "Right to Request Confidential Communications",
                    "Right to Inspect and Receive a Copy of your PHI",
                    "Right to Amend your PHI if you believe it is incorrect or incomplete",
                    "Right to an Accounting of Disclosures made in the past 6 years",
                    "Right to a Paper Copy of This Notice at any time",
                  ].map((right) => (
                    <li key={right} className="flex items-start gap-2">
                      <span className="text-[var(--teal)] font-bold mt-0.5">·</span>
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                For any privacy-related requests, contact: Amanda J. Gretsch, Inc., 543 Encinitas Blvd., Ste. 114, Encinitas, CA 92024 · {SITE.phone}
              </p>
              <p>
                We reserve the right to change this notice. Changes will be effective for medical information we already have about you as well as any information we receive in the future.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[var(--teal)] rounded-2xl p-7 text-center">
            <p className="font-playfair text-xl font-semibold text-white mb-2">Questions about our policies?</p>
            <p className="text-white/80 font-inter text-sm mb-5">We&apos;re happy to clarify anything before your first visit.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={SITE.phoneHref} className="bg-white text-[var(--teal)] hover:bg-[var(--sand)] font-semibold px-6 py-3 rounded-full text-sm transition-colors font-inter">
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="border-2 border-white text-white hover:bg-white hover:text-[var(--teal)] font-semibold px-6 py-3 rounded-full text-sm transition-all font-inter">
                {SITE.email}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
