import { useState } from "react";
import { colophon, contact } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Contact() {
  const { t } = useSite();
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  async function copy(kind: "email" | "phone", value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <header className="mb-12">
          <p className="font-mono text-[11px] tracking-[0.22em] text-sage-dim">
            {contact.index}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {t(contact.title)}
          </h2>
          <p className="mt-3 font-mono text-[11px] text-dim">
            {t(contact.subtitle)}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div>
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-xl leading-snug tracking-tight text-paper no-underline transition-colors duration-quick hover:text-sage sm:text-[clamp(1.6rem,4vw,3rem)]"
            >
              {contact.email}
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone">
              {t(contact.note)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => copy("email", contact.email)}
                className="h-11 rounded-md border border-hair bg-ink px-4 font-mono text-[12px] text-paper transition-[border-color,background-color] duration-150 hover:border-stone"
              >
                {copied === "email"
                  ? t({ en: "copied", zh: "已复制" })
                  : t({ en: "copy email", zh: "复制邮箱" })}
              </button>
              <button
                type="button"
                onClick={() => copy("phone", contact.phone)}
                className="h-11 rounded-md border border-line px-4 font-mono text-[12px] text-stone transition-colors duration-150 hover:text-paper"
              >
                {copied === "phone"
                  ? t({ en: "copied", zh: "已复制" })
                  : t({ en: "copy phone", zh: "复制电话" })}
              </button>
            </div>
          </div>

          <dl className="space-y-5 font-mono text-[12px]">
            <div>
              <dt className="text-dim">TEL</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="text-paper no-underline"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-dim">LOC</dt>
              <dd className="mt-1 text-paper">{t(contact.city)}</dd>
            </div>
            <div>
              <dt className="text-dim">TZ</dt>
              <dd className="mt-1 text-paper">Asia/Shanghai  UTC+8</dd>
            </div>
          </dl>
        </div>

        <p className="mt-20 border-t border-line pt-6 font-mono text-[10px] leading-5 tracking-wide text-dim">
          {t(colophon)}
        </p>
      </div>
    </section>
  );
}
