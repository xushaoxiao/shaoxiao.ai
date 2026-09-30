export type Locale = "zh" | "en";

const english: Record<string, string> = {
  文: "W",
  "用 AI，": "Build growth.",
  "构建增长。": "With AI.",
  "连接工程、产品与营销，": "Connecting engineering, product and marketing",
  "探索全球市场的增长机会。": "to explore growth opportunities worldwide.",
  探索我的洞察: "Explore my insights",
  "从工程，到增长。认识我 ↗": "From engineering to growth. Meet Shaoxiao ↗",
  "从现场，形成判断。": "Perspectives from practice.",
  "真实发布的内容。": "Notes from my work.",
  "技术实践、增长观察，也有一点幽默。":
    "Engineering, growth and a little humor.",
  "当后端能力，走到增长漏斗的最前端。":
    "Bringing product capabilities to the top of the growth funnel.",
  "我分享了 Fintech 增长工程的实践：把核心产品计算能力融入交互式广告，连接用户意图、价值预估与后续注册体验。":
    "A fintech growth engineering example: embedding core product calculations in interactive ads to connect user intent, estimated value and the sign-up journey.",
  "阅读原文 ↗": "Read the original ↗",
  "TikTok Shop 与 AppLovin：": "TikTok Shop and AppLovin:",
  "从渠道数据看出海。": "Reading global markets through channel data.",
  "关于美国电商和移动投放的观察，分享在我的 X 动态里。":
    "Observations on US commerce and mobile advertising, shared on X.",
  "查看动态 ↗": "View the post ↗",
  "当出海卖家用 Google Translate": "When global sellers use Google Translate",
  "写达人邀约……": "to pitch creators…",
  "用 Shorts 和一点幽默，呈现跨语言沟通里的真实尴尬。":
    "A short video about the very real awkwardness of reaching across languages.",
  "观看 Shorts ↗": "Watch the Short ↗",
  "AI 工程 · 用户增长 · 全球营销 · 创意实验":
    "AI engineering · User growth · Global marketing · Creative experiments",
  "跟随我的实时观察 ↗": "Follow my observations ↗",
  "把可能，变成能力。": "From possibility to capability.",
  "构建系统，也理解市场。": "Build systems. Understand markets.",
  "关注工具，更关注它如何进入业务。":
    "Focus on how technology becomes useful in a business.",
  "AI，进入工作流。": "AI in the workflow.",
  "AI Coding、Agents、知识库与工具编排。把一次对话，变成可以持续运行、迭代和交付的工程能力。":
    "AI coding, agents, knowledge bases and tool orchestration. Turn a conversation into engineering capability that can run, evolve and deliver.",
  "增长，连接产品能力。": "Growth connected to product value.",
  "从交互式广告到用户激活，缩短核心产品价值与用户之间的距离。让工程与营销围绕同一条漏斗协作。":
    "From interactive ads to activation, bring users closer to the value of the product. Align engineering and marketing around the same funnel.",
  "出海，从数据出发。": "Global growth starts with data.",
  "观察渠道变化、创意表达与本地语境。将市场数据转化成问题，再用实验检验判断。":
    "Watch channel shifts, creative expression and local context. Turn market data into questions, then test your assumptions through experiments.",
  "工程师的底色。": "An engineer at heart.",
  "增长实践者的视野。": "A growth builder in practice.",
  "从分布式系统与 AI 基础设施出发，我逐渐把注意力放到一个更直接的问题：技术，怎样真正推动业务增长？":
    "My work began in distributed systems and AI infrastructure. Over time, one question became central: how can technology actually drive business growth?",
  "做过 Tesla 的数据与算法平台，带过钛动科技的 AI 营销工程团队，如今负责 Fintech 用户增长。我习惯把产品、工程和营销放在一起思考，让能力贯穿从获客到价值实现的完整链路。":
    "I worked on data and algorithm platforms at Tesla, led AI marketing engineering at Tec-Do, and now focus on user growth in fintech. I bring product, engineering and marketing together across the journey from acquisition to realized value.",
  "我也在持续实践 AI Coding、Agents 与内容创作。这里是我的个人坐标：记录做过的事，分享正在形成的判断，也连接下一次合作。":
    "I keep experimenting with AI coding, agents and content creation. This is my personal home: a record of my work, a place for emerging perspectives and a starting point for the next collaboration.",
  "在 LinkedIn 查看完整经历 ↗": "Explore my background on LinkedIn ↗",
  "分布式系统 · 工程基础设施":
    "Distributed systems · Engineering infrastructure",
  "数据管道 · 算法平台 · Bazel": "Data pipelines · Algorithm platforms · Bazel",
  "AI 创意 · 营销工程 · 团队建设":
    "AI creative · Marketing engineering · Team leadership",
  "用户增长 · 全链路实验": "User growth · Full-funnel experimentation",
  "把技术的可能，": "Turn possibility",
  变成增长的: "into growth",
  "现实。": ".",
  "把产品、工程与营销连接起来。": "Connect product, engineering and marketing.",
  "让每一次实验，成为下一次判断的依据。":
    "Let each experiment inform the next decision.",
  "下一个想法，从连接开始。": "The next idea starts with a connection.",
  "茫茫人海，三生有幸。": "Glad our paths crossed.",
  "感谢关注。": "Thanks for being here.",
  "聊聊 AI 系统、增长工程，或下一次出海实验。":
    "Let’s talk AI systems, growth engineering or the next global experiment.",
  "在 LinkedIn 建立连接 ↗": "Connect on LinkedIn ↗",
  洞察: "Insights",
  构建: "Build",
  关于我: "About",
  连接: "Connect",
  "关注 Shaoxiao": "Follow Shaoxiao",
  主导航: "Main navigation",
  "认识 Shaoxiao": "Meet Shaoxiao",
  跳到主要内容: "Skip to main content",
  "地球夜间弧线与向远方飞行的银色飞船，象征探索下一种增长":
    "Earth at night and a silver spacecraft heading toward the horizon, representing exploration and growth.",
  职业经历与增长工程实践: "Career and growth engineering",
  "AI 动态与出海市场观察": "AI and global market observations",
  视频表达与创意实验: "Video stories and creative experiments",
  公众号: "WeChat",
  中文内容与文章阅读入口: "Chinese essays and articles",
  在微信中阅读: "Read on WeChat",
};

export function translate(locale: Locale, text: string): string {
  return locale === "en" ? (english[text] ?? text) : text;
}
