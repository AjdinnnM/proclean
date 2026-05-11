import { cn } from "@/lib/utils";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Pro Clean wordmark.
 *
 * - "pro"   — dark (navy/black) — mirrors the provided logo
 * - "clean" — brand blue
 *
 * Uses the site heading font (Manrope) via the `.font-heading` class.
 * For a light-on-dark context (e.g. footer), pass variant="light".
 */
export function Logo({ variant = "dark", className }: Props) {
  const proColor =
    variant === "dark" ? "text-[#081226]" : "text-white";
  const cleanColor =
    variant === "dark" ? "text-[var(--color-brand-600)]" : "text-[var(--color-brand-300)]";

  return (
    <span
      className={cn(
        "font-heading font-extrabold tracking-tight leading-none select-none",
        className,
      )}
      aria-label="Pro Clean"
    >
      <span className={cn(proColor)}>pro</span>
      <span className={cn(cleanColor, "font-semibold")}>clean</span>
    </span>
  );
}
