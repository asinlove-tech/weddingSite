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
        <TempleStage />
        <main className="relative z-10">
            <HeroTemple />
            <div className="carpet-wrap">
                <div className="carpet-strip" aria-hidden="true" />
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
