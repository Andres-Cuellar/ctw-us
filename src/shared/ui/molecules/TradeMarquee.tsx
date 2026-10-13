interface TradeMarqueeProps {
  trades: string[];
}

/**
 * A marquee IS a sign, so here the movement is the subject rather than
 * decoration — this is the street the audience's businesses live on. The track
 * renders the list twice so the loop is seamless; it pauses on hover and stops
 * entirely under reduced motion.
 */
export function TradeMarquee({ trades }: TradeMarqueeProps) {
  return (
    <div
      className="group relative overflow-hidden py-2"
      role="group"
      aria-label="Oficios con los que trabajamos"
    >
      {/* Fade the ends so the loop does not visibly cut. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-night to-transparent sm:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-night to-transparent sm:w-28"
      />

      <div className="marquee-track group-hover:[animation-play-state:paused]">
        {[0, 1].map((pass) => (
          <ul
            key={pass}
            className="flex shrink-0 items-center"
            aria-hidden={pass === 1}
          >
            {trades.map((trade) => (
              <li key={trade} className="flex items-center">
                <span className="type-marquee px-7 text-[clamp(1.4rem,3vw,2.3rem)] text-bone-70">
                  {trade}
                </span>
                <span
                  aria-hidden
                  className="size-2 rounded-full bg-gold shadow-[0_0_12px_var(--color-gold)]"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
