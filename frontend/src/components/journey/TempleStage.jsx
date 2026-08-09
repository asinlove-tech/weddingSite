import { useRef } from "react";
import { useRafScroll } from "@/hooks/useRafScroll";

export const TempleStage = () => {
    const imgRef = useRef(null);

    useRafScroll(() => {
        const el = imgRef.current;
        if (!el) return;
        const vh = window.innerHeight;
        const p = Math.min(1, window.scrollY / (vh * 2.6));
        const posY = 12 + p * 30;
        el.style.backgroundPosition = `center ${posY}%`;
        el.style.transform = `scale(${1 + p * 0.08})`;
        el.style.opacity = String(1 - Math.max(0, (p - 0.7) / 0.3));
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
