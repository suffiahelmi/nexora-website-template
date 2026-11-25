import React from "react";
import { cn } from "@/utils/cn";

export interface GlowCardProps {
  children: React.ReactNode;
  accent?: "electric" | "lime" | "cyan" | "none";
  className?: string;
}

export function GlowCard({
  children,
  accent = "electric",
  className,
}: GlowCardProps) {
  const accentBorders = {
    electric: "hover:border-nexora-electric/60 hover:shadow-electric-glow",
    lime: "hover:border-nexora-lime/60 hover:shadow-lime-glow",
    cyan: "hover:border-nexora-cyan/60 hover:shadow-cyan-glow",
    none: "hover:border-nexora-border",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-nexora-card-gradient border border-nexora-border/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-panel-depth",
        accentBorders[accent],
        className
      )}
    >
      {children}
    </div>
  );
}
