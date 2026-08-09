import { useEffect, useState } from "react";

export const PhotoFrame = ({ photos }) => {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const t = setInterval(
            () => setIdx((i) => (i + 1) % photos.length),
            4500,
        );
        return () => clearInterval(t);
    }, [photos.length]);

    return (
        <div
            data-testid="photo-frame"
            className="reveal reveal-delay-2 relative mx-auto w-full max-w-xl"
        >
            <div
                className="rounded-lg p-3 shadow-[0_50px_90px_-45px_rgba(43,38,32,0.55)] md:p-4"
                style={{
                    background:
                        "linear-gradient(140deg,#9a6a3c 0%,#6f4525 35%,#7d5230 62%,#5d3a1f 100%)",
                }}
            >
                <div className="rounded-[4px] border border-[#C9A961]/75 p-1.5 shadow-[inset_0_1px_8px_rgba(0,0,0,0.5)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[#1A120A]">
                        {photos.map((photo, i) => (
                            <img
                                key={photo.src + i}
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                aria-hidden={i !== idx}
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
                                    i === idx ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
