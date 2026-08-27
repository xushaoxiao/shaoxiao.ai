import { systems, systemsSection } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Systems() {
  const { t } = useSite();

  return (
    <section id="systems" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-sage-dim">
              {systemsSection.index}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
              {t(systemsSection.title)}
            </h2>
          </div>
          <p className="font-mono text-[11px] text-dim">
            {t(systemsSection.subtitle)}
          </p>
        </header>

        <ol>
          {systems.map((sys, i) => (
            <li
              key={sys.id}
              className={`grid gap-4 py-8 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <div className="font-mono text-[11px] tracking-wider text-dim">
                <div className="text-sage-dim">{sys.code}</div>
                <div className="mt-2">{t(sys.org)}</div>
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-tight text-paper sm:text-3xl">
                  {t(sys.title)}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone sm:text-[15px]">
                  {t(sys.body)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
