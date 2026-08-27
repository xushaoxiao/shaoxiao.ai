import { status } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function StatusBar() {
  const { lang, t, setTerminalOpen } = useSite();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-void/90 backdrop-blur-sm">
      <div className="mx-auto flex h-9 max-w-6xl items-center gap-3 overflow-hidden px-4 font-mono text-[10px] tracking-wide text-stone sm:px-6">
        <span className="flex items-center gap-2 text-paper">
          <span className="pulse-live size-1.5 rounded-full bg-sage" />
          {status.host}
        </span>
        <span className="hidden text-dim sm:inline">│</span>
        <span className="hidden sm:inline">{lang === "zh" ? "zh_CN" : "en_US"}</span>
        <span className="hidden text-dim md:inline">│</span>
        <span className="hidden text-sage-dim md:inline">{status.gpu}</span>
        <span className="ml-auto">
          <button
            type="button"
            onClick={() => setTerminalOpen(true)}
            className="h-9 text-stone transition-colors duration-150 hover:text-paper"
          >
            <span className="hidden sm:inline">{t(status.hint)}</span>
            <span className="sm:hidden">{t(status.hintMobile)}</span>
          </button>
        </span>
      </div>
    </footer>
  );
}
