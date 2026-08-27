import { nav } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { Mark } from "@/components/site/mark";

const links = [
  { href: "#identity", key: "identity" as const },
  { href: "#log", key: "log" as const },
  { href: "#stack", key: "stack" as const },
  { href: "#systems", key: "systems" as const },
  { href: "#contact", key: "contact" as const },
];

export function SiteNav() {
  const { t, lang, toggleLang, setTerminalOpen } = useSite();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-void/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-paper no-underline"
          aria-label="Shaoxiao Xu"
        >
          <Mark />
        </a>

        <nav
          className="ml-auto flex items-center gap-0.5 overflow-x-auto sm:ml-8 sm:flex-1"
          aria-label="sections"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 px-2 py-2 font-mono text-3xs tracking-wide text-stone no-underline transition-colors duration-quick hover:text-paper sm:px-3 sm:text-2xs ${
                link.key === "systems" ? "max-sm:hidden" : ""
              }`}
            >
              {t(nav[link.key])}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            className="h-11 min-w-11 px-2 font-mono text-[11px] tracking-wider text-stone transition-colors duration-150 hover:text-paper"
            aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <button
            type="button"
            onClick={() => setTerminalOpen(true)}
            className="hidden h-11 items-center gap-2 px-2 font-mono text-[11px] text-stone transition-colors duration-150 hover:text-paper sm:flex"
            aria-label="Open terminal"
          >
            <kbd className="rounded-sm border border-hair px-1.5 py-0.5 text-[10px] text-dim">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
