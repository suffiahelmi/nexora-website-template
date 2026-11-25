"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQ_ITEMS } from "@/data/nexoraData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

export function FaqAccordionSection({
  limit,
  showCategoryFilter = true,
}: {
  limit?: number;
  showCategoryFilter?: boolean;
}) {
  const categories = [
    "All",
    "Architecture",
    "Security & Compliance",
    "Billing & Plans",
    "Template Customization",
  ] as const;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filteredFaqs = FAQ_ITEMS.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <section className="border-t border-nexora-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="TECHNICAL & TEMPLATE FAQ"
            title="Clear answers on architecture, security, and template customization."
            accent="cyan"
          />
          {limit && (
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-nexora-lime hover:text-nexora-cyan transition-colors shrink-0"
            >
              <span>View All {FAQ_ITEMS.length} Questions</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Category Filter Pills */}
        {showCategoryFilter && (
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-xl px-4 py-2 font-mono text-xs transition-all",
                  selectedCategory === cat
                    ? "bg-nexora-electric text-white shadow-electric-glow"
                    : "bg-nexora-navy border border-nexora-border text-nexora-muted hover:text-nexora-text"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion Items */}
        <div className="mt-10 space-y-4">
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200",
                  isOpen
                    ? "border-nexora-electric/60 bg-nexora-navy/90 shadow-electric-glow"
                    : "border-nexora-border/80 bg-nexora-navy/50 hover:border-nexora-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-nexora-cyan">
                      {faq.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-nexora-text">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-nexora-lime transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-nexora-border/60 px-6 pt-4 pb-6 text-sm sm:text-base text-nexora-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
