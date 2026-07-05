"use client";

import { useEffect, useState } from "react";

type CaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  body: string;
  impact: string;
};

type CaseStudyExplorerProps = {
  studies: CaseStudy[];
};

function CaseStudyVisual({ eyebrow }: { eyebrow: string }) {
  const visuals: Record<string, React.ReactNode> = {
    "Automation Architecture": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Layered Test Coverage
        </p>
        <div className="space-y-2">
          {[
            { layer: "Business Logic", tech: "REST APIs", color: "bg-signal/15" },
            { layer: "Async Workers", tech: "Kafka, Queues", color: "bg-brass/15" },
          ].map((item, i) => (
            <div key={item.layer} className="flex items-center gap-3">
              <div className={`h-12 w-1 rounded-full ${item.color}`} />
              <div className="flex-1">
                <p className="text-xs font-semibold text-ink">{item.layer}</p>
                <p className="mt-0.5 text-[11px] text-muted">{item.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    "UI Modernization": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Playwright Test Flow
        </p>
        <div className="flex items-center gap-1">
          {[
            { step: "Login", pct: 100 },
            { step: "Navigate", pct: 95 },
            { step: "Action", pct: 92 },
            { step: "Verify", pct: 88 },
          ].map((item) => (
            <div key={item.step} className="flex-1">
              <div className="flex h-16 flex-col items-center justify-between">
                <div
                  className="w-full rounded-t-lg border-x border-t border-ink/10 bg-signal/12"
                  style={{ height: `${item.pct * 0.12}px` }}
                />
                <div className="h-5 w-full border border-ink/10 rounded-b-lg bg-white/60 flex items-center justify-center">
                  <p className="text-[9px] font-semibold text-muted">{item.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    "Reliability Engineering": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Chaos Recovery Flow
        </p>
        <div className="grid grid-cols-1 gap-2">
          {[
            {
              step: "01",
              label: "Baseline Healthy State",
              detail: "Service, daemon, and DB health checks are green before injection.",
            },
            {
              step: "02",
              label: "Controlled Fault Injection",
              detail: "Crash one target at a time: service, daemon, or database.",
            },
            {
              step: "03",
              label: "Recovery & Startup Validation",
              detail: "Observe restart and failover behavior plus startup sequencing.",
            },
            {
              step: "04",
              label: "Cascading Dependency Check",
              detail: "Track downstream impact and cross-component instability.",
            },
            {
              step: "05",
              label: "Post-Recovery Integration Check",
              detail: "Run scoped functional checks around the affected crash domain.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-lg border border-ink/10 bg-white/60 p-3">
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-signal/30 bg-signal/10 px-2 py-1 text-[10px] font-bold text-signal">
                  {item.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 text-[11px] text-muted leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Performance: (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Execution Timeline & Bottleneck Discovery
        </p>
        <div className="space-y-2">
          {[
            { phase: "Data Gen", time: "3x faster", width: "55%", color: "bg-brass/15" },
            { phase: "Load Run", time: "40% shorter", width: "60%", color: "bg-signal/15" },
          ].map((item) => (
            <div key={item.phase} className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink">{item.phase}</p>
                <p className="text-[11px] font-semibold text-muted">{item.time}</p>
              </div>
              <div className="h-3 rounded-lg border border-ink/10 bg-white/60 overflow-hidden">
                <div className={`h-full ${item.color} rounded-lg`} style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
          <p className="text-[11px] text-muted leading-relaxed">
            Performance runs analyzed with Grafana, OpenSearch/Elasticsearch APM logs, internal monitoring tools, and JVM diagnostics.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Throughput", value: "Tracked", tone: "text-signal" },
            { label: "p95", value: "Tracked", tone: "text-signal" },
            { label: "p99", value: "Tracked", tone: "text-brass" },
          ].map((metric) => (
            <div key={metric.label} className="rounded-lg border border-ink/10 bg-white/60 p-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted">{metric.label}</p>
              <p className={`mt-1 text-sm font-bold ${metric.tone}`}>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    "Quality Infrastructure": (
      <div className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Quality Ownership Footprint
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Components", value: "100+" },
            { label: "Teams", value: "25+" },
            { label: "Owners", value: "3" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-ink/10 bg-white/60 p-3 text-center">
              <p className="text-lg font-bold text-ink">{item.value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    "RAG Test Generation": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Hybrid Retrieval Pipeline
        </p>
        <div className="space-y-2">
          {[
            { step: "01", label: "Existing Test Suite Indexed", detail: "Hybrid lexical + embedding retrieval over the team's real test corpus." },
            { step: "02", label: "Dynamic Context Injection", detail: "Only relevant, domain-specific examples are pulled per request." },
            { step: "03", label: "Grounded Generation", detail: "Retrieval-grounded prompt reduces hallucination and format drift." },
            { step: "04", label: "Self-Serve Delivery", detail: "Exposed to the team as a FastAPI endpoint, no manual authoring." },
          ].map((item) => (
            <div key={item.step} className="rounded-lg border border-ink/10 bg-white/60 p-3">
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-signal/30 bg-signal/10 px-2 py-1 text-[10px] font-bold text-signal">
                  {item.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 text-[11px] text-muted leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    "Failure Analysis": (
      <div className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          RCA Funnel
        </p>
        <div className="space-y-2">
          {["Signal", "Categorize", "Correlate", "Route"].map((step, idx) => (
            <div key={step} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white/60 p-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-signal/15 text-[11px] font-bold text-signal">{idx + 1}</span>
              <p className="text-xs font-semibold text-ink">{step}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="rounded-xl border border-ink/10 bg-ledger/50 p-4">
      {visuals[eyebrow] ?? (
        <p className="text-sm text-muted">Execution snapshot available in the case study details.</p>
      )}
    </div>
  );
}

export default function CaseStudyExplorer({ studies }: CaseStudyExplorerProps) {
  const [openEyebrow, setOpenEyebrow] = useState<string | null>(null);
  const openStudy = studies.find((study) => study.eyebrow === openEyebrow) ?? null;

  useEffect(() => {
    if (!openStudy) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenEyebrow(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openStudy]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study, index) => {
          const accent = index % 2 === 0 ? "signal" : "brass";

          return (
            <div
              key={study.eyebrow}
              className={`flex flex-col gap-4 rounded-[1.5rem] border-t-4 border border-ink/10 bg-white/60 p-5 shadow-sm ${
                accent === "signal" ? "border-t-signal/50" : "border-t-brass/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
                    accent === "signal" ? "bg-signal/15 text-signal" : "bg-brass/15 text-brass"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                  {study.eyebrow}
                </p>
              </div>

              <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink">
                {study.impact}
              </p>

              <p className="text-sm font-semibold leading-6 text-muted">
                {study.title}
              </p>

              <button
                type="button"
                onClick={() => setOpenEyebrow(study.eyebrow)}
                className="mt-auto self-start text-sm font-semibold text-signal transition hover:text-ink"
              >
                Details →
              </button>
            </div>
          );
        })}
      </div>

      {openStudy && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close details"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setOpenEyebrow(null)}
          />
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-panel sm:p-8">
            <button
              type="button"
              onClick={() => setOpenEyebrow(null)}
              aria-label="Close details"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-muted transition hover:border-ink/30 hover:text-ink"
            >
              ×
            </button>

            <p className="pr-10 text-xs font-bold uppercase tracking-[0.24em] text-signal">
              {openStudy.eyebrow}
            </p>
            <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink">
              {openStudy.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              {openStudy.summary}
            </p>
            <div className="mt-6">
              <CaseStudyVisual eyebrow={openStudy.eyebrow} />
            </div>
            <div className="mt-5 rounded-[1.4rem] border border-signal/15 bg-signal/10 px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Impact</p>
              <p className="mt-2 text-base font-semibold leading-7 text-ink">{openStudy.impact}</p>
            </div>
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Execution</p>
              <p className="mt-2 leading-7 text-muted">{openStudy.body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
