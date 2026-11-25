"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Send, RotateCcw } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";

interface FormState {
  fullName: string;
  workEmail: string;
  company: string;
  tierInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  company?: string;
  message?: string;
}

const PLAN_MAP: Record<string, string> = {
  velocity: "Velocity ($119/mo Demo)",
  hyperion: "Hyperion Scale ($399/mo Demo)",
  sovereign: "Sovereign Cloud ($1,190/mo Demo)",
};

const SOLUTION_MAP: Record<string, string> = {
  "fintech-infrastructure":
    "Interested in deploying Blueprint 01: High-Frequency Settlement & Multi-Region Ledger Sync.",
  "saas-multi-tenant":
    "Interested in deploying Blueprint 02: Isolated Single-Tenant Enclaves at Multi-Tenant Economics.",
  "realtime-data-streaming":
    "Interested in deploying Blueprint 03: Global Edge Ingestion & Real-Time Stream Processing.",
  "platform-engineering":
    "Interested in deploying Blueprint 04: Self-Service Golden Paths for Internal Developer Platforms.",
};

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    workEmail: "",
    company: "",
    tierInterest: "Hyperion Scale ($399/mo Demo)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get("plan");
    const solutionParam = searchParams.get("solution");

    if (planParam && PLAN_MAP[planParam]) {
      setForm((prev) => ({
        ...prev,
        tierInterest: PLAN_MAP[planParam],
      }));
    }

    if (solutionParam && SOLUTION_MAP[solutionParam]) {
      setForm((prev) => ({
        ...prev,
        message: prev.message || SOLUTION_MAP[solutionParam],
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.workEmail.trim() || !emailRegex.test(form.workEmail.trim())) {
      nextErrors.workEmail = "Please enter a valid work email address.";
    }

    if (!form.company.trim() || form.company.trim().length < 2) {
      nextErrors.company = "Please provide your organization or project name.";
    }

    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message =
        "Please include at least 15 characters describing your infrastructure or template inquiry.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      workEmail: "",
      company: "",
      tierInterest: "Hyperion Scale ($399/mo Demo)",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <GlowCard accent="lime" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nexora-lime/15 border border-nexora-lime/40 text-nexora-lime">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase text-nexora-lime">
              TRANSMISSION VERIFIED (TEMPLATE DEMO)
            </span>
            <h2 className="font-display text-2xl font-bold text-nexora-text">
              Inquiry Payload Validated
            </h2>
          </div>
        </div>

        <p className="text-sm sm:text-base text-nexora-muted leading-relaxed">
          Thank you, <strong className="text-nexora-text">{form.fullName}</strong>. This commercial template processes form validation locally in the browser so no external mail server credentials are required out of the box.
        </p>

        <div className="rounded-xl border border-nexora-border bg-nexora-midnight p-4 font-mono text-xs space-y-1.5 text-nexora-cyan">
          <p className="text-nexora-muted">{"// Validated Payload Preview"}</p>
          <p>Name: {form.fullName}</p>
          <p>Email: {form.workEmail}</p>
          <p>Organization: {form.company}</p>
          <p>Selected Plan: {form.tierInterest}</p>
        </div>

        <Button variant="secondary" size="md" onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
          <span>Submit Another Demo Inquiry</span>
        </Button>
      </GlowCard>
    );
  }

  return (
    <GlowCard accent="electric">
      <div className="mb-6 space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-nexora-cyan">
          VALIDATED ARCHITECTURE INQUIRY FORM
        </span>
        <h2 className="font-display text-2xl font-bold text-nexora-text">
          Request a Technical Walkthrough
        </h2>
        <p className="text-xs sm:text-sm text-nexora-muted">
          Client-side validation is active. Leave fields empty or invalid to test error states.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block font-mono text-xs uppercase text-nexora-text mb-2"
            >
              Full Name <span className="text-nexora-lime">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder="Elena Rostova"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className="w-full rounded-xl border border-nexora-border bg-nexora-midnight/90 px-4 py-3 text-sm text-nexora-text placeholder:text-nexora-subtle focus:border-nexora-cyan focus:outline-none"
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-nexora-lime"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label
              htmlFor="workEmail"
              className="block font-mono text-xs uppercase text-nexora-text mb-2"
            >
              Work Email <span className="text-nexora-lime">*</span>
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              value={form.workEmail}
              onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
              placeholder="elena@vortex-demo.example"
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
              className="w-full rounded-xl border border-nexora-border bg-nexora-midnight/90 px-4 py-3 text-sm text-nexora-text placeholder:text-nexora-subtle focus:border-nexora-cyan focus:outline-none"
            />
            {errors.workEmail && (
              <p
                id="workEmail-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-nexora-lime"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.workEmail}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Organization */}
          <div>
            <label
              htmlFor="company"
              className="block font-mono text-xs uppercase text-nexora-text mb-2"
            >
              Organization <span className="text-nexora-lime">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Vortex Labs (Demo)"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              className="w-full rounded-xl border border-nexora-border bg-nexora-midnight/90 px-4 py-3 text-sm text-nexora-text placeholder:text-nexora-subtle focus:border-nexora-cyan focus:outline-none"
            />
            {errors.company && (
              <p
                id="company-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-nexora-lime"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.company}</span>
              </p>
            )}
          </div>

          {/* Compute Tier Interest */}
          <div>
            <label
              htmlFor="tierInterest"
              className="block font-mono text-xs uppercase text-nexora-text mb-2"
            >
              Target Compute Tier (Demo)
            </label>
            <select
              id="tierInterest"
              name="tierInterest"
              value={form.tierInterest}
              onChange={(e) => setForm({ ...form, tierInterest: e.target.value })}
              className="w-full rounded-xl border border-nexora-border bg-nexora-midnight/90 px-4 py-3 text-sm text-nexora-text focus:border-nexora-cyan focus:outline-none"
            >
              <option value="Velocity ($119/mo Demo)">Velocity ($119/mo Demo)</option>
              <option value="Hyperion Scale ($399/mo Demo)">
                Hyperion Scale ($399/mo Demo)
              </option>
              <option value="Sovereign Cloud ($1,190/mo Demo)">
                Sovereign Cloud ($1,190/mo Demo)
              </option>
              <option value="Custom BYOC Architecture">
                Custom BYOC Architecture
              </option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-xs uppercase text-nexora-text mb-2"
          >
            Workload & Latency Requirements <span className="text-nexora-lime">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Describe your target deployment regions, expected request throughput, or compliance requirements..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full rounded-xl border border-nexora-border bg-nexora-midnight/90 px-4 py-3 text-sm text-nexora-text placeholder:text-nexora-subtle focus:border-nexora-cyan focus:outline-none"
          />
          {errors.message && (
            <p
              id="message-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-nexora-lime"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <span className="font-mono text-[11px] text-nexora-muted">
            * Client-side validated demo form (no external database required)
          </span>
          <Button type="submit" variant="primary" size="lg">
            <span>Transmit Inquiry</span>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </GlowCard>
  );
}

export function ContactFormClient() {
  return (
    <Suspense
      fallback={
        <GlowCard accent="electric">
          <div className="p-8 text-center font-mono text-xs text-nexora-muted">
            Initializing Validated Inquiry Form...
          </div>
        </GlowCard>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
