import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://engineering-field-notes.shaoxiaoxu.chatgpt.site",
  ),
  title: "Shaoxiao Xu · AI 工程、营销与全球增长",
  description:
    "Shaoxiao Xu 的个人作品与思考。AI 工程、AI 营销、全球增长与创业，记录产品拆解与实践中的工程取舍。",
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Shaoxiao Xu · AI 工程、营销与全球增长",
    description:
      "Shaoxiao Xu 的个人作品与思考。AI 工程、AI 营销、全球增长与创业，记录产品拆解与实践中的工程取舍。",
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
