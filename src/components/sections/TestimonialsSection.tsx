import React from "react";
import { Quote } from "lucide-react";
import { SAMPLE_TESTIMONIALS } from "@/data/nexoraData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function TestimonialsSection() {
  return (
    <section className="border-t border-nexora-border/60 bg-nexora-navy/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="ARCHITECT FEEDBACK (SAMPLE CONTENT)"
            title="Built for engineering leaders who measure latency in microseconds."
            description="The following testimonials are clearly labeled sample personas demonstrating how customer social proof is presented in this commercial template."
            accent="lime"
          />
          <span className="rounded-lg border border-nexora-lime/40 bg-nexora-lime/10 px-3.5 py-1.5 font-mono text-xs text-nexora-lime">
            SAMPLE DEMO TESTIMONIALS
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <GlowCard key={item.id} accent="cyan" className="flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-nexora-electric" />
                  <span className="rounded-full bg-nexora-electric/15 border border-nexora-electric/30 px-3 py-1 font-mono text-xs font-semibold text-nexora-cyan">
                    {item.metric}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-nexora-text leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-nexora-border/70 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold text-nexora-text">
                    {item.author}
                  </p>
                  <p className="text-xs text-nexora-muted">
                    {item.role} — {item.company}
                  </p>
                </div>
                <span className="rounded bg-nexora-surface px-2 py-0.5 font-mono text-[10px] text-nexora-lime uppercase">
                  Sample
                </span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
