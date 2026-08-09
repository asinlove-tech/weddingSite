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
- Fixed temple backdrop with slow walk-in pan + scale over the gopuram artwork, fading out as the guest moves "inside".
- Continuous teal carpet strip connecting Hero → Blessing → Celebrations.
- Ganesha sanctum (dark peacock arch, glowing cream line art) that gently scales/rises on scroll; invitation text reveals beneath on an ivory glass panel.
- Two oval-framed event cards (Cocktail Evening 24 Oct 6 PM; Muhurtham 25 Oct 8 AM) with soft blur/slide/fade entrance.
- Minimal Venue section with arch-framed temple illustration and "View on Google Maps" CTA (PLACEHOLDER URL in config).
- Meet the Couple: editorial intro + antique wooden photo frame with auto-crossfading slideshow (4 artworks, 4.5s interval, disabled under reduced-motion).
- Things to Know: 4 elegant cards (Weather, Traditional Attire, Travel Tips, Things to Do Around Coimbatore — last links to PLACEHOLDER doc URL).
- Minimal RSVP section (one button, PLACEHOLDER link) and Wedding Wishlist (exact message from brief, PLACEHOLDER link).
- Closing scene: ivory → dusk peacock sky transition, mandap artwork reveal with warm glow, thank-you overlay text over soft scrim, final fade to ivory. 260vh sticky scroll scene.
- Accessibility: semantic sections, aria-labels, alt text, focus-visible gold outline, prefers-reduced-motion support throughout.
- Verified via screenshots: hero (desktop/mobile), blessing, event cards, venue, couple, info cards, RSVP/wishlist, and the full closing sequence.

## Backlog / Next Tasks
- P0: Replace PLACEHOLDER URLs in `src/config.js` (Google Maps venue link, RSVP link/form, wishlist URL, travel document URL, RSVP contact).
- P1: Swap in real couple photographs (event cards + photo frame slideshow).
- P1: Real venue name/address once confirmed.
- P2: Countdown timer to the Muhurtham.
- P2: Soft instrumental music toggle.
- P2: Language toggle (English/Tamil).

## Test Credentials
None — public invitation site, no authentication.
