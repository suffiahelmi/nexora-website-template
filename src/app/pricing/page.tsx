import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqAccordionSection } from "@/components/sections/FaqAccordionSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export const metadata: Metadata = {
  title: "Pricing & Compute Tiers — NEXORA Enterprise SaaS Platform",
  description:
    "Compare NEXORA's illustrative Velocity, Hyperion Scale, and Sovereign Cloud pricing tiers with interactive monthly/annual billing and full feature matrix.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PricingSection showComparison={true} />
        <FaqAccordionSection limit={4} showCategoryFilter={false} />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
