"use client";

import type { Locale } from "@/content/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const target = locale === "zh" ? "/en/" : "/";
  return (
    <a
      className="language-switch"
      href={target}
      hrefLang={locale === "zh" ? "en" : "zh-CN"}
      lang={locale === "zh" ? "en" : "zh-CN"}
      aria-label={locale === "zh" ? "Switch to English" : "切换为中文"}
      onClick={(event) => {
        event.currentTarget.href = target + window.location.hash;
      }}
    >
      {locale === "zh" ? "EN" : "中文"}
    </a>
  );
}
