import { stackLayers, stackSection } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function StackRack() {
  const { t } = useSite();

  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-sage-dim">
              {stackSection.index}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
              {t(stackSection.title)}
            </h2>
          </div>
          <p className="font-mono text-[11px] text-dim">
            {t(stackSection.subtitle)}
          </p>
        </header>

        <div className="overflow-hidden rounded-lg border border-line">
          {stackLayers.map((layer, i) => (
            <div
              key={layer.id}
              className={`grid grid-cols-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <div className="flex items-center border-b border-line bg-ink px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-sage-dim sm:border-r sm:border-b-0">
                {t(layer.name)}
              </div>
              <ul className="flex flex-wrap gap-px bg-line p-px">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className="flex min-h-11 min-w-[7.5rem] flex-1 items-center justify-center bg-void px-3 py-2 font-mono text-[12px] text-paper transition-colors duration-150 hover:bg-raised hover:text-sage"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
