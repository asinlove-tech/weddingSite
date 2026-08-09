import { useRef } from "react";
import { closing, images } from "@/config";
import { useRafScroll } from "@/hooks/useRafScroll";
import { Ornament } from "@/components/shared/Ornament";

const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));

export const ClosingMandap = () => {
    const sectionRef = useRef(null);
    const duskRef = useRef(null);
    const glowRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useRafScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const vh = window.innerHeight;
        const total = el.offsetHeight - vh;
        const rect = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -rect.top / total));

        if (duskRef.current)
            duskRef.current.style.opacity = String(seg(p, 0, 0.45));
        if (glowRef.current)
            glowRef.current.style.opacity = String(seg(p, 0.3, 0.65) * 0.85);
        if (imgRef.current) {
            const q = seg(p, 0.2, 0.62);
            imgRef.current.style.opacity = String(q);
            imgRef.current.style.transform = `translateY(${(1 - q) * 56}px) scale(${0.96 + q * 0.04})`;
        }
        if (textRef.current) {
            const q = seg(p, 0.5, 0.78);
            textRef.current.style.opacity = String(q);
            textRef.current.style.transform = `translateY(${(1 - q) * 16}px)`;
        }
    });

    return (
        <section
            ref={sectionRef}
            data-testid="closing-mandap"
            aria-label="Closing scene — the wedding mandap"
            className="relative h-[280vh]"
        >
            <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden">
                <div
                    ref={duskRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "linear-gradient(180deg,#A9BFD9 0%,#D9B8C4 30%,#F2C9A8 55%,#F8EEDC 78%,#F6F0E3 100%)",
                    }}
                />
                <div
                    ref={glowRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 75% 45% at 50% 66%, rgba(244,190,120,0.55) 0%, rgba(233,150,110,0.22) 50%, transparent 78%)",
                    }}
                />
                <div
                    ref={textRef}
                    data-testid="closing-text"
                    className="absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-3 px-6 pt-[6vh] text-center opacity-0 will-change-transform"
                >
                    <div className="flex max-w-xl flex-col gap-3">
                        {closing.lines.map((line, i) => (
                            <p
                                key={i}
                                className="font-display text-xl italic leading-relaxed text-[#3A3128] md:text-2xl"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className="mt-1">
                        <Ornament />
                    </div>
                    <p className="font-display text-base font-medium uppercase tracking-[0.2em] text-[#8A5A1E] [text-shadow:0_1px_14px_rgba(250,245,236,0.85)] md:text-xl">
                        {closing.signoff}
                    </p>
                </div>
                <img
                    ref={imgRef}
                    src={images.mandap}
                    alt="Illustration of the bride and groom seated from behind in a wedding mandap of carved wooden pillars, banana leaves and jasmine garlands, beside the sacred fire"
                    loading="lazy"
                    className="relative z-10 mb-[4vh] mt-auto max-h-[54vh] w-auto max-w-[96vw] opacity-0 will-change-transform [mask-image:linear-gradient(180deg,transparent_0%,black_28%)] md:max-h-[56vh]"
                />
            </div>
        </section>
    );
};
