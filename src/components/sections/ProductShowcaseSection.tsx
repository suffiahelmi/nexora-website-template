"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, ShieldAlert, Cpu, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

const SHOWCASE_TABS = [
  {
    id: "topology",
    label: "01 // Topology Routing",
    icon: Cpu,
    headline: "Anycast BGP Ingress + Latency-Weighted Quorum",
    summary:
      "Define regional failover budgets and deterministic routing policies in declarative TypeScript manifests. Zero manual DNS intervention required.",
    metrics: [
      { label: "Failover Convergence", value: "38 ms" },
      { label: "Active PoPs", value: "42 Global Zones" },
      { label: "Packet Loss Recovery", value: "FEC Enabled" },
    ],
    terminalTitle: "nexora.topology.ts",
    code: `export default defineMesh({
  cluster: "global-settlement-core",
  ingress: "anycast-bgp-v6",
  quorumRegions: ["us-east-1", "eu-central-1", "ap-northeast-1"],
  healthCheck: {
    intervalMs: 250,
    unhealthyThreshold: 2,
    autoDrainConnections: true,
  },
});`,
  },
  {
    id: "enclave",
    label: "02 // Enclave Security",
    icon: ShieldAlert,
    headline: "Hardware-Attested Micro-VMs & 15-Minute mTLS",
    summary:
      "Every container executes inside a cryptographically signed enclave with short-lived X.509 identity certificates and strict kernel syscall filters.",
    metrics: [
      { label: "Identity Rotation", value: "Every 15m" },
      { label: "Cipher Suite", value: "ChaCha20-Poly1305" },
      { label: "Memory Isolation", value: "Hardware KVM" },
    ],
    terminalTitle: "enclave-policy.yaml",
    code: `securityPolicy:
  enclaveMode: "hardware-attested-microvm"
  mtls:
    enforceStrict: true
    rotationInterval: "15m"
    rootAuthority: "hsm-custody-vault"
  egress:
    defaultPolicy: "DENY_ALL"
    allowedEndpoints:
      - "telemetry.internal.nexora.mesh:443"`,
  },
  {
    id: "ebpf",
    label: "03 // eBPF Observability",
    icon: Terminal,
    headline: "Zero-Instrumentation Linux Kernel Telemetry",
    summary:
      "Capture TCP retransmits, TLS handshakes, and database query spans directly from kernel space without injecting heavy agents into application code.",
    metrics: [
      { label: "Agent CPU Overhead", value: "< 0.4%" },
      { label: "Trace Resolution", value: "Nanosecond" },
      { label: "Retention Format", value: "Columnar Parquet" },
    ],
    terminalTitle: "nexora-trace-stream.log",
    code: `$ nexora trace tail --service=payment-authorizer --p99-only
[22:14:01.004] SPAN_OK  svc=payment-authorizer  region=fra-02  dur=1.18ms  mtls=VERIFIED
[22:14:01.089] SPAN_OK  svc=ledger-quorum-sync  region=iad-01  dur=1.41ms  mtls=VERIFIED
[22:14:01.210] AUTO_HEAL node=ap-hnd-14         action=REBALANCE_SHARD     dur=0.38ms`,
  },
];

export function ProductShowcaseSection() {
  const [activeTabId, setActiveTabId] = useState(SHOWCASE_TABS[0].id);
  const currentTab =
    SHOWCASE_TABS.find((t) => t.id === activeTabId) || SHOWCASE_TABS[0];

  return (
    <section className="border-t border-nexora-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERACTIVE PRODUCT SHOWCASE"
          title="Inspect the control plane from declarative manifest to kernel trace."
          description="Switch between NEXORA subsystems below to preview how topology routing, zero-trust enclaves, and eBPF telemetry operate in concert."
          accent="cyan"
        />

        {/* Subsystem Selector Buttons */}
        <div
          className="mt-10 flex flex-wrap gap-3"
          role="tablist"
          aria-label="Product Subsystem Showcase"
        >
          {SHOWCASE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTabId(tab.id)}
                className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-3 font-mono text-xs sm:text-sm transition-all ${
                  isSelected
                    ? "bg-nexora-electric text-white shadow-electric-glow border border-nexora-cyan/40"
                    : "bg-nexora-navy/80 text-nexora-muted border border-nexora-border hover:text-nexora-text hover:border-nexora-electric/40"
                }`}
              >
                <Icon className="h-4 w-4 text-nexora-lime" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Panel */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Narrative & Metrics */}
          <GlowCard accent="electric" className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-nexora-lime/10 border border-nexora-lime/30 px-3 py-1 font-mono text-xs text-nexora-lime">
                <Check className="h-3.5 w-3.5" /> Deterministic Subsystem
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-nexora-text">
                {currentTab.headline}
              </h3>
              <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                {currentTab.summary}
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-nexora-border pt-6">
              <div className="grid grid-cols-3 gap-3">
                {currentTab.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-nexora-border/80 bg-nexora-midnight/70 p-3"
                  >
                    <p className="font-mono text-[10px] uppercase text-nexora-muted">
                      {m.label}
                    </p>
                    <p className="mt-1 font-display text-base sm:text-lg font-bold text-nexora-cyan">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 font-mono text-xs text-nexora-lime hover:text-nexora-cyan transition-colors"
                >
                  <span>See Industry Workflow Solutions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </GlowCard>

          {/* Right Code & Telemetry Window */}
          <div className="lg:col-span-7 rounded-2xl border border-nexora-cyan/30 bg-nexora-midnight p-5 sm:p-7 shadow-cyan-glow flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-nexora-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-nexora-electric" />
                  <span className="h-2.5 w-2.5 rounded-full bg-nexora-cyan" />
                  <span className="h-2.5 w-2.5 rounded-full bg-nexora-lime" />
                  <span className="ml-2 font-mono text-xs text-nexora-text">
                    {currentTab.terminalTitle}
                  </span>
                </div>
                <span className="rounded bg-nexora-surface px-2.5 py-1 font-mono text-[10px] text-nexora-cyan uppercase">
                  Illustrative Config
                </span>
              </div>

              <pre className="mt-5 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-nexora-text">
                <code>{currentTab.code}</code>
              </pre>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-nexora-border/70 pt-4 font-mono text-xs text-nexora-muted">
              <span>STATUS: SCHEMA_VALIDATED</span>
              <span className="text-nexora-lime">ZERO SECRETS EXPOSED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
