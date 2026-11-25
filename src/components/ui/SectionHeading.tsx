import React from "react";
import { cn } from "@/utils/cn";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "electric" | "lime" | "cyan";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "electric",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge variant={accent} pulse>
        {eyebrow}
      </Badge>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-nexora-text leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
