import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "electric" | "lime" | "cyan" | "neutral";
  pulse?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "electric",
  pulse = false,
  className,
}: BadgeProps) {
  const variants = {
    electric:
      "bg-nexora-electric/15 text-nexora-cyan border-nexora-electric/40",
    lime: "bg-nexora-lime/10 text-nexora-lime border-nexora-lime/40",
    cyan: "bg-nexora-cyan/10 text-nexora-cyan border-nexora-cyan/30",
    neutral: "bg-nexora-surface text-nexora-muted border-nexora-border",
  };

  const dotColors = {
    electric: "bg-nexora-electric",
    lime: "bg-nexora-lime",
    cyan: "bg-nexora-cyan",
    neutral: "bg-nexora-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border backdrop-blur-md",
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
