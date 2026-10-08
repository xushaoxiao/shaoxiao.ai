import type { Metadata } from "next";
import { KeychronNote } from "@/components/KeychronNote";
export const metadata: Metadata = {
 title: "Keychron Q1 HE: six engineering choices · Shaoxiao Xu",
 description: "A desk-researched breakdown of the original Keychron Q1 HE: construction, input behavior, connectivity and configuration. Original diagrams and concept animation.",
 alternates: { canonical: "/en/notes/keychron/", languages: { "zh-CN": "/notes/keychron/", en: "/en/notes/keychron/" } },
 openGraph: { title: "Keychron Q1 HE: six engineering choices", description: "Original diagrams and concept animation. A product note by Shaoxiao Xu.", type: "article", locale: "en_US" }
};
export default function Page() { return <KeychronNote locale="en" />; }
