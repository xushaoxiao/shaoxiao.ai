import { translate, type Locale } from "@/content/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { BuildLab } from "@/components/BuildLab";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export function SitePage({ locale }: { locale: Locale }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {translate(locale, "跳到主要内容")}
      </a>
      <Header locale={locale} />
      <main id="main-content">
        <Hero locale={locale} />
        <Insights locale={locale} />
        <BuildLab locale={locale} />
        <About locale={locale} />
        <Philosophy locale={locale} />
        <Connect locale={locale} />
      </main>
      <Footer />
    </>
  );
}
