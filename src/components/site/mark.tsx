import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-grid size-6 shrink-0 place-items-center border border-paper",
        "font-mono text-3xs font-medium tracking-[0.16em] text-paper",
        className,
      )}
      aria-hidden="true"
    >
      SX
    </span>
  );
}
