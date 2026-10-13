import type { Step } from "@/content/types";

interface StepListProps {
  steps: Step[];
}

/**
 * Numbered because this genuinely is a sequence — the order is information the
 * reader needs. A tube runs through the figures and fills as you scroll; each
 * figure switches on in turn. The rest of the step is not lit.
 */
export function StepList({ steps }: StepListProps) {
  return (
    <div className="relative" data-draw-track>
      {/* The tube: unlit glass underneath, the lit fill on top. */}
      <span aria-hidden className="absolute top-[1.9rem] right-0 left-0 hidden h-px bg-bone/12 lg:block" />
      <span
        aria-hidden
        data-draw
        className="absolute top-[1.9rem] right-0 left-0 hidden h-[2px] bg-gold shadow-[0_0_14px_var(--color-gold)] lg:block"
      />

      <ol
        className="relative grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4"
        data-seq
        data-seq-step="0.35"
      >
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col" data-reveal>
            <span
              className="type-marquee neon neon-gold is-lit inline-flex size-[3.8rem] items-center justify-center self-start rounded-full border border-gold/40 bg-night text-[1.9rem] leading-none [&:not(.is-lit)]:neon-char [&:not(.is-lit)]:border-bone/15"
              data-numeric
              data-seq-item
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="type-display mt-8 text-[1.5rem] text-bone">
              <span className="sr-only">Paso {index + 1}. </span>
              {step.title}
            </h3>
            <p className="mt-4 max-w-[34ch] leading-relaxed text-bone-70">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
