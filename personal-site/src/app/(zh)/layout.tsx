import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://engineering-field-notes.shaoxiaoxu.chatgpt.site",
  ),
  title: "Shaoxiao · AI × 出海增长",
  description:
    "我是 Shaoxiao，AI 工程师，做增长。AI Agents、AI Infra、Growth Marketing。用 AI 做增长，用数据看出海。",
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Shaoxiao · AI × 出海增长",
    description:
      "我是 Shaoxiao，AI 工程师，做增长。AI Agents、AI Infra、Growth Marketing。用 AI 做增长，用数据看出海。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
