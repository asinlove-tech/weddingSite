import { useEffect, useRef } from "react";
import { couple } from "@/config";
import { useRafScroll } from "@/hooks/useRafScroll";
import { ChevronDown } from "lucide-react";

export const HeroTemple = () => {
    const namesRef = useRef(null);
    const cueRef = useRef(null);
    const sectionRef = useRef(null);
    const shownRef = useRef(false);
    const updateRef = useRef(() => {});
    updateRef.current = () => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        const heroH = sectionRef.current
            ? sectionRef.current.offsetHeight
            : vh * 2.9;
        const tOut = Math.min(
            1,
            Math.max(0, (y - (heroH - vh * 0.8)) / (vh * 0.5)),
        );
        if (namesRef.current) {
            namesRef.current.style.opacity = String(
                shownRef.current ? 1 - tOut : 0,
            );
            namesRef.current.style.transform = `translateY(${shownRef.current ? -tOut * 12 : 18}px)`;
        }
        if (cueRef.current)
            cueRef.current.style.opacity = String(
                shownRef.current ? Math.max(0, 1 - y / 60) : 1,
            );
    };

    useRafScroll(() => updateRef.current());

    useEffect(() => {
        const t = setTimeout(() => {
            shownRef.current = true;
            updateRef.current();
        }, 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            ref={sectionRef}
            data-testid="hero-temple"
            aria-label="Wedding invitation of Amit Kumar and Sri Sakthi Maheswari"
            className="relative h-[290svh]"
        >
            <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-between overflow-hidden">
                <div className="px-6 pt-[7vh] text-center">
                <div
                    ref={namesRef}
                    className="relative opacity-0 will-change-transform"
                >
                    <h1
                        data-testid="hero-names"
                        className="hero-names relative font-display font-medium uppercase"
                    >
                    <span className="block whitespace-nowrap text-[1.45rem] tracking-[0.08em] sm:text-6xl sm:tracking-[0.18em] lg:text-7xl">
                        {couple.groom}
                    </span>
                    <span className="hero-and my-3 block text-xs tracking-[0.55em] sm:my-5 sm:text-sm">
                        {couple.and}
                    </span>
                    <span className="block whitespace-nowrap text-[1.45rem] tracking-[0.08em] sm:text-6xl sm:tracking-[0.18em] lg:text-7xl">
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
