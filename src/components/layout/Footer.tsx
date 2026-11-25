import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NexoraLogoIcon } from "@/assets/icons/NexoraLogoIcon";
import { SITE_CONFIG } from "@/data/nexoraData";

export function Footer() {
  return (
    <footer className="border-t border-nexora-border/80 bg-nexora-midnight text-nexora-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <NexoraLogoIcon className="h-9 w-9" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-nexora-text">
                  {SITE_CONFIG.name}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-nexora-cyan uppercase">
                  SYSTEMS ARCHITECTURE
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm text-nexora-muted leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-nexora-lime/30 bg-nexora-lime/10 px-3.5 py-1.5 text-xs font-mono text-nexora-lime">
              <span className="h-2 w-2 rounded-full bg-nexora-lime animate-pulse" />
              <span>{SITE_CONFIG.status}</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-nexora-text">
                Platform
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/features" className="hover:text-nexora-cyan transition-colors">
                    Features & Mesh
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-nexora-cyan transition-colors">
                    Industry Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="hover:text-nexora-cyan transition-colors">
                    Integrations Directory
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-nexora-cyan transition-colors">
                    Pricing & Compare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-nexora-text">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="hover:text-nexora-cyan transition-colors">
                    About NEXORA
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="hover:text-nexora-cyan transition-colors">
                    Leadership (Demo)
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-nexora-cyan transition-colors">
                    Interactive FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-nexora-cyan transition-colors">
                    Contact & Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-nexora-text">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/docs" className="hover:text-nexora-cyan transition-colors">
                    CLI Quickstart
                  </Link>
                </li>
                <li>
                  <Link href="/features#security-enclaves" className="hover:text-nexora-cyan transition-colors">
                    Enclave Security
                  </Link>
                </li>
                <li>
                  <Link href="/features#automation-pipelines" className="hover:text-nexora-cyan transition-colors">
                    Automation Engine
                  </Link>
                </li>
                <li>
                  <Link href="/pricing#comparison" className="hover:text-nexora-cyan transition-colors">
                    Tier Matrix
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-nexora-text">
                Connect
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {SITE_CONFIG.socials.map((soc) => (
                  <li key={soc.label}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-nexora-cyan transition-colors"
                    >
                      <span>{soc.label.replace(" (Template Placeholder)", "")}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Transparent Template Disclaimer */}
        <div className="mt-12 rounded-xl border border-nexora-border/70 bg-nexora-navy/60 px-4 py-3 text-xs text-nexora-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong className="font-mono text-nexora-cyan uppercase">Template Notice:</strong>{" "}
            {SITE_CONFIG.demoDisclaimer}
          </span>
          <span className="font-mono text-[11px] text-nexora-lime shrink-0">
            src/data/nexoraData.ts
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-nexora-border/60 pt-8 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} Systems Template. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6 font-mono text-nexora-subtle">
            <Link href="/faq" className="hover:text-nexora-text transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-nexora-text transition-colors">
              Support
            </Link>
            <span>BUILD 4.8.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
