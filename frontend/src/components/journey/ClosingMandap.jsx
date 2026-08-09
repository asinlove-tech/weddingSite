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
            const q = seg(p, 0.62, 0.88);
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
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <div
                    ref={duskRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "linear-gradient(180deg,#081826 0%,#0B1F30 34%,#123B52 62%,#1E4A5F 100%)",
                    }}
                />
                <div
                    ref={glowRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 45% at 50% 62%, rgba(232,163,92,0.4) 0%, rgba(217,164,65,0.16) 45%, transparent 75%)",
                    }}
                />
                <img
                    ref={imgRef}
                    src={images.mandapCut}
                    alt="Illustration of the bride and groom seated from behind in a golden wedding mandap beside the sacred fire"
                    loading="lazy"
                    className="relative z-10 mt-[24vh] max-h-[56vh] w-auto max-w-[94vw] opacity-0 will-change-transform md:mt-[16vh] md:max-h-[62vh]"
                />
                <div
                    ref={textRef}
                    data-testid="closing-text"
                    className="absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-5 px-6 pt-[6vh] text-center opacity-0 will-change-transform"
                >
                    <div className="flex max-w-xl flex-col gap-4">
                        {closing.lines.map((line, i) => (
                            <p
                                key={i}
                                className="font-display text-xl italic leading-snug text-[#FAF5EC] [text-shadow:0_2px_24px_rgba(11,31,48,0.6)] md:text-3xl"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className="mt-2">
                        <Ornament light />
                    </div>
                    <p className="font-display text-lg tracking-[0.08em] text-[#C9A961] md:text-2xl">
                        {closing.signoff}
                    </p>
                </div>
            </div>
        </section>
    );
};
