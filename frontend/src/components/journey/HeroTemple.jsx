import { couple } from "@/config";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown } from "lucide-react";

export const HeroTemple = () => {
    const ref = useReveal();
    return (
        <section
            ref={ref}
            data-testid="hero-temple"
            aria-label="Wedding invitation of Amit Kumar and Sri Sakthi Maheswari"
            className="relative flex min-h-[100svh] flex-col items-center justify-between"
        >
            <div className="px-6 pt-[15vh] text-center md:pt-[17vh]">
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-x-16 -inset-y-10 md:-inset-x-24"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(11,31,48,0.5) 0%, rgba(11,31,48,0.22) 55%, transparent 80%)",
                        }}
                    />
                    <h1
                        data-testid="hero-names"
                        className="reveal relative font-display font-medium text-[#FAF5EC] [text-shadow:0_2px_36px_rgba(11,31,48,0.55),0_1px_6px_rgba(11,31,48,0.4)]"
                    >
                    <span className="block text-5xl leading-tight sm:text-6xl lg:text-7xl">
                        {couple.groom}
                    </span>
                    <span className="my-4 block text-2xl italic text-[#E9D9B8] sm:text-3xl">
                        {couple.and}
                    </span>
                    <span className="block text-5xl leading-tight sm:text-6xl lg:text-7xl">
                        {couple.bride}
                    </span>
                    </h1>
                </div>
            </div>
            <div className="reveal reveal-delay-2 pb-10" aria-hidden="true">
                <ChevronDown
                    data-testid="hero-scroll-cue"
                    className="scroll-cue h-6 w-6 text-[#FAF5EC]/85 [filter:drop-shadow(0_1px_6px_rgba(11,31,48,0.5))]"
                />
            </div>
        </section>
    );
};
