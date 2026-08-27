import { useEffect, useState } from "react";
import { bootLines } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { Mark } from "@/components/site/mark";

const STORAGE_KEY = "sx-booted";

export function BootScreen() {
  const { t } = useSite();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
    if (navigator.webdriver) {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (step < bootLines.length) {
      const id = window.setTimeout(() => setStep((s) => s + 1), 280);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => {
      setFading(true);
      window.setTimeout(() => {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
        setVisible(false);
      }, 400);
    }, 420);
    return () => window.clearTimeout(id);
  }, [visible, step]);

  function skip() {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setFading(true);
    window.setTimeout(() => setVisible(false), 200);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex h-dvh w-dvw items-center justify-center bg-void transition-opacity duration-slow ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-label="boot"
      onClick={skip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Escape" || e.key === " ") skip();
      }}
      tabIndex={0}
    >
      <div className="w-[min(92vw,28rem)] px-6 font-mono text-xs text-stone">
        <div className="mb-8 flex items-center gap-3 text-paper">
          <Mark className="size-6" />
          <span className="tracking-wider">SHAOXIAO.SYS  9.4</span>
        </div>
        <ul className="space-y-2">
          {bootLines.map((line, i) => (
            <li
              key={line.key}
              className="flex items-center justify-between"
              style={{ opacity: i < step ? 1 : 0 }}
            >
              <span>{t(line.text)}</span>
              <span className="text-sage">
                {i < step ? (line.key === "gpu" ? "100  ok" : "ok") : ""}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[10px] tracking-widest text-dim uppercase">
          skip
        </p>
      </div>
    </div>
  );
}
