import { EyeBot } from "./EyeBot";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="home">
      <Image
        className="hero-art"
        src="/assets/frontier-hero.jpg"
        alt="地球夜间弧线与向远方飞行的银色飞船，象征探索下一种增长"
        priority
        width={1792}
        height={1024}
      />
      <div className="hero-shade"></div>
      <div className="hero-content">
        <a className="manifesto-pill" href="#belief">
          <i className="dot"></i> SHAOXIAO / THE NEXT CHAPTER <span>→</span>
        </a>
        <p className="hero-overline">AI ENGINEER. GLOBAL GROWTH BUILDER.</p>
        <div className="hero-title">
          <h1>
            用 AI，
            <br />
            <span>构建增长。</span>
          </h1>
          <EyeBot />
        </div>
        <p className="hero-copy">
          连接工程、产品与营销，
          <br />
          探索全球市场的增长机会。
        </p>
        <a className="button hero-button" href="#content">
          探索我的洞察 <span>→</span>
        </a>
        <a className="hero-secondary" href="#about">
          从工程，到增长。认识我 ↗
        </a>
      </div>
      <div className="hero-foot">
        <span>SHANGHAI → GLOBAL</span>
        <a href="#content">SCROLL TO EXPLORE ↓</a>
        <span>AI AGENTS / AI INFRA / GROWTH</span>
      </div>
    </section>
  );
}
