import { useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  contact,
  hero,
  identity,
  roles,
  stackLayers,
  systems,
  terminalHelp,
  type Lang,
} from "@/lib/content";
import { useSite } from "@/lib/site-context";

type Line = { kind: "in" | "out" | "err"; text: string };

const FILES = ["now", "log", "stack", "systems", "contact"] as const;
const SECTIONS: Record<string, string> = {
  identity: "identity",
  now: "identity",
  log: "log",
  experience: "log",
  stack: "stack",
  systems: "systems",
  contact: "contact",
  top: "top",
};

function neofetch(lang: Lang): string {
  const info =
    lang === "zh"
      ? [
          "shaoxiao@shanghai",
          "-----------------",
          "OS:      AI Engineering",
          "Host:    钛动科技 / MarTech",
          "Kernel:  9.4-distributed",
          "Uptime:  9 years since 2016",
          "GPU:     A10/A100/L20/H20 × 100",
          "Shell:   langgraph",
          "Locale:  zh_CN",
          "Editor:  systems, not prompts",
        ]
      : [
          "shaoxiao@shanghai",
          "-----------------",
          "OS:      AI Engineering",
          "Host:    Tec-Do / MarTech",
          "Kernel:  9.4-distributed",
          "Uptime:  9 years since 2016",
          "GPU:     A10/A100/L20/H20 × 100",
          "Shell:   langgraph",
          "Locale:  en_US",
          "Editor:  systems, not prompts",
        ];
  return ["    ┌──────────┐", "    │  SX  徐  │", "    └──────────┘", "", ...info].join(
    "\n",
  );
}

function catFile(file: string, lang: Lang): string | null {
  if (file === "now" || file === "identity") {
    return [identity.body[lang], "", identity.body2[lang]].join("\n");
  }
  if (file === "log") {
    return roles
      .map(
        (r) =>
          `${r.head ? "*" : "o"}  ${r.period[lang]}  ${r.company[lang]}  ${r.title[lang]}`,
      )
      .join("\n");
  }
  if (file === "stack") {
    return stackLayers
      .map((l) => `${l.name.en.padEnd(8, " ")} ${l.nodes.join("  ")}`)
      .join("\n");
  }
  if (file === "systems") {
    return systems
      .map((s) => `${s.code}  ${s.title[lang]}\n    ${s.body[lang]}`)
      .join("\n\n");
  }
  if (file === "contact") {
    return `${contact.email}\n${contact.phone}\n${contact.city[lang]}`;
  }
  return null;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyEmail(): Promise<string> {
  try {
    await navigator.clipboard.writeText(contact.email);
    return `copied  ${contact.email}`;
  } catch {
    return contact.email;
  }
}

export function CommandTerminal() {
  const { lang, t, setLang, terminalOpen, setTerminalOpen } = useSite();
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const banner = useMemo(
    () =>
      lang === "zh"
        ? "shaoxiao kernel  9.4  —  help 查看命令"
        : "shaoxiao kernel  9.4  —  type help",
    [lang],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [terminalOpen, setTerminalOpen]);

  useEffect(() => {
    if (terminalOpen) {
      setLines([{ kind: "out", text: banner }]);
      setValue("");
      setHistIdx(-1);
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [terminalOpen, banner]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [lines]);

  function push(line: Line | Line[]) {
    setLines((prev) => prev.concat(line));
  }

  async function run(raw: string) {
    const input = raw.trim();
    if (!input) return;
    push({ kind: "in", text: `$ ${input}` });
    setHistory((h) => [input, ...h.filter((x) => x !== input)].slice(0, 40));
    setHistIdx(-1);

    const parts = input.split(/\s+/);
    const cmd = parts[0]?.toLowerCase() ?? "";
    const arg = parts.slice(1).join(" ");
    const arg0 = parts[1]?.toLowerCase() ?? "";

    if (cmd === "help" || cmd === "?") {
      push({ kind: "out", text: t(terminalHelp) });
      return;
    }
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "exit" || cmd === "q" || cmd === "quit") {
      setTerminalOpen(false);
      return;
    }
    if (cmd === "whoami") {
      push({
        kind: "out",
        text:
          lang === "zh"
            ? "徐绍校  ·  AI 工程化负责人  ·  上海"
            : "Shaoxiao Xu  ·  AI Engineering Leader  ·  Shanghai",
      });
      return;
    }
    if (cmd === "neofetch" || cmd === "fetch") {
      push({ kind: "out", text: neofetch(lang) });
      return;
    }
    if (cmd === "ls" || cmd === "dir") {
      push({ kind: "out", text: FILES.join("    ") });
      return;
    }
    if (cmd === "pwd") {
      push({ kind: "out", text: "~/shaoxiao" });
      return;
    }
    if (cmd === "date") {
      push({
        kind: "out",
        text: new Date().toLocaleString(lang === "zh" ? "zh-CN" : "en-GB", {
          timeZone: "Asia/Shanghai",
          hour12: false,
        }) + "  CST",
      });
      return;
    }
    if (cmd === "uptime") {
      push({
        kind: "out",
        text:
          lang === "zh"
            ? "up 9 years  ·  since Borderx Lab, 2016-06"
            : "up 9 years  ·  since Borderx Lab, Jun 2016",
      });
      return;
    }
    if (cmd === "gpu" || cmd === "nvidia-smi") {
      push({
        kind: "out",
        text: [
          "cluster   A10 / A100 / L20 / H20",
          "cards     100",
          "serve     vLLM  Ray  ComfyUI  TensorRT-LLM",
          "sched     K8s GPU",
          "status    ready",
        ].join("\n"),
      });
      return;
    }
    if (cmd === "lang" || cmd === "locale") {
      if (arg0 === "zh" || arg0 === "cn" || arg0 === "zh_cn") {
        setLang("zh");
        push({ kind: "out", text: "LANG=zh_CN" });
        return;
      }
      if (arg0 === "en" || arg0 === "en_us") {
        setLang("en");
        push({ kind: "out", text: "LANG=en_US" });
        return;
      }
      push({ kind: "out", text: `LANG=${lang === "zh" ? "zh_CN" : "en_US"}` });
      return;
    }
    if (cmd === "contact" || cmd === "mail" || cmd === "email") {
      const msg = await copyEmail();
      push({ kind: "out", text: msg });
      return;
    }
    if (cmd === "cat" || cmd === "head" || cmd === "less") {
      if (!arg0) {
        push({ kind: "err", text: "cat: missing file  (try: ls)" });
        return;
      }
      const body = catFile(arg0, lang);
      if (!body) {
        push({ kind: "err", text: `cat: ${arg0}: no such file` });
        return;
      }
      push({ kind: "out", text: body });
      return;
    }
    if (cmd === "cd" || cmd === "goto" || cmd === "open") {
      const target = SECTIONS[arg0];
      if (!target) {
        push({ kind: "err", text: `cd: ${arg0 || "?"}: not a section` });
        return;
      }
      scrollToId(target);
      setTerminalOpen(false);
      return;
    }
    if (cmd === "git") {
      if (arg0 === "log" || !arg0) {
        scrollToId("log");
        setTerminalOpen(false);
        return;
      }
      push({ kind: "err", text: "git: try  git log" });
      return;
    }
    if (cmd === "echo") {
      push({ kind: "out", text: arg || "" });
      return;
    }
    if (cmd === "sudo") {
      push({
        kind: "out",
        text:
          lang === "zh"
            ? "这台机器上 shaoxiao 已经是 root。"
            : "shaoxiao is already root on this machine.",
      });
      return;
    }
    if (cmd === "vim" || cmd === "nvim" || cmd === "emacs") {
      push({
        kind: "out",
        text: "opened. you know how to leave.  (exit)",
      });
      return;
    }
    if (cmd === "ssh") {
      push({ kind: "out", text: "connection closed." });
      return;
    }

    push({
      kind: "err",
      text: `${cmd}: command not found  —  help`,
    });
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const v = value;
      setValue("");
      void run(v);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = history[histIdx + 1];
      if (next !== undefined) {
        setHistIdx(histIdx + 1);
        setValue(next);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx <= 0) {
        setHistIdx(-1);
        setValue("");
      } else {
        setHistIdx(histIdx - 1);
        setValue(history[histIdx - 1] ?? "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const cur = value.trim();
      const cmds = [
        "help",
        "whoami",
        "neofetch",
        "ls",
        "cat",
        "goto",
        "lang",
        "contact",
        "uptime",
        "gpu",
        "clear",
        "exit",
      ];
      const hit = cmds.find((c) => c.startsWith(cur) && c !== cur);
      if (hit) setValue(hit + (hit === "cat" || hit === "goto" || hit === "lang" ? " " : ""));
    }
  }

  return (
    <Dialog.Root open={terminalOpen} onOpenChange={setTerminalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-void/70" />
        <Dialog.Content
          className="fixed top-[12%] left-1/2 z-50 w-[min(92vw,42rem)] -translate-x-1/2 rounded-lg border border-hair bg-ink p-3 shadow-[0_0_0_1px_rgba(236,234,228,0.04)] sm:p-4"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          <Dialog.Title className="sr-only">
            {lang === "zh" ? "终端" : "Terminal"}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            {hero.promptOut}
          </Dialog.Description>
          <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-dim">
            <span className="size-1.5 rounded-full bg-sage" />
            shaoxiao@shanghai  ~  zsh
            <span className="ml-auto text-stone">esc</span>
          </div>
          <div
            ref={logRef}
            className="mb-3 max-h-[min(52vh,22rem)] overflow-auto font-mono text-xs leading-relaxed text-paper"
          >
            {lines.map((line, i) => (
              <pre
                key={`${i}-${line.kind}`}
                className={`whitespace-pre ${
                  line.kind === "in"
                    ? "text-sage"
                    : line.kind === "err"
                      ? "text-stone"
                      : "text-paper"
                }`}
              >
                {line.text}
              </pre>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-line pt-3 font-mono text-[12px]">
            <span className="text-sage">$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              className="h-11 min-w-0 flex-1 bg-transparent text-paper outline-none placeholder:text-dim"
              placeholder="whoami"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="command"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
