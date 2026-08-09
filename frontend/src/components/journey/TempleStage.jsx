import { useRef } from "react";
import { useRafScroll } from "@/hooks/useRafScroll";

const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));

export const TempleStage = () => {
    const heroRef = useRef(null);
    const walkRef = useRef(null);

    useRafScroll(() => {
        const hero = heroRef.current;
        const walk = walkRef.current;
        if (!hero || !walk) return;
        const y = window.scrollY;
        const vh = window.innerHeight;

        // phase 1: wide entrance scene (sky + full gopuram), gentle settle
        const hp = Math.min(1, y / vh);
        hero.style.backgroundPosition = `center ${hp * 14}%`;
        hero.style.transform = `scale(${1 + hp * 0.05})`;
        hero.style.opacity = String(1 - seg(y / vh, 0.62, 1.05));

        // phase 2: walk the length of the carpet inside the artwork
        const region = document.querySelector("[data-carpet-region]");
        const end = region
            ? region.offsetTop + region.offsetHeight
            : vh * 5;
        const wp = Math.min(
            1,
            Math.max(0, (y - vh * 0.5) / Math.max(1, end - vh * 1.4)),
        );
        walk.style.backgroundPosition = `center ${62 + wp * 35}%`;
        walk.style.transform = `scale(${1.02 + wp * 0.04})`;
        walk.style.opacity = String(
            seg(y / vh, 0.55, 0.95) * (1 - seg(wp, 0.88, 1)),
        );
    });

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            <div
                ref={walkRef}
                className="temple-stage-img opacity-0"
                style={{ backgroundImage: "url(/images/gopuram.webp)" }}
            />
            <div
                ref={heroRef}
                className="temple-stage-img"
                style={{ backgroundImage: "url(/images/hero-wide.webp)" }}
            />
            <div className="absolute inset-0 bg-[#E8A35C]/[0.05]" />
        </div>
    );
};
