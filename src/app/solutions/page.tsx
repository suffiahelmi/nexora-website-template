import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Shield, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { SOLUTIONS_USE_CASES } from "@/data/nexoraData";

export const metadata: Metadata = {
  title: "Industry Solutions & Workflows — NEXORA Enterprise SaaS Platform",
  description:
    "Discover how NEXORA powers financial settlement ledgers, isolated multi-tenant SaaS platforms, global edge telemetry ingestion, and internal developer platforms.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-nexora-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-nexora-radial"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <Badge variant="lime" pulse>
                INDUSTRY ARCHITECTURES & WORKFLOWS
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Blueprints engineered for{" "}
                <span className="bg-gradient-to-r from-nexora-lime via-nexora-cyan to-nexora-electric bg-clip-text text-transparent">
                  mission-critical
                </span>{" "}
                scale.
              </h1>
              <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
                Explore how engineering organizations deploy NEXORA across regulated financial systems, multi-tenant B2B SaaS environments, and real-time data pipelines.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-6 py-3.5 text-sm font-medium text-white shadow-electric-glow hover:bg-nexora-electric/90 transition-all"
                >
                  <span>Request Custom Architecture Review</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/integrations"
                  className="inline-flex items-center gap-2 rounded-xl border border-nexora-border bg-nexora-surface/80 px-6 py-3.5 text-sm font-mono text-nexora-text hover:border-nexora-cyan transition-all"
                >
                  <span>Browse Ecosystem Integrations</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Solutions Blueprints */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              eyebrow="PRODUCTION USE CASES"
              title="Four proven deployment architectures."
              description="Each solution combines NEXORA edge routing, enclave isolation, and telemetry streaming into a repeatable workflow."
              accent="electric"
            />

            <div className="space-y-10">
              {SOLUTIONS_USE_CASES.map((solution) => (
                <GlowCard
                  key={solution.id}
                  accent={solution.accent}
                  className="p-6 sm:p-10"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                    {/* Left Column: Problem & Outcome */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-md bg-nexora-electric/20 border border-nexora-electric/40 px-2.5 py-1 font-mono text-xs text-nexora-cyan">
                          {solution.badge}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-nexora-muted">
                          {solution.industry}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-nexora-text">
                        {solution.title}
                      </h2>
                      <p className="text-base text-nexora-muted leading-relaxed">
                        {solution.summary}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-xl border border-nexora-border/80 bg-nexora-midnight/70 p-4">
                          <p className="font-mono text-xs uppercase text-nexora-subtle">
                            Legacy Bottleneck
                          </p>
                          <p className="mt-1.5 text-xs sm:text-sm text-nexora-muted leading-relaxed">
                            {solution.challenge}
                          </p>
                        </div>

                        <div className="rounded-xl border border-nexora-lime/40 bg-nexora-lime/5 p-4">
                          <p className="font-mono text-xs uppercase text-nexora-lime">
                            NEXORA Outcome
                          </p>
                          <p className="mt-1.5 text-xs sm:text-sm text-nexora-text leading-relaxed">
                            {solution.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Execution Pipeline Workflow */}
                    <div className="lg:col-span-5 rounded-2xl border border-nexora-border bg-nexora-midnight/90 p-6 space-y-5">
                      <div className="flex items-center justify-between border-b border-nexora-border pb-3">
                        <div className="flex items-center gap-2">
                          <Workflow className="h-4 w-4 text-nexora-cyan" />
                          <span className="font-mono text-xs uppercase text-nexora-text">
                            Execution Pipeline
                          </span>
                        </div>
                        <span className="font-mono text-xs text-nexora-lime">
                          {solution.metricHighlight}
                        </span>
                      </div>

                      <ol className="space-y-3">
                        {solution.workflowSteps.map((step, idx) => (
                          <li
                            key={step}
                            className="flex items-center gap-3 rounded-xl border border-nexora-border/70 bg-nexora-navy/80 px-4 py-3"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-nexora-electric/20 border border-nexora-electric/40 font-mono text-xs text-nexora-cyan">
                              0{idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-nexora-text">
                              {step}
                            </span>
                            <CheckCircle2 className="ml-auto h-4 w-4 text-nexora-lime shrink-0" />
                          </li>
                        ))}
                      </ol>

                      <div className="pt-2">
                        <Link
                          href={`/contact?solution=${solution.id}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-nexora-surface border border-nexora-border px-4 py-3 font-mono text-xs text-nexora-text hover:border-nexora-cyan hover:text-nexora-cyan transition-all"
                        >
                          <span>Deploy This Blueprint</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Industry Value Guarantees */}
        <section className="border-t border-nexora-border/60 bg-nexora-navy/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <GlowCard accent="cyan">
                <Layers className="h-7 w-7 text-nexora-cyan mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Zero Vendor Lock-In
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Run identical topology manifests across major public clouds, sovereign regional hosts, or on-premise bare metal.
                </p>
              </GlowCard>

              <GlowCard accent="lime">
                <Shield className="h-7 w-7 text-nexora-lime mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Data Residency Locks
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Pin regulated payloads and telemetry streams to specific geographic jurisdictions with cryptographic policy enforcement.
                </p>
              </GlowCard>

              <GlowCard accent="electric">
                <Workflow className="h-7 w-7 text-nexora-electric mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Git-Driven Operations
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Manage routing rules, enclave policies, and canary rollouts via pull requests with instant rollback capability.
                </p>
              </GlowCard>
            </div>
          </div>
        </section>

        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
