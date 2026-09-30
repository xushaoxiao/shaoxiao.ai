import { socialPlatforms } from "@/content/social";

export function Connect() {
  return (
    <section className="connect wrap section" id="connect">
      <div className="section-label">04 / FIND ME ELSEWHERE</div>
      <div className="section-head">
        <h2>
          <span className="section-title">STAY CONNECTED.</span>
          <br />
          <span className="section-title-sub">下一个想法，从连接开始。</span>
        </h2>
        <p>
          茫茫人海，三生有幸。
          <br />
          感谢关注。
        </p>
      </div>
      <div className="platforms">
        {socialPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="platform-icon">{platform.icon}</span>
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
            <span className="platform-handle">
              {platform.handle} <b>↗</b>
            </span>
          </a>
        ))}
      </div>
      <div className="connect-callout">
        <p>聊聊 AI 系统、增长工程，或下一次出海实验。</p>
        <a
          className="button"
          href="https://www.linkedin.com/in/shaoxiaoxu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          在 LinkedIn 建立连接 ↗
        </a>
      </div>
    </section>
  );
}
