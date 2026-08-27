import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Bi, Lang } from "@/lib/content";

type SiteContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (entry: Bi) => string;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

const STORAGE_KEY = "sx-lang";

function readLang(): Lang {
  if (typeof window === "undefined") return "zh";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;
  return "zh";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    setLangState(readLang());
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "zh" ? "en" : "zh");
  }, [lang, setLang]);

  const t = useCallback((entry: Bi) => entry[lang], [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      terminalOpen,
      setTerminalOpen,
    }),
    [lang, setLang, toggleLang, t, terminalOpen],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
