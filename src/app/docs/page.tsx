import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Terminal, Cpu, Shield, Layers, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";

export const metadata: Metadata = {
  title: "Documentation & CLI Reference — NEXORA Enterprise SaaS Platform",
  description:
    "Quickstart guide and architectural reference for the NEXORA control plane CLI, enclave policies, and OpenTelemetry schema.",
};

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-nexora-cyan hover:text-nexora-lime transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO CONTROL PLANE</span>
            </Link>
            <div>
              <Badge variant="electric" pulse>
                NEXORA DOCUMENTATION // v4.8
              </Badge>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-nexora-text">
              Quickstart & Template Reference
            </h1>
            <p className="text-lg text-nexora-muted">
              Illustrative CLI commands and architectural overview for the NEXORA commercial website template.
            </p>
          </div>

          <GlowCard accent="cyan" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-nexora-lime">
                <Terminal className="h-4 w-4" />
                <span>01 // CLI INITIALIZATION (ILLUSTRATIVE)</span>
              </div>
              <span className="font-mono text-[10px] text-nexora-muted uppercase">
                Sample Command
              </span>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-nexora-midnight p-4 font-mono text-xs sm:text-sm text-nexora-text border border-nexora-border">
              <code>{`# Install and initialize the illustrative NEXORA Control Plane CLI
npx nexora-cli@latest init --cluster=production-mesh

# Deploy workload with hardware mTLS enclave attestation
nexora deploy --regions=iad,fra,sin,hnd --zero-trust`}</code>
            </pre>
          </GlowCard>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <GlowCard accent="electric">
              <Cpu className="h-6 w-6 text-nexora-cyan mb-3" />
              <h2 className="font-display text-lg font-bold text-nexora-text">
                Edge Compute SDK
              </h2>
              <p className="mt-2 text-sm text-nexora-muted">
                TypeScript-native primitives for distributed state, durable queues, and low-latency edge execution.
              </p>
            </GlowCard>

            <GlowCard accent="lime">
              <Shield className="h-6 w-6 text-nexora-lime mb-3" />
              <h2 className="font-display text-lg font-bold text-nexora-text">
                Enclave Policy Engine
              </h2>
              <p className="mt-2 text-sm text-nexora-muted">
                Define cryptographic workload boundaries and automated 15-minute mTLS certificate rotation rules.
              </p>
            </GlowCard>

            <GlowCard accent="cyan">
              <Layers className="h-6 w-6 text-nexora-electric mb-3" />
              <h2 className="font-display text-lg font-bold text-nexora-text">
                Telemetry OTLP Stream
              </h2>
              <p className="mt-2 text-sm text-nexora-muted">
                Stream real-time eBPF kernel metrics and distributed traces directly into your observability lakehouse.
              </p>
            </GlowCard>
          </div>

          <GlowCard accent="lime" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-nexora-lime">
                TEMPLATE CUSTOMIZATION GUIDE
              </span>
              <h2 className="font-display text-xl font-bold text-nexora-text">
                Edit all copy, pricing, and brand data in one file
              </h2>
              <p className="text-sm text-nexora-muted">
                Open <code className="font-mono text-nexora-cyan">src/data/nexoraData.ts</code> to customize every page in seconds.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-5 py-3 text-sm font-medium text-white shadow-electric-glow shrink-0"
            >
              <span>Contact Support</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlowCard>
        </div>
      </main>
      <Footer />
    </>
  );
}
