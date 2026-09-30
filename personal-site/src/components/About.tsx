export function About() {
  return (
    <section className="about wrap section" id="about">
      <div className="section-label">03 / THE BUILDER</div>
      <div className="about-grid">
        <h2>
          工程师的底色。
          <br />
          <span>增长实践者的视野。</span>
        </h2>
        <div>
          <p className="large-copy">
            从分布式系统与 AI
            基础设施出发，我逐渐把注意力放到一个更直接的问题：技术，怎样真正推动业务增长？
          </p>
          <p>
            做过 Tesla 的数据与算法平台，带过钛动科技的 AI
            营销工程团队，如今负责 Fintech
            用户增长。我习惯把产品、工程和营销放在一起思考，让能力贯穿从获客到价值实现的完整链路。
          </p>
          <p>
            我也在持续实践 AI Coding、Agents
            与内容创作。这里是我的个人坐标：记录做过的事，分享正在形成的判断，也连接下一次合作。
          </p>
          <a
            className="inline-link"
            href="https://www.linkedin.com/in/shaoxiaoxu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            在 LinkedIn 查看完整经历 ↗
          </a>
        </div>
      </div>
      <div className="journey">
        <div>
          <span>ENGINEERING</span>
          <h3>Moore Threads</h3>
          <p>分布式系统 · 工程基础设施</p>
        </div>
        <div>
          <span>DATA &amp; SYSTEMS</span>
          <h3>Tesla</h3>
          <p>数据管道 · 算法平台 · Bazel</p>
        </div>
        <div>
          <span>AI × MARKETING</span>
          <h3>Tec-Do</h3>
          <p>AI 创意 · 营销工程 · 团队建设</p>
        </div>
        <div>
          <span>GLOBAL GROWTH</span>
          <h3>Fintech</h3>
          <p>用户增长 · 全链路实验</p>
        </div>
      </div>
    </section>
  );
}
