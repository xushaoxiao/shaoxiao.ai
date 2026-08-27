import { useState } from "react";
import { logSection, roles } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function ExperienceLog() {
  const { t } = useSite();
  const [openId, setOpenId] = useState<string>(roles[0]?.id ?? "");

  return (
    <section id="log" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-sage-dim">
              {logSection.index}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
              {t(logSection.title)}
            </h2>
          </div>
          <p className="font-mono text-[11px] text-dim">{t(logSection.subtitle)}</p>
        </header>

        <ol className="relative">
          {roles.map((role, i) => {
            const open = openId === role.id;
            const last = i === roles.length - 1;
            return (
              <li key={role.id} className="relative grid grid-cols-[2rem_minmax(0,1fr)]">
                <div className="relative flex flex-col items-center">
                  <span
                    className={`mt-5 size-2.5 rounded-full ${
                      role.head ? "bg-sage" : "bg-void ring-1 ring-stone"
                    }`}
                  />
                  {!last && <span className="w-px flex-1 bg-line" />}
                </div>
                <div className={`${last ? "pb-0" : "pb-4"}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? "" : role.id)}
                    className="flex w-full flex-col items-start gap-1 rounded-md px-3 py-4 text-left transition-colors duration-150 hover:bg-raised sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="w-40 shrink-0 font-mono text-[11px] text-dim">
                      {t(role.period)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-paper">
                        {t(role.title)}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-stone">
                        {t(role.company)}
                        <span className="text-dim">  ·  {t(role.location)}</span>
                        {role.head && (
                          <span className="ml-2 text-sage">HEAD</span>
                        )}
                      </span>
                    </span>
                  </button>
                  {open && (
                    <div className="px-3 pb-6 sm:pl-[10.5rem]">
                      <p className="max-w-2xl text-sm leading-relaxed text-stone">
                        {t(role.summary)}
                      </p>
                      {role.bullets.length > 0 && (
                        <ul className="mt-4 max-w-2xl space-y-2">
                          {role.bullets.map((b) => (
                            <li
                              key={b.en}
                              className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-2 text-sm leading-relaxed text-paper/90"
                            >
                              <span className="mt-2 size-1 rounded-full bg-sage-dim" />
                              <span>{t(b)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className="mt-4 font-mono text-[10px] tracking-wide text-dim">
                        {role.stack.join("  ·  ")}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
