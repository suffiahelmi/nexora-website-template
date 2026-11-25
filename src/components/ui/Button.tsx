import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "lime" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-nexora-electric text-white hover:bg-nexora-electric/90 shadow-electric-glow border border-nexora-cyan/30",
    secondary:
      "bg-nexora-surface/80 text-nexora-text hover:bg-nexora-surface border border-nexora-border hover:border-nexora-electric/50",
    lime:
      "bg-nexora-lime text-nexora-midnight font-semibold hover:bg-nexora-lime/90 shadow-lime-glow",
    ghost:
      "bg-transparent text-nexora-muted hover:text-nexora-text hover:bg-nexora-surface/50",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg",
    md: "px-5 py-2.5 text-sm rounded-xl",
    lg: "px-7 py-3.5 text-base rounded-xl",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexora-cyan disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
