import { translate, type Locale } from "@/content/i18n";
export function Philosophy({ locale }: { locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <section className="belief wrap" id="belief">
      <span className="section-label">A WORKING PHILOSOPHY</span>
      <blockquote>
        {t("把技术的可能，")}
        <br />
        {t("变成增长的")}
        <span>{t("现实。")}</span>
      </blockquote>
      <div className="belief-bottom">
        <p>
          {t("把产品、工程与营销连接起来。")}
          <br />
          {t("让每一次实验，成为下一次判断的依据。")}
        </p>
        <span>ANALYZE → IDEATE → TEST → LEARN</span>
      </div>
    </section>
  );
}
