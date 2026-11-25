import React from "react";
import { DEMO_TRUSTED_BRANDS } from "@/data/nexoraData";

export function TrustedBySection() {
  return (
    <section className="border-y border-nexora-border/60 bg-nexora-midnight/90 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-widest text-nexora-muted">
            POWERING HIGH-VELOCITY ENGINEERING TEAMS{" "}
            <span className="text-nexora-lime">(FICTIONAL DEMO BRANDS)</span>
          </p>
          <span className="rounded-full border border-nexora-border bg-nexora-surface/50 px-3 py-1 font-mono text-[11px] text-nexora-muted">
            100% Customizable Brand Placeholders
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DEMO_TRUSTED_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col justify-between rounded-xl border border-nexora-border/70 bg-nexora-navy/50 p-4 transition-all duration-200 hover:border-nexora-electric/50 hover:bg-nexora-surface/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-nexora-cyan">
                  {brand.code}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-nexora-lime/70 group-hover:bg-nexora-lime" />
              </div>
              <p className="mt-3 font-display text-sm font-bold tracking-wider text-nexora-text">
                {brand.name}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-nexora-subtle">
                {brand.sector}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
