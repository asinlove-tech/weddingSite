import { venue } from "@/config";
import { useReveal } from "@/hooks/useReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export const Venue = () => {
    const ref = useReveal();
    return (
        <section
            ref={ref}
            data-testid="venue"
            aria-label="Venue"
            className="relative px-6 py-28 md:py-40"
        >
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 text-center">
                <SectionHeader
                    eyebrow="Where We Celebrate"
                    title={venue.title}
                    testId="venue-title"
                />
                <div className="reveal reveal-delay-1 overflow-hidden rounded-t-[999px] border border-[#B08D3F]/50 p-2">
                    <div className="h-72 w-56 overflow-hidden rounded-t-[999px] md:h-80 md:w-64">
                        <img
                            src={venue.image}
                            alt={venue.imageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                </div>
                <div className="reveal reveal-delay-2">
                    <p className="font-display text-2xl italic text-[#2B2620] md:text-3xl">
                        {venue.place}
                    </p>
                    <p className="mt-3 text-sm tracking-[0.06em] text-[#2B2620]/65">
                        {venue.note}
                    </p>
                </div>
                <div className="reveal reveal-delay-3">
                    <PrimaryButton href={venue.mapsUrl} testId="venue-maps-button">
                        {venue.mapsLabel}
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};
