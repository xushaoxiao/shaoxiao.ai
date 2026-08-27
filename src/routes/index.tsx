import { createFileRoute } from "@tanstack/react-router";
import { BootScreen } from "@/components/site/boot-screen";
import { CommandTerminal } from "@/components/site/command-terminal";
import { Contact } from "@/components/site/contact";
import { ExperienceLog } from "@/components/site/experience-log";
import { Hero } from "@/components/site/hero";
import { Identity } from "@/components/site/identity";
import { SiteNav } from "@/components/site/site-nav";
import { StackRack } from "@/components/site/stack-rack";
import { StatusBar } from "@/components/site/status-bar";
import { Systems } from "@/components/site/systems";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-void pb-9 text-paper">
      <a
        href="#identity"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-void"
      >
        skip
      </a>
      <BootScreen />
      <SiteNav />
      <main>
        <Hero />
        <Identity />
        <ExperienceLog />
        <StackRack />
        <Systems />
        <Contact />
      </main>
      <StatusBar />
      <CommandTerminal />
    </div>
  );
}
