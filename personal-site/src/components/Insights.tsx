export function Insights() {
  return (
    <section className="content wrap section" id="content">
      <div className="section-label">01 / SIGNALS &amp; INSIGHTS</div>
      <div className="section-head">
        <h2>
          <span className="section-title">INSIGHTS.</span>{" "}
          <span className="section-title-sub">从现场，形成判断。</span>
        </h2>
        <p>
          真实发布的内容。
          <br />
          技术实践、增长观察，也有一点幽默。
        </p>
      </div>
      <div className="content-grid">
        <a
          className="feature-story"
          href="https://www.linkedin.com/feed/update/urn:li:activity:7493147145722814465/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="story-top">
            <span>LINKEDIN / GROWTH ENGINEERING</span>
            <span>↗</span>
          </div>
          <div className="feature-type">
            <span className="feature-small">THE GROWTH ENGINEERING NOTE</span>
            PRODUCT
            <br />
            <em>×</em> GROWTH<span className="feature-number">01</span>
          </div>
          <div>
            <h3>当后端能力，走到增长漏斗的最前端。</h3>
            <p>
              我分享了 Fintech
              增长工程的实践：把核心产品计算能力融入交互式广告，连接用户意图、价值预估与后续注册体验。
            </p>
            <span className="read-link">阅读原文 ↗</span>
          </div>
        </a>
        <div className="side-stories">
          <a
            className="story"
            href="https://x.com/Shaoxiao_ai/status/2104565800183157117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="story-label">X / MARKET SIGNALS</span>
            <h3>
              TikTok Shop 与 AppLovin：
              <br />
              从渠道数据看出海。
            </h3>
            <p>关于美国电商和移动投放的观察，分享在我的 X 动态里。</p>
            <span className="read-link">查看动态 ↗</span>
          </a>
          <a
            className="story"
            href="https://www.youtube.com/shorts/NGxp-V5ISsM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="story-label">YOUTUBE / CREATIVE EXPERIMENT</span>
            <h3>
              当出海卖家用 Google Translate
              <br />
              写达人邀约……
            </h3>
            <p>用 Shorts 和一点幽默，呈现跨语言沟通里的真实尴尬。</p>
            <span className="read-link">观看 Shorts ↗</span>
          </a>
        </div>
      </div>
      <div className="editorial-note">
        <span>ON MY RADAR</span>
        <p>AI 工程 · 用户增长 · 全球营销 · 创意实验</p>
        <a
          href="https://x.com/Shaoxiao_ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          跟随我的实时观察 ↗
        </a>
      </div>
    </section>
  );
}
