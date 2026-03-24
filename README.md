# Amanda J Gretsch, Inc. — Website

Premium Next.js website for [Amanda J Gretsch, Inc.](https://www.amandagretschot.com) — occupational therapist, neurofeedback, and biofeedback specialist in Encinitas, CA.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in the `out/` directory (static HTML/CSS/JS — ready for any static host).

---

## Deployment

### GitHub Pages (Current)

Deployment is automatic via GitHub Actions on every push to `main`.

**One-time setup:**
1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

Your site will be live at: `https://CharleyHodgkins7.github.io/AG_OTR/`

> **Note:** If deploying to a subdirectory (not a custom domain), add `basePath: '/AG_OTR'` to `next.config.ts`.

### Vercel (Recommended for Production)

Migrating to Vercel is zero-config:

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import the `AG_OTR` GitHub repo
3. Vercel auto-detects Next.js — no configuration needed
4. Set your custom domain (`amandagretschot.com`) in Vercel dashboard
5. **Remove** `output: 'export'` from `next.config.ts` to unlock server features (ISR, API routes, etc.)

---

## 🚩 Placeholder Images — Action Required

All placeholder images are marked with `// 🚩 PLACEHOLDER` comments in the code.

| File | Image to Replace |
|---|---|
| `src/components/sections/Hero.tsx` | Hero background — Encinitas beach or clinic exterior |
| `src/components/sections/AboutPreview.tsx` | Dr. Amanda headshot (main) |
| `src/app/about/page.tsx` | Dr. Amanda headshot, Dr. Amanda with patient, Teddy the dog |
| `src/app/occupational-therapy/page.tsx` | Clinic / session photos (5 images) |
| `src/app/specialized-testing/page.tsx` | 6 testing card images |
| `src/app/treatments/page.tsx` | 5 category images |
| `src/app/conditions/page.tsx` | Hero background |

To replace: drop your photos into `public/images/` and update the `src=` values, removing the `// 🚩 PLACEHOLDER` comment.

---

## 📬 Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) for static-compatible form submissions.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — set the email to `amandajaneotr@yahoo.com`
3. Copy your form ID (looks like `xrgwlkpz`)
4. Open `src/components/sections/ContactForm.tsx`
5. Replace `YOUR_FORM_ID` with your actual form ID

---

## 📱 Social Media Links

Update social handles in `src/lib/siteData.ts`:

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
/                    Homepage
/about               Dr. Amanda bio, credentials, personal story
/conditions          All 12 diagnoses (accordion)
/treatments          All 15+ treatment modalities
/specialized-testing QEEG, ERP, Motor, Executive Function, Sensory, Cognitive
/occupational-therapy OT overview, biofeedback, neurofeedback, neurostimulation
/contact             Contact form + map + phone
/policies            Practice policies
```

## Content Data

All site content lives in `src/lib/siteData.ts` — conditions, treatments, testimonials, services, process steps, credentials. Edit there to update content site-wide.
