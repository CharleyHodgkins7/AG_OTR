import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Amanda J Gretsch, Inc. | Occupational Therapist | Encinitas, CA",
    template: "%s | Amanda J Gretsch, Inc.",
  },
  description:
    "Dr. Amanda Gretsch, PhD, MS, OTR/L offers evidence-based occupational therapy, neurofeedback, biofeedback, and specialized testing in Encinitas, CA. 25+ years of experience. 1:1 personalized care.",
  keywords: [
    "occupational therapist Encinitas",
    "neurofeedback Encinitas",
    "biofeedback San Diego",
    "ADHD treatment Encinitas",
    "OT Encinitas CA",
    "sensory integration therapy",
    "QEEG brain mapping",
    "autism therapy Encinitas",
    "anxiety treatment Encinitas",
    "PhD occupational therapist",
  ],
  authors: [{ name: "Dr. Amanda Gretsch" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Amanda J Gretsch, Inc. | Occupational Therapist | Encinitas, CA",
    description:
      "PhD-level occupational therapy, neurofeedback, and biofeedback in Encinitas, CA. Science-backed care personalized for you.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Amanda J Gretsch, Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda J Gretsch, Inc. | OT · Neurofeedback · Biofeedback",
    description: "PhD-level occupational therapy, neurofeedback, and biofeedback in Encinitas, CA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Amanda J Gretsch, Inc.",
              description:
                "PhD-level occupational therapy, neurofeedback, and biofeedback in Encinitas, CA.",
              url: SITE.url,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address,
                addressLocality: "Encinitas",
                addressRegion: "CA",
                postalCode: "92024",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.0369,
                longitude: -117.2929,
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              },
              sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.youtube],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
