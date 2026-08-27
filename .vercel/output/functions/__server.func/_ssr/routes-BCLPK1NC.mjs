import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as terminalHelp, a as education, c as logSection, d as signals, f as stackLayers, g as systemsSection, h as systems, i as contact, l as nav, m as status, n as bootLines, o as hero, p as stackSection, r as colophon, s as identity, u as roles, v as titleBlock, y as useSite } from "./router-CQFfZ1_f.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BCLPK1NC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-grid size-6 shrink-0 place-items-center border border-paper", "font-mono text-3xs font-medium tracking-[0.16em] text-paper", className),
		"aria-hidden": "true",
		children: "SX"
	});
}
var STORAGE_KEY = "sx-booted";
function BootScreen() {
	const { t } = useSite();
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(0);
	const [fading, setFading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
		if (navigator.webdriver) {
			window.sessionStorage.setItem(STORAGE_KEY, "1");
			return;
		}
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			window.sessionStorage.setItem(STORAGE_KEY, "1");
			return;
		}
		setVisible(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!visible) return;
		if (step < bootLines.length) {
			const id = window.setTimeout(() => setStep((s) => s + 1), 280);
			return () => window.clearTimeout(id);
		}
		const id = window.setTimeout(() => {
			setFading(true);
			window.setTimeout(() => {
				window.sessionStorage.setItem(STORAGE_KEY, "1");
				setVisible(false);
			}, 400);
		}, 420);
		return () => window.clearTimeout(id);
	}, [visible, step]);
	function skip() {
		window.sessionStorage.setItem(STORAGE_KEY, "1");
		setFading(true);
		window.setTimeout(() => setVisible(false), 200);
	}
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-[80] flex h-dvh w-dvw items-center justify-center bg-void transition-opacity duration-slow ease-out ${fading ? "opacity-0" : "opacity-100"}`,
		role: "dialog",
		"aria-label": "boot",
		onClick: skip,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === "Escape" || e.key === " ") skip();
		},
		tabIndex: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[min(92vw,28rem)] px-6 font-mono text-xs text-stone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-center gap-3 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-wider",
						children: "SHAOXIAO.SYS  9.4"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: bootLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between",
						style: { opacity: i < step ? 1 : 0 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(line.text) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sage",
							children: i < step ? line.key === "gpu" ? "100  ok" : "ok" : ""
						})]
					}, line.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-[10px] tracking-widest text-dim uppercase",
					children: "skip"
				})
			]
		})
	});
}
var FILES = [
	"now",
	"log",
	"stack",
	"systems",
	"contact"
];
var SECTIONS = {
	identity: "identity",
	now: "identity",
	log: "log",
	experience: "log",
	stack: "stack",
	systems: "systems",
	contact: "contact",
	top: "top"
};
function neofetch(lang) {
	return [
		"    ┌──────────┐",
		"    │  SX  徐  │",
		"    └──────────┘",
		"",
		...lang === "zh" ? [
			"shaoxiao@shanghai",
			"-----------------",
			"OS:      AI Engineering",
			"Host:    钛动科技 / MarTech",
			"Kernel:  9.4-distributed",
			"Uptime:  9 years since 2016",
			"GPU:     A10/A100/L20/H20 × 100",
			"Shell:   langgraph",
			"Locale:  zh_CN",
			"Editor:  systems, not prompts"
		] : [
			"shaoxiao@shanghai",
			"-----------------",
			"OS:      AI Engineering",
			"Host:    Tec-Do / MarTech",
			"Kernel:  9.4-distributed",
			"Uptime:  9 years since 2016",
			"GPU:     A10/A100/L20/H20 × 100",
			"Shell:   langgraph",
			"Locale:  en_US",
			"Editor:  systems, not prompts"
		]
	].join("\n");
}
function catFile(file, lang) {
	if (file === "now" || file === "identity") return [
		identity.body[lang],
		"",
		identity.body2[lang]
	].join("\n");
	if (file === "log") return roles.map((r) => `${r.head ? "*" : "o"}  ${r.period[lang]}  ${r.company[lang]}  ${r.title[lang]}`).join("\n");
	if (file === "stack") return stackLayers.map((l) => `${l.name.en.padEnd(8, " ")} ${l.nodes.join("  ")}`).join("\n");
	if (file === "systems") return systems.map((s) => `${s.code}  ${s.title[lang]}\n    ${s.body[lang]}`).join("\n\n");
	if (file === "contact") return `${contact.email}\n${contact.phone}\n${contact.city[lang]}`;
	return null;
}
function scrollToId(id) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
async function copyEmail() {
	try {
		await navigator.clipboard.writeText(contact.email);
		return `copied  ${contact.email}`;
	} catch {
		return contact.email;
	}
}
function CommandTerminal() {
	const { lang, t, setLang, terminalOpen, setTerminalOpen } = useSite();
	const [lines, setLines] = (0, import_react.useState)([]);
	const [value, setValue] = (0, import_react.useState)("");
	const [history, setHistory] = (0, import_react.useState)([]);
	const [histIdx, setHistIdx] = (0, import_react.useState)(-1);
	const inputRef = (0, import_react.useRef)(null);
	const logRef = (0, import_react.useRef)(null);
	const banner = (0, import_react.useMemo)(() => lang === "zh" ? "shaoxiao kernel  9.4  —  help 查看命令" : "shaoxiao kernel  9.4  —  type help", [lang]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setTerminalOpen(!terminalOpen);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [terminalOpen, setTerminalOpen]);
	(0, import_react.useEffect)(() => {
		if (terminalOpen) {
			setLines([{
				kind: "out",
				text: banner
			}]);
			setValue("");
			setHistIdx(-1);
			window.setTimeout(() => inputRef.current?.focus(), 40);
		}
	}, [terminalOpen, banner]);
	(0, import_react.useEffect)(() => {
		logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
	}, [lines]);
	function push(line) {
		setLines((prev) => prev.concat(line));
	}
	async function run(raw) {
		const input = raw.trim();
		if (!input) return;
		push({
			kind: "in",
			text: `$ ${input}`
		});
		setHistory((h) => [input, ...h.filter((x) => x !== input)].slice(0, 40));
		setHistIdx(-1);
		const parts = input.split(/\s+/);
		const cmd = parts[0]?.toLowerCase() ?? "";
		const arg = parts.slice(1).join(" ");
		const arg0 = parts[1]?.toLowerCase() ?? "";
		if (cmd === "help" || cmd === "?") {
			push({
				kind: "out",
				text: t(terminalHelp)
			});
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
				text: lang === "zh" ? "徐绍校  ·  AI 工程化负责人  ·  上海" : "Shaoxiao Xu  ·  AI Engineering Leader  ·  Shanghai"
			});
			return;
		}
		if (cmd === "neofetch" || cmd === "fetch") {
			push({
				kind: "out",
				text: neofetch(lang)
			});
			return;
		}
		if (cmd === "ls" || cmd === "dir") {
			push({
				kind: "out",
				text: FILES.join("    ")
			});
			return;
		}
		if (cmd === "pwd") {
			push({
				kind: "out",
				text: "~/shaoxiao"
			});
			return;
		}
		if (cmd === "date") {
			push({
				kind: "out",
				text: (/* @__PURE__ */ new Date()).toLocaleString(lang === "zh" ? "zh-CN" : "en-GB", {
					timeZone: "Asia/Shanghai",
					hour12: false
				}) + "  CST"
			});
			return;
		}
		if (cmd === "uptime") {
			push({
				kind: "out",
				text: lang === "zh" ? "up 9 years  ·  since Borderx Lab, 2016-06" : "up 9 years  ·  since Borderx Lab, Jun 2016"
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
					"status    ready"
				].join("\n")
			});
			return;
		}
		if (cmd === "lang" || cmd === "locale") {
			if (arg0 === "zh" || arg0 === "cn" || arg0 === "zh_cn") {
				setLang("zh");
				push({
					kind: "out",
					text: "LANG=zh_CN"
				});
				return;
			}
			if (arg0 === "en" || arg0 === "en_us") {
				setLang("en");
				push({
					kind: "out",
					text: "LANG=en_US"
				});
				return;
			}
			push({
				kind: "out",
				text: `LANG=${lang === "zh" ? "zh_CN" : "en_US"}`
			});
			return;
		}
		if (cmd === "contact" || cmd === "mail" || cmd === "email") {
			push({
				kind: "out",
				text: await copyEmail()
			});
			return;
		}
		if (cmd === "cat" || cmd === "head" || cmd === "less") {
			if (!arg0) {
				push({
					kind: "err",
					text: "cat: missing file  (try: ls)"
				});
				return;
			}
			const body = catFile(arg0, lang);
			if (!body) {
				push({
					kind: "err",
					text: `cat: ${arg0}: no such file`
				});
				return;
			}
			push({
				kind: "out",
				text: body
			});
			return;
		}
		if (cmd === "cd" || cmd === "goto" || cmd === "open") {
			const target = SECTIONS[arg0];
			if (!target) {
				push({
					kind: "err",
					text: `cd: ${arg0 || "?"}: not a section`
				});
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
			push({
				kind: "err",
				text: "git: try  git log"
			});
			return;
		}
		if (cmd === "echo") {
			push({
				kind: "out",
				text: arg || ""
			});
			return;
		}
		if (cmd === "sudo") {
			push({
				kind: "out",
				text: lang === "zh" ? "这台机器上 shaoxiao 已经是 root。" : "shaoxiao is already root on this machine."
			});
			return;
		}
		if (cmd === "vim" || cmd === "nvim" || cmd === "emacs") {
			push({
				kind: "out",
				text: "opened. you know how to leave.  (exit)"
			});
			return;
		}
		if (cmd === "ssh") {
			push({
				kind: "out",
				text: "connection closed."
			});
			return;
		}
		push({
			kind: "err",
			text: `${cmd}: command not found  —  help`
		});
	}
	function onKeyDown(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			const v = value;
			setValue("");
			run(v);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const next = history[histIdx + 1];
			if (next !== void 0) {
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
			const hit = [
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
				"exit"
			].find((c) => c.startsWith(cur) && c !== cur);
			if (hit) setValue(hit + (hit === "cat" || hit === "goto" || hit === "lang" ? " " : ""));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: terminalOpen,
		onOpenChange: setTerminalOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-void/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-[12%] left-1/2 z-50 w-[min(92vw,42rem)] -translate-x-1/2 rounded-lg border border-hair bg-ink p-3 shadow-[0_0_0_1px_rgba(236,234,228,0.04)] sm:p-4",
			onOpenAutoFocus: (e) => {
				e.preventDefault();
				inputRef.current?.focus();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: lang === "zh" ? "终端" : "Terminal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: hero.promptOut
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-dim",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sage" }),
						"shaoxiao@shanghai  ~  zsh",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto text-stone",
							children: "esc"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: logRef,
					className: "mb-3 max-h-[min(52vh,22rem)] overflow-auto font-mono text-xs leading-relaxed text-paper",
					children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: `whitespace-pre ${line.kind === "in" ? "text-sage" : line.kind === "err" ? "text-stone" : "text-paper"}`,
						children: line.text
					}, `${i}-${line.kind}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-t border-line pt-3 font-mono text-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sage",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						value,
						onChange: (e) => setValue(e.target.value),
						onKeyDown,
						className: "h-11 min-w-0 flex-1 bg-transparent text-paper outline-none placeholder:text-dim",
						placeholder: "whoami",
						autoCapitalize: "off",
						autoCorrect: "off",
						spellCheck: false,
						"aria-label": "command"
					})]
				})
			]
		})] })
	});
}
function Contact() {
	const { t } = useSite();
	const [copied, setCopied] = (0, import_react.useState)(null);
	async function copy(kind, value) {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(kind);
			window.setTimeout(() => setCopied(null), 1600);
		} catch {
			setCopied(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-sage-dim",
							children: contact.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl",
							children: t(contact.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[11px] text-dim",
							children: t(contact.subtitle)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${contact.email}`,
							className: "font-display text-xl leading-snug tracking-tight text-paper no-underline transition-colors duration-quick hover:text-sage sm:text-[clamp(1.6rem,4vw,3rem)]",
							children: contact.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-sm leading-relaxed text-stone",
							children: t(contact.note)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => copy("email", contact.email),
								className: "h-11 rounded-md border border-hair bg-ink px-4 font-mono text-[12px] text-paper transition-[border-color,background-color] duration-150 hover:border-stone",
								children: copied === "email" ? t({
									en: "copied",
									zh: "已复制"
								}) : t({
									en: "copy email",
									zh: "复制邮箱"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => copy("phone", contact.phone),
								className: "h-11 rounded-md border border-line px-4 font-mono text-[12px] text-stone transition-colors duration-150 hover:text-paper",
								children: copied === "phone" ? t({
									en: "copied",
									zh: "已复制"
								}) : t({
									en: "copy phone",
									zh: "复制电话"
								})
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-5 font-mono text-[12px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "TEL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${contact.phoneRaw}`,
									className: "text-paper no-underline",
									children: contact.phone
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "LOC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-paper",
								children: t(contact.city)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "TZ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-paper",
								children: "Asia/Shanghai  UTC+8"
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-20 border-t border-line pt-6 font-mono text-[10px] leading-5 tracking-wide text-dim",
					children: t(colophon)
				})
			]
		})
	});
}
function ExperienceLog() {
	const { t } = useSite();
	const [openId, setOpenId] = (0, import_react.useState)(roles[0]?.id ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "log",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-12 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-sage-dim",
					children: logSection.index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl",
					children: t(logSection.title)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-dim",
					children: t(logSection.subtitle)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative",
				children: roles.map((role, i) => {
					const open = openId === role.id;
					const last = i === roles.length - 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative grid grid-cols-[2rem_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-5 size-2.5 rounded-full ${role.head ? "bg-sage" : "bg-void ring-1 ring-stone"}` }), !last && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-line" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `${last ? "pb-0" : "pb-4"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": open,
								onClick: () => setOpenId(open ? "" : role.id),
								className: "flex w-full flex-col items-start gap-1 rounded-md px-3 py-4 text-left transition-colors duration-150 hover:bg-raised sm:flex-row sm:items-baseline sm:gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-40 shrink-0 font-mono text-[11px] text-dim",
									children: t(role.period)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium text-paper",
										children: t(role.title)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block font-mono text-[11px] text-stone",
										children: [
											t(role.company),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-dim",
												children: ["  ·  ", t(role.location)]
											}),
											role.head && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-2 text-sage",
												children: "HEAD"
											})
										]
									})]
								})]
							}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 pb-6 sm:pl-[10.5rem]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-2xl text-sm leading-relaxed text-stone",
										children: t(role.summary)
									}),
									role.bullets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 max-w-2xl space-y-2",
										children: role.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "grid grid-cols-[0.5rem_minmax(0,1fr)] gap-2 text-sm leading-relaxed text-paper/90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 rounded-full bg-sage-dim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(b) })]
										}, b.en))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-mono text-[10px] tracking-wide text-dim",
										children: role.stack.join("  ·  ")
									})
								]
							})]
						})]
					}, role.id);
				})
			})]
		})
	});
}
function Hero() {
	const { t, setTerminalOpen } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden border-b border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg pointer-events-none absolute inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rise absolute top-16 right-6 hidden w-44 border border-line bg-void/80 p-4 font-mono text-3xs leading-5 tracking-wider text-stone lg:block",
					style: { animationDelay: "200ms" },
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex justify-between text-dim",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(titleBlock.drawing) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(titleBlock.rev) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "LOC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-paper",
								children: t(titleBlock.loc)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "COORD"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-paper",
								children: titleBlock.coord
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "ORG"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-paper",
								children: t(titleBlock.org)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "SINCE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-paper",
								children: titleBlock.since
							})] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise font-mono text-2xs tracking-[0.22em] text-sage-dim",
							style: { animationDelay: "40ms" },
							children: t(hero.kicker)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise mt-6 font-mono text-2xs tracking-[0.18em] text-stone",
							style: { animationDelay: "80ms" },
							children: t(hero.nameAlt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "rise mt-2 max-w-[18ch] font-display text-[clamp(3.25rem,8.4vw,7.25rem)] leading-[0.94] tracking-[-0.03em] text-paper",
							style: { animationDelay: "120ms" },
							children: t(hero.headline)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise mt-3 font-mono text-xs tracking-[0.16em] text-stone",
							style: { animationDelay: "160ms" },
							children: [
								t(hero.name),
								"  /  ",
								t(hero.role)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise mt-8 max-w-xl text-[15px] leading-relaxed text-stone sm:text-base",
							style: { animationDelay: "200ms" },
							children: t(hero.lede)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTerminalOpen(true),
							className: "rise mt-10 flex w-full max-w-xl items-center gap-3 rounded-md border border-line bg-ink px-4 py-3 text-left font-mono text-xs transition-[border-color] duration-quick hover:border-hair sm:text-[13px]",
							style: { animationDelay: "260ms" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sage",
									children: "$"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-paper",
									children: hero.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cursor-blink ml-0.5 inline-block h-3.5 w-1.5 bg-sage" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto hidden text-dim sm:inline",
									children: hero.promptOut
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4",
					children: signals.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `px-4 py-5 sm:px-6 sm:py-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl tracking-tight text-paper sm:text-4xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 max-w-[12rem] font-mono text-3xs leading-4 tracking-wide text-stone",
							children: t(s.label)
						})]
					}, s.value))
				})
			})
		]
	});
}
function Identity() {
	const { t } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "identity",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "lg:pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-sage-dim",
						children: identity.index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl",
						children: t(identity.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-[11px] text-dim",
						children: t(identity.manpage)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] leading-[1.7] text-paper sm:text-base",
						children: t(identity.body)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[15px] leading-[1.7] text-stone sm:text-base",
						children: t(identity.body2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[11px] tracking-wide text-stone",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(education.label) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-dim",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-paper",
								children: t(education.value)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: identity.wiki,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex h-11 items-center font-mono text-[12px] text-sage no-underline transition-colors duration-150 hover:text-paper",
						children: [t(identity.more), "  ↗"]
					})
				]
			})]
		})
	});
}
var links = [
	{
		href: "#identity",
		key: "identity"
	},
	{
		href: "#log",
		key: "log"
	},
	{
		href: "#stack",
		key: "stack"
	},
	{
		href: "#systems",
		key: "systems"
	},
	{
		href: "#contact",
		key: "contact"
	}
];
function SiteNav() {
	const { t, lang, toggleLang, setTerminalOpen } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-void/85 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-paper no-underline",
					"aria-label": "Shaoxiao Xu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto flex items-center gap-0.5 overflow-x-auto sm:ml-8 sm:flex-1",
					"aria-label": "sections",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: `shrink-0 px-2 py-2 font-mono text-3xs tracking-wide text-stone no-underline transition-colors duration-quick hover:text-paper sm:px-3 sm:text-2xs ${link.key === "systems" ? "max-sm:hidden" : ""}`,
						children: t(nav[link.key])
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggleLang,
						className: "h-11 min-w-11 px-2 font-mono text-[11px] tracking-wider text-stone transition-colors duration-150 hover:text-paper",
						"aria-label": lang === "zh" ? "Switch to English" : "切换到中文",
						children: lang === "zh" ? "EN" : "中文"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTerminalOpen(true),
						className: "hidden h-11 items-center gap-2 px-2 font-mono text-[11px] text-stone transition-colors duration-150 hover:text-paper sm:flex",
						"aria-label": "Open terminal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "rounded-sm border border-hair px-1.5 py-0.5 text-[10px] text-dim",
							children: "⌘K"
						})
					})]
				})
			]
		})
	});
}
function StackRack() {
	const { t } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-12 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-sage-dim",
					children: stackSection.index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl",
					children: t(stackSection.title)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-dim",
					children: t(stackSection.subtitle)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-line",
				children: stackLayers.map((layer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid grid-cols-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] ${i > 0 ? "border-t border-line" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center border-b border-line bg-ink px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-sage-dim sm:border-r sm:border-b-0",
						children: t(layer.name)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-px bg-line p-px",
						children: layer.nodes.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "flex min-h-11 min-w-[7.5rem] flex-1 items-center justify-center bg-void px-3 py-2 font-mono text-[12px] text-paper transition-colors duration-150 hover:bg-raised hover:text-sage",
							children: node
						}, node))
					})]
				}, layer.id))
			})]
		})
	});
}
function StatusBar() {
	const { lang, t, setTerminalOpen } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-void/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-9 max-w-6xl items-center gap-3 overflow-hidden px-4 font-mono text-[10px] tracking-wide text-stone sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-live size-1.5 rounded-full bg-sage" }), status.host]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-dim sm:inline",
					children: "│"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: lang === "zh" ? "zh_CN" : "en_US"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-dim md:inline",
					children: "│"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-sage-dim md:inline",
					children: status.gpu
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTerminalOpen(true),
						className: "h-9 text-stone transition-colors duration-150 hover:text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: t(status.hint)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: t(status.hintMobile)
						})]
					})
				})
			]
		})
	});
}
function Systems() {
	const { t } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "systems",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-12 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-sage-dim",
					children: systemsSection.index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl",
					children: t(systemsSection.title)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-dim",
					children: t(systemsSection.subtitle)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: systems.map((sys, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `grid gap-4 py-8 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10 ${i > 0 ? "border-t border-line" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[11px] tracking-wider text-dim",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sage-dim",
						children: sys.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2",
						children: t(sys.org)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl tracking-tight text-paper sm:text-3xl",
					children: t(sys.title)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-stone sm:text-[15px]",
					children: t(sys.body)
				})] })]
			}, sys.id)) })]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-void pb-9 text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#identity",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-void",
				children: "skip"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identity, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceLog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackRack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Systems, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandTerminal, {})
		]
	});
}
//#endregion
export { Home as component };
