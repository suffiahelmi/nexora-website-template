import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { SolutionsPreviewSection } from "@/components/sections/SolutionsPreviewSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqAccordionSection } from "@/components/sections/FaqAccordionSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <FeatureGridSection />
        <SolutionsPreviewSection />
        <ProductShowcaseSection />
        <TestimonialsSection />
        <PricingSection showComparison={false} />
        <FaqAccordionSection limit={4} showCategoryFilter={false} />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
