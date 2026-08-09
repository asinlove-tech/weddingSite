import { TempleStage } from "./TempleStage";
import { HeroTemple } from "./HeroTemple";
import { TempleBlessing } from "./TempleBlessing";
import { WeddingCelebrations } from "./WeddingCelebrations";
import { Venue } from "./Venue";
import { MeetTheCouple } from "./MeetTheCouple";
import { ThingsToKnow } from "./ThingsToKnow";
import { Rsvp } from "./Rsvp";
import { WeddingWishlist } from "./WeddingWishlist";
import { ClosingMandap } from "./ClosingMandap";

export const WeddingJourney = () => (
    <div className="relative">
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 opacity-35"
            style={{
                backgroundImage: "url(/images/pattern-tile.webp)",
                backgroundSize: "1300px",
                backgroundRepeat: "repeat",
            }}
        />
        <TempleStage />
        <main className="relative z-10">
            <HeroTemple />
            <div data-carpet-region className="relative">
                <TempleBlessing />
                <WeddingCelebrations />
            </div>
            <Venue />
            <MeetTheCouple />
            <ThingsToKnow />
            <Rsvp />
            <WeddingWishlist />
            <ClosingMandap />
        </main>
    </div>
);
