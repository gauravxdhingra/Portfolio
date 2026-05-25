"use client";

import { useState } from "react";

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
        <div className="mt-3 rounded-lg border border-signal/20 bg-signal/8 p-3">
          <p className="text-[11px] font-semibold text-signal">
            Reusable keywords → earlier signal on defects
          </p>
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
        <div className="mt-3 rounded-lg border border-signal/20 bg-signal/8 p-3">
          <p className="text-[11px] font-semibold text-signal">
            Stable selectors + trace debugging = production-ready coverage
          </p>
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
        <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
          <p className="text-[11px] text-muted leading-relaxed">
            This visual reflects a chaos workflow: inject failure, validate recovery behavior, assess dependency cascades, and confirm post-recovery functional correctness.
          </p>
        </div>
        <div className="mt-3 rounded-lg border border-signal/20 bg-signal/8 p-3">
          <p className="text-[11px] font-semibold text-signal">
            Failure rate: 25% → &lt;2% through disciplined scenario isolation
          </p>
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
        <div className="mt-3 rounded-lg border border-signal/20 bg-signal/8 p-3">
          <p className="text-[11px] font-semibold text-signal">
            Performance bottlenecks exposed across memory, DB latency, lock contention
          </p>
        </div>
      </div>
    ),
    "Release Test Visibility": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Release Readiness Dashboard
        </p>
        <div className="space-y-2">
          {[
            { source: "Jenkins API", status: "Run progress synced", tag: "Live" },
            { source: "Shared Excel", status: "Execution feed mapped", tag: "Live" },
            { source: "Visibility", status: "Release view ready", tag: "Unified" },
          ].map((item) => (
            <div key={item.source} className="rounded-lg border border-ink/10 bg-white/60 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-ink">{item.source}</p>
                  <p className="mt-0.5 text-[10px] text-muted">{item.status}</p>
                </div>
                <span className="rounded-md border border-signal/25 bg-signal/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-signal">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-signal/20 bg-signal/8 p-3">
          <p className="text-[11px] font-semibold text-signal">
            Real-time dashboard replaced scattered manual status updates
          </p>
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
    "Platform Tooling": (
      <div className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Environment Drift Check
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Source</p>
            <p className="mt-1 text-xs font-semibold text-ink">Env A Config</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Target</p>
            <p className="mt-1 text-xs font-semibold text-ink">Env B Config</p>
          </div>
          <div className="col-span-2 rounded-lg border border-signal/20 bg-signal/8 p-3">
            <p className="text-xs font-semibold text-signal">Diff output highlights release-risk mismatches before deployment.</p>
          </div>
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
  const [activeStudy, setActiveStudy] = useState(studies[0]?.eyebrow ?? "");
  const currentStudy = studies.find((study) => study.eyebrow === activeStudy) ?? studies[0];

  if (!currentStudy) {
    return null;
  }

  return (
    <div className="rounded-[1.9rem] border border-ink/10 bg-white/52 shadow-panel backdrop-blur">
      <div className="p-4 sm:p-5 lg:hidden">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted">
          Workstreams
        </p>
        <div className="space-y-3">
          {studies.map((study) => {
            const isActive = study.eyebrow === currentStudy.eyebrow;

            return (
              <div key={study.eyebrow} className="rounded-[1.2rem] border border-ink/10 bg-white/70">
                <button
                  type="button"
                  onClick={() => setActiveStudy(study.eyebrow)}
                  className={`w-full rounded-[1.2rem] px-4 py-3 text-left transition ${
                    isActive
                      ? "bg-ink text-white"
                      : "text-ink hover:bg-white"
                  }`}
                >
                  <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${isActive ? "text-brass" : "text-muted"}`}>
                    {study.eyebrow}
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {study.summary}
                  </p>
                </button>

                {isActive && (
                  <div className="space-y-4 border-t border-ink/10 p-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink">
                      {study.title}
                    </h3>
                    <p className="text-base leading-7 text-muted">{study.summary}</p>
                    <div className="pt-1">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Impact</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-ink">{study.impact}</p>
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Execution</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{study.body}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden gap-0 lg:grid lg:grid-cols-[0.34fr_0.66fr]">
        <aside className="border-b border-ink/10 bg-ledger/55 p-4 lg:border-b-0 lg:border-r lg:p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted">
            Workstreams
          </p>
          <div className="space-y-2">
            {studies.map((study) => {
              const isActive = study.eyebrow === currentStudy.eyebrow;

              return (
                <button
                  key={study.eyebrow}
                  type="button"
                  onClick={() => setActiveStudy(study.eyebrow)}
                  className={`w-full rounded-[1.2rem] border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-ink/15 bg-ink text-white shadow-sm"
                      : "border-ink/10 bg-white/60 text-ink hover:border-ink/20 hover:bg-white/85"
                  }`}
                >
                  <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${isActive ? "text-brass" : "text-muted"}`}>
                    {study.eyebrow}
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {study.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted">
            {currentStudy.eyebrow}
          </p>
          <h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
            {currentStudy.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            {currentStudy.summary}
          </p>
          <div className="mt-6">
            <CaseStudyVisual eyebrow={currentStudy.eyebrow} />
          </div>
          <div className="mt-6 rounded-[1.4rem] border border-signal/15 bg-signal/10 px-4 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">
              Impact
            </p>
            <p className="mt-2 text-base font-semibold leading-7 text-ink">
              {currentStudy.impact}
            </p>
          </div>
          <div className="mt-6 rounded-[1.4rem] border border-ink/10 bg-white/68 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">
              Execution
            </p>
            <p className="mt-3 leading-7 text-muted">
              {currentStudy.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
