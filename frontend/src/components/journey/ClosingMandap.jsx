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
    const fadeRef = useRef(null);
    const scrimRef = useRef(null);

    useRafScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const vh = window.innerHeight;
        const total = el.offsetHeight - vh;
        const rect = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -rect.top / total));

        if (duskRef.current) duskRef.current.style.opacity = String(seg(p, 0.02, 0.32));
        if (glowRef.current) glowRef.current.style.opacity = String(seg(p, 0.3, 0.6) * 0.9);
        if (imgRef.current) {
            const q = seg(p, 0.16, 0.52);
            imgRef.current.style.opacity = String(q);
            imgRef.current.style.transform = `translateY(${(1 - q) * 44}px) scale(${0.94 + q * 0.06})`;
        }
        if (textRef.current) {
            const q = seg(p, 0.55, 0.78);
            textRef.current.style.opacity = String(q);
            textRef.current.style.transform = `translateY(${(1 - q) * 22}px)`;
            if (scrimRef.current) scrimRef.current.style.opacity = String(q * 0.85);
            if (imgRef.current)
                imgRef.current.style.filter = `brightness(${1 - q * 0.3})`;
        }
        if (fadeRef.current) fadeRef.current.style.opacity = String(seg(p, 0.86, 1));
    });

    return (
        <section
            ref={sectionRef}
            data-testid="closing-mandap"
            aria-label="Closing scene — the wedding mandap"
            className="relative h-[260vh]"
        >
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <div
                    ref={duskRef}
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0"
                    style={{
                        background:
                            "linear-gradient(180deg,#0B1F30 0%,#123B52 52%,#1E4A5F 78%,#2A5A66 100%)",
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
                    src={images.mandap}
                    alt="Illustration of the bride and groom seated from behind in a golden wedding mandap beside the sacred fire"
                    loading="lazy"
                    className="mandap-img relative z-10 w-[min(94vw,620px)] opacity-0"
                />
                <div
                    ref={scrimRef}
                    aria-hidden="true"
                    className="absolute inset-0 z-[15] opacity-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 75% 60% at 50% 50%, rgba(11,31,48,0.72) 0%, rgba(11,31,48,0.35) 55%, transparent 85%)",
                    }}
                />
                <div
                    ref={textRef}
                    data-testid="closing-text"
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-8 text-center opacity-0"
                >
                    <div className="flex max-w-xl flex-col gap-4">
                        {closing.lines.map((line, i) => (
                            <p
                                key={i}
                                className="font-display text-2xl italic leading-snug text-[#FAF5EC] [text-shadow:0_2px_24px_rgba(11,31,48,0.6)] md:text-3xl"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className="mt-2">
                        <Ornament light />
                    </div>
                    <p className="font-display text-xl tracking-[0.08em] text-[#C9A961] md:text-2xl">
                        {closing.signoff}
                    </p>
                </div>
                <div
                    ref={fadeRef}
                    aria-hidden="true"
                    className="absolute inset-0 z-30 bg-[#FAF5EC] opacity-0"
                />
            </div>
        </section>
    );
};
