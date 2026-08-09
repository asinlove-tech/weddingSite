import { useRef } from "react";
import { couple } from "@/config";
import { useRafScroll } from "@/hooks/useRafScroll";
import { ChevronDown } from "lucide-react";

export const HeroTemple = () => {
    const namesRef = useRef(null);
    const cueRef = useRef(null);

    useRafScroll(() => {
        const t = Math.min(1, Math.max(0, (window.scrollY - 20) / 120));
        if (namesRef.current) {
            namesRef.current.style.opacity = String(t);
            namesRef.current.style.transform = `translateY(${(1 - t) * 18}px)`;
        }
        if (cueRef.current) cueRef.current.style.opacity = String(1 - t);
    });

    return (
        <section
            data-testid="hero-temple"
            aria-label="Wedding invitation of Amit Kumar and Sri Sakthi Maheswari"
            className="relative h-[135svh]"
        >
            <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-between overflow-hidden">
                <div className="px-6 pt-[7vh] text-center">
                <div
                    ref={namesRef}
                    className="relative opacity-0 will-change-transform"
                >
                    <h1
                        data-testid="hero-names"
                        className="hero-names relative font-display font-medium"
                    >
                    <span className="block text-4xl leading-tight sm:text-6xl lg:text-7xl">
                        {couple.groom}
                    </span>
                    <span className="hero-and my-4 block text-2xl italic sm:text-3xl">
                        {couple.and}
                    </span>
                    <span className="block text-4xl leading-tight sm:text-6xl lg:text-7xl">
                        {couple.bride}
                    </span>
                    </h1>
                </div>
                </div>
                <div ref={cueRef} className="pb-10 will-change-[opacity]" aria-hidden="true">
                    <ChevronDown
                        data-testid="hero-scroll-cue"
                        className="scroll-cue h-6 w-6 text-[#FAF5EC]/85 [filter:drop-shadow(0_1px_6px_rgba(11,31,48,0.5))]"
                    />
                </div>
            </div>
        </section>
    );
};
