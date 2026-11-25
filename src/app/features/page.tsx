import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Cpu,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Lock,
  Gauge,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { DEEP_FEATURE_BLOCKS, CORE_FEATURES } from "@/data/nexoraData";

export const metadata: Metadata = {
  title: "Features & Architecture — NEXORA Enterprise SaaS Platform",
  description:
    "Explore NEXORA's multi-region orchestration, zero-trust hardware enclaves, automated self-healing pipelines, and sub-millisecond eBPF observability.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-nexora-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-nexora-radial"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <Badge variant="electric" pulse>
                NEXORA PLATFORM CAPABILITIES // v4.8
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Full-stack deterministic control from{" "}
                <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                  edge ingress
                </span>{" "}
                to kernel trace.
              </h1>
              <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
                Replace fragmented point tools with a unified distributed engine. NEXORA integrates routing, cryptographic workload isolation, and real-time analytics in one high-contrast workspace.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-6 py-3.5 text-sm font-medium text-white shadow-electric-glow hover:bg-nexora-electric/90 transition-all"
                >
                  <span>Schedule Technical Deep-Dive</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 rounded-xl border border-nexora-border bg-nexora-surface/80 px-6 py-3.5 text-sm font-mono text-nexora-text hover:border-nexora-cyan transition-all"
                >
                  <Terminal className="h-4 w-4 text-nexora-lime" />
                  <span>Read CLI Quickstart</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Overview */}
        <section className="py-16 lg:py-24 bg-nexora-navy/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CORE_FEATURES.map((feat) => (
                <GlowCard key={feat.id} accent={feat.accent}>
                  <span className="font-mono text-xs uppercase tracking-widest text-nexora-cyan">
                    {feat.tag}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-nexora-text">
                    {feat.title}
                  </h2>
                  <p className="mt-2 text-sm text-nexora-muted leading-relaxed">
                    {feat.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-nexora-border/70 pt-4">
                    {feat.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs sm:text-sm text-nexora-text"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-nexora-lime mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Feature Deep-Dive Blocks + Product Mockups */}
        <section className="py-20 lg:py-28 space-y-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
            {DEEP_FEATURE_BLOCKS.map((block, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={block.id}
                  id={block.id}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                >
                  {/* Narrative Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Badge variant={block.accent} pulse>
                      {block.category}
                    </Badge>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-nexora-text">
                      {block.title}
                    </h2>
                    <p className="text-base font-medium text-nexora-cyan">
                      {block.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                      {block.description}
                    </p>

                    {/* Metric Mini-Bar */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {block.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-nexora-border bg-nexora-navy/80 p-3.5"
                        >
                          <p className="font-mono text-[10px] uppercase text-nexora-muted">
                            {m.label}
                          </p>
                          <p className="mt-1 font-display text-xl font-bold text-nexora-lime">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Capabilities List */}
                    <div className="space-y-4 pt-2">
                      {block.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="rounded-xl border border-nexora-border/70 bg-nexora-surface/40 p-4"
                        >
                          <h3 className="font-display text-base font-bold text-nexora-text">
                            {cap.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-nexora-muted">
                            {cap.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Dashboard / Code Mockup Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="rounded-2xl border border-nexora-electric/40 bg-nexora-navy/95 p-5 sm:p-7 shadow-electric-glow space-y-6">
                      {/* Mockup Window Header */}
                      <div className="flex items-center justify-between border-b border-nexora-border pb-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-nexora-electric" />
                          <span className="h-2.5 w-2.5 rounded-full bg-nexora-cyan" />
                          <span className="h-2.5 w-2.5 rounded-full bg-nexora-lime" />
                          <span className="ml-2 font-mono text-xs text-nexora-muted">
                            nexora://subsystem/{block.id}
                          </span>
                        </div>
                        <span className="rounded bg-nexora-lime/15 border border-nexora-lime/40 px-2.5 py-0.5 font-mono text-[10px] text-nexora-lime uppercase">
                          UI Mockup
                        </span>
                      </div>

                      {/* Graphical Telemetry Canvas inside Mockup */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl border border-nexora-border bg-nexora-midnight/85 p-4">
                          <div className="flex items-center justify-between text-xs font-mono text-nexora-muted">
                            <span>SUBSYSTEM STATUS</span>
                            <Activity className="h-4 w-4 text-nexora-cyan" />
                          </div>
                          <p className="mt-2 font-display text-lg font-bold text-nexora-text">
                            Deterministic Sync
                          </p>
                          <div className="mt-3 flex items-center gap-1.5">
                            {[75, 90, 65, 95, 88, 100, 92, 97].map((v, i) => (
                              <div
                                key={i}
                                className="h-8 flex-1 rounded-sm bg-nexora-electric/40 flex items-end"
                              >
                                <div
                                  className="w-full rounded-sm bg-nexora-cyan"
                                  style={{ height: `${v}%` }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-nexora-border bg-nexora-midnight/85 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-xs font-mono text-nexora-muted">
                            <span>VERIFICATION</span>
                            <ShieldCheck className="h-4 w-4 text-nexora-lime" />
                          </div>
                          <div>
                            <p className="font-display text-lg font-bold text-nexora-lime">
                              SHA-384 Attested
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-nexora-muted">
                              Zero policy violations
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Code / Telemetry Output */}
                      <div className="rounded-xl border border-nexora-border bg-nexora-midnight p-4">
                        <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-nexora-text">
                          <code>{block.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security & Performance Guarantee Strip */}
        <section className="border-t border-nexora-border/60 bg-nexora-navy/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="SECURITY & PERFORMANCE BENCHMARKS"
              title="Hardened isolation with zero runtime tax."
              description="Sample benchmark comparison illustrating how NEXORA reduces latency and operational overhead."
              accent="lime"
              align="center"
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <GlowCard accent="electric">
                <Lock className="h-7 w-7 text-nexora-cyan mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Automated mTLS Identity
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Short-lived SPIFFE/X.509 workload certificates rotate every 15 minutes without connection drops.
                </p>
              </GlowCard>

              <GlowCard accent="lime">
                <Gauge className="h-7 w-7 text-nexora-lime mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Wire-Speed Packet Path
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Kernel-bypass eBPF socket redirection eliminates proxy sidecar latency across intra-cluster hops.
                </p>
              </GlowCard>

              <GlowCard accent="cyan">
                <Cpu className="h-7 w-7 text-nexora-electric mb-4" />
                <h3 className="font-display text-xl font-bold text-nexora-text">
                  Ephemeral Micro-VMs
                </h3>
                <p className="mt-2 text-sm text-nexora-muted">
                  Workloads boot in isolated hypervisor sandboxes in under 12 milliseconds with strict memory boundaries.
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
