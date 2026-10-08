import type { Locale } from "@/content/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

export function EditorialHeader({locale, article = false}: {locale: Locale; article?: boolean}) {
  const en = locale === "en";
  const home = en ? "/en/" : "/";
  return <header className="site-header page-width">
    <a className="wordmark" href={home} aria-label="Shaoxiao Xu">sx<span>.</span><span className="wordmark-name">SHAOXIAO XU</span></a>
    <nav aria-label={en ? "Main navigation" : "主导航"}>
      <a href={`${article ? home : ""}#work`}>{en ? "Work" : "作品"}</a>
      <a href={`${article ? home : ""}#writing`}>{en ? "Writing" : "写作"}</a>
      <a href={`${article ? home : ""}#about`}>{en ? "About" : "关于"}</a>
    </nav>
    {article ? <a className="language-switch" href={en ? "/notes/keychron/" : "/en/notes/keychron/"} hrefLang={en ? "zh-CN" : "en"} aria-label={en ? "切换为中文" : "Switch to English"}>{en ? "中文" : "EN"}</a> : <LanguageSwitch locale={locale} />}
  </header>;
}

export function EditorialFooter({locale}: {locale: Locale}) {
  return <footer className="site-footer page-width"><span>© 2026 Shaoxiao Xu</span><span>Engineering. Perspective. Practice.</span><a href="#main-content">{locale === "en" ? "Back to top" : "回到顶部"}</a></footer>;
}
