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

## Implemented (2026-08-09, rev 3)
- Single full-bleed temple stage: the gopuram artwork spans the entire page width; scroll pans it sky → tower → carpet in one continuous walk (piecewise eased curve), dissolving gradually into the damask motif background near the Venue.
- Hero opens on sky + gopuram crown only; names fade in pinned on first scroll — deep peacock over the sky on desktop, ivory with soft light halo on mobile. No dark scrims.
- Ganesha reprocessed (4x upscale, blur-denoise, smoothstep alpha, flat cream-gold) — clean filigree medallion floating directly on the artwork's carpet; scales down and rises on scroll; bottom edge soft-masked.
- Blessing text sits on a seamless soft ivory glow (radial pool, no card edges) over the carpet.
- Two oval-framed event cards (Cocktail Evening 24 Oct 6 PM; Muhurtham 25 Oct 8 AM) directly on the carpet; celebrations header in ivory/light-gold.
- Damask motif background (user tile, mirror-tiled seamless, blurred + ivory-blended, 40% opacity) from Venue onward.
- Meet the Couple: editorial intro + large soft ivory-mat photo frame, auto-crossfading slideshow of the 4 artworks with per-photo focal positioning.
- Closing: warm dusk gradient (peacock → terracotta horizon), mandap artwork with flood-fill-removed background melting into the scene, warm fire glow; thank-you text fully ABOVE the image, readable; page ends on the scene.
- Accessibility: semantic sections, aria-labels, alt text, focus-visible gold outline, prefers-reduced-motion support.
- Verified via screenshots (desktop + mobile): hero initial/names, Ganesha on carpet, blessing pool, celebrations on carpet, venue dissolve transition, photo frame, closing scene.

## Backlog / Next Tasks
- P0: Replace PLACEHOLDER URLs in `src/config.js` (Google Maps venue link, RSVP link/form, wishlist URL, travel document URL, RSVP contact).
- P1: Swap in real couple photographs (event cards + photo frame slideshow).
- P1: Real venue name/address once confirmed.
- P2: Countdown timer to the Muhurtham.
- P2: Soft instrumental music toggle.
- P2: Language toggle (English/Tamil).

## Test Credentials
None — public invitation site, no authentication.
