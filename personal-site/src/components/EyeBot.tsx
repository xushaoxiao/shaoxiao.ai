"use client";

import { useEffect, useRef } from "react";

/** Animation stays outside React rendering and pauses when the icon is hidden. */
export function EyeBot() {
  const face = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = face.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let previous = 0;
    let gazeX = 0;
    let gazeY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let lastPointer = -Infinity;
    let idleX = 0;
    let idleY = 0;
    let nextGlance = 0;
    let nextBlink = 0;
    let blinkStart = -Infinity;
    let doubleBlink = false;
    let curious = false;
    let greetingUntil = 0;

    const paint = (time: number) => {
      frame = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      const dt = Math.min(64, previous ? time - previous : 16);
      previous = time;
      if (time > nextGlance) {
        idleX = (Math.random() - 0.5) * 15;
        idleY = (Math.random() - 0.5) * 8;
        nextGlance = time + 1600 + Math.random() * 2600;
      }
      if (!nextBlink) nextBlink = time + 1800;
      if (time > nextBlink) {
        blinkStart = time;
        if (doubleBlink) {
          nextBlink = time + 240;
          doubleBlink = false;
        } else {
          nextBlink = time + 2400 + Math.random() * 3400;
          doubleBlink = Math.random() < 0.22;
        }
      }
      const tracking = time - lastPointer < 2400;
      const greeting = time < greetingUntil;
      const targetX = curious ? pointerX * 0.6 : tracking ? pointerX : idleX;
      const targetY = curious
        ? pointerY * 0.6 - 2
        : tracking
          ? pointerY
          : idleY;
      const smoothing = 1 - Math.exp(-dt / 140);
      gazeX += (targetX - gazeX) * smoothing;
      gazeY += (targetY - gazeY) * smoothing;
      const phase = time / 1000;
      const blinkAge = time - blinkStart;
      const blink =
        blinkAge < 160 ? 1 - Math.sin((blinkAge / 160) * Math.PI) * 0.93 : 1;
      const eyeHeight = greeting
        ? 0.55
        : curious
          ? 1.2
          : 1 + Math.sin(phase * 1.1) * 0.05;
      element.style.setProperty("--eye-x", `${gazeX.toFixed(2)}%`);
      element.style.setProperty("--eye-y", `${gazeY.toFixed(2)}%`);
      element.style.setProperty(
        "--head-turn",
        `${(gazeX * 0.35 + Math.sin(phase * 1.3) * 2).toFixed(2)}deg`,
      );
      element.style.setProperty(
        "--head-bob",
        `${(Math.sin(phase * 1.5) * 2).toFixed(2)}%`,
      );
      element.style.setProperty(
        "--head-scale",
        (1 + Math.sin(phase * 1.5) * 0.018 + (curious ? 0.035 : 0)).toFixed(3),
      );
      element.style.setProperty("--eye-open", (blink * eyeHeight).toFixed(3));
      element.style.setProperty(
        "--eye-wide",
        (curious || greeting ? 1.12 : 1).toString(),
      );
      element.dataset.state = greeting
        ? "greeting"
        : curious
          ? "curious"
          : tracking
            ? "watching"
            : "idle";
      frame = requestAnimationFrame(paint);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (reducedMotion.matches) {
        element.removeAttribute("style");
        element.dataset.state = "rest";
      } else if (visible && !document.hidden) {
        nextBlink = 0;
        frame = requestAnimationFrame(paint);
      }
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !visible || reducedMotion.matches)
        return;
      const rect = element.getBoundingClientRect();
      const dx = event.clientX - rect.left - rect.width / 2;
      const dy = event.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(1, Math.hypot(dx, dy) / 220);
      pointerX = Math.cos(angle) * distance * 13;
      pointerY = Math.sin(angle) * distance * 9;
      lastPointer = performance.now();
    };
    const enter = () => {
      curious = true;
    };
    const leave = () => {
      curious = false;
    };
    const greet = () => {
      greetingUntil = performance.now() + 800;
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      resume();
    });
    observer.observe(element);
    window.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerenter", enter);
    element.addEventListener("pointerleave", leave);
    element.addEventListener("focus", enter);
    element.addEventListener("blur", leave);
    element.addEventListener("pointerdown", greet);
    document.addEventListener("visibilitychange", resume);
    reducedMotion.addEventListener("change", resume);
    resume();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      element.removeEventListener("pointerenter", enter);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("focus", enter);
      element.removeEventListener("blur", leave);
      element.removeEventListener("pointerdown", greet);
      document.removeEventListener("visibilitychange", resume);
      reducedMotion.removeEventListener("change", resume);
    };
  }, []);

  return (
    <a
      ref={face}
      className="eye-bot"
      href="#about"
      aria-label="认识 Shaoxiao"
      title="认识 Shaoxiao"
    >
      <span className="eye-bot-head" aria-hidden="true">
        <span className="eye-bot-gaze">
          <span className="eye-bot-eye" />
          <span className="eye-bot-eye" />
        </span>
      </span>
    </a>
  );
}
