import React from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Globe } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { SITE_CONFIG } from "@/data/nexoraData";

export const metadata: Metadata = {
  title: "Contact & Architecture Evaluation — NEXORA Enterprise SaaS Platform",
  description:
    "Connect with NEXORA's solutions architecture team. Includes an interactive validated contact form and customizable business contact placeholders.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-20 border-b border-nexora-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-nexora-radial"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <Badge variant="lime" pulse>
                SOLUTIONS ENGINEERING & SUPPORT
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nexora-text leading-[1.08]">
                Initiate your{" "}
                <span className="bg-gradient-to-r from-nexora-cyan via-nexora-electric to-nexora-lime bg-clip-text text-transparent">
                  NEXORA cluster
                </span>{" "}
                evaluation.
              </h1>
              <p className="text-base sm:text-lg text-nexora-muted leading-relaxed">
                Test our interactive validated contact form or customize our clearly labeled business contact placeholders in <code className="font-mono text-nexora-cyan">src/data/nexoraData.ts</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Form & Business Contact Placeholders */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
              {/* Left 7 Columns: Validated Contact Form */}
              <div className="lg:col-span-7">
                <ContactFormClient />
              </div>

              {/* Right 5 Columns: Business Placeholders & Social Channels */}
              <div className="lg:col-span-5 space-y-6">
                <GlowCard accent="cyan" className="space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase text-nexora-lime">
                      TEMPLATE CONTACT PLACEHOLDERS
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-bold text-nexora-text">
                      Direct Channels
                    </h2>
                    <p className="mt-1 text-xs text-nexora-muted">
                      Clearly labeled sample addresses and phone numbers for template customization.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3.5">
                      <Mail className="h-5 w-5 text-nexora-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-xs uppercase text-nexora-muted">
                          Enterprise Inquiries
                        </p>
                        <p className="font-medium text-nexora-text break-all">
                          {SITE_CONFIG.contact.email}
                        </p>
                        <p className="text-xs text-nexora-subtle break-all">
                          {SITE_CONFIG.contact.supportEmail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="h-5 w-5 text-nexora-lime shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-xs uppercase text-nexora-muted">
                          Direct Line (Placeholder)
                        </p>
                        <p className="font-medium text-nexora-text">
                          {SITE_CONFIG.contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <MapPin className="h-5 w-5 text-nexora-electric shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-xs uppercase text-nexora-muted">
                          Global Offices (Sample Locations)
                        </p>
                        <p className="font-medium text-nexora-text">
                          {SITE_CONFIG.contact.headquarters}
                        </p>
                        <p className="mt-1 text-xs text-nexora-muted">
                          {SITE_CONFIG.contact.europeOffice}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock className="h-5 w-5 text-nexora-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-xs uppercase text-nexora-muted">
                          Operating Hours
                        </p>
                        <p className="font-medium text-nexora-text">
                          {SITE_CONFIG.contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                <GlowCard accent="lime" className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-nexora-lime" />
                    <h3 className="font-mono text-xs uppercase tracking-wider text-nexora-text">
                      Social & Developer Channels (Placeholders)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SITE_CONFIG.socials.map((soc) => (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-nexora-border bg-nexora-midnight/80 px-4 py-3 text-xs font-mono text-nexora-text hover:border-nexora-cyan hover:text-nexora-cyan transition-colors"
                      >
                        <span>{soc.label.replace(" (Template Placeholder)", "")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-nexora-lime" />
                      </a>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
