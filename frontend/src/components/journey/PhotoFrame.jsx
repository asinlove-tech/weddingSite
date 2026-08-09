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
            className="reveal reveal-delay-2 relative mx-auto w-full max-w-3xl"
        >
            <div className="rounded-[2rem] bg-[#FBF7EE]/75 p-3 shadow-[0_36px_90px_-45px_rgba(43,38,32,0.35)] ring-1 ring-[#B08D3F]/25 backdrop-blur-sm md:p-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-[#F2EADA]">
                    {photos.map((photo, i) => (
                        <img
                            key={photo.src + i}
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            aria-hidden={i !== idx}
                            style={{ objectPosition: photo.pos || "center" }}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
                                i === idx ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
