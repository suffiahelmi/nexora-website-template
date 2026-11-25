import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordionSection } from "@/components/sections/FaqAccordionSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — NEXORA Enterprise SaaS Platform",
  description:
    "Interactive FAQ covering NEXORA distributed architecture, zero-trust hardware enclaves, demo pricing tiers, and commercial template customization.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div
            className="pointer-events-none absolute inset-0 bg-nexora-radial"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">
              <Badge variant="cyan" pulse>
                KNOWLEDGE BASE & ARCHITECTURAL FAQ
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Answers for engineers, architects, and{" "}
                <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                  template buyers.
                </span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-nexora-muted leading-relaxed">
                Filter questions by category below or expand individual items to inspect how NEXORA handles routing, security, and template customization.
              </p>
            </div>
          </div>
        </section>

        {/* Full Interactive FAQ Accordion with Category Filtering */}
        <FaqAccordionSection showCategoryFilter={true} />

        {/* Still Have Questions Prompt */}
        <section className="pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-nexora-border bg-nexora-navy/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-7 w-7 text-nexora-lime shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl font-bold text-nexora-text">
                    Need a custom architecture briefing?
                  </h2>
                  <p className="mt-1 text-sm text-nexora-muted">
                    Reach out directly to our solutions engineering team via our validated inquiry form.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-5 py-3 text-sm font-medium text-white shadow-electric-glow shrink-0"
              >
                <span>Submit Inquiry</span>
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
