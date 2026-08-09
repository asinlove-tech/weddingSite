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
                            "linear-gradient(180deg,#FAF5EC 0%,#F6EFDF 42%,#F0E3C8 75%,#EAD8B8 100%)",
                    }}
                />
                <div
                    ref={glowRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 40% at 50% 78%, rgba(217,164,65,0.3) 0%, rgba(217,140,65,0.12) 50%, transparent 78%)",
                    }}
                />
                <div
                    ref={textRef}
                    data-testid="closing-text"
                    className="absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-5 px-6 pt-[7vh] text-center opacity-0 will-change-transform"
                >
                    <div className="flex max-w-xl flex-col gap-4">
                        {closing.lines.map((line, i) => (
                            <p
                                key={i}
                                className="font-display text-2xl italic leading-snug text-[#3A3128] md:text-4xl"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className="mt-2">
                        <Ornament />
                    </div>
                    <p className="font-display text-xl font-medium uppercase tracking-[0.18em] text-[#8A5A1E] [text-shadow:0_1px_14px_rgba(250,245,236,0.85)] md:text-3xl">
                        {closing.signoff}
                    </p>
                </div>
                <img
                    ref={imgRef}
                    src={images.mandap}
                    alt="Illustration of the bride and groom seated from behind in a wedding mandap of carved wooden pillars, banana leaves and jasmine garlands, beside the sacred fire"
                    loading="lazy"
                    className="relative z-10 mb-[3vh] mt-auto max-h-[64vh] w-auto max-w-[98vw] opacity-0 will-change-transform [mask-image:linear-gradient(180deg,transparent_0%,black_28%)] md:max-h-[66vh]"
                />
            </div>
        </section>
    );
};
