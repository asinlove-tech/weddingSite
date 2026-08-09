import { wishlist } from "@/config";
import { useReveal } from "@/hooks/useReveal";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Ornament } from "@/components/shared/Ornament";

export const WeddingWishlist = () => {
    const ref = useReveal();
    return (
        <section
            ref={ref}
            data-testid="wedding-wishlist"
            aria-label="Wedding wishlist"
            className="relative px-6 py-28 md:py-36"
        >
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-9 text-center">
                <div className="reveal flex flex-col items-center gap-4">
                    <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#B08D3F]">
                        {wishlist.title}
                    </span>
                    <Ornament />
                </div>
                <p
                    data-testid="wishlist-message"
                    className="reveal reveal-delay-1 font-display text-xl italic leading-relaxed text-[#2B2620]/85 md:text-2xl"
                >
                    {wishlist.message}
                </p>
                <div className="reveal reveal-delay-2">
                    <PrimaryButton href={wishlist.url} testId="wishlist-button">
                        {wishlist.buttonLabel}
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};
