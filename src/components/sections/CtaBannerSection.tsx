import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden border-t border-nexora-border/60 py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-nexora-radial"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-nexora-electric/50 bg-gradient-to-br from-nexora-navy via-nexora-midnight to-nexora-surface p-8 sm:p-12 lg:p-16 shadow-electric-glow">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="lime" pulse>
                READY FOR PRODUCTION DEPLOYMENT
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-nexora-text leading-tight">
                Deploy your deterministic edge mesh in under 60 seconds.
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-nexora-muted">
                Schedule an architectural walk-through with our systems team or explore the interactive CLI and documentation right now.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-nexora-lime px-6 py-4 text-sm sm:text-base font-bold text-nexora-midnight shadow-lime-glow hover:bg-nexora-lime/90 transition-all"
              >
                <span>Schedule Architecture Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-nexora-border bg-nexora-midnight/80 px-6 py-4 text-sm font-mono text-nexora-text hover:border-nexora-cyan transition-all"
              >
                <Terminal className="h-4 w-4 text-nexora-cyan" />
                <span>Compare Compute Tiers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
