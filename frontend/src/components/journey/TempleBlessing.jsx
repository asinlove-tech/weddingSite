import { useRef } from "react";
import { blessing, couple, images } from "@/config";
import { useRafScroll } from "@/hooks/useRafScroll";
import { useReveal } from "@/hooks/useReveal";
import { Ornament } from "@/components/shared/Ornament";

export const TempleBlessing = () => {
    const sectionRef = useRef(null);
    const shrineImgRef = useRef(null);
    const revealRef = useReveal();

    useRafScroll(() => {
        const section = sectionRef.current;
        const img = shrineImgRef.current;
        if (!section || !img) return;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.9 - rect.top) / (vh * 1.15)));
        img.style.transform = `translateY(${-p * 90}px) scale(${1 - p * 0.42})`;
    });

    return (
        <section
            ref={(el) => {
                sectionRef.current = el;
                revealRef.current = el;
            }}
            data-testid="temple-blessing"
            aria-label="Blessing and invitation"
            className="relative px-6 pb-28 pt-24 md:pb-36 md:pt-32"
        >
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
                <div className="reveal">
                    <img
                        ref={shrineImgRef}
                        data-testid="ganesha-image"
                        src={images.ganesha}
                        alt="Lord Ganesha golden line artwork"
                        className="h-[300px] w-auto will-change-transform [filter:drop-shadow(0_8px_34px_rgba(240,226,180,0.45))] [mask-image:linear-gradient(180deg,black_92%,transparent)] md:h-[400px]"
                    />
                </div>

                <div
                    data-testid="blessing-text"
                    className="relative mt-16 flex w-full max-w-2xl flex-col items-center gap-5 px-6 py-16 text-center md:max-w-3xl md:py-20"
                >
                    <div
                        aria-hidden="true"
                        className="absolute -inset-x-10 -inset-y-8 -z-10 md:-inset-x-28 md:-inset-y-10"
                        style={{
                            background:
                                "radial-gradient(ellipse 62% 60% at 50% 50%, rgba(250,245,236,0.95) 0%, rgba(250,245,236,0.62) 55%, rgba(250,245,236,0) 85%)",
                        }}
                    />
                    <p className="reveal text-[11px] font-medium uppercase tracking-[0.32em] text-[#2B2620]/70">
                        {blessing.overline}
                    </p>
                    <p className="reveal reveal-delay-1 font-display text-2xl italic text-[#2B2620] md:text-3xl">
                        {blessing.brideFamily}
                        <span className="mx-3 text-[#B08D3F]">&amp;</span>
                        {blessing.groomFamily}
                    </p>
                    <div className="reveal reveal-delay-1 py-1">
                        <Ornament />
                    </div>
                    <p className="reveal reveal-delay-2 text-sm leading-relaxed tracking-[0.08em] text-[#2B2620]/75">
                        {blessing.invite}
                    </p>
                    <p className="reveal reveal-delay-2 font-display text-4xl font-medium leading-tight text-[#2B2620] md:text-5xl">
                        {couple.groom}
                    </p>
                    <p className="reveal reveal-delay-2 font-display text-xl italic text-[#B08D3F]">
                        {blessing.join}
                    </p>
                    <p className="reveal reveal-delay-3 font-display text-4xl font-medium leading-tight text-[#2B2620] md:text-5xl">
                        {couple.bride}
                    </p>
                    <p className="reveal reveal-delay-3 max-w-md text-sm leading-relaxed tracking-[0.08em] text-[#2B2620]/75">
                        {blessing.request}
                    </p>
                </div>
            </div>
        </section>
    );
};
