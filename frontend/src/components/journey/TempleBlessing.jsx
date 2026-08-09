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
        img.style.transform = `translateY(${-p * 34}px) scale(${1 - p * 0.15})`;
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
                <div
                    data-testid="ganesha-shrine"
                    className="shrine reveal flex h-[300px] w-[240px] items-center justify-center overflow-hidden md:h-[360px] md:w-[290px]"
                >
                    <img
                        ref={shrineImgRef}
                        src={images.ganesha}
                        alt="Lord Ganesha line artwork, glowing within the temple sanctum"
                        className="shrine-img h-[78%] w-auto"
                    />
                </div>

                <div
                    data-testid="blessing-text"
                    className="mt-14 flex w-full max-w-2xl flex-col items-center gap-5 rounded-[2rem] border border-[#B08D3F]/25 bg-[#FAF5EC]/90 px-6 py-12 text-center shadow-[0_40px_80px_-50px_rgba(43,38,32,0.4)] backdrop-blur-md md:px-14 md:py-16"
                >
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
