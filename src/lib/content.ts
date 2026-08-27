export type Lang = "en" | "zh";

export type Bi = { en: string; zh: string };

export const APP_NAME = "Shaoxiao Xu";
export const APP_NAME_ZH = "徐绍校";

export function tx(lang: Lang, entry: Bi): string {
  return entry[lang];
}

export const meta = {
  title: {
    en: "Shaoxiao Xu — AI Engineering Leader",
    zh: "徐绍校 — AI 工程化负责人",
  },
  description: {
    en: "AI engineering leader at Tec-Do. Nine years in distributed systems and AI infra — Tesla, Moore Threads, GPU clusters, and agentic systems for global commerce.",
    zh: "钛动科技 AI 工程化负责人。九年分布式系统与 AI Infra：特斯拉、摩尔线程、GPU 集群，以及面向出海商业的 Agentic 系统。",
  },
};

export const nav = {
  identity: { en: "identity", zh: "identity" },
  log: { en: "log", zh: "log" },
  stack: { en: "stack", zh: "stack" },
  systems: { en: "systems", zh: "systems" },
  contact: { en: "contact", zh: "contact" },
} as const;

export const hero = {
  kicker: { en: "MANIFEST / 0x01", zh: "MANIFEST / 0x01" },
  name: { en: "Shaoxiao Xu", zh: "徐绍校" },
  nameAlt: { en: "徐绍校", zh: "Shaoxiao Xu" },
  role: { en: "AI Engineering Leader", zh: "AI 工程化负责人" },
  headline: {
    en: "Build the model into a system.",
    zh: "把模型建成系统。",
  },
  lede: {
    en: "I lead AI engineering at Tec-Do — turning frontier models into production systems for global commerce. Nine years of distributed systems, GPU infra, and the unglamorous work of making intelligence ship.",
    zh: "钛动科技 AI 工程化负责人。把前沿模型做成可上线的系统，服务出海商业。九年分布式系统与 GPU Infra，做的是让智能真正交付的那一层。",
  },
  prompt: "whoami",
  promptOut: "shaoxiao  ·  ai-engineering-leader  ·  apac",
};

export const titleBlock = {
  loc: { en: "SHANGHAI", zh: "上海" },
  coord: "31.23°N  121.47°E",
  org: { en: "TEC-DO", zh: "钛动科技" },
  since: "2024—",
  drawing: { en: "DWG  SX-01", zh: "DWG  SX-01" },
  rev: { en: "REV  9.4", zh: "REV  9.4" },
};

export const signals: { value: string; label: Bi }[] = [
  { value: "09+", label: { en: "years in distributed systems", zh: "年分布式系统研发" } },
  { value: "02", label: { en: "years leading AI teams", zh: "年 AI 团队管理" } },
  { value: "100", label: { en: "GPU cluster · A10/A100/L20/H20", zh: "卡 GPU 集群 · A10/A100/L20/H20" } },
  { value: "$200M+", label: { en: "quarterly ad spend enabled", zh: "单季客户广告消耗赋能" } },
];

export const identity = {
  index: "01",
  title: { en: "Now", zh: "此刻" },
  manpage: { en: "shaoxiao(1)", zh: "shaoxiao(1)" },
  body: {
    en: "At Tec-Do I own AI engineering for MarTech: architecture, cluster planning, engineering standards, and a team of 3–6. In three months we shipped a full-stack AIGC creative system. In six, we turned scattered model calls into an internal AI capability platform.",
    zh: "在钛动负责 MarTech 的 AI 工程：架构、集群规划、工程规范，以及 3–6 人的团队。三个月内把 AIGC 创意方案全链路落地；六个月完成公司 AI 能力中台化。",
  },
  body2: {
    en: "The work sits between two rooms I know well — in-house growth pressure and vendor-grade delivery. Ecommerce, games, and apps going global. Models are the easy part. The system around them is the product.",
    zh: "工作落在两间我都待过的房间之间：甲方的增长压力，与乙方的交付标准。电商、游戏、泛应用三条出海赛道。模型是容易的部分，模型周围的系统才是产品。",
  },
  more: {
    en: "Notes",
    zh: "更多",
  },
  wiki: "https://my.feishu.cn/wiki/L9uwwciogiizXbkqVT8cl25On9g",
};

export type Role = {
  id: string;
  ref: string;
  head?: boolean;
  period: Bi;
  title: Bi;
  company: Bi;
  location: Bi;
  summary: Bi;
  bullets: Bi[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: "tec-do",
    ref: "HEAD",
    head: true,
    period: { en: "Aug 2024 — Present", zh: "2024.08 — 至今" },
    title: { en: "AI Engineering Leader", zh: "AI 工程化负责人" },
    company: { en: "Tec-Do", zh: "钛动科技" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "Own AI engineering for the MarTech org. Platform, AIGC, and agentic systems that sit in the ad-creative loop — not a side chatbot.",
      zh: "全面负责 MarTech 的 AI 工程。平台、AIGC 与 Agent 系统嵌在广告创意闭环里，而不是旁边的聊天窗口。",
    },
    bullets: [
      {
        en: "Built the LLM / multimodal platform: content understanding, creative scripts, material analysis. Served ecommerce, games, and apps — average quarterly customer ad spend above $200M.",
        zh: "构建 LLM 与多模态能力平台：内容理解、创意脚本、素材分析。服务电商、游戏、应用，平均单季客户广告消耗超过 $200M。",
      },
      {
        en: "Integrated GPT, Gemini, Qwen, DeepSeek into data and business systems — cleaning, industry tagging, creator marketing, live commerce, internal chatbot.",
        zh: "将 GPT、Gemini、Qwen、DeepSeek 接入数据与业务系统：清洗、行业打标、达人营销、网红直播、内部 Chatbot。",
      },
      {
        en: "Shipped Tec-Creative: external models (GPT, Gemini, Keling, Topview) plus in-house ComfyUI and RayServe + vLLM for fine-tunes and video remix.",
        zh: "落地 Tec-Creative：接入 GPT / Gemini / 可灵 / Topview，自研 ComfyUI 与 RayServe + vLLM 承载微调与视频混剪。",
      },
      {
        en: "Led LangGraph / LangChain / LlamaIndex agents across creative analysis, market insight, and adversarial attribution.",
        zh: "主导 LangGraph / LangChain / LlamaIndex 在创意分析、市场洞察、对抗归因上的 Agent 工程。",
      },
    ],
    stack: [
      "LangGraph",
      "vLLM",
      "Ray",
      "ComfyUI",
      "K8s",
      "Qwen",
      "DeepSeek",
      "Gemini",
    ],
  },
  {
    id: "tesla",
    ref: "tesla",
    period: { en: "Mar 2022 — May 2024", zh: "2022.03 — 2024.05" },
    title: { en: "Software Engineer", zh: "Software Engineer" },
    company: { en: "Tesla (Shanghai)", zh: "特斯拉（上海）" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "Data & algorithm engineering for APAC. PB-scale lakehouse for manufacturing and business, plus the software around factory, sales, and service models.",
      zh: "APAC 数据与算法工程。面向制造与业务的 PB 级数据湖仓，以及工厂、销售、客服模型周围的软件系统。",
    },
    bullets: [
      {
        en: "0–1 backend for the smart charging data platform: ETL, reporting, regulatory feeds, site planning. Solo on selection, delivery, ARB / SRB, and internal IT.",
        zh: "智能充电数据平台后端 0–1：ETL、报表、监管报送、站点规划。独立完成选型、交付、ARB / SRB 与内部 IT 申请。",
      },
      {
        en: "Vehicle parts genealogy — full lifecycle trace from factory stations to aftersales replacements. Neo4j + gRPC. Shop-floor engineers and service techs both query it.",
        zh: "整车零部件追溯：从工位到售后替换件的全生命周期。Neo4j + gRPC。车间与售后都在用。",
      },
      {
        en: "Factory intelligence: IOT, cameras, and third-party systems into models for automated quality inspection and yield stats.",
        zh: "工厂智能制造：IOT、摄像头与三方系统入模，做自动化质检与合格率统计。",
      },
      {
        en: "MLOps on Kubeflow — compliance hardening, pipelines, training-operator, Label Studio.",
        zh: "基于 Kubeflow 的 MLOps：合规改造，维护 pipelines、training-operator、Label Studio。",
      },
    ],
    stack: [
      "Bazel",
      "gRPC",
      "Protobuf",
      "Postgres",
      "Neo4j",
      "Kafka",
      "Kubeflow",
      "Next.js",
    ],
  },
  {
    id: "moore",
    ref: "moore-threads",
    period: { en: "Apr 2021 — Mar 2022", zh: "2021.04 — 2022.03" },
    title: { en: "Senior Software Engineer", zh: "Senior Software Engineer" },
    company: { en: "Moore Threads", zh: "摩尔线程" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "Stood up Dev & Infra backend. Designed GPU infra services and the process from design through deploy.",
      zh: "组建 Dev & Infra 后端。主导 GPU Infra 服务架构，以及从设计到部署的全链路规范。",
    },
    bullets: [
      {
        en: "0–1 automated test system for GPU chips, architecture to pre-silicon, on Kubernetes.",
        zh: "从 0 到 1 构建 GPU 芯片（架构设计到流片前）自动化测试系统，跑在 Kubernetes 上。",
      },
      {
        en: "In ten months the platform carried 苏堤 and 春晓 from architecture through successful tape-out, collecting performance traces at every gate.",
        zh: "十个月内支撑「苏堤」「春晓」两颗芯片从架构到成功流片，各环节性能与评测自动采集。",
      },
    ],
    stack: ["Kubernetes", "GPU Infra", "CI", "Go", "Python"],
  },
  {
    id: "wacai",
    ref: "wacai",
    period: { en: "Aug 2019 — Mar 2021", zh: "2019.08 — 2021.03" },
    title: { en: "Senior Backend Engineer", zh: "资深后端工程师" },
    company: { en: "Wacai", zh: "挖财" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "AMD platform. Post-loan asset disposal — automation, case routing, monitoring, periodic inventory. Dubbo + Kubernetes CI/CD.",
      zh: "AMD 平台。贷后资产处置：自动化、案件分发、监控、周期盘点。Dubbo + Kubernetes CI/CD。",
    },
    bullets: [
      {
        en: "Designed the automated asset-disposal platform and the RPC / HTTP surface around it.",
        zh: "主导资产部门自动化辅助服务，落地自动化资产处置平台。",
      },
    ],
    stack: ["Dubbo", "Kubernetes", "Java", "RPC"],
  },
  {
    id: "quicktron",
    ref: "quicktron",
    period: { en: "Oct 2018 — Aug 2019", zh: "2018.10 — 2019.08" },
    title: { en: "Backend Engineer", zh: "后端工程师" },
    company: { en: "Quicktron", zh: "快仓智能" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "Infrastructure group. Designed and shipped foundational services for warehouse robotics.",
      zh: "基础架构部门，负责基础架构服务的设计与研发。",
    },
    bullets: [],
    stack: ["Java", "Infra"],
  },
  {
    id: "borderx",
    ref: "borderx",
    period: { en: "Jun 2016 — Oct 2018", zh: "2016.06 — 2018.10" },
    title: { en: "Backend Engineer", zh: "后端工程师" },
    company: { en: "Borderx Lab", zh: "Borderx Lab" },
    location: { en: "Shanghai", zh: "上海" },
    summary: {
      en: "Cross-border commerce. Architecture for the Bieyang app through the 0 → 1M → 30M user climb.",
      zh: "跨境电商。别样 App 的架构、开发与维护。亲历注册用户 0 → 100 万，再在十个月内到 3000 万。",
    },
    bullets: [
      {
        en: "Lived the 0 → 1,000,000 user breakout, then 1M → 30M in ten months.",
        zh: "亲历产品注册用户从 0 到 100 万的初期突破，以及随后十个月 100 万到 3000 万的高速增长。",
      },
    ],
    stack: ["Backend", "Ecommerce"],
  },
];

export const logSection = {
  index: "02",
  title: { en: "Log", zh: "日志" },
  subtitle: {
    en: "git log --graph --oneline",
    zh: "git log --graph --oneline",
  },
};

export type StackLayer = {
  id: string;
  name: Bi;
  nodes: string[];
};

export const stackLayers: StackLayer[] = [
  {
    id: "agent",
    name: { en: "AGENT", zh: "AGENT" },
    nodes: ["LangGraph", "LangChain", "LlamaIndex", "RAG", "Context Eng"],
  },
  {
    id: "model",
    name: { en: "MODEL", zh: "MODEL" },
    nodes: ["GPT-4o", "Gemini", "Qwen", "DeepSeek", "LLaMA"],
  },
  {
    id: "serve",
    name: { en: "SERVE", zh: "SERVE" },
    nodes: ["vLLM", "Ray", "ComfyUI", "TensorRT-LLM", "Kubeflow"],
  },
  {
    id: "cluster",
    name: { en: "CLUSTER", zh: "CLUSTER" },
    nodes: ["K8s", "A100", "H20", "L20", "A10", "GitOps"],
  },
  {
    id: "data",
    name: { en: "DATA", zh: "DATA" },
    nodes: ["Kafka", "TiDB", "Postgres", "Neo4j", "Spark", "Airflow"],
  },
  {
    id: "lang",
    name: { en: "LANG", zh: "LANG" },
    nodes: ["Python", "Go", "Java", "TypeScript", "gRPC", "Bazel"],
  },
];

export const stackSection = {
  index: "03",
  title: { en: "Stack", zh: "栈" },
  subtitle: {
    en: "the rack, not the resume keywords",
    zh: "机柜，不是关键词云",
  },
};

export type System = {
  id: string;
  code: string;
  title: Bi;
  org: Bi;
  body: Bi;
};

export const systems: System[] = [
  {
    id: "aigc",
    code: "SX-AIGC",
    title: { en: "Tec-Creative", zh: "Tec-Creative" },
    org: { en: "Tec-Do · 2024", zh: "钛动 · 2024" },
    body: {
      en: "AIGC in the ad-creative loop. External models in, in-house ComfyUI and vLLM serving fine-tunes and video remix. Scripts, multimodal understanding, creative reports — shipped in three months, then folded into the platform.",
      zh: "把 AIGC 嵌进广告创意闭环。外部模型接入，内部 ComfyUI 与 vLLM 承载微调与视频混剪。脚本、多模态理解、创意报告。三个月落地，再收进中台。",
    },
  },
  {
    id: "charge",
    code: "TSLA-CHG",
    title: {
      en: "Smart charging data platform",
      zh: "智能充电数据平台",
    },
    org: { en: "Tesla · 2022", zh: "特斯拉 · 2022" },
    body: {
      en: "0–1 backend. Charging ETL, reports, government regulation, site planning. Bazel, gRPC, Postgres, Kafka, APISIX. Through ARB and SRB without a committee to hide behind.",
      zh: "后端 0–1。充电数据 ETL、报表、监管报送、站点规划。Bazel、gRPC、Postgres、Kafka、APISIX。独自过 ARB / SRB。",
    },
  },
  {
    id: "trace",
    code: "TSLA-BOM",
    title: { en: "Parts genealogy", zh: "整车零部件追溯" },
    org: { en: "Tesla · 2023", zh: "特斯拉 · 2023" },
    body: {
      en: "Every part on a Tesla in APAC, from station to replacement. Graph in Neo4j, services in gRPC / Spring. Factory engineers locate a workstation; aftersales pulls the as-built plus every swap.",
      zh: "APAC 每辆车上的每个零件，从工位到替换件。Neo4j 图，gRPC / Spring 服务。车间定位工位，售后拉出厂件与维修件。",
    },
  },
  {
    id: "silicon",
    code: "MUSA-ATE",
    title: { en: "Pre-silicon test cluster", zh: "流片前测试集群" },
    org: { en: "Moore Threads · 2021", zh: "摩尔线程 · 2021" },
    body: {
      en: "Kubernetes-backed simulation and test from architecture to tape-out. Carried 苏堤 and 春晓 in ten months, with performance traces at every gate.",
      zh: "架构到流片的 K8s 模拟与测试。十个月支撑苏堤、春晓，每个门禁都留下性能轨迹。",
    },
  },
];

export const systemsSection = {
  index: "04",
  title: { en: "Systems", zh: "系统" },
  subtitle: {
    en: "four machines worth naming",
    zh: "四台值得具名的机器",
  },
};

export const contact = {
  index: "05",
  title: { en: "Contact", zh: "联络" },
  subtitle: { en: "write, don't pitch", zh: "写信，不要推销" },
  email: "13554225105@163.com",
  phone: "+86 13554225105",
  phoneRaw: "13554225105",
  city: { en: "Shanghai, China", zh: "中国上海" },
  note: {
    en: "Best reached by email. I read slowly and reply.",
    zh: "邮件最合适。我读得慢，但会回。",
  },
};

export const education = {
  label: { en: "Education", zh: "教育" },
  value: {
    en: "Software Engineering, Wuhan Institute of Design and Sciences, 2013–2017",
    zh: "软件工程，武汉设计工程学院，2013–2017",
  },
};

export const status = {
  host: "shaoxiao@shanghai",
  gpu: "gpu:ready",
  hint: { en: "⌘K  terminal", zh: "⌘K  终端" },
  hintMobile: { en: "tap  终端", zh: "点此  终端" },
};

export const bootLines = [
  { key: "id", text: { en: "loading identity", zh: "加载身份" } },
  { key: "exp", text: { en: "mounting experience", zh: "挂载经历" } },
  { key: "gpu", text: { en: "gpu cluster", zh: "gpu 集群" } },
  { key: "ok", text: { en: "ready", zh: "就绪" } },
];

export const terminalHelp: Bi = {
  en: `commands
  whoami          identity
  neofetch        system sheet
  ls              sections
  cat <file>      now | log | stack | systems | contact
  goto <section>  scroll
  git log         experience
  lang zh|en      locale
  contact         copy email
  uptime          since 2016
  gpu             cluster
  clear           wipe
  exit            close

files
  now  log  stack  systems  contact`,
  zh: `commands
  whoami          身份
  neofetch        系统说明书
  ls              目录
  cat <file>      now | log | stack | systems | contact
  goto <section>  跳转
  git log         经历
  lang zh|en      语言
  contact         复制邮箱
  uptime          自 2016
  gpu             集群
  clear           清屏
  exit            关闭

files
  now  log  stack  systems  contact`,
};

export const colophon: Bi = {
  en: "Set in Instrument Serif and IBM Plex. A small kernel, not a portfolio template.",
  zh: "字体：Instrument Serif、IBM Plex。一台小内核，不是作品集模板。",
};
