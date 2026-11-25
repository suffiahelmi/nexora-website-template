import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DashboardPreview } from "./DashboardPreview";
import { TELEMETRY_METRICS } from "@/data/nexoraData";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24">
      {/* Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-nexora-radial"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-nexora-lime-glow"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 12-Column Hero Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left 6 Columns: High-Contrast Copy */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="lime" pulse>
              NEXORA CORE 4.8 // ENTERPRISE CLOUD PLATFORM
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.06]">
              Orchestrate distributed systems at{" "}
              <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                sub-millisecond
              </span>{" "}
              scale.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-nexora-muted leading-relaxed">
              NEXORA unifies global edge compute, zero-trust hardware enclaves,
              and real-time eBPF kernel telemetry into a single deterministic
              control plane built for high-velocity engineering teams.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-nexora-electric px-7 py-3.5 text-base font-medium text-white shadow-electric-glow border border-nexora-cyan/30 hover:bg-nexora-electric/90 transition-all"
              >
                <span>Request Interactive Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-nexora-border bg-nexora-surface/80 px-7 py-3.5 text-base font-medium text-nexora-text hover:border-nexora-electric/50 hover:bg-nexora-surface transition-all"
              >
                <Layers className="h-4 w-4 text-nexora-lime" />
                <span>Explore Architecture</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs font-mono text-nexora-muted">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-nexora-cyan" />
                Zero cold-start edge mesh
              </span>
              <span>•</span>
              <span>Hardware mTLS Enclaves</span>
              <span>•</span>
              <span className="text-nexora-lime">Sample Benchmark Data</span>
            </div>
          </div>

          {/* Right 6 Columns: Interactive Dashboard Preview */}
          <div className="lg:col-span-6">
            <DashboardPreview />
          </div>
        </div>

        {/* Bottom Telemetry Metric Strip */}
        <div
          id="telemetry"
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TELEMETRY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="rounded-xl border border-nexora-border/80 bg-nexora-navy/75 p-5 backdrop-blur-md transition-colors hover:border-nexora-electric/50"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-nexora-muted">
                  {metric.label}
                </span>
                <span className="rounded bg-nexora-lime/10 border border-nexora-lime/30 px-2 py-0.5 font-mono text-[11px] text-nexora-lime">
                  {metric.delta}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl sm:text-3xl font-bold text-nexora-text">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
