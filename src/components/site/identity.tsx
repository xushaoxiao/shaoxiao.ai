import { education, identity } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Identity() {
  const { t } = useSite();

  return (
    <section id="identity" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <header className="lg:pt-1">
          <p className="font-mono text-[11px] tracking-[0.22em] text-sage-dim">
            {identity.index}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {t(identity.title)}
          </h2>
          <p className="mt-3 font-mono text-[11px] text-dim">
            {t(identity.manpage)}
          </p>
        </header>
        <div className="max-w-2xl">
          <p className="text-[15px] leading-[1.7] text-paper sm:text-base">
            {t(identity.body)}
          </p>
          <p className="mt-6 text-[15px] leading-[1.7] text-stone sm:text-base">
            {t(identity.body2)}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[11px] tracking-wide text-stone">
            <span>{t(education.label)}</span>
            <span className="text-dim">/</span>
            <span className="text-paper">{t(education.value)}</span>
          </div>
          <a
            href={identity.wiki}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center font-mono text-[12px] text-sage no-underline transition-colors duration-150 hover:text-paper"
          >
            {t(identity.more)}  ↗
          </a>
        </div>
      </div>
    </section>
  );
}
