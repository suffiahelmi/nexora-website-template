import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SOLUTIONS_USE_CASES } from "@/data/nexoraData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function SolutionsPreviewSection() {
  return (
    <section className="border-t border-nexora-border/60 bg-nexora-midnight/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="BENEFITS & INDUSTRY SOLUTIONS"
            title="Purpose-built workflows for high-stakes distributed workloads."
            description="From real-time financial settlement to isolated multi-tenant SaaS enclaves, NEXORA eliminates infrastructure complexity."
            accent="lime"
          />
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 self-start lg:self-auto rounded-xl border border-nexora-lime/40 bg-nexora-lime/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-nexora-lime hover:bg-nexora-lime hover:text-nexora-midnight transition-all"
          >
            <span>Explore All 4 Industry Workflows</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SOLUTIONS_USE_CASES.slice(0, 2).map((sol) => (
            <GlowCard key={sol.id} accent={sol.accent} className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-nexora-cyan">
                    {sol.industry}
                  </span>
                  <span className="rounded-full bg-nexora-lime/10 border border-nexora-lime/30 px-3 py-0.5 font-mono text-xs text-nexora-lime">
                    {sol.metricHighlight}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-nexora-text">
                  {sol.title}
                </h3>
                <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                  {sol.summary}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {sol.workflowSteps.map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 rounded-lg border border-nexora-border/70 bg-nexora-midnight/70 px-3 py-2 text-xs text-nexora-text"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-nexora-cyan shrink-0" />
                      <span className="font-mono text-[11px]">
                        0{i + 1}. {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-nexora-border/70 pt-4 flex items-center justify-between">
                <span className="text-xs text-nexora-muted">
                  Outcome: {sol.outcome.slice(0, 72)}...
                </span>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1 font-mono text-xs text-nexora-cyan hover:text-nexora-lime shrink-0 ml-2"
                >
                  <span>Full Blueprint</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
