"use client";

import React, { useState } from "react";
import { Activity, Cpu, ShieldCheck, Zap, Terminal, Globe } from "lucide-react";

const REGIONS = [
  {
    id: "us-east",
    label: "US-EAST // IAD-01",
    throughput: "14.82M",
    latency: "1.42ms",
    nodes: "1,420 Nodes",
    bars: [48, 62, 55, 74, 68, 86, 79, 92, 74, 89, 96, 100, 88, 95],
  },
  {
    id: "eu-central",
    label: "EU-CENTRAL // FRA-02",
    throughput: "11.34M",
    latency: "1.18ms",
    nodes: "1,280 Nodes",
    bars: [42, 51, 63, 59, 75, 81, 84, 78, 90, 94, 87, 92, 97, 91],
  },
  {
    id: "ap-northeast",
    label: "AP-EAST // HND-01",
    throughput: "9.68M",
    latency: "1.54ms",
    nodes: "1,140 Nodes",
    bars: [55, 49, 64, 72, 69, 77, 85, 89, 82, 91, 95, 88, 93, 98],
  },
];

export function DashboardPreview() {
  const [activeRegionIdx, setActiveRegionIdx] = useState(0);
  const current = REGIONS[activeRegionIdx];

  return (
    <div className="relative rounded-2xl border border-nexora-electric/40 bg-nexora-navy/95 p-4 sm:p-6 shadow-electric-glow backdrop-blur-2xl">
      {/* Top Window Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-nexora-border pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-nexora-electric" />
          <span className="h-2.5 w-2.5 rounded-full bg-nexora-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-nexora-lime" />
          <span className="ml-2 font-mono text-xs text-nexora-muted">
            nexora://control-plane/{current.id}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-nexora-lime/15 border border-nexora-lime/40 px-2 py-0.5 font-mono text-[11px] text-nexora-lime">
            P99: {current.latency}
          </span>
        </div>
      </div>

      {/* Interactive Region Switcher Tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Cluster Region Telemetry">
        {REGIONS.map((region, idx) => (
          <button
            key={region.id}
            type="button"
            role="tab"
            aria-selected={activeRegionIdx === idx}
            onClick={() => setActiveRegionIdx(idx)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
              activeRegionIdx === idx
                ? "bg-nexora-electric text-white shadow-electric-glow"
                : "bg-nexora-midnight/70 text-nexora-muted border border-nexora-border hover:text-nexora-text"
            }`}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{region.label}</span>
          </button>
        ))}
      </div>

      {/* Asymmetric Dashboard Grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
        {/* Left Main Telemetry Panel */}
        <div className="sm:col-span-7 rounded-xl border border-nexora-border bg-nexora-midnight/85 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-nexora-cyan" />
              <span className="font-mono text-xs uppercase tracking-wider text-nexora-muted">
                Edge Mesh Throughput
              </span>
            </div>
            <span className="font-mono text-xs text-nexora-lime">+24.6% Live</span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl font-bold text-nexora-text">
              {current.throughput}{" "}
              <span className="text-sm font-normal text-nexora-muted">req/sec</span>
            </span>
          </div>

          {/* Geometric Bar Visualizer */}
          <div className="flex h-24 items-end gap-1.5 pt-2" aria-hidden="true">
            {current.bars.map((height, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-t transition-all duration-500"
                style={{
                  height: `${height}%`,
                  background:
                    idx >= 10
                      ? "linear-gradient(180deg, #CCFF00 0%, #0066FF 100%)"
                      : "linear-gradient(180deg, #00D4FF 0%, rgba(0, 102, 255, 0.25) 100%)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Stack Status Cards */}
        <div className="sm:col-span-5 flex flex-col justify-between gap-4">
          <div className="rounded-xl border border-nexora-border bg-nexora-midnight/85 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-nexora-muted">ENCLAVE ATTESTATION</span>
              <ShieldCheck className="h-4 w-4 text-nexora-lime" />
            </div>
            <p className="mt-2 font-display text-xl font-bold text-nexora-text">
              mTLS Zero-Trust
            </p>
            <p className="mt-1 font-mono text-[11px] text-nexora-cyan">
              SHA-384 Hardware Verified
            </p>
          </div>

          <div className="rounded-xl border border-nexora-border bg-nexora-midnight/85 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-nexora-muted">ACTIVE NODES</span>
              <Cpu className="h-4 w-4 text-nexora-electric" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-display text-xl font-bold text-nexora-text">
                {current.nodes}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-nexora-lime">
                <Zap className="h-3 w-3" /> 99.998%
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-nexora-surface">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-nexora-electric via-nexora-cyan to-nexora-lime" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Stream Console Bar */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-nexora-border/80 bg-nexora-midnight/90 px-3.5 py-2.5 font-mono text-xs">
        <div className="flex items-center gap-2 text-nexora-cyan truncate">
          <Terminal className="h-3.5 w-3.5 text-nexora-lime shrink-0" />
          <span className="truncate">
            [eBPF-stream] quorum_verified region={current.id} cipher=CHACHA20_POLY1305
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-nexora-muted shrink-0 ml-2">
          DEMO TELEMETRY
        </span>
      </div>
    </div>
  );
}
