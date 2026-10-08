import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://engineering-field-notes.shaoxiaoxu.chatgpt.site",
  ),
  title: "Shaoxiao Xu · Engineering, Marketing & Global Growth",
  description:
    "Independent work and thinking by Shaoxiao Xu. AI engineering, marketing and global growth, through product detail and practical experiments.",
  alternates: {
    canonical: "/en/",
    languages: {
      "zh-CN": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Shaoxiao Xu · Engineering, Marketing & Global Growth",
    description:
      "Independent work and thinking by Shaoxiao Xu. AI engineering, marketing and global growth, through product detail and practical experiments.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
