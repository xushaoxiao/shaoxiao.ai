"use client";

import { translate, type Locale } from "@/content/i18n";

import { LanguageSwitch } from "./LanguageSwitch";

import { useEffect, useState } from "react";

export function Header({ locale }: { locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <a className="brand" href="#home">
        SHAOXIAO<span className="brand-dot">.</span>
      </a>
      <nav aria-label={t("主导航")}>
        <a href="#content">{t("洞察")}</a>
        <a href="#ideas">{t("构建")}</a>
        <a href="#about">{t("关于我")}</a>
        <a href="#connect">{t("连接")}</a>
      </nav>
      <div className="nav-actions">
        <LanguageSwitch locale={locale} />
        <a
          className="nav-connect"
          href="https://x.com/Shaoxiao_ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("关注 Shaoxiao")}
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}
