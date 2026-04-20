import { tv } from "tailwind-variants";

export const sectionLabel = tv({
  base: "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
  variants: {
    tone: {
      default: "border-border bg-background text-foreground",
      accent: "border-transparent bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});
