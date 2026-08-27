import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-void px-6 text-center text-paper">
      <p className="font-mono text-[11px] tracking-[0.2em] text-sage-dim">
        KERNEL PANIC
      </p>
      <h1 className="font-display text-3xl tracking-tight">Something went wrong</h1>
      <p className="max-w-md font-mono text-sm break-words text-stone">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}
