"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <a className="brand" href="#home">
        SHAOXIAO<span className="brand-dot">.</span>
      </a>
      <nav aria-label="主导航">
        <a href="#content">洞察</a>
        <a href="#ideas">构建</a>
        <a href="#about">关于我</a>
        <a href="#connect">连接</a>
      </nav>
      <a
        className="nav-connect"
        href="https://x.com/Shaoxiao_ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        关注 Shaoxiao <span>↗</span>
      </a>
    </header>
  );
}
