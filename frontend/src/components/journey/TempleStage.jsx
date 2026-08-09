import { useRef } from "react";
import { useRafScroll } from "@/hooks/useRafScroll";

const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));

export const TempleStage = () => {
    const imgRef = useRef(null);

    useRafScroll(() => {
        const img = imgRef.current;
        if (!img) return;
        const y = window.scrollY;
        const vh = window.innerHeight;
        const region = document.querySelector("[data-carpet-region]");
        const end = region
            ? region.offsetTop + region.offsetHeight + vh * 0.9
            : vh * 6;
        const p = Math.min(1, Math.max(0, y / Math.max(1, end - vh * 1.1)));
        const posY =
            p < 0.1
                ? 2 + (p / 0.1) * 6
                : p < 0.45
                  ? 8 + 18 * Math.pow((p - 0.1) / 0.35, 1.1)
                  : 26 + (70 * (p - 0.45)) / 0.55;
        img.style.backgroundPosition = `center ${posY}%`;
        img.style.transform = `scale(${1 + p * 0.06})`;
        img.style.opacity = String(1 - seg(p, 0.86, 1.0));
    });

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            <div
                ref={imgRef}
                className="temple-stage-img"
                style={{ backgroundImage: "url(/images/gopuram.webp)" }}
            />
            <div className="absolute inset-0 bg-[#E8A35C]/[0.05]" />
        </div>
    );
};
