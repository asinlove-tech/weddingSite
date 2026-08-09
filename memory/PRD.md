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

## Implemented (2026-08-09, rev 5 — final content & assets)
- Crisp user-supplied assets swapped in: high-res gopuram (846×2000), clean transparent cream Ganesha line art (used directly), new wooden-mandap couple artwork, and a seamless damask tile (mirror-tiled + low-frequency flattened — no merge lines).
- Hero: "AMIT KUMAR WEDS SRI SAKTHI MAHESWARI" in white uppercase letterspaced Cormorant over the sky (reference-poster style), mobile-safe single lines.
- Blessing: final copy — "With the blessings of our parents and elders… On 25th October 2026, in Coimbatore…" on a calm ivory glow over the carpet.
- Venue: Bellezza Event Venue, Coimbatore, Tamil Nadu with real Google Maps link (maps.app.goo.gl/sFnxQgQYNtkiukdM6) and the AI-generated garlanded vintage car.
- Meet the Couple: final playful paragraph; photo frame slideshow (cocktail, new mandap, temple, framed Ganesha).
- Things to Know: final Weather copy; Travel Tips; Things to Do links to the real Google Doc recommendations.
- RSVP: final copy, contact line removed (button link still PLACEHOLDER in config).
- Wishlist: final playful copy, real link hazlnut.in/wishlist/asinlove.
- Finale: new mandap artwork, warm cream/sand palette matching the art (replacing blue dusk), final thank-you copy, signoff highlighted in uppercase antique gold.
- Verified via screenshots (desktop + mobile): hero, names, blessing, Ganesha, cards, venue, couple, info, RSVP, wishlist, closing.
- Rev 6: walk timing re-eased so Ganesha and the blessing text land on the carpet (not the tower); "While You're in Coimbatore" card with underlined "Read our recommendations" link; closing finale rebuilt as a sunrise (blue → dusty pink → peach → cream with warm sun glow), smaller cozy typography, signoff clear of the mandap artwork.
- Rev 7: hero extended to 235svh so Ganesha/blessing arrive ~2 screens later, fully on the carpet; hero names now fade out as the guest reaches the temple doorway; finale text darkened for contrast.

## Backlog / Next Tasks
- P0: Replace the RSVP button PLACEHOLDER link in `src/config.js` with the real RSVP form/contact.
- P1: Swap in real couple photographs (event cards + photo frame slideshow).
- P2: Countdown timer to the Muhurtham.
- P2: Soft instrumental music toggle.
- P2: Language toggle (English/Tamil).

## Test Credentials
None — public invitation site, no authentication.
