# Amanda J Gretsch, Inc. — Website

**Status: Live at [amandagretschot.com](https://www.amandagretschot.com)**

Premium Next.js website for Amanda J Gretsch, Inc. — occupational therapist, neurofeedback, and biofeedback specialist in Encinitas, CA.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Forms | Formspree (`xwvwklep`) |
| Hosting | Vercel (free tier) |
| Domain | Registered at Wix → DNS pointed to Vercel |
| CI/CD | GitHub Actions → auto-deploy on push to `main` |

---

## How Deployments Work

Every `git push` to `main` triggers two things automatically:

1. **GitHub Actions** (`.github/workflows/deploy.yml`) — builds and deploys to GitHub Pages at `CharleyHodgkins7.github.io/AG_OTR` (kept as a backup/preview URL)
2. **Vercel** — watches the GitHub repo, auto-deploys to `amandagretschot.com` within ~1 minute

**In practice:** make changes → push to `main` → live on `amandagretschot.com` within 60 seconds. No manual deploy steps.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # builds static output to /out
```

---

## How the Contact Form Works

Form submissions on `/contact` go to **Formspree** (ID: `xwvwklep`) which emails them to `amandajaneotr@yahoo.com`.

- Form code: `src/components/sections/ContactForm.tsx`
- To change the destination email: log in at [formspree.io](https://formspree.io) → edit the form settings
- To change the form ID: update `FORMSPREE_ID` in `ContactForm.tsx`

---

## How the Domain Works

```
amandagretschot.com
    │
    ├── Registered at: Wix (pay domain renewal ~$15-20/yr)
    │
    └── DNS A record → 216.198.79.1 (Vercel)
        DNS CNAME www → 2814ed7c6c8b41ae.vercel-dns-017.com (Vercel)
```

To update DNS: Wix dashboard → Domains → amandagretschot.com → Manage DNS.

**Do not cancel the Wix domain registration** — only the Wix premium site plan can be cancelled.

---

## How Content Works

All site text lives in **`src/lib/siteData.ts`**:
- Contact info, phone, address, email
- Credentials and trust strip items
- Testimonials
- Services overview
- All 12 conditions (with full descriptions)
- All 15+ treatment modalities (grouped by category)
- 6 specialized testing types
- 3-step process

Edit `siteData.ts` to update content across the whole site at once.

---

## How Images Work

Local images live in `public/images/` and are referenced using the `img()` helper from `src/lib/imagePath.ts` (handles path prefixing for different hosting environments).

**Current real images:**

| File | Used On |
|------|---------|
| `amanda-headshot.jpg` | Homepage About Preview, About page |
| `amanda-with-child.png` | About page image grid |
| `teddy.png` | About page image grid |
| `encinitas-beach.png` | Hero background, OT Services page |
| `amanda-neurofeedback.png` | Treatments page — Neurostimulation section |
| `cognitive-skills.png` | Specialized Testing page hero |

**Remaining placeholders** (Unsplash) — marked with `// 🚩 PLACEHOLDER` in code:

| Location | Needed |
|----------|--------|
| About page hero background | Encinitas/clinic exterior |
| About page — "with patient" small grid | Clinic session photo |
| OT page — assessment section | Clinic interior |
| Treatments — Biofeedback category | Equipment photo |
| Treatments — Sensory/Motor category | Therapy session |
| Treatments — Psychotherapy category | Session photo |
| Treatments — Skills Training category | Work session |
| Specialized Testing — card images (6) | Testing room / assessment photos |
| Conditions page hero | Background photo |

To replace: drop file in `public/images/`, update `src={img("/images/yourfile.jpg")}` in the relevant component.

---

## Social Media Links

Currently set to placeholder URLs. Update in `src/lib/siteData.ts`:

```ts
social: {
  instagram: "https://www.instagram.com/YOUR_HANDLE",
  facebook: "https://www.facebook.com/YOUR_PAGE",
  youtube: "https://www.youtube.com/YOUR_CHANNEL",
},
```

---

## Site Structure

```
/                     Homepage (Hero, About Preview, Services, Conditions, Testimonials, Process)
/about                Dr. Amanda bio, credentials, advanced training, personal story
/conditions           All 12 diagnoses with expandable accordion details
/treatments           15+ treatment modalities grouped by category
/specialized-testing  QEEG, ERP, Motor, Executive Function, Sensory, Cognitive testing
/occupational-therapy OT overview, biofeedback, neurofeedback, neurostimulation
/contact              Contact form (Formspree) + phone/email + Google Maps embed
/policies             Payment, cancellation, Good Faith Estimate, HIPAA notice
```

---

## Key Components

| Component | Purpose |
|-----------|---------|
| `src/components/layout/Navbar.tsx` | Sticky nav, Services dropdown, mobile hamburger |
| `src/components/layout/Footer.tsx` | CTA strip, nav links, contact info, social icons |
| `src/components/layout/MobileCTA.tsx` | Floating Call + Free Consult pill (mobile only, appears on scroll) |
| `src/components/sections/Hero.tsx` | Full-bleed homepage hero with trust pills and CTA |
| `src/components/sections/AboutPreview.tsx` | Homepage "Meet Dr. Amanda" section |
| `src/components/sections/ContactForm.tsx` | Formspree-connected contact form |

---

## SEO

- Per-page `metadata` in each `page.tsx`
- `MedicalBusiness` JSON-LD schema in `layout.tsx` with verified coordinates (33.045753, -117.2805166)
- `sitemap.ts` → auto-generates `/sitemap.xml`
- `robots.ts` → auto-generates `/robots.txt`
- OpenGraph + Twitter card meta on all pages
- Canonical base URL: `https://www.amandagretschot.com`

---

## Roadmap

- [ ] SEO — Google Search Console setup, keyword optimization
- [ ] LLM search optimization — structured content for AI answer engines
- [ ] Google Ads — Search + Maps campaign setup
- [ ] Replace remaining placeholder images
- [ ] Update social media links with real handles
- [ ] Google Reviews integration / widget
