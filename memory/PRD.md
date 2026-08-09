# PRD — Amit & Sakthi Wedding Invitation

## Original Problem Statement
Build a premium, immersive, single-page wedding invitation website for Amit Kumar and Sri Sakthi Maheswari that feels like a continuous walk through a South Indian temple: Temple Entrance → Blessing (Ganesha) → Wedding Celebrations → Venue → Meet the Couple → Things to Know → RSVP → Wedding Wishlist → Closing Mandap scene fading to ivory. Cormorant Garamond + Inter typography; Ivory / Antique Gold / Temple Teal / Terracotta / Deep Peacock Blue palette; subtle scroll-driven storytelling animations; mobile recomposed intentionally; placeholders for all unknown links.

## User Personas
- Wedding guests (mobile-first, all ages) who need event details, venue, travel info, RSVP and wishlist access.
- The couple/family who will later replace placeholder links and photos.

## Architecture
- Frontend-only React SPA (Create React App + Tailwind). No backend endpoints needed; FastAPI backend left untouched.
- `src/config.js` — single source of truth for all copy, image paths, and PLACEHOLDER URLs (Google Maps, RSVP, wishlist, travel doc).
- Components: `components/journey/` (WeddingJourney, TempleStage, HeroTemple, TempleBlessing, WeddingCelebrations, EventCard, Venue, MeetTheCouple, PhotoFrame, ThingsToKnow, Rsvp, WeddingWishlist, ClosingMandap), `components/shared/` (PrimaryButton, SectionHeader, Ornament), `hooks/` (useRafScroll, useReveal).
- Artworks in `public/images/`: gopuram.webp (user-provided hero), ganesha.webp (user-provided, shown inside dark sanctum arch), cocktail.webp, mandap.webp (user-provided, resized/recompressed).

## Implemented (2026-08-09)
- Two-layer fixed temple stage: a wide blur-fill hero composite (sky + full gopuram top + carpet) opens the page; on first scroll the couple's names fade in, pinned over the sky; then the stage crossfades into a slow walk down the actual carpet inside the artwork (background pan 62%→97%), fading out as the guest reaches the Venue.
- Couple's names hidden on load, revealed on first scroll (scroll-linked opacity), pinned via sticky hero.
- Ganesha reprocessed to transparent cream-gold line art, floating directly on the artwork's carpet (no overlay panel); starts large, scales down and rises as the guest scrolls. Invitation text reveals beneath on an ivory glass panel.
- Two oval-framed event cards (Cocktail Evening 24 Oct 6 PM; Muhurtham 25 Oct 8 AM) with soft blur/slide/fade entrance; celebrations header in ivory/light-gold for contrast on the carpet.
- Kolam-pattern texture (user-provided, mirror-tiled seamless, 50% opacity) as the fixed background from Venue onward.
- Minimal Venue section with arch-framed temple illustration and "View on Google Maps" CTA (PLACEHOLDER URL in config).
- Meet the Couple: editorial intro + large soft ivory-mat photo frame (no heavy wood), auto-crossfading slideshow of the 4 artworks with per-photo focal positioning, disabled under reduced-motion.
- Things to Know: 4 elegant cards (Weather, Traditional Attire, Travel Tips, Things to Do Around Coimbatore — last links to PLACEHOLDER doc URL).
- Minimal RSVP section (one button, PLACEHOLDER link) and Wedding Wishlist (exact message from brief, PLACEHOLDER link).
- Closing scene: gradual ivory → deep dusk transition, mandap artwork with flood-fill-removed background melting into the dusk sky, warm fire glow, thank-you text at the TOP, names beneath — page ends on the scene (no white fade).
- Accessibility: semantic sections, aria-labels, alt text, focus-visible gold outline, prefers-reduced-motion support throughout.
- Verified via screenshots: hero initial/names (desktop+mobile), blessing with Ganesha on carpet, event cards, venue + pattern, photo frame, info cards, and the full closing sequence on desktop and mobile.

## Backlog / Next Tasks
- P0: Replace PLACEHOLDER URLs in `src/config.js` (Google Maps venue link, RSVP link/form, wishlist URL, travel document URL, RSVP contact).
- P1: Swap in real couple photographs (event cards + photo frame slideshow).
- P1: Real venue name/address once confirmed.
- P2: Countdown timer to the Muhurtham.
- P2: Soft instrumental music toggle.
- P2: Language toggle (English/Tamil).

## Test Credentials
None — public invitation site, no authentication.
