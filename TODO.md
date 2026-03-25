# Amanda J Gretsch, Inc. — Project TODO

Live site: [amandagretschot.com](https://www.amandagretschot.com)
Repo: [github.com/CharleyHodgkins7/AG_OTR](https://github.com/CharleyHodgkins7/AG_OTR)

---

## Deadlines

- [ ] **Cancel Wix Premium before August renewal**
  - Log in at [manage.wix.com](https://manage.wix.com) → Billing → Cancel plan
  - ⚠️ Do NOT cancel the domain registration — only the premium site plan
  - Domain (`amandagretschot.com`) must stay registered at Wix or be transferred elsewhere first
  - Site is fully running on Vercel — Wix premium is no longer needed

---

## Infrastructure

- [ ] **Migrate contact form to Resend API**
  - Remove `output: 'export'` from `next.config.ts` to unlock Vercel serverless functions
  - Sign up at [resend.com](https://resend.com), create API key
  - Build `/api/contact` route to handle form submissions and send email via Resend
  - Eliminates Formspree's 50/mo limit and adds a full send log as backup
  - _Currently: Formspree free tier (xwvwklep) — 50 submissions/month, silent fail when over_

- [ ] **Switch Formspree destination email**
  - Currently sending to dev email for testing
  - Log in at [formspree.io](https://formspree.io) → change to `amandajaneotr@yahoo.com` when ready

- [ ] **Replace remaining placeholder images**
  - See full list in README — marked `// 🚩 PLACEHOLDER` in code
  - Priority: About page hero bg, OT page assessment section, Treatments category images

- [ ] **Update social media links**
  - Edit `src/lib/siteData.ts` → `social` object
  - Need real Instagram, Facebook, YouTube handles from client

---

## SEO

- [ ] **Google Search Console setup**
  - Verify domain ownership at [search.google.com/search-console](https://search.google.com/search-console)
  - Submit `amandagretschot.com/sitemap.xml`
  - Monitor indexing, search queries, click-through rates

- [ ] **SEO content optimization**
  - Keyword research: "OT Encinitas", "neurofeedback San Diego", "ADHD therapy Encinitas", etc.
  - Optimize page titles, H1s, and meta descriptions for target keywords
  - Add FAQ sections to key pages (conditions, treatments) — good for featured snippets

- [ ] **Google Business Profile optimization**
  - Ensure NAP (Name, Address, Phone) is consistent everywhere
  - Add photos to Google Business listing
  - Respond to existing reviews
  - Post regular updates to GBP

- [ ] **Build backlinks**
  - Submit to OT directories (AOTA, psychology today, etc.)
  - Local Encinitas business directories
  - Healthcare provider directories

---

## LLM Search Optimization

- [ ] **Structured content for AI answer engines**
  - Add FAQ schema markup to conditions and treatments pages
  - Add HowTo schema for the assessment/therapy process
  - Ensure content directly answers questions people ask ChatGPT/Perplexity ("best OT in Encinitas", "neurofeedback for ADHD near me")

- [ ] **Authority signals**
  - Add more detailed, citable content (research references, outcome stats)
  - Structured credentials and specializations clearly marked up with schema
  - Keep content updated — LLMs favor freshly indexed pages

---

## Google Ads

- [ ] **Google Search Ads**
  - Set up Google Ads account at [ads.google.com](https://ads.google.com)
  - Target: "occupational therapist Encinitas", "neurofeedback San Diego", "ADHD therapy Encinitas CA"
  - Set up conversion tracking (form submissions, phone calls)
  - Landing page: `/contact` or a dedicated landing page

- [ ] **Google Maps Ads (Local Services Ads)**
  - Apply for Google Local Services Ads (LSA) — shows above regular ads with "Google Guaranteed" badge
  - Verify business, background check, insurance required
  - Pay-per-lead model — good for local service businesses

- [ ] **Google Display / Remarketing**
  - Retarget visitors who didn't convert
  - Requires tracking pixel (see below)

---

## Tracking & Analytics

- [ ] **Google Analytics 4**
  - Create GA4 property at [analytics.google.com](https://analytics.google.com)
  - Add GA4 measurement ID to `src/app/layout.tsx`
  - Set up goals: form submissions, phone clicks, page views on /contact

- [ ] **Meta Pixel (Facebook/Instagram)**
  - Create pixel at [business.facebook.com](https://business.facebook.com) → Events Manager
  - Add pixel script to `src/app/layout.tsx`
  - Required for running Facebook/Instagram ads and retargeting

- [ ] **Google Tag Manager (optional)**
  - Centralizes all tracking scripts — makes adding/removing tags easier without code deploys

- [ ] **Call tracking**
  - Consider [CallRail](https://callrail.com) or similar to track which ads/pages drive phone calls
  - Replace the phone number display with a tracked number

---

## Social Media

- [ ] **Link social accounts**
  - Update Instagram, Facebook, YouTube URLs in `src/lib/siteData.ts`
  - Verify all links work

- [ ] **Social Media Ads**
  - Facebook/Instagram ads targeting parents in Encinitas/San Diego area
  - Audiences: parents of kids with ADHD/autism, adults with anxiety/depression, athletes (peak performance)
  - Requires Meta Pixel to be installed first for retargeting
  - Creative: client testimonials, before/after outcomes, Dr. Amanda video

---

## Nice to Have

- [ ] **Google Reviews widget** — embed live reviews on homepage or about page
- [ ] **Blog / Resources section** — builds SEO authority, good for LLM indexing
- [ ] **Patient portal link** — if practice management software has a portal
- [ ] **Online booking integration** — replace form with a real scheduling tool (e.g., Jane App, SimplePractice)
- [ ] **Video testimonials** — high conversion impact, great for social ads
