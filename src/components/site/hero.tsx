import { hero, signals, titleBlock } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Hero() {
  const { t, setTerminalOpen } = useSite();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-line"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <aside
          className="rise absolute top-16 right-6 hidden w-44 border border-line bg-void/80 p-4 font-mono text-3xs leading-5 tracking-wider text-stone lg:block"
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        >
          <div className="mb-3 flex justify-between text-dim">
            <span>{t(titleBlock.drawing)}</span>
            <span>{t(titleBlock.rev)}</span>
          </div>
          <dl className="space-y-3">
            <div>
              <dt className="text-dim">LOC</dt>
              <dd className="text-paper">{t(titleBlock.loc)}</dd>
            </div>
            <div>
              <dt className="text-dim">COORD</dt>
              <dd className="text-paper">{titleBlock.coord}</dd>
            </div>
            <div>
              <dt className="text-dim">ORG</dt>
              <dd className="text-paper">{t(titleBlock.org)}</dd>
            </div>
            <div>
              <dt className="text-dim">SINCE</dt>
              <dd className="text-paper">{titleBlock.since}</dd>
            </div>
          </dl>
        </aside>

        <div className="max-w-4xl">
          <p
            className="rise font-mono text-2xs tracking-[0.22em] text-sage-dim"
            style={{ animationDelay: "40ms" }}
          >
            {t(hero.kicker)}
          </p>
          <p
            className="rise mt-6 font-mono text-2xs tracking-[0.18em] text-stone"
            style={{ animationDelay: "80ms" }}
          >
            {t(hero.nameAlt)}
          </p>
          <h1
            className="rise mt-2 max-w-[18ch] font-display text-[clamp(3.25rem,8.4vw,7.25rem)] leading-[0.94] tracking-[-0.03em] text-paper"
            style={{ animationDelay: "120ms" }}
          >
            {t(hero.headline)}
          </h1>
          <p
            className="rise mt-3 font-mono text-xs tracking-[0.16em] text-stone"
            style={{ animationDelay: "160ms" }}
          >
            {t(hero.name)}  /  {t(hero.role)}
          </p>
          <p
            className="rise mt-8 max-w-xl text-[15px] leading-relaxed text-stone sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            {t(hero.lede)}
          </p>
          <button
            type="button"
            onClick={() => setTerminalOpen(true)}
            className="rise mt-10 flex w-full max-w-xl items-center gap-3 rounded-md border border-line bg-ink px-4 py-3 text-left font-mono text-xs transition-[border-color] duration-quick hover:border-hair sm:text-[13px]"
            style={{ animationDelay: "260ms" }}
          >
            <span className="text-sage">$</span>
            <span className="text-paper">{hero.prompt}</span>
            <span className="cursor-blink ml-0.5 inline-block h-3.5 w-1.5 bg-sage" />
            <span className="ml-auto hidden text-dim sm:inline">
              {hero.promptOut}
            </span>
          </button>
        </div>
      </div>

      <div className="relative border-t border-line">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <li
              key={s.value}
              className={`px-4 py-5 sm:px-6 sm:py-6 ${
                i % 2 === 1 ? "border-l border-line" : ""
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-line" : ""
              }`}
            >
              <div className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 max-w-[12rem] font-mono text-3xs leading-4 tracking-wide text-stone">
                {t(s.label)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
