import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { IntegrationsDirectoryClient } from "@/components/sections/IntegrationsDirectoryClient";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export const metadata: Metadata = {
  title: "Integrations Directory — NEXORA Enterprise SaaS Platform",
  description:
    "Browse NEXORA's ecosystem directory across OpenTelemetry observability, cloud & edge providers, zero-trust IAM, and webhook event buses.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-20 border-b border-nexora-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-nexora-radial"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <Badge variant="cyan" pulse>
                EXTENSIBLE ECOSYSTEM & SCHEMAS
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Connect your telemetry, identity, and{" "}
                <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                  GitOps pipelines.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
                Filter our integration directory by category or protocol. Every card clearly distinguishes between webhook-ready payload schemas and illustrative template UI connectors.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Directory */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <IntegrationsDirectoryClient />
          </div>
        </section>

        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
