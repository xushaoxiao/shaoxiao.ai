import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaoxiao · AI × 出海增长",
  description:
    "我是 Shaoxiao，AI 工程师，做增长。AI Agents、AI Infra、Growth Marketing。用 AI 做增长，用数据看出海。",
  openGraph: {
    title: "Shaoxiao · AI × 出海增长",
    description:
      "用 AI 做增长，用数据看出海。工程、增长与全球视角，在这里相遇。",
    type: "website",
    locale: "zh_CN",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
