import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CORE_FEATURES } from "@/data/nexoraData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function FeatureGridSection() {
  return (
    <section
      id="platform"
      className="relative bg-nexora-navy/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title="Engineered for deterministic speed and cryptographic resilience."
            description="Every layer of the NEXORA stack is purpose-built to eliminate operational bottlenecks across multi-region production clusters."
            accent="electric"
          />
          <Link
            href="/features"
            className="inline-flex items-center gap-2 self-start lg:self-auto rounded-xl border border-nexora-electric/40 bg-nexora-electric/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-nexora-cyan hover:bg-nexora-electric hover:text-white transition-all"
          >
            <span>Explore Full Feature Specs</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          id="architecture"
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {CORE_FEATURES.map((feature, index) => {
            const colSpan =
              index === 0
                ? "lg:col-span-5"
                : index === 1
                ? "lg:col-span-7"
                : "lg:col-span-12";

            return (
              <GlowCard
                key={feature.id}
                accent={feature.accent}
                className={colSpan}
              >
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-nexora-cyan">
                      {feature.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-nexora-text">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-nexora-text/90"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-nexora-lime mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t border-nexora-border/70 pt-4">
                    <span className="font-mono text-xs text-nexora-muted">
                      {feature.metricLabel}
                    </span>
                    <span className="font-mono text-sm font-semibold text-nexora-lime">
                      {feature.metricValue}
                    </span>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
