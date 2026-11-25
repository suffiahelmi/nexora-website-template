import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlowCard } from "@/components/ui/GlowCard";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <GlowCard accent="lime" className="max-w-xl w-full text-center space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-nexora-lime/15 border border-nexora-lime/40 text-nexora-lime">
            <AlertTriangle className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-nexora-cyan">
              ERR_NODE_UNREACHABLE // HTTP 404
            </span>
            <h1 className="font-display text-4xl font-bold text-nexora-text">
              Route Not Found in Mesh
            </h1>
            <p className="text-sm sm:text-base text-nexora-muted">
              The requested coordinate does not exist in the NEXORA topology manifest. Return to the main control plane or inspect available routes below.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-nexora-electric px-5 py-3 text-sm font-medium text-white shadow-electric-glow hover:bg-nexora-electric/90 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Control Plane</span>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-nexora-border bg-nexora-midnight px-5 py-3 font-mono text-xs text-nexora-text hover:border-nexora-cyan transition-all"
            >
              <Terminal className="h-4 w-4 text-nexora-lime" />
              <span>CLI & Docs</span>
            </Link>
          </div>
        </GlowCard>
      </main>
      <Footer />
    </>
  );
}
