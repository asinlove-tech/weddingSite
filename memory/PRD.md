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

## Implemented (2026-08-09, rev 4)
- Full-bleed temple stage: gopuram artwork spans the page width; scroll pans sky → tower → carpet in one continuous walk (piecewise eased curve), dissolving gradually into a seamless damask motif background (mirror-tiled, low-frequency-flattened, ivory-blended, 35% opacity) for Venue onward.
- Hero styled after the reference poster: names hidden on load, fade in pinned on first scroll — white uppercase Cormorant with wide letter-spacing, "AND" in small caps between, soft shadow; mobile keeps names single-line with nowrap.
- Ganesha: AI-refined (Gemini Nano Banana image edit of the user's art) into clean fine cream-gold line art, keyed transparent — crisp filigree floating directly on the artwork's carpet; scales down and rises on scroll; bottom edge soft-masked.
- Blessing text on a subtle calm ivory glow (low-opacity radial pool) over the carpet — no card edges.
- Event cards: solid soft-beige (#F5EDDC) cards with deeper shadow — stand out from the carpet; oval-framed artworks; bigger typography.
- Venue: cute vintage car illustration (AI-generated watercolor, marigold garlands, background removed) instead of a photo; Google Maps CTA (PLACEHOLDER URL).
- Tighter rhythm: reduced inter-section padding throughout (py-16/24), larger section titles (text-5xl/6xl), larger body copy, Wishlist now uses the standard SectionHeader treatment.
- Closing finale: larger mandap artwork with its top edge faded into the warm dusk sky, thank-you text overlaid above in readable ivory, couple as the sole highlight; page ends on the scene.
- AI assets generated via emergentintegrations (Gemini 3.1 Flash Image / Nano Banana) using EMERGENT_LLM_KEY: venue-car.png, ganesha-ai.png. Script: /app/scripts/gen_images.py.
- Verified via screenshots (desktop + mobile): hero names (poster style), Ganesha on carpet, blessing glow, beige cards, venue car, couple frame, info cards, RSVP, wishlist, closing finale.

## Backlog / Next Tasks
- P0: Replace PLACEHOLDER URLs in `src/config.js` (Google Maps venue link, RSVP link/form, wishlist URL, travel document URL, RSVP contact).
- P1: Swap in real couple photographs (event cards + photo frame slideshow).
- P1: Real venue name/address once confirmed.
- P2: Countdown timer to the Muhurtham.
- P2: Soft instrumental music toggle.
- P2: Language toggle (English/Tamil).

## Test Credentials
None — public invitation site, no authentication.
