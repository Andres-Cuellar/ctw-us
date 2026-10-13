# creamostuweb — Project Brief

Working context document. Read this first in any new session before touching code.

- **Client:** creamostuweb — digital agency for Latino businesses in Las Vegas, NV
- **Primary domain:** creamostuweb.us (see OPEN-01)
- **Stack:** Next.js 16.4 (App Router, Turbopack) · React 19.3 · TypeScript 5.9 · Tailwind CSS 4.3 · GSAP 3.15 + @gsap/react 2.1
- **Copy source:** `docs/copy/es.md` — full Spanish copy, authored 2026-10-09 by Andres
- **Last updated:** 2026-10-09

---

## 1. The job of this site

One job: get a Las Vegas Latino business owner to **apply for a financed website** (form or WhatsApp).

The audience is not a SaaS buyer. It is a roofer, a cleaner, a barber, a food-truck owner, a tax
preparer. They read on a phone, often mid-job. They have been burned before by a "webmaster" who
disappeared. Two things have to land in the first five seconds: *these people speak my language*,
and *I do not need thousands of dollars up front*.

Everything below serves that.

### Conversion rules taken from the copy

| Rule | Why |
| --- | --- |
| Website tiers show **no price** | Sold on a 15-minute call with financing. Explicit client decision. |
| Tools **do show price** publicly | $97 / $97 / $47 / $297 per month. |
| Packages show price | $297/mo and $497/mo, 12-month plan. |
| WhatsApp is the primary low-friction CTA | Audience default channel; floating FAB on every page. |
| Phone number is a first-class element, not footer trivia | These businesses live on calls. It is also the product's core promise ("llamadas que no se pierden"). |

---

## 2. Brand facts — single source of truth

These live in `src/shared/config/site.ts`. **Never hardcode them in a component.**

| Field | Value |
| --- | --- |
| Brand name | `creamostuweb` (lowercase, always) |
| Phone / WhatsApp | `+1 (725) 263-7598` → tel/wa link `+17252637598` |
| Email | `hola@creamostuweb.co` (see OPEN-01) |
| Address | 103 Red Tee Ln, Las Vegas, NV — by appointment only |
| Hours | Mon–Fri 9:00 am – 6:00 pm · Sat & Sun closed · WhatsApp receives 24/7 |
| Service area | Las Vegas, Henderson, North Las Vegas |
| WhatsApp prefill | `Hola, vi su página y quiero información sobre una página web para mi negocio.` |

---

## 3. Design direction — "Vegas Nocturno"

**The site is a street at night where every business is a lit sign.** The whole
pitch is *que te vean*, so the page does not describe visibility — it performs
it. Signs start dark and turn on.

### What this replaced, and why

The first direction ("Rotulación" — bone paper, marigold panels, hard ink
keylines) was rejected by the client as generic. The diagnosis was correct and
worth recording, because the failure was not the palette:

- The **structure** was the most templated thing possible: a stack of
  full-bleed bands — hero, pain list, card grid, numbered steps, pills, FAQ,
  CTA. Changing the colours did not change that skeleton.
- 2px borders with hard offset shadows is **neobrutalism**, itself a default by
  now, not a distinctive choice.
- **Las Vegas was ignored entirely** — the most visually recognisable city in
  the world, rendered as coloured rectangles.
- The "signature" was a **phone mockup**, the single most common illustration in
  this category.
- Zero imagery, zero texture. The restraint read as emptiness, not discipline.

### Reference the client supplied

`dev261.kodesolution.com/creovio/` — a ThemeForest WordPress agency theme.
Measured from its source rather than described:

| | Creovio |
| --- | --- |
| Ground | `#030303` / `#121310` / `#242424` |
| Accent | `#bff747` — acid lime |
| Font | Urbanist (variable) |
| Motion | GSAP + ScrollTrigger + SplitText, WOW.js, Swiper, jquery.tilt, animatenumbers |

**Taken from it:** production values — continuous dense motion, SplitText on
headlines, animated counters, scroll-driven reveals, a dark ground, and enough
length that the page feels substantial.

**Rejected:** the acid-lime-on-near-black palette. It is the most repeated
agency look of the last two years, thousands of sites run this exact theme, and
it says nothing about Las Vegas or about Latino businesses. Adopting it would
trade one generic for another.

### Color — 7 tokens

| Token | Hex | Role |
| --- | --- | --- |
| `--color-night` | `#0a0a0f` | Ground. Blue-black, never pure black — pure black kills glow. |
| `--color-night-2` | `#12121a` | Raised panels. |
| `--color-night-3` | `#1b1b26` | Inset elements. |
| `--color-bone` | `#f4f2ee` | Body text. Warmer than white, less harsh on dark. |
| `--color-pink` | `#ff2d78` | **Brand + action.** Vegas marquee magenta. |
| `--color-gold` | `#ffb82e` | The "on" state — bulbs, figures, confirmation. |
| `--color-cyan` | `#28e0f0` | Accent, used sparingly: links, data, focus rings. |

Plus `--color-bone-70` / `--color-bone-45` for secondary and tertiary text.

**Discipline:** three neons is a lot, so each has exactly one job. Body copy is
always bone and **never glows** — glow is for the signs that carry the argument.

### Contrast, verified

| Pair | Ratio | |
| --- | --- | --- |
| bone on night | 17:1 | ✅ |
| pink on night | 5.5:1 | ✅ AA |
| gold on night | 11.3:1 | ✅ |
| cyan on night | 12:1 | ✅ |
| bone on pink | 3.1:1 | ❌ **fails** |
| night on pink | 5.5:1 | ✅ AA |

**Therefore every lit fill takes night-coloured text, never bone.** It is also
how real signage reads.

### Type — 2 families

| Role | Face | Why |
| --- | --- | --- |
| Marquee / display | **Antonio** variable | Condensed grotesque with near-uniform stroke weight — which is what a neon tube physically is. A high-contrast face renders the glow stack unevenly. Not overexposed like Anton, Bebas or Oswald. |
| Body / utility | **Figtree** variable | Warm, generous x-height, strong Spanish diacritics. Carried over; it worked. |

`Big Shoulders Display` was the first pick and is **not** in this Next version's
`next/font` data — verified, not assumed.

### Material

- **Real neon**, not `box-shadow: 0 0 20px`. A layered `text-shadow` stack: a
  white-hot core inside widening coloured bloom. Unlit is faint glass via
  `-webkit-text-stroke`.
- **Film grain** over the whole page at 0.045 opacity, `mix-blend-mode: overlay`.
  This is most of the difference between "atmospheric" and "empty".
- **Ambient bloom** behind panels (`bloom`, `bloom-cyan`, `bloom-gold`) so the
  dark has depth instead of being a flat rectangle.
- **Filament** instead of a rule between panels: a hairline that is brightest in
  the middle, like a lit tube.
- Panels are `sign` — raised off the night with a hairline edge and an inner
  lift. Pill-shaped controls with glow, not bordered rectangles.

### Signature

**The marquee switches on.** `más clientes` — the half of the client's headline
that carries the promise — lights character by character with the stutter a real
tube makes before it holds, then the whole sign blinks once as it settles.

Supporting signs: every service panel arrives unlit and switches on as it
scrolls into view; the trades run past as an actual marquee; the phone number is
the largest lit thing on the page in the closing band.

### Layout

The uniform band stack is deliberately broken. Services use uneven column spans
(7/5, 5/7, 6/6) so the row reads as storefronts of different sizes rather than
six identical boxes. The hero is centred — a marquee composition — while
sections alternate asymmetric two-column splits.

---

## 4. Motion policy

GSAP earns its place in six places. The lesson from the first attempt is that
too *little* motion reads as cheap; the lesson from Creovio is that motion has
to mean something.

1. **Neon sign** (`useNeonSign`) — characters light in order with a stutter, then
   one whole-sign blink. **Hard class toggles, never opacity tweens: neon
   snaps.**
2. **Sign panels** (`useSignSwitch`) — panels arrive unlit, switch on in sequence.
3. **Scroll reveal** (`useReveal`) — one `ScrollTrigger.batch` per section.
4. **Counters** (`useCounters`) — figures count up when they enter view.
5. **The missed-call sequence** — the product demonstration.
6. **Marquee** — CSS animation, pauses on hover.

`NightScope` wires all four hooks to one section with a single ref.

Non-negotiable:

- All GSAP runs client-side inside `useGSAP` with a `scope`. Never during SSR.
- Plugins registered once at module scope in `src/shared/motion/gsap.ts`.
- Every hook is wrapped in `gsap.matchMedia()` keyed on
  `(prefers-reduced-motion: no-preference)`. Under reduced motion **nothing
  runs** and the CSS resting state is the finished one — every sign simply lit.
- Markup is lit by default; JS darkens first, then releases. So no-JS works.
- `neon-char` and `is-lit` are applied from JavaScript, so Tailwind cannot see
  them. They are forced with `@source inline(...)` in `globals.css` — **without
  that the lettering is always lit and the sign never switches on.**
- Headlines are split only after `document.fonts.ready`; splitting against a
  fallback face puts characters in the wrong places.
- No `ScrollSmoother`. It fights native scrolling, and this audience is on mobile.

---

## 5. Architecture

Screaming architecture: folders name the business, not the framework. Container/presentational split —
sections own data wiring, atoms stay dumb.

```
src/
  app/
    layout.tsx                  root html shell
    [locale]/
      layout.tsx                header, footer, FAB, motion provider
      page.tsx                  Inicio
      servicios/page.tsx
      nosotros/page.tsx
      contacto/page.tsx
  content/
    types.ts                    content contracts
    es/
      global.ts                 nav, footer, FAB, top bar
      home.ts  servicios.ts  nosotros.ts  contacto.ts
  features/
    home/sections/              Hero, Problema, Solucion, ServiciosDestacados,
                                Financiamiento, ComoFunciona, ParaQuienEs,
                                PorQueNosotros, Testimonios, Faq, CtaFinal
    servicios/sections/         Hero, PaginasWeb, Tiendas, Herramientas,
                                Paquetes, CiclosDePago, MetodosDePago,
                                ServiciosAdicionales, Faq, CtaFinal
    nosotros/sections/          Hero, Historia, Mision, Diferencia, Valores, Cifras, CtaFinal
    contacto/sections/          Hero, Formulario, Canales, Agenda, Horario, Mapa, FaqRapido
  shared/
    config/site.ts              brand facts, links, SEO defaults
    sections/                   PageHero, Preguntas, CtaFinal — used by 2+ pages
    ui/
      atoms/                    CtaButton, Panel, Sign, NeonText, SectionTitle,
                                Eyebrow, Price, PendingSlot
      molecules/                FaqList, PricingTable, StepList, TradeMarquee, SignLine
    layout/                     TopBar, Header, Footer, WhatsAppFab
    motion/
      gsap.ts                   plugin registration, FULL_MOTION query
      NightScope.tsx            wires all four hooks to one section
      useNeonSign.ts            character-by-character lighting with stutter
      useSignSwitch.ts          panels switch on as they arrive
      useReveal.ts              one ScrollTrigger.batch per section
      useCounters.ts            figures count up on enter
    lib/                        routes.ts (locale + CTA resolution), cn.ts
```

### Typesetting lives in content, not JSX

`HeroSign` and `SplitLine` in `content/types.ts` let a sentence be typeset in
registers — a lead phrase and a lit phrase — **without a component holding any
copy**. The words stay the client's; only which half glows is a design decision.
Each carries a `fallback` so the line renders whole if no split is supplied.

**Content is data, never JSX.** Every string in the copy doc lives in `src/content/es/*`. A section
component receives typed content and renders it. This is what makes the EN translation a content
task instead of a rewrite.

### i18n decision

Routes are built under `[locale]` from day one and only `es` ships. The copy promises an ES/EN
switcher and bilingual sites, so retrofitting the route segment later would mean redoing every link.
The `LocaleSwitch` renders only for locales that have a content bundle, so it stays hidden until EN
copy exists. See OPEN-02.

---

## 6. SEO

Per-page `metadata` exports pulling from the content bundle.

| Page | Title | Description |
| --- | --- | --- |
| Inicio | Páginas Web en Las Vegas para Negocios Latinos \| creamostuweb | Páginas web, CRM y reseñas en Google para negocios latinos en Las Vegas. Atención en español y planes con financiamiento. |
| Servicios | Diseño Web, CRM y Reseñas en Las Vegas \| creamostuweb | Webs, tiendas en línea, CRM, gestión de reseñas y asistente con IA. Todo configurado por nosotros, en español. |
| Nosotros | Agencia Digital Latina en Las Vegas \| creamostuweb | Somos latinos ayudando a negocios latinos a crecer en internet. Conoce nuestra historia y forma de trabajar. |
| Contacto | Contacto y Cotización Gratis \| creamostuweb Las Vegas | Escríbenos por WhatsApp o agenda una llamada gratis de 15 minutos. Respondemos el mismo día en español o inglés. |

Also required: `LocalBusiness` JSON-LD (address, hours, phone, service area), `hreflang` once EN
exists, OG image per page.

---

## 7. Placeholders — do not invent content

The copy doc marks these as pending. They render as visibly unfinished slots so nobody ships
fabricated social proof.

| ID | Item | Blocked on |
| --- | --- | --- |
| PH-01 | 3 testimonials (name, business, quote) | Real clients only, with written permission |
| PH-02 | Nosotros stats: businesses served, sites delivered, years of experience | Real numbers only |
| PH-03 | Social handle for Instagram / Facebook / TikTok | Client |
| PH-04 | Booking calendar embed on Contacto | Calendar tool choice |
| PH-05 | Google Map embed on Contacto | Maps API key / embed URL |
| PH-06 | Payment-method logos | Brand assets (Visa, MC, Amex, Apple Pay, Google Pay, Zelle, Cash App, Affirm, Klarna) |
| PH-07 | Privacy policy and Terms pages | Legal review — see LEGAL below |
| PH-08 | Client portal / "Hacer un pago" destinations | URLs |

### LEGAL

The SMS consent checkbox text is a **starting point for A2P 10DLC registration**, not approved copy.
Privacy policy and terms must be reviewed by a professional before launch. Do not present the form
as compliant.

---

## 8. Open questions

| ID | Question | Status |
| --- | --- | --- |
| OPEN-01 | Domain is `creamostuweb.us` but the copy's email and footer say `creamostuweb.co`. Which is canonical? Both are in `site.ts` behind one constant so it is a one-line change. | **Blocking for launch, not for build** |
| OPEN-02 | Is EN launching with ES, or later? Changes whether the switcher ships visible. | Open |
| OPEN-03 | Form destination: CRM webhook (GoHighLevel?), email, or Next route handler + provider? | Open — form is built against a typed `submitApplication` port so the adapter is swappable |
| OPEN-04 | Does "Portal de clientes" / "Hacer un pago" point to an existing system? | Open |

---

## 9. Build order

1. ~~Scaffold: Next 16 + Tailwind 4 + GSAP~~ ✅
2. ~~Tokens: Tailwind 4 `@theme`, fonts via `next/font`, base layer~~ ✅
3. ~~`shared/config/site.ts` + `content/types.ts`~~ ✅
4. ~~Content bundle `content/es/*` — all four pages~~ ✅
5. ~~`shared/motion/*` — plugin registration + hooks~~ ✅
6. ~~`shared/ui` atoms and molecules~~ ✅
7. ~~`shared/layout` — Header, TopBar, Footer, WhatsAppFab~~ ✅
8. ~~Inicio sections~~ ✅
9. ~~Servicios sections~~ ✅
10. ~~Nosotros + Contacto sections~~ ✅
11. ~~SEO metadata + JSON-LD~~ ✅
12. ~~Redesign: "Vegas Nocturno" — tokens, neon primitives, motion layer, all four pages~~ ✅
13. **Remaining:** visual review in a real browser at 360 / 768 / 1440, Lighthouse,
    `robots.txt` + `sitemap.xml`, OG images, favicon, EN locale, real content for PH-01…PH-08

Verified green: `pnpm exec tsc --noEmit`, `pnpm exec eslint .`, `pnpm build`
(all four pages prerender, `/` → `/es`).

Not yet verified: how it actually looks. No browser was available in the build
session, so the design has been reasoned about and checked through served HTML
and compiled CSS, not seen. **Review it visually before showing the client.**

---

## 10. Decisions made during the build

| Decision | Reason |
| --- | --- |
| `typedRoutes: false` in `next.config.ts` | Every internal href is built at runtime from the content layer and prefixed with the locale. Typed routes cannot express that. Link integrity comes from the single nav source in `content/es/global.ts`. |
| `src/proxy.ts`, not `middleware.ts` | Next 16 deprecates the middleware convention. Its matcher **must** exclude `api` — without that exclusion route handlers are redirected to a locale prefix and the form breaks silently. |
| `[locale]/layout.tsx` is the root layout | Lets `<html lang>` carry the real locale. There is no unprefixed route; the proxy redirects `/` to `/es`. |
| Form talks to a port, not a transport | `features/contacto/application/application.ts` defines `SubmitApplication`. The adapter posts to `/api/aplicaciones`, which forwards to `APPLICATION_WEBHOOK_URL`. |
| Unconfigured form returns **503**, not a fake success | A real enquiry must never be silently dropped. The form then shows the error and points at WhatsApp, which works today. Set `APPLICATION_WEBHOOK_URL` to go live. |
| Inline `data-js` script in `<head>` | Pre-hides the elements GSAP reveals. Without it the content paints, hydration hides it, then it animates back in — a visible flash. With no JavaScript the content simply stays visible. |
| Signature sequence rests in its **finished** state | The missed call plus both messages are the default DOM state, so with no JS or reduced motion the panel still tells the whole story and nothing overlaps. `[data-js]` flips it to the start state for GSAP. |
| No `ScrollSmoother` | It fights native scrolling, and this audience is on mobile. |
| Hours and map share one panel on Contacto | Separately they were two thin bands with nothing in them. |
| `@source inline("neon-char")` / `("is-lit")` in `globals.css` | Both classes are applied from JavaScript, so Tailwind never sees them in the markup and silently omits them. Found by grepping the compiled CSS, not by reading the code — **without this the lettering is always lit and the whole signature effect does nothing.** |
| Neon lights by **class toggle**, not opacity tween | Real neon snaps on and stutters; it does not fade. Hard cuts are both more authentic and simpler to control. |
| Antonio for display | Condensed with near-uniform stroke weight, which is what a tube is. `Big Shoulders Display` was the first pick and is not in this Next version's `next/font` data — checked, not assumed. |
| Every lit fill takes night-coloured text | bone on pink is 3.1:1 and fails AA; night on pink is 5.5:1. Verified by calculation, listed in section 3. |
| Film grain over the whole page | A dark page with no texture reads as empty rather than atmospheric. This is most of the difference. |

---

## 11. Copy written during the build — needs client approval

The client doc has no headings for some sections and no copy at all for others.
These strings were written to make the pages work and are **not** client-approved.
All of them live in `src/content/es/*`.

| Where | String |
| --- | --- |
| `home.ts` → `featuredServices.title` | "Lo que puedes tener funcionando en dos semanas" |
| `home.ts` → `missedCall` | **Entire section.** New: the animated demonstration of "Llamadas que no se pierden". Deliberately generic — no business name, no person, nothing that could read as a real customer. |
| `home.ts` → `testimonials.pendingNote` | Holding text until PH-01 lands |
| `servicios.ts` → `webTiers.priceNote` | "El precio lo vemos juntos en una llamada de 15 minutos…" — makes the missing price read as deliberate |
| `servicios.ts` / `nosotros.ts` / `contacto.ts` → `hero.eyebrow` | "Servicios", "Nosotros", "Contacto" |
| `nosotros.ts` → `values.title` | "Cómo trabajamos" |
| `nosotros.ts` → `stats.title`, `stats.pendingNote` | "En números" + holding text for PH-02 |
| `contacto.ts` → `channels.title` | "Otras formas de encontrarnos" |
| `contacto.ts` → `map.title` | "Dónde estamos" |
| `contacto.ts` → `booking.pendingNote`, `map.pendingNote` | Holding text for PH-04 / PH-05 |
| `contacto.ts` → `form.submittingLabel`, `form.errorMessage` | "Enviando…" and the failure message that redirects to WhatsApp |
| `CtaFinal.tsx` | "O llámanos ahora mismo" — label above the phone monument |
| `Formulario.tsx` | The paragraph beside the form and "O escríbenos por WhatsApp" |
| `Header.tsx` | "Te respondemos el mismo día hábil." in the mobile menu |
| `PageHero.tsx` | "Secciones de esta página" — accessible name for the anchor nav |

Two of these are hardcoded in components rather than content (`CtaFinal`,
`Formulario`, `Header`, `PageHero`). Move them into the content bundle before
the EN translation.

### Typesetting splits — not new copy, but a design call to confirm

These take the client's sentence unchanged and decide which half lights up. The
split is in `src/content/es/home.ts` and `nosotros.ts`, so it is reviewable.

| Line | Lead (dim) | Lit |
| --- | --- | --- |
| Hero | "Tu negocio merece" … "no más complicaciones" | **más clientes** |
| Problema closer | "No es falta de trabajo." | **Es falta de un sistema.** |
| Para quién es | "Si tu negocio vive de llamadas, citas o recomendaciones," | **esto es para ti.** |
| Misión | — | the whole sentence |

---

## 12. Quality floor

Not optional, not announced in the UI.

- Responsive to 360px. No horizontal scroll at any width.
- Visible keyboard focus on every interactive element. `:focus-visible` ring in ink or sangre.
- `prefers-reduced-motion: reduce` → final state, no animation.
- Real `<label>` on every form field. Errors say what happened and how to fix it.
- Contrast: body text on marigold must be ink, never white. Verified AA.
- Spanish diacritics render correctly in every face at every weight.
