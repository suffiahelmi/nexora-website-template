export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface DemoBrand {
  id: string;
  name: string;
  sector: string;
  code: string;
}

export interface TelemetryMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "stable";
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  accent: "electric" | "lime" | "cyan";
  bullets: string[];
}

export interface DeepFeatureBlock {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  accent: "electric" | "lime" | "cyan";
  metrics: { label: string; value: string }[];
  capabilities: { title: string; detail: string }[];
  codeSnippet: string;
}

export interface SolutionUseCase {
  id: string;
  industry: string;
  badge: string;
  title: string;
  summary: string;
  challenge: string;
  outcome: string;
  metricHighlight: string;
  workflowSteps: string[];
  accent: "electric" | "lime" | "cyan";
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: "Observability" | "Cloud & Edge" | "Security & IAM" | "Data & Messaging" | "DevOps & CI/CD";
  status: "Template UI Demo" | "Webhook Ready";
  protocol: string;
  description: string;
  setupTime: string;
  accent: "electric" | "lime" | "cyan";
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
  sla: string;
  features: string[];
}

export interface PricingComparisonRow {
  feature: string;
  category: "Compute & Mesh" | "Observability" | "Security & Compliance";
  velocity: string | boolean;
  hyperion: string | boolean;
  sovereign: string | boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  isSample: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  location: string;
  initials: string;
}

export interface CompanyValue {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  category: "Architecture" | "Billing & Plans" | "Security & Compliance" | "Template Customization";
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "NEXORA",
  tagline: "Next-Generation Cloud Orchestration & Distributed Systems Platform",
  description:
    "NEXORA is an enterprise software platform for high-velocity engineering teams—unifying global edge routing, zero-trust hardware enclaves, and sub-millisecond telemetry.",
  version: "v4.8 Enterprise",
  status: "All Demo Systems Operational — 99.998% Target SLA",
  demoDisclaimer:
    "Commercial Template Demonstration — All metrics, brand logos, pricing tiers, and team profiles are fictional sample data designed for easy customization.",
  contact: {
    email: "enterprise-demo@nexora-template.example",
    supportEmail: "support-demo@nexora-template.example",
    phone: "+1 (800) 555-0199 (Template Placeholder)",
    headquarters: "450 Howard Street, Suite 800, San Francisco, CA 94105 (Sample HQ)",
    europeOffice: "Bahnhofstrasse 42, 8001 Zürich, Switzerland (Sample EMEA Office)",
    hours: "Monday – Friday, 08:00 – 20:00 UTC",
  },
  socials: [
    { label: "GitHub (Template Placeholder)", href: "https://github.com" },
    { label: "X / Twitter (Template Placeholder)", href: "https://x.com" },
    { label: "LinkedIn (Template Placeholder)", href: "https://linkedin.com" },
    { label: "Discord Community (Template Placeholder)", href: "https://discord.com" },
  ],
};

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features", badge: "v4.8" },
  { label: "Solutions", href: "/solutions" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const DEMO_TRUSTED_BRANDS: DemoBrand[] = [
  { id: "vortex", name: "VORTEX LABS", sector: "Fictional Fintech Demo", code: "VTX // 01" },
  { id: "kinetix", name: "KINETIX CLOUD", sector: "Fictional Compute Demo", code: "KNX // 02" },
  { id: "aether", name: "AETHER QUANTUM", sector: "Fictional Telemetry Demo", code: "ATH // 03" },
  { id: "chronos", name: "CHRONOS LEDGER", sector: "Fictional Banking Demo", code: "CHR // 04" },
  { id: "helios", name: "HELIOS ROBOTICS", sector: "Fictional Industrial Demo", code: "HLS // 05" },
  { id: "stratos", name: "STRATOS MESH", sector: "Fictional Telecom Demo", code: "STR // 06" },
];

export const TELEMETRY_METRICS: TelemetryMetric[] = [
  {
    id: "throughput",
    label: "Global Edge Throughput",
    value: "14.8M req/s",
    delta: "+24.6% Benchmark",
    trend: "up",
  },
  {
    id: "latency",
    label: "P99 Execution Latency",
    value: "1.42 ms",
    delta: "-38.0% Overhead",
    trend: "up",
  },
  {
    id: "uptime",
    label: "Multi-Region Consensus SLA",
    value: "99.998%",
    delta: "Deterministic",
    trend: "stable",
  },
  {
    id: "clusters",
    label: "Active Compute Nodes",
    value: "3,840",
    delta: "42 Global Zones",
    trend: "up",
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "dynamic-routing",
    tag: "01 / AUTONOMOUS MESH",
    title: "Predictive Traffic & Compute Orchestration",
    description:
      "Dynamically shifts workloads across 42 global edge zones using real-time latency telemetry and deterministic load balancing before traffic spikes impact end users.",
    metricLabel: "Cold-Start Overhead",
    metricValue: "0.08 ms",
    accent: "electric",
    bullets: [
      "Anycast BGP routing with automated region failover in under 50ms",
      "Zero-downtime blue/green and canary traffic splitting at the edge",
      "Deterministic state replication across distributed regional clusters",
    ],
  },
  {
    id: "zero-trust-enclave",
    tag: "02 / CRYPTOGRAPHIC ISOLATION",
    title: "Hardware-Level Zero-Trust Enclaves",
    description:
      "Every microservice executes inside an ephemeral, cryptographically attested sandbox with automated mTLS rotation and policy-as-code verification.",
    metricLabel: "Security Architecture",
    metricValue: "Hardware mTLS",
    accent: "lime",
    bullets: [
      "Automated X.509 certificate rotation every 15 minutes",
      "Memory-isolated micro-VMs with strict syscall filtering",
      "Immutable audit logs streamed directly to your security lake",
    ],
  },
  {
    id: "quantum-observability",
    tag: "03 / DEEP TELEMETRY",
    title: "Sub-Millisecond Distributed Tracing",
    description:
      "Correlate logs, kernel eBPF traces, and database execution plans in a unified high-contrast canvas with instant bottleneck isolation.",
    metricLabel: "Query Ingestion Speed",
    metricValue: "4.2 TB/min",
    accent: "cyan",
    bullets: [
      "Zero-instrumentation kernel packet & latency capture via eBPF",
      "Live service dependency topology map with P99 heatmaps",
      "Instant replay of historical cluster states and deployment diffs",
    ],
  },
];

export const DEEP_FEATURE_BLOCKS: DeepFeatureBlock[] = [
  {
    id: "control-plane",
    category: "DISTRIBUTED ORCHESTRATION",
    title: "Deterministic Multi-Cloud Control Plane",
    subtitle: "Deploy once. Execute across bare-metal, cloud, and edge nodes simultaneously.",
    description:
      "Eliminate cloud lock-in with a unified declarative scheduler. NEXORA abstracts underlying provider primitives into a high-speed mesh that scales workloads horizontally in milliseconds.",
    accent: "electric",
    metrics: [
      { label: "Cluster Convergence", value: "120 ms" },
      { label: "Global Edge Pops", value: "42 Zones" },
      { label: "Network Jitter Reduction", value: "64%" },
    ],
    capabilities: [
      {
        title: "Declarative Topology Specs",
        detail: "Define region affinities, latency budgets, and failover quorum rules in versioned configuration files.",
      },
      {
        title: "Instant Rollback Snapshots",
        detail: "Revert entire multi-region runtime states to any previous cryptographic hash in under two seconds.",
      },
      {
        title: "Ephemeral Preview Clusters",
        detail: "Spin up isolated full-stack environments per pull request with production-grade network policies.",
      },
    ],
    codeSnippet: `// nexora.topology.ts
export default defineCluster({
  name: "hyperion-prod-mesh",
  regions: ["us-east-1", "eu-central-1", "ap-northeast-1"],
  routing: {
    policy: "latency-weighted-quorum",
    maxP99BudgetMs: 4.5,
    failoverMode: "instant-anycast",
  },
  enclave: {
    mtlsRotationMinutes: 15,
    attestation: "sha384-hardware",
  },
});`,
  },
  {
    id: "automation-pipelines",
    category: "WORKFLOW AUTOMATION",
    title: "Event-Driven Self-Healing Pipelines",
    subtitle: "Automated remediation, elastic scaling, and policy verification without manual pager alerts.",
    description:
      "Configure deterministic triggers that respond to telemetry anomalies in real time—automatically isolating degraded nodes, re-routing traffic, or scaling compute pools.",
    accent: "lime",
    metrics: [
      { label: "Mean Time to Remediate", value: "0.4 sec" },
      { label: "Manual Ops Reduction", value: "89%" },
      { label: "Policy Evaluation", value: "< 0.2 ms" },
    ],
    capabilities: [
      {
        title: "Automated Drift Detection",
        detail: "Continuously compares live runtime state against signed manifests and heals configuration drift.",
      },
      {
        title: "Programmable Circuit Breakers",
        detail: "Shed load or degrade non-critical services gracefully when downstream dependencies experience latency spikes.",
      },
      {
        title: "Cost-Aware Autoscaling",
        detail: "Balances compute spot instances and reserved nodes dynamically based on real-time queue depth.",
      },
    ],
    codeSnippet: `# nexora-automation-policy.yaml
trigger:
  metric: "http.edge.p99_latency_ms"
  threshold: "> 8.0"
  window: "15s"
actions:
  - isolate_degraded_pod: true
  - shift_traffic:
      fallback_region: "eu-central-1"
      weight: 100
  - emit_audit_event: "AUTO_FAILOVER_EXECUTED"`,
  },
  {
    id: "security-enclaves",
    category: "SECURITY & PERFORMANCE",
    title: "Cryptographic Enclaves & Wire-Speed Telemetry",
    subtitle: "Zero-trust isolation combined with deep eBPF kernel observability at zero performance penalty.",
    description:
      "Traditional monitoring agents add 8–15% CPU overhead. NEXORA captures telemetry directly from the Linux kernel boundary while enforcing strict hardware-level workload isolation.",
    accent: "cyan",
    metrics: [
      { label: "Telemetry CPU Overhead", value: "< 0.4%" },
      { label: "Encryption Cipher", value: "TLS 1.3 / ChaCha20" },
      { label: "Key Rotation Cycle", value: "15 Mins" },
    ],
    capabilities: [
      {
        title: "eBPF Packet & Syscall Inspection",
        detail: "Detect anomalous outbound socket connections or privilege escalation attempts at the kernel level.",
      },
      {
        title: "Bring-Your-Own-Key (BYOK) Custody",
        detail: "Integrate external hardware security modules (HSM) with zero plaintext secret exposure in memory.",
      },
      {
        title: "Compliance Evidence Exports",
        detail: "Generate structured audit artifacts for internal security reviews with one command.",
      },
    ],
    codeSnippet: `$ nexora security audit --cluster=hyperion-prod-mesh
[✓] Enclave Hardware Attestation: VERIFIED (3,840/3,840 nodes)
[✓] Mutual TLS Mesh Cipher: TLS_CHACHA20_POLY1305_SHA256
[✓] Egress Firewall Policy: STRICT_ALLOWLIST_ACTIVE
[✓] Zero Plaintext Secrets in Runtime Memory: CONFIRMED`,
  },
];

export const SOLUTIONS_USE_CASES: SolutionUseCase[] = [
  {
    id: "fintech-infrastructure",
    industry: "FINANCIAL TECHNOLOGY & LEDGERS",
    badge: "SOLUTION // 01",
    title: "High-Frequency Settlement & Multi-Region Ledger Sync",
    summary:
      "Eliminate split-brain state and cross-border latency for real-time payment rails, clearing engines, and high-throughput order books.",
    challenge:
      "Legacy single-region cloud deployments introduce 120ms+ round-trip delays and complex manual disaster recovery runbooks during regional outages.",
    outcome:
      "Deterministic active-active consensus across three continents with sub-2ms local edge validation and cryptographic audit trails.",
    metricHighlight: "99.999% Transaction Durability Target",
    workflowSteps: [
      "Edge Ingress & Signature Verification",
      "Hardware Enclave Risk Scoring",
      "Multi-Region Quorum Commit",
      "Immutable Audit Stream Export",
    ],
    accent: "electric",
  },
  {
    id: "saas-multi-tenant",
    industry: "B2B ENTERPRISE SAAS PLATFORMS",
    badge: "SOLUTION // 02",
    title: "Isolated Single-Tenant Enclaves at Multi-Tenant Economics",
    summary:
      "Give enterprise customers dedicated compute, isolated data planes, and custom regional residency without duplicating your DevOps team.",
    challenge:
      "Enterprise buyers demand strict data isolation and regional sovereignty, forcing engineering teams to maintain brittle per-customer forks.",
    outcome:
      "Provision cryptographically isolated tenant namespaces in 4 seconds via API while managing one unified codebase and release pipeline.",
    metricHighlight: "4.0s Tenant Namespace Provisioning",
    workflowSteps: [
      "API Tenant Provision Request",
      "Isolated VPC & Enclave Allocation",
      "Automated Custom Domain & mTLS",
      "Per-Tenant Telemetry & Cost Metering",
    ],
    accent: "lime",
  },
  {
    id: "realtime-data-streaming",
    industry: "CONNECTED SYSTEMS & TELEMETRY",
    badge: "SOLUTION // 03",
    title: "Global Edge Ingestion & Real-Time Stream Processing",
    summary:
      "Ingest millions of concurrent WebSocket, gRPC, and MQTT streams at the edge, filter noise locally, and sync structured state to core data lakes.",
    challenge:
      "Backhauling raw device and client telemetry to a single central region saturates bandwidth and delays anomaly detection.",
    outcome:
      "Process and aggregate telemetry across 42 edge zones before persisting clean, compressed columnar streams to analytical storage.",
    metricHighlight: "68% Bandwidth Egress Reduction",
    workflowSteps: [
      "42-Zone Anycast Stream Termination",
      "Edge Windowing & Anomaly Filtering",
      "Zero-Copy Protobuf Serialization",
      "Warehouse & Lakehouse Sync",
    ],
    accent: "cyan",
  },
  {
    id: "platform-engineering",
    industry: "INTERNAL DEVELOPER PLATFORMS (IDP)",
    badge: "SOLUTION // 04",
    title: "Self-Service Golden Paths for 500+ Engineers",
    summary:
      "Standardize service scaffolding, preview environments, and progressive delivery with guardrails built directly into the deployment pipeline.",
    challenge:
      "Product engineers lose 30% of sprint capacity wrestling with Kubernetes YAML, IAM roles, and inconsistent staging environments.",
    outcome:
      "Every git push produces an attested, production-mirror preview URL with live tracing and automated security policy checks.",
    metricHighlight: "3.4x Faster Deployment Velocity",
    workflowSteps: [
      "Git Push / Pull Request Webhook",
      "Ephemeral Enclave Build & Test",
      "Automated Security & Latency Gate",
      "Progressive Canary Traffic Shift",
    ],
    accent: "electric",
  },
];

export const INTEGRATIONS_DIRECTORY: IntegrationItem[] = [
  {
    id: "prometheus-exporter",
    name: "OpenTelemetry & Prometheus Exporter",
    category: "Observability",
    status: "Webhook Ready",
    protocol: "OTLP / gRPC / HTTP",
    description:
      "Stream structured metrics, spans, and kernel latency histograms to any OpenTelemetry-compatible collector endpoint.",
    setupTime: "2 min config",
    accent: "cyan",
  },
  {
    id: "webhook-event-bus",
    name: "Signed JSON Webhook Event Bus",
    category: "DevOps & CI/CD",
    status: "Webhook Ready",
    protocol: "HTTPS / HMAC-SHA256",
    description:
      "Receive real-time HMAC-signed JSON payloads for cluster deployments, circuit-breaker triggers, and policy alerts.",
    setupTime: "Instant",
    accent: "lime",
  },
  {
    id: "terraform-provider-spec",
    name: "Declarative IaC State Sync",
    category: "Cloud & Edge",
    status: "Template UI Demo",
    protocol: "HCL / JSON Schema",
    description:
      "Illustrative template connector showing how infrastructure-as-code workflows map to NEXORA cluster topology manifests.",
    setupTime: "5 min config",
    accent: "electric",
  },
  {
    id: "siem-audit-sink",
    name: "Zero-Trust SIEM Audit Log Sink",
    category: "Security & IAM",
    status: "Template UI Demo",
    protocol: "Syslog / TLS 1.3",
    description:
      "Illustrative security connector demonstrating immutable mTLS attestation and access logs forwarded to enterprise SIEM pipelines.",
    setupTime: "3 min config",
    accent: "lime",
  },
  {
    id: "oidc-federation",
    name: "Enterprise OIDC & SAML 2.0 Federation",
    category: "Security & IAM",
    status: "Template UI Demo",
    protocol: "OIDC / SAML 2.0",
    description:
      "Illustrative identity provider card for role-based access control (RBAC) and short-lived CLI session token issuance.",
    setupTime: "4 min config",
    accent: "electric",
  },
  {
    id: "kafka-stream-bridge",
    name: "Distributed Event Stream Bridge",
    category: "Data & Messaging",
    status: "Template UI Demo",
    protocol: "TCP / Protobuf",
    description:
      "Illustrative high-throughput connector for bridging edge telemetry topics into partitioned event streaming clusters.",
    setupTime: "5 min config",
    accent: "cyan",
  },
  {
    id: "gitops-pipeline-hook",
    name: "GitOps Progressive Delivery Hook",
    category: "DevOps & CI/CD",
    status: "Webhook Ready",
    protocol: "REST / Webhook",
    description:
      "Trigger automated canary rollouts and ephemeral preview environments from standard CI/CD pipeline webhooks.",
    setupTime: "2 min config",
    accent: "electric",
  },
  {
    id: "columnar-lakehouse-sink",
    name: "Parquet & Iceberg Telemetry Sink",
    category: "Data & Messaging",
    status: "Template UI Demo",
    protocol: "S3 API / Parquet",
    description:
      "Illustrative storage integration for archiving compressed historical trace data into object storage buckets.",
    setupTime: "4 min config",
    accent: "cyan",
  },
  {
    id: "multi-cloud-byoc",
    name: "BYOC Sovereign Node Agent",
    category: "Cloud & Edge",
    status: "Template UI Demo",
    protocol: "WireGuard / eBPF",
    description:
      "Illustrative bare-metal and private cloud node agent for joining dedicated customer VPCs to the NEXORA control plane.",
    setupTime: "10 min config",
    accent: "lime",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "velocity",
    name: "Velocity",
    tagline: "For high-growth teams shipping low-latency production workloads.",
    monthlyPrice: 149,
    annualPrice: 119,
    ctaLabel: "Request Velocity Demo",
    ctaHref: "/contact?plan=velocity",
    sla: "99.95% Target SLA",
    features: [
      "Up to 25M edge requests / month",
      "12 global edge deployment regions",
      "Real-time eBPF trace streaming",
      "Automated Git preview environments",
      "7-day hot telemetry retention",
      "Standard email & community support",
    ],
  },
  {
    id: "hyperion",
    name: "Hyperion Scale",
    tagline: "Full autonomous orchestration for mission-critical infrastructure.",
    monthlyPrice: 499,
    annualPrice: 399,
    popular: true,
    ctaLabel: "Start Hyperion Evaluation",
    ctaHref: "/contact?plan=hyperion",
    sla: "99.998% Multi-Region SLA",
    features: [
      "Unlimited edge requests & autoscale",
      "All 42 global low-latency zones",
      "Predictive traffic load orchestration",
      "Hardware-isolated zero-trust enclaves",
      "30-day hot telemetry retention",
      "Automated canary & rollback gates",
      "24/7 priority engineering response",
    ],
  },
  {
    id: "sovereign",
    name: "Sovereign Cloud",
    tagline: "Dedicated bare-metal clusters & custom compliance perimeters.",
    monthlyPrice: 1490,
    annualPrice: 1190,
    ctaLabel: "Consult Solutions Architect",
    ctaHref: "/contact?plan=sovereign",
    sla: "99.999% Custom SLA",
    features: [
      "Dedicated single-tenant bare metal",
      "BYOC (Private Cloud & On-Premise)",
      "Custom HSM cryptographic key custody",
      "Unlimited historical telemetry lake",
      "Custom regional data residency locks",
      "Dedicated principal systems architect",
    ],
  },
];

export const PRICING_COMPARISON: PricingComparisonRow[] = [
  {
    feature: "Global Edge Deployment Zones",
    category: "Compute & Mesh",
    velocity: "12 Regions",
    hyperion: "42 Regions",
    sovereign: "42 + Custom Private Pops",
  },
  {
    feature: "Included Monthly Edge Requests",
    category: "Compute & Mesh",
    velocity: "25,000,000",
    hyperion: "Unlimited Autoscale",
    sovereign: "Dedicated Line-Rate",
  },
  {
    feature: "Zero-Downtime Canary & Instant Rollbacks",
    category: "Compute & Mesh",
    velocity: true,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Multi-Region Active-Active Quorum",
    category: "Compute & Mesh",
    velocity: false,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Kernel eBPF Distributed Tracing",
    category: "Observability",
    velocity: true,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Hot Telemetry Retention Window",
    category: "Observability",
    velocity: "7 Days",
    hyperion: "30 Days",
    sovereign: "Unlimited Lakehouse",
  },
  {
    feature: "OpenTelemetry & Webhook Event Bus",
    category: "Observability",
    velocity: true,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Automated 15-Min mTLS Rotation",
    category: "Security & Compliance",
    velocity: true,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Hardware-Attested Micro-VM Enclaves",
    category: "Security & Compliance",
    velocity: false,
    hyperion: true,
    sovereign: true,
  },
  {
    feature: "Bring-Your-Own-Cloud (BYOC) & HSM Custody",
    category: "Security & Compliance",
    velocity: false,
    hyperion: false,
    sovereign: true,
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sample-1",
    quote:
      "Migrating our regional settlement clusters to NEXORA cut our P99 tail latency from 19ms down to 1.4ms while eliminating manual failover drills entirely.",
    author: "Elena Rostova (Sample Persona)",
    role: "VP of Platform Engineering",
    company: "Vortex Labs (Fictional Demo Brand)",
    metric: "-92% P99 Tail Latency",
    isSample: true,
  },
  {
    id: "sample-2",
    quote:
      "The hardware-isolated enclave architecture allowed us to onboard enterprise banking clients in days instead of spending six months building custom single-tenant VPCs.",
    author: "Marcus Vance (Sample Persona)",
    role: "Chief Technology Officer",
    company: "Chronos Ledger (Fictional Demo Brand)",
    metric: "4s Tenant Provisioning",
    isSample: true,
  },
  {
    id: "sample-3",
    quote:
      "Having eBPF kernel traces and deployment diffs in the same high-contrast control plane cut our mean-time-to-resolution during traffic spikes to under a second.",
    author: "Dr. Kenji Takahashi (Sample Persona)",
    role: "Principal Systems Architect",
    company: "Aether Quantum (Fictional Demo Brand)",
    metric: "99.998% Observed Uptime",
    isSample: true,
  },
];

export const DEMO_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Soren Lindqvist (Demo Profile)",
    role: "Chief Executive Officer & Co-Founder",
    specialty: "Distributed Consensus & Systems Architecture",
    bio: "Fictional sample biography: 15+ years designing low-latency distributed compute engines and global edge routing networks.",
    location: "San Francisco / Stockholm",
    initials: "SL",
  },
  {
    id: "member-2",
    name: "Amara Okafor (Demo Profile)",
    role: "Chief Technology Officer & Co-Founder",
    specialty: "Linux Kernel eBPF & Cryptographic Enclaves",
    bio: "Fictional sample biography: Former principal kernel architect focused on zero-overhead telemetry and hardware-attested isolation.",
    location: "London, UK",
    initials: "AO",
  },
  {
    id: "member-3",
    name: "Devon K. Mercer (Demo Profile)",
    role: "VP of Product & Developer Experience",
    specialty: "Declarative CLI Workflows & Control Planes",
    bio: "Fictional sample biography: Obsessed with removing infrastructure friction and crafting deterministic developer workflows.",
    location: "New York, NY",
    initials: "DM",
  },
  {
    id: "member-4",
    name: "Linnea Vance (Demo Profile)",
    role: "Head of Security & Sovereign Cloud",
    specialty: "Zero-Trust Cryptography & Compliance Mesh",
    bio: "Fictional sample biography: Leads automated mTLS attestation, HSM key custody, and multi-region data sovereignty programs.",
    location: "Zürich, Switzerland",
    initials: "LV",
  },
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: "val-1",
    code: "PRINCIPLE // 01",
    title: "Deterministic Execution Over Guesswork",
    description:
      "Infrastructure should behave predictably under extreme load. Every routing rule, enclave boundary, and failover quorum in NEXORA is mathematically verifiable.",
  },
  {
    id: "val-2",
    code: "PRINCIPLE // 02",
    title: "Zero-Overhead Observability",
    description:
      "You should never have to choose between deep production visibility and raw compute performance. Kernel-level telemetry is a first-class citizen.",
  },
  {
    id: "val-3",
    code: "PRINCIPLE // 03",
    title: "Security by Cryptographic Proof",
    description:
      "Perimeter firewalls are obsolete. We enforce zero-trust isolation at the hardware and microservice boundary with automated short-lived identity.",
  },
  {
    id: "val-4",
    code: "PRINCIPLE // 04",
    title: "Radical Developer Velocity",
    description:
      "Complex distributed systems should feel effortless to operate—from a single CLI command to global multi-region orchestration.",
  },
];

export const COMPANY_MILESTONES: CompanyMilestone[] = [
  {
    year: "2023 (Sample)",
    title: "Core Consensus & eBPF Engine Prototype",
    detail: "Fictional milestone: Initial research into sub-millisecond edge routing and zero-instrumentation kernel tracing.",
  },
  {
    year: "2024 (Sample)",
    title: "NEXORA v2.0 Zero-Trust Enclave Mesh",
    detail: "Fictional milestone: Introduced automated 15-minute mTLS rotation and hardware-isolated micro-VM sandboxes.",
  },
  {
    year: "2025 (Sample)",
    title: "42 Global Edge Zones & Sovereign BYOC",
    detail: "Fictional milestone: Expanded anycast backbone across North America, Europe, APAC, and private bare-metal clusters.",
  },
  {
    year: "2026 (Sample)",
    title: "NEXORA v4.8 Autonomous Control Plane",
    detail: "Fictional milestone: Launched predictive traffic orchestration and unified lakehouse telemetry streaming.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Architecture",
    question: "How does NEXORA achieve sub-2ms P99 routing latency across regions?",
    answer:
      "NEXORA combines BGP Anycast ingress with real-time kernel telemetry across 42 global edge zones. Incoming requests are terminated at the nearest point of presence and routed over persistent, pre-warmed mTLS tunnels using deterministic latency-weighted quorum rules.",
  },
  {
    id: "faq-2",
    category: "Architecture",
    question: "Does eBPF observability require modifying our application source code?",
    answer:
      "No. NEXORA captures network spans, syscall latencies, and resource metrics directly from the Linux kernel boundary via eBPF programs. You gain full distributed tracing across polyglot microservices with less than 0.4% CPU overhead and zero SDK lock-in.",
  },
  {
    id: "faq-3",
    category: "Security & Compliance",
    question: "How do hardware-level zero-trust enclaves isolate multi-tenant workloads?",
    answer:
      "Each workload runs inside a dedicated, memory-isolated micro-VM with its own attested cryptographic identity. Mutual TLS certificates are rotated automatically every 15 minutes, and strict egress allowlists prevent lateral movement.",
  },
  {
    id: "faq-4",
    category: "Security & Compliance",
    question: "Can we deploy NEXORA inside our own private cloud or bare-metal data centers?",
    answer:
      "Yes. Our Sovereign Cloud tier supports Bring-Your-Own-Cloud (BYOC) and on-premise bare-metal clusters. All telemetry and cryptographic keys remain within your designated regional compliance perimeter.",
  },
  {
    id: "faq-5",
    category: "Billing & Plans",
    question: "Are the pricing tiers on this website real commercial subscriptions?",
    answer:
      "No. All pricing tiers ($149 Velocity, $499 Hyperion Scale, $1,490 Sovereign Cloud) are illustrative demo pricing structures built for this commercial website template. They can be customized in seconds via src/data/nexoraData.ts.",
  },
  {
    id: "faq-6",
    category: "Billing & Plans",
    question: "How does the monthly vs. annual billing toggle work?",
    answer:
      "Switching to Annual Billing applies a 20% discount across all demo tiers in real time. Every plan CTA links directly to the interactive Contact & Evaluation page with the selected plan pre-populated.",
  },
  {
    id: "faq-7",
    category: "Template Customization",
    question: "How do I customize brand colors, copy, and metrics in this template?",
    answer:
      "All copy, navigation items, metrics, features, integrations, pricing tiers, team members, and FAQs are centralized in src/data/nexoraData.ts. Color tokens (midnight, navy, electric blue, neon lime) are configured in tailwind.config.ts.",
  },
  {
    id: "faq-8",
    category: "Template Customization",
    question: "Are the integrations and testimonials connected to external live accounts?",
    answer:
      "To ensure a clean, self-contained commercial template without hardcoded third-party credentials, all testimonials, logos, and integration cards are clearly labeled as fictional sample data or UI demonstrations.",
  },
];
