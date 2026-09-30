import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://engineering-field-notes.shaoxiaoxu.chatgpt.site",
  ),
  title: "Shaoxiao · AI × Global Growth",
  description:
    "AI engineer and global growth builder. Connecting engineering, product and marketing to build growth with AI.",
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Shaoxiao · AI × Global Growth",
    description:
      "AI engineer and global growth builder. Connecting engineering, product and marketing to build growth with AI.",
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
