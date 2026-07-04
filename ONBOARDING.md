# Pro Clean Zagreb — Website Template

This is a production Next.js website built for **Pro Clean Zagreb**, a professional cleaning company. Use this as the base template for building new client websites.

## Live site
- URL: https://procleanzg.com
- GitHub: https://github.com/AjdinnnM/proclean
- Deploy: Vercel (auto-deploy on push to `main`)

## Tech stack
- **Next.js 16** App Router, React 19, TypeScript strict
- **Tailwind CSS v4** with custom design tokens
- **Fonts:** Inter (body) + Bricolage Grotesque (display headings)
- **Images:** Next.js `<Image>` with `fill` + `sizes`

## Design system
- **Primary blue:** `#3B5BFF` / `#3B82F6`
- **Background:** `#FAFAF7` (warm off-white)
- **Dark:** `#0A0A0A`
- **Text secondary:** `#3F3F3F`, `#6B7280`
- **Border radius:** `rounded-[20px]` cards, `rounded-full` buttons/pills
- **Max content width:** `max-w-[1200px]` (sections), `max-w-[1100px]` (contact)
- **Section padding:** `py-20 lg:py-28`

## Project structure
```
src/
  app/
    page.tsx                  # Home page (assembles V3 components)
    layout.tsx                # Root layout, fonts, GA4, metadata
    globals.css               # Tailwind base + custom utilities
    kontakt/page.tsx          # Contact page
    galerija/page.tsx         # Photo gallery page
    usluge/
      stubiste/page.tsx       # Staircase cleaning service
      garaza/page.tsx         # Garage cleaning service
      prozori/page.tsx        # Window cleaning service
      izgradnja/page.tsx      # Post-construction cleaning
      poslovni-prostori/page.tsx  # Business premises cleaning
      generalke/page.tsx      # General cleaning
      strojno/page.tsx        # Machine cleaning
    radnici/
      page.tsx                # Worker portal (login: admin/proclean2024)
      ponuda/page.tsx         # Offer generator with AI chat panel
    reference/
      garderoba/page.tsx      # Reference: Garderoba Store
      novotel/page.tsx        # Reference: Novotel Hotel
  components/
    v3/
      HeaderV3.tsx            # Main navigation with dropdown menus
      HeroV3.tsx              # Hero section with CTA
      ServicesV3.tsx          # Services grid (5 cards)
      StatsV3.tsx             # Stats bar
      ProcessV3.tsx           # How we work section
      TestimonialsV3.tsx      # Client reviews
      GalleryV3.tsx           # Photo gallery with lightbox + filter
      ContactV3.tsx           # Contact form
      FooterV3.tsx            # Footer
      StickyCTAv3.tsx         # Floating "Zatraži ponudu" button
    Reveal.tsx                # Scroll-in animation (animate-once)
    ImageLightbox.tsx         # Full-screen image popup
  content/
    site.ts                   # All editable content (hero text, brand, etc.)
  lib/
    ponuda-parser.ts          # Croatian NLP parser for offer generator
public/
  images/
    photos/                   # Real job photos (garaza, prozori, stubiste...)
    services/                 # Service card hero images
    partners/                 # Partner/reference logos
  radnici-portal/index.html   # Building map portal (Mapbox)
  ponuda/index.html           # Offer generator (bundled React app)
  site.webmanifest
```

## Key components to copy/adapt

### `src/content/site.ts`
Central config — change this to rebrand for a new client:
- `brand.name`, `brand.tagline`
- `hero.heading`, `hero.subheading`
- Phone, email, address
- Service list

### `src/components/v3/HeaderV3.tsx`
Navigation bar with:
- Logo (SVG inline)
- Desktop dropdown menu for services
- Mobile hamburger menu
- Sticky on scroll

### `src/components/v3/ServicesV3.tsx`
5-card services grid. Large featured card + 4 smaller.
Each card: image, title, description, tags, hover animation.

### `src/components/Reveal.tsx`
Scroll-in animation wrapper. Animate-once (disconnects observer after first trigger).
Usage: `<Reveal delay={100}><YourComponent /></Reveal>`

### `src/components/v3/GalleryV3.tsx`
Masonry photo gallery with:
- Category filter buttons
- Click-to-enlarge lightbox
- Keyboard navigation (arrows, Escape)

## Service page structure
Each service page (`src/app/usluge/[service]/page.tsx`) follows this pattern:
1. Hero section (heading + CTA buttons)
2. What's included list
3. Process steps
4. Service types/variants
5. Locations served (array of Zagreb neighborhoods + surrounding cities)
6. References popup
7. "Zatraži ponudu" CTA

**Locations array** (standard for all services):
```ts
["Trešnjevka","Maksimir","Centar","Dubrava","Novi Zagreb","Sesvete",
 "Črnomerec","Špansko","Stenjevec","Peščenica","Podsljeme",
 "Velika Gorica","Samobor","Zaprešić","Karlovac","Lučko",
 "Jastrebarsko","Sveta Nedelja","Bregana"]
```

## Worker portal (`/radnici`)
- Login: `admin` / `proclean2024`
- Map of buildings (Mapbox token hardcoded)
- Offer generator at `/radnici/ponuda`
- AI chat panel parses Croatian text → fills offer form
- Mapbox geocoding for correct street names with diacritics

## Offer generator AI parser (`src/lib/ponuda-parser.ts`)
- `parsePonuda(text)` — extracts client, address, service, price, notes
- `enrichWithMapbox(fill)` — corrects street name diacritics via Mapbox API
- Sends `postMessage` to iframe with `{ type: 'FILL_PONUDA', ...data }`
- Service detection: garaža → zgrada, poslovni prostor → firma, etc.

## Analytics
- Google Analytics 4: `G-85VEGE6K4X` in `layout.tsx`

## Favicon files
- `src/app/icon.svg` — SVG icon (blue rounded square with "p")
- `src/app/favicon.ico` — 32×32 ICO
- `src/app/apple-icon.png` — 180×180 for Safari/iOS
- `public/icon-192.png`, `public/icon-512.png` — PWA icons
- `public/site.webmanifest`

## How to build a new site from this template

1. Copy key V3 components to new project
2. Update `src/content/site.ts` with new client data
3. Replace images in `public/images/`
4. Update service pages with client-specific services
5. Update `src/app/layout.tsx` metadata (title, description)
6. Replace favicon SVG with new brand icon
7. Update contact form API endpoint
8. Set up new GA4 property

## Commands
```bash
npm run dev      # Dev server
npm run build    # Production build
npm run check    # lint + typecheck + build
git push origin HEAD:main  # Deploy to Vercel
```
