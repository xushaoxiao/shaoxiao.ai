import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { BuildLab } from "@/components/BuildLab";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Insights />
        <BuildLab />
        <About />
        <Philosophy />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
