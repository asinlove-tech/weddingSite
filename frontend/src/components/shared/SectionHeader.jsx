import { Ornament } from "./Ornament";

export const SectionHeader = ({ eyebrow, title, testId }) => (
    <div className="reveal flex flex-col items-center gap-4 text-center">
        {eyebrow && (
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#B08D3F]">
                {eyebrow}
            </span>
        )}
        <h2
            data-testid={testId}
            className="font-display text-4xl text-[#2B2620] sm:text-5xl"
        >
            {title}
        </h2>
        <Ornament />
    </div>
);
