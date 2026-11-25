"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Info } from "lucide-react";
import { PRICING_TIERS, PRICING_COMPARISON } from "@/data/nexoraData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function PricingSection({
  showComparison = false,
}: {
  showComparison?: boolean;
}) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section
      id="pricing"
      className="relative border-t border-nexora-border/60 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="PREDICTABLE COMPUTE TIERS (DEMO PRICING)"
            title="Transparent infrastructure pricing that scales with throughput."
            description="All prices below are illustrative commercial template tiers. Toggle between Monthly and Annual billing to preview real-time pricing calculation."
            accent="lime"
            align="center"
          />

          {/* Interactive Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-nexora-border bg-nexora-navy p-1.5">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`rounded-xl px-5 py-2 font-mono text-xs sm:text-sm transition-all ${
                billingCycle === "monthly"
                  ? "bg-nexora-electric text-white shadow-electric-glow"
                  : "text-nexora-muted hover:text-nexora-text"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              aria-pressed={billingCycle === "annual"}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2 font-mono text-xs sm:text-sm transition-all ${
                billingCycle === "annual"
                  ? "bg-nexora-electric text-white shadow-electric-glow"
                  : "text-nexora-muted hover:text-nexora-text"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-nexora-lime px-2 py-0.5 text-[10px] font-bold text-nexora-midnight">
                SAVE 20%
              </span>
            </button>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-nexora-muted">
            <Info className="h-3.5 w-3.5 text-nexora-cyan" />
            <span>Demo Pricing Notice: No live payment processing is triggered.</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const activePrice =
              billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;

            return (
              <GlowCard
                key={tier.id}
                accent={tier.popular ? "lime" : "electric"}
                className={
                  tier.popular
                    ? "border-nexora-lime/60 ring-1 ring-nexora-lime/30"
                    : ""
                }
              >
                <div className="flex h-full flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold text-nexora-text">
                        {tier.name}
                      </h3>
                      {tier.popular ? (
                        <span className="rounded-full bg-nexora-lime px-3 py-0.5 font-mono text-[11px] font-bold uppercase text-nexora-midnight">
                          Recommended
                        </span>
                      ) : (
                        <span className="rounded-full border border-nexora-border bg-nexora-surface/60 px-2.5 py-0.5 font-mono text-[10px] text-nexora-muted">
                          Demo Tier
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-nexora-muted">{tier.tagline}</p>

                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-nexora-text">
                        ${activePrice}
                      </span>
                      <div className="flex flex-col font-mono text-xs text-nexora-muted">
                        <span>/ cluster / month</span>
                        <span className="text-[10px] text-nexora-cyan">
                          {billingCycle === "annual"
                            ? "Billed annually (Demo)"
                            : "Billed monthly (Demo)"}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-nexora-border/80 bg-nexora-midnight/60 px-3 py-2 font-mono text-xs text-nexora-lime">
                      SLA Target: {tier.sla}
                    </div>

                    <ul className="space-y-3 pt-4 border-t border-nexora-border/70">
                      {tier.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-nexora-text"
                        >
                          <Check className="h-4 w-4 shrink-0 text-nexora-lime mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-nexora-lime text-nexora-midnight shadow-lime-glow hover:bg-nexora-lime/90"
                        : "bg-nexora-surface text-nexora-text border border-nexora-border hover:border-nexora-electric/60 hover:bg-nexora-electric hover:text-white"
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Optional Full Comparison Table */}
        {showComparison && (
          <div id="comparison" className="mt-20 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-nexora-text">
                  Technical Capability Matrix
                </h3>
                <p className="text-sm text-nexora-muted">
                  Detailed side-by-side specification comparison across all demo tiers.
                </p>
              </div>
              <span className="font-mono text-xs text-nexora-cyan">
                ILLUSTRATIVE SPECIFICATION MATRIX
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-nexora-border bg-nexora-navy/80">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-nexora-border bg-nexora-midnight/80 font-mono text-xs uppercase text-nexora-muted">
                    <th className="py-4 px-6">Capability / Subsystem</th>
                    <th className="py-4 px-6">Velocity</th>
                    <th className="py-4 px-6 text-nexora-lime">Hyperion Scale</th>
                    <th className="py-4 px-6 text-nexora-cyan">Sovereign Cloud</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-nexora-border/60 text-sm">
                  {PRICING_COMPARISON.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-nexora-surface/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-nexora-text">
                        <div>{row.feature}</div>
                        <div className="font-mono text-[10px] text-nexora-subtle">
                          {row.category}
                        </div>
                      </td>
                      {[row.velocity, row.hyperion, row.sovereign].map(
                        (val, idx) => (
                          <td key={idx} className="py-4 px-6 font-mono text-xs">
                            {typeof val === "boolean" ? (
                              val ? (
                                <span className="inline-flex items-center gap-1 text-nexora-lime">
                                  <Check className="h-4 w-4" /> Included
                                </span>
                              ) : (
                                <span className="text-nexora-subtle">—</span>
                              )
                            ) : (
                              <span className="text-nexora-text">{val}</span>
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
