"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Info, Plug, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { INTEGRATIONS_DIRECTORY, type IntegrationItem } from "@/data/nexoraData";
import { GlowCard } from "@/components/ui/GlowCard";

const CATEGORIES = [
  "All",
  "Observability",
  "Cloud & Edge",
  "Security & IAM",
  "Data & Messaging",
  "DevOps & CI/CD",
] as const;

export function IntegrationsDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<IntegrationItem | null>(null);

  const filteredIntegrations = INTEGRATIONS_DIRECTORY.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.protocol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-10">
      {/* Transparency Banner Distinguishing Illustrative vs. Webhook Ready */}
      <div className="rounded-2xl border border-nexora-cyan/40 bg-nexora-navy/90 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <Info className="h-5 w-5 text-nexora-cyan shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-semibold text-nexora-text">
              Commercial Template Integration Transparency
            </p>
            <p className="text-nexora-muted">
              Cards badged{" "}
              <span className="font-mono text-nexora-lime">Webhook Ready</span>{" "}
              represent standard HTTP/JSON or OTLP schema patterns you can wire directly to your endpoints. Cards badged{" "}
              <span className="font-mono text-nexora-cyan">Template UI Demo</span>{" "}
              are illustrative directory entries for showcasing ecosystem breadth—no live third-party credentials or backend connections are bundled.
            </p>
          </div>
        </div>
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 rounded-xl border border-nexora-border bg-nexora-midnight px-4 py-2.5 font-mono text-xs text-nexora-cyan hover:border-nexora-cyan shrink-0"
        >
          <span>View Schema Docs</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-nexora-muted" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by connector, protocol (e.g., OTLP, mTLS, Webhook)..."
            aria-label="Search integrations"
            className="w-full rounded-xl border border-nexora-border bg-nexora-navy/90 py-3 pl-11 pr-4 text-sm text-nexora-text placeholder:text-nexora-subtle focus:border-nexora-cyan focus:outline-none focus:ring-1 focus:ring-nexora-cyan"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Integration Categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                activeCategory === category
                  ? "bg-nexora-electric text-white shadow-electric-glow"
                  : "border border-nexora-border bg-nexora-navy/70 text-nexora-muted hover:text-nexora-text"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Integration Spec Drawer / Banner */}
      {selectedItem && (
        <div className="rounded-2xl border border-nexora-lime/60 bg-nexora-midnight p-6 shadow-lime-glow space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-nexora-border pb-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-5 w-5 text-nexora-lime" />
              <h3 className="font-display text-xl font-bold text-nexora-text">
                {selectedItem.name} — Sample Configuration Preview
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="rounded-lg border border-nexora-border px-3 py-1 font-mono text-xs text-nexora-muted hover:text-nexora-text"
            >
              Close Preview
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-nexora-navy/90 p-4 font-mono text-xs text-nexora-cyan border border-nexora-border">
            <code>{`# Sample NEXORA Connector Manifest (${selectedItem.status})
connector:
  id: "${selectedItem.id}"
  category: "${selectedItem.category}"
  protocol: "${selectedItem.protocol}"
  endpoint: "https://your-endpoint.example.com/nexora-ingest"
  tls_verify: true`}</code>
          </pre>
        </div>
      )}

      {/* Integration Cards Grid */}
      {filteredIntegrations.length === 0 ? (
        <div className="rounded-2xl border border-nexora-border bg-nexora-navy/50 p-12 text-center space-y-3">
          <p className="font-display text-xl font-bold text-nexora-text">
            No matching connectors found
          </p>
          <p className="text-sm text-nexora-muted">
            Try clearing your search filter or switching to &ldquo;All&rdquo; categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-2 inline-flex items-center rounded-xl bg-nexora-electric px-4 py-2 font-mono text-xs text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((item) => {
            const isWebhookReady = item.status === "Webhook Ready";
            return (
              <GlowCard
                key={item.id}
                accent={item.accent}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase text-nexora-muted">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] border ${
                        isWebhookReady
                          ? "bg-nexora-lime/10 border-nexora-lime/40 text-nexora-lime"
                          : "bg-nexora-cyan/10 border-nexora-cyan/30 text-nexora-cyan"
                      }`}
                    >
                      {isWebhookReady ? (
                        <CheckCircle2 className="h-3 w-3" />
                      ) : (
                        <Plug className="h-3 w-3" />
                      )}
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-nexora-text">
                    {item.name}
                  </h3>
                  <p className="text-sm text-nexora-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 space-y-4 border-t border-nexora-border/70 pt-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-nexora-subtle">
                      Protocol: <strong className="text-nexora-text">{item.protocol}</strong>
                    </span>
                    <span className="text-nexora-lime">{item.setupTime}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-nexora-border bg-nexora-midnight/80 px-4 py-2.5 font-mono text-xs text-nexora-text hover:border-nexora-cyan hover:text-nexora-cyan transition-colors"
                  >
                    <span>Inspect Sample Manifest</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </GlowCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
