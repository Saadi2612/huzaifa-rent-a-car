# Huzaifa — Rent A Car

Marketing site for a Pakistan-based car rental business. Next.js 16 (App
Router) + Tailwind v4. Static — no backend, no database. Bookings convert
through prefilled WhatsApp deep links.

```bash
npm install
npm run dev
```

## Before going live — replace the placeholders

Everything a non-developer needs to change lives in **`lib/site.ts`**.

| What                    | Where in `lib/site.ts`         | Notes                                            |
| ----------------------- | ------------------------------ | ------------------------------------------------ |
| WhatsApp number         | `site.whatsapp`                | Digits only, country code, no `+` — `92300…`     |
| Display phone / tel link| `site.phoneDisplay`, `phoneHref` |                                                |
| Email, address, hours   | `site.email`, `address`, `hours` |                                                |
| Service cities          | `site.cities`                  | Feeds the booking bar, footer and FAQ            |
| Cars and daily rates    | `FLEET`                        | `selfDrive: null` = with-driver only             |
| Services and "from" prices | `SERVICES`                  |                                                  |
| Stats, reviews, FAQs    | `STATS`, `TESTIMONIALS`, `FAQS` | Reviews and stats are illustrative — swap them  |

**All prices, the phone number, email and address are dummy values.** Search for
`⚠️ PLACEHOLDER` in `lib/site.ts`.

Also update the domain in `app/layout.tsx` (`metadataBase`) — it drives Open
Graph URLs.

## Photos

Drop real photos into `public/cars/` using the filenames in
[`public/cars/README.md`](public/cars/README.md). Until a file exists the site
renders a styled placeholder slot; the moment a real image is saved at that path
it switches over automatically (`lib/photos.ts` checks the filesystem at render
time on the server). No code change, no broken images in between.

## Design system

Derived from `dayos-DESIGN.md` / `dayos-design.json`. Tokens live in the
`@theme` block at the top of [`app/globals.css`](app/globals.css) — colours,
radii, the 8px spacing grid, type scale.

Three deliberate deviations from the source system, documented in that file:

1. **Accent colour** — source yellow `#fff100` replaced with `#2c58ff` (client
   choice). Every other palette role is 1:1.
2. **Elevation** — the source system is explicitly flat with no shadows. This
   build adds a soft, low-opacity shadow scale because the brief called for a
   floating card language. Shadows read as light, not as heavy elevation.
3. **Typeface** — SuisseIntlCond / SuisseIntl are licensed fonts. Substituted
   with Archivo (squeezed to `font-stretch: 75%` via its real `wdth` axis) and
   Inter, both loaded through `next/font`.

Radii, the spacing grid, greys, borders and the floating pill nav are on-token.

## Structure

```
app/
  layout.tsx     fonts, metadata, <html> shell
  page.tsx       section composition + LocalBusiness JSON-LD
  globals.css    design tokens, type scale, utilities
components/      one file per section, plus Photo / Reveal / icons
lib/
  site.ts        all copy, pricing and contact data
  photos.ts      server-side photo existence check
public/cars/     car photos (see its README)
```

## Notes

- FAQ uses native `<details>`, so it works without JavaScript and ships FAQPage
  structured data.
- `Reveal` uses IntersectionObserver and respects `prefers-reduced-motion`.
- No analytics, cookie banner or tracking is installed.
