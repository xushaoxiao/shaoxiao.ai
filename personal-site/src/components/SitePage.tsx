import type { Locale } from "@/content/i18n";
import { EditorialHeader, EditorialFooter } from "./EditorialHeader";

export function SitePage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const t = (zh: string, english: string) => en ? english : zh;
  const note = en ? "/en/notes/keychron/" : "/notes/keychron/";
  return <>
    <a className="skip-link" href="#main-content">{t("跳到主要内容", "Skip to content")}</a>
    <EditorialHeader locale={locale} />
    <main id="main-content">
      <section className="intro page-width" id="home">
        <div className="intro-meta"><span>INDEPENDENT PERSPECTIVE / 01</span><span>{t("上海，中国", "Shanghai, China")}</span></div>
        <div className="intro-grid">
          <div className="intro-main"><p className="eyebrow">ENGINEER · BUILDER · EXPLORER</p><h1>Shaoxiao<br /><em>Xu<span>.</span></em></h1>
            <p className="intro-description">{t("AI 工程、营销与全球增长。", "AI engineering, marketing & global growth.")}<br />{t("我在它们的交汇处构建与写作。", "I build and write at their intersection.")}</p>
            <div className="intro-actions"><a className="button" href="#work">{t("查看代表作品", "Explore selected work")}</a><a className="text-link" href="#about">{t("认识我", "About me")}</a></div>
          </div>
          <a className="cover-note" href={note}>
            <div className="cover-meta"><span>PRODUCT NOTES / 001</span><span>OCT 2026</span></div>
            <div className="cover-image"><img src="/notes/card-2.png" width="1080" height="1080" alt={t("Keychron Q1 HE 键盘结构的原创分层示意图", "Original layer diagram of the Keychron Q1 HE keyboard")} /></div>
            <div className="cover-caption"><span className="eyebrow">{t("来自中国的产品，拆到细节。", "Products from China. A closer look.")}</span><h2>{t("一把键盘，六个工程选择。", "One keyboard. Six engineering choices.")}</h2><p>{t("Keychron Q1 HE · 结构、输入与配置", "Keychron Q1 HE · Structure, input & configuration")}</p></div>
          </a>
        </div>
        <div className="intro-bottom"><span>AI ENGINEERING × AI MARKETING</span><span>GLOBAL GROWTH × ENTREPRENEURSHIP</span><a href="#work">{t("继续阅读", "Continue reading")}</a></div>
      </section>
      <section className="section page-width" id="work">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>{t("让作品说话。", "Work, in detail.")}</h2></div><p>{t("从产品细节，到业务链路。", "From product details to business journeys.")}</p></div>
        <a className="work-feature" href={note}><div className="work-feature-text"><span className="eyebrow">PRODUCT RESEARCH</span><h3>Keychron<br />Q1 HE<span>.</span></h3><p>{t("可定制的到底是什么？沿着结构、触发行为、连接方式和配置体验，拆解六个设计选择。", "What are you actually customizing? Six choices across construction, trigger behavior, connectivity and configuration.")}</p><span className="work-status">{t("资料研究 · 原创图解 · 概念动画", "Desk research · Original diagrams · Concept animation")}</span><span className="work-link">{t("阅读完整拆解", "Read the breakdown")}</span></div><div className="work-feature-image"><img src="/notes/card-3.png" width="1080" height="1080" loading="lazy" alt={t("0.2 至 3.8 毫米可调触发深度示意", "Diagram of the published 0.2–3.8 mm actuation range")} /></div></a>
        <a className="practice-note" href="https://www.linkedin.com/feed/update/urn:li:activity:7493147145722814465/" target="_blank" rel="noopener noreferrer">
          <div className="practice-copy"><span className="eyebrow">GROWTH ENGINEERING / PRACTICE NOTE</span><h3>{t("把产品能力，放到增长漏斗的前端。", "Bring product value into the first interaction.")}</h3><p>{t("在交互式广告里引入产品计算能力，让用户先理解价值，再进入注册链路。工程与营销，可以从同一个用户问题出发。", "An interactive ad can introduce a product calculation before sign-up. Engineering and marketing can start with the same question: what does the user need to understand?")}</p><span className="text-link">{t("阅读 LinkedIn 公开实践", "Read the public note on LinkedIn")}</span></div>
          <div className="value-flow" aria-label={t("用户意图、产品计算、价值理解与注册的概念流程", "Conceptual journey from user intent to product calculation, value and sign-up")}><span className="eyebrow">THE VALUE JOURNEY</span><ol><li><span>01</span>{t("用户意图", "User intent")}</li><li><span>02</span>{t("产品计算", "Product calculation")}</li><li><span>03</span>{t("理解价值", "Understand the value")}</li><li><span>04</span>{t("进入注册", "Start sign-up")}</li></ol><small>{t("流程示意 · 不包含业务数据", "Conceptual flow · No business data")}</small></div>
        </a>
      </section>
      <section className="section page-width" id="writing">
        <div className="section-heading"><div><span className="eyebrow">02 / WRITING & OBSERVATIONS</span><h2>{t("细节里，有判断。", "A closer look.")}</h2></div><p>{t("写工程取舍，也写技术如何走进市场。", "Engineering decisions, and how technology meets a market.")}</p></div>
        <div className="writing-list">
          <a href={note}><span className="writing-category">PRODUCT NOTES / 001</span><div><h3>{t("Keychron Q1 HE：定制键盘的六个工程选择", "Keychron Q1 HE: six engineering choices")}</h3><p>{t("从结构到软件，理解可调参数背后的取舍。附原创图解与触发动画。", "From construction to software: the trade-offs behind adjustable settings. With diagrams and an actuation animation.")}</p></div><span className="writing-destination">{t("站内文章", "Essay")}</span></a>
          <a href="https://x.com/Shaoxiao_ai/status/2104565800183157117" target="_blank" rel="noopener noreferrer"><span className="writing-category">MARKET OBSERVATION</span><div><h3>{t("TikTok Shop 与 AppLovin：从渠道数据看出海", "TikTok Shop & AppLovin: reading market signals")}</h3><p>{t("美国电商与移动投放的观察，以及它们提出的新问题。", "Observations on US commerce and mobile advertising, and the questions they raise.")}</p></div><span className="writing-destination">X</span></a>
          <a href="https://www.youtube.com/shorts/NGxp-V5ISsM" target="_blank" rel="noopener noreferrer"><span className="writing-category">CREATIVE EXPERIMENT</span><div><h3>{t("跨语言沟通，翻译之外的那一层", "Cross-language communication, beyond translation")}</h3><p>{t("一段关于出海卖家与达人邀约的幽默短片。", "A short, humorous take on global sellers pitching creators.")}</p></div><span className="writing-destination">YouTube</span></a>
        </div>
      </section>
      <section className="now-section" id="now"><div className="page-width now-grid"><div><span className="eyebrow">03 / NOW</span><h2>{t("持续构建，持续修正。", "Building. Learning. Revising.")}</h2><p className="now-date">{t("更新于 2026 年 10 月 9 日", "Updated 9 October 2026")}</p></div><div className="now-notes"><div><span>01</span><p>{t("探索 AI Agents 如何进入真实工作流：上下文、工具编排、验证与交付。", "Exploring AI agents in real workflows: context, tool orchestration, evaluation and delivery.")}</p></div><div><span>02</span><p>{t("从产品细节观察中国供应链，建立英文产品拆解系列。", "Studying products from China through engineering detail, and developing an English product-notes series.")}</p></div><div><span>03</span><p>{t("连接工程、内容与全球增长，记录个人项目的实验和判断。", "Connecting engineering, content and global growth through independent experiments and field notes.")}</p></div></div></div></section>
      <section className="section page-width" id="about"><div className="about-layout"><div><span className="eyebrow">04 / ABOUT SHAOXIAO</span><h2>{t("工程是起点。", "Engineering is my starting point.")}<br /><em>{t("视野继续向外。", "The perspective keeps expanding.")}</em></h2></div><div className="about-prose"><p className="lead">{t("我是 Shaoxiao Xu，常驻上海的 AI 工程师。目前从事 FinTech 用户增长运营，独立探索 AI 营销、全球增长与创业。", "I’m Shaoxiao Xu, an AI engineer based in Shanghai. I work in fintech user growth and independently explore AI marketing, global growth and entrepreneurship.")}</p><p>{t("曾在 Tesla、Tec-Do、摩尔线程和挖财从事技术工作，经历覆盖软件工程、数据工程、AI 工程与基础设施。现在，我更关注这些能力如何进入产品、业务流程和用户体验。", "My background spans software, data, AI engineering and infrastructure, with technical roles at Tesla, Tec-Do, Moore Threads and Wacai. I’m interested in how these capabilities translate into products, business workflows and user experiences.")}</p><p>{t("这里记录我的个人作品与思考。对具体问题保持好奇，用实践形成判断。", "This is a home for my independent work and thinking. I stay curious about specific problems and let practice shape my judgment.")}</p><a className="text-link" href="https://www.linkedin.com/in/shaoxiaoxu/" target="_blank" rel="noopener noreferrer">{t("查看完整职业经历", "Explore my professional background")}</a></div></div><div className="experience-strip"><span>{t("技术经历", "TECHNICAL BACKGROUND")}</span><p>Tesla <span>/</span> Tec-Do <span>/</span> Moore Threads <span>/</span> Wacai</p></div></section>
      <section className="contact-section page-width" id="connect"><div><span className="eyebrow">LET’S EXCHANGE IDEAS</span><h2>{t("从一个具体问题，开始交流。", "Start with a specific question.")}</h2><p>{t("AI 系统、增长工程、产品拆解，或下一次全球市场实验。", "AI systems, growth engineering, product detail, or the next global-market experiment.")}</p></div><a className="button" href="https://www.linkedin.com/in/shaoxiaoxu/" target="_blank" rel="noopener noreferrer">{t("在 LinkedIn 交流", "Connect on LinkedIn")}</a><div className="social-row"><a href="https://x.com/Shaoxiao_ai" target="_blank" rel="noopener noreferrer">X / @Shaoxiao_ai</a><a href="https://www.youtube.com/@shaoxiaoxu" target="_blank" rel="noopener noreferrer">YouTube / @shaoxiaoxu</a><a href="https://mp.weixin.qq.com/s/bYdvX2u58-IqdbLYNoryxw" target="_blank" rel="noopener noreferrer">{t("智跃出海 · 独立中文品牌", "LEAP.SH · Separate Chinese-language brand")}</a></div></section>
    </main>
    <EditorialFooter locale={locale} />
  </>;
}
