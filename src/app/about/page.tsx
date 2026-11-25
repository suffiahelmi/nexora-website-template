import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Compass, Target, ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import {
  DEMO_TEAM_MEMBERS,
  COMPANY_VALUES,
  COMPANY_MILESTONES,
  TELEMETRY_METRICS,
} from "@/data/nexoraData";

export const metadata: Metadata = {
  title: "About NEXORA — Mission, Engineering Values & Leadership",
  description:
    "Learn about NEXORA's mission to make distributed systems deterministic, our engineering principles, and our clearly labeled demo leadership team.",
};

export default function AboutPage() {
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
              <Badge variant="electric" pulse>
                COMPANY STORY & ENGINEERING PHILOSOPHY
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Architecting the deterministic backbone for{" "}
                <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                  modern software.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
                NEXORA was designed around a simple premise: engineering teams shouldn&apos;t need three separate vendors and hundreds of fragile scripts just to route traffic, isolate workloads, and inspect production latency.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TELEMETRY_METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-xl border border-nexora-border/80 bg-nexora-navy/75 p-5"
                >
                  <p className="font-mono text-xs uppercase text-nexora-muted">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold text-nexora-text">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-mono text-xs text-nexora-lime">
                    {metric.delta} (Sample Benchmark)
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Split */}
        <section className="py-20 lg:py-28 bg-nexora-navy/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <GlowCard accent="electric" className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-nexora-cyan">
                  <Target className="h-4 w-4 text-nexora-lime" />
                  <span>01 // OUR MISSION</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-nexora-text">
                  Eliminate operational entropy across global cloud infrastructure.
                </h2>
                <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                  We empower software organizations to deploy code across 42 low-latency zones with mathematical certainty, hardware-level cryptographic isolation, and zero-overhead kernel observability.
                </p>
              </GlowCard>

              <GlowCard accent="lime" className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-nexora-lime">
                  <Compass className="h-4 w-4 text-nexora-cyan" />
                  <span>02 // OUR VISION</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-nexora-text">
                  A self-healing global compute mesh where outages are architected out.
                </h2>
                <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
                  We envision an infrastructure standard where regional failovers happen in milliseconds, mTLS identities rotate continuously, and developers focus 100% of their energy on product innovation.
                </p>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Company Story & Timeline */}
        <section className="border-t border-nexora-border/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="CHRONOLOGY (FICTIONAL DEMO TIMELINE)"
              title="From kernel research to autonomous control plane."
              description="An illustrative company timeline showing how milestone progressions are styled in the NEXORA commercial template."
              accent="cyan"
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {COMPANY_MILESTONES.map((m) => (
                <div
                  key={m.year}
                  className="rounded-2xl border border-nexora-border bg-nexora-navy/70 p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="inline-block rounded-md bg-nexora-electric/20 border border-nexora-electric/40 px-2.5 py-1 font-mono text-xs text-nexora-cyan">
                      {m.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-nexora-text">
                      {m.title}
                    </h3>
                    <p className="text-sm text-nexora-muted leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Values */}
        <section className="border-t border-nexora-border/60 bg-nexora-navy/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="CORE PRINCIPLES"
              title="The engineering values that govern our codebase."
              accent="electric"
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {COMPANY_VALUES.map((val) => (
                <GlowCard key={val.id} accent="electric">
                  <span className="font-mono text-xs uppercase tracking-widest text-nexora-lime">
                    {val.code}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-nexora-text">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-nexora-muted leading-relaxed">
                    {val.description}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section (Clearly Identified Demo Profiles) */}
        <section
          id="team"
          className="border-t border-nexora-border/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="LEADERSHIP DIRECTORY (DEMO PROFILES)"
                title="Systems architects & kernel engineers."
                description="All profiles below are fictional demo personas designed for easy replacement in src/data/nexoraData.ts."
                accent="lime"
              />
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-nexora-lime/40 bg-nexora-lime/10 px-3.5 py-1.5 font-mono text-xs text-nexora-lime">
                <ShieldCheck className="h-4 w-4" />
                Fictional Sample Profiles
              </span>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DEMO_TEAM_MEMBERS.map((member) => (
                <GlowCard
                  key={member.id}
                  accent="cyan"
                  className="flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nexora-electric to-nexora-cyan font-display text-lg font-bold text-white shadow-electric-glow">
                        {member.initials}
                      </div>
                      <span className="rounded bg-nexora-surface px-2 py-0.5 font-mono text-[10px] text-nexora-lime uppercase">
                        Demo Profile
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-nexora-text">
                        {member.name}
                      </h3>
                      <p className="font-mono text-xs text-nexora-cyan mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-nexora-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-nexora-border/70 pt-3 flex items-center justify-between font-mono text-[11px] text-nexora-subtle">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-nexora-lime" />
                      {member.location}
                    </span>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-nexora-border bg-nexora-navy/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-nexora-text">
                  Want to connect with our architecture team?
                </h3>
                <p className="text-sm text-nexora-muted">
                  Use our validated contact form to request a technical briefing or template customization inquiry.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-5 py-3 text-sm font-medium text-white shadow-electric-glow shrink-0"
              >
                <span>Contact NEXORA</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
