import type { HTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
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

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
