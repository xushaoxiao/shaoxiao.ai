import type { Metadata } from "next";
import { KeychronNote } from "@/components/KeychronNote";
export const metadata: Metadata = {
 title: "Keychron Q1 HE：六个工程选择 · Shaoxiao Xu",
 description: "从结构、触发行为、连接和配置拆解原版 Keychron Q1 HE。原创图解与概念动画，明确区分厂商规格和未测试的问题。",
 alternates: { canonical: "/notes/keychron/", languages: { "zh-CN": "/notes/keychron/", en: "/en/notes/keychron/" } },
 openGraph: { title: "Keychron Q1 HE：六个工程选择", description: "产品细节中的工程取舍。Shaoxiao Xu 的原创图解与概念动画。", type: "article", locale: "zh_CN" }
};
export default function Page() { return <KeychronNote locale="zh" />; }
