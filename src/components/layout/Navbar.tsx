"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/data/nexoraData";
import { NexoraLogoIcon } from "@/assets/icons/NexoraLogoIcon";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nexora-border/70 bg-nexora-midnight/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexora-cyan rounded-lg"
          aria-label="NEXORA Home"
        >
          <NexoraLogoIcon className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-wider text-nexora-text">
              {SITE_CONFIG.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-nexora-lime uppercase">
              CORE // 4.8
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Primary Navigation"
        >
          {NAVIGATION_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-nexora-electric/15 text-nexora-cyan border border-nexora-electric/40"
                    : "text-nexora-muted hover:text-nexora-text hover:bg-nexora-surface/60"
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded bg-nexora-lime/15 border border-nexora-lime/40 px-1.5 py-0.5 font-mono text-[10px] text-nexora-lime">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 rounded-lg border border-nexora-border/70 bg-nexora-surface/40 px-3 py-2 text-xs font-mono text-nexora-muted hover:border-nexora-cyan/40 hover:text-nexora-cyan transition-colors"
          >
            <Terminal className="h-3.5 w-3.5 text-nexora-lime" />
            <span>Docs & CLI</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-nexora-electric px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-electric-glow border border-nexora-cyan/30 hover:bg-nexora-electric/90 transition-all"
          >
            <span>Request Demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-nexora-muted hover:bg-nexora-surface hover:text-nexora-text lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-nexora-border bg-nexora-navy px-4 pt-3 pb-6 lg:hidden">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAVIGATION_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                    isActive
                      ? "bg-nexora-electric/15 text-nexora-cyan border border-nexora-electric/40"
                      : "text-nexora-muted hover:bg-nexora-surface hover:text-nexora-text"
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded bg-nexora-lime/15 border border-nexora-lime/40 px-2 py-0.5 font-mono text-xs text-nexora-lime">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-nexora-border flex flex-col gap-2.5">
              <Link
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-nexora-border bg-nexora-surface/70 px-4 py-2.5 text-sm font-mono text-nexora-text hover:border-nexora-cyan"
              >
                <Terminal className="h-4 w-4 text-nexora-lime" />
                <span>CLI Reference & Docs</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-nexora-electric px-4 py-2.5 text-sm font-medium text-white shadow-electric-glow"
              >
                <span>Request Interactive Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
