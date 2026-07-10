"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  body: string;
  impact: string;
};

type CaseStudyExplorerProps = {
  studies: CaseStudy[];
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CaseStudyVisual({ eyebrow }: { eyebrow: string }) {
  const visuals: Record<string, React.ReactNode> = {
    "Automation Architecture": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Shift-Left Coverage Map
        </p>
        <div className="relative rounded-lg border border-ink/10 bg-white/60 p-3">
          <div className="absolute left-[26px] top-[38px] bottom-[38px] w-px bg-ink/15" />
          <div className="space-y-2.5">
            {[
              { layer: "REST APIs", tech: "Synchronous business logic, request/response contracts", color: "signal" },
              { layer: "Kafka & Queues", tech: "Async workers, event-driven and retry paths", color: "brass" },
              { layer: "Downstream Services", tech: "Cross-service contracts and integration boundaries", color: "signal" },
            ].map((item) => (
              <div key={item.layer} className="relative z-10 flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 bg-white ${
                    item.color === "signal" ? "border-signal/50 text-signal" : "border-brass/50 text-brass"
                  }`}
                >
                  <CheckIcon />
                </div>
                <div className="flex-1 rounded-lg border border-ink/10 bg-white/70 px-3 py-2">
                  <p className="text-xs font-semibold text-ink">{item.layer}</p>
                  <p className="mt-0.5 text-[10px] text-muted">{item.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "UI Modernization": (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Playwright Test Flow
        </p>
        <div className="rounded-lg border border-ink/10 bg-white/60 p-4">
          <div className="mb-5 flex items-center gap-1.5 rounded-md border border-ink/10 bg-white/70 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="ml-2 truncate text-[9px] font-semibold text-muted">
              playwright · e2e-suite.spec.ts
            </span>
            <span className="ml-auto rounded-full bg-signal/15 px-2 py-0.5 text-[9px] font-bold text-signal">
              Shared CI signal
            </span>
          </div>
          <div className="relative flex items-start justify-between px-1">
            <div className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-ink/15" />
            {["Login", "Navigate", "Action", "Verify"].map((step) => (
              <div key={step} className="relative z-10 flex flex-1 flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-signal/50 bg-signal/10 text-signal">
                  <CheckIcon />
                </div>
                <p className="text-[10px] font-semibold text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
          <p className="text-[11px] text-muted leading-relaxed">
            Shares fixtures, data, and CI signal with the backend suite rather than running as an isolated UI layer.
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
      </div>
    ),
    Performance: (
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Execution Timeline & Bottleneck Discovery
        </p>
        <div className="space-y-3">
          {[
            { phase: "Test Data Generation", time: "3x faster", afterPct: 33 },
            { phase: "Load Execution", time: "40% shorter", afterPct: 60 },
          ].map((item) => (
            <div key={item.phase} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink">{item.phase}</p>
                <p className="text-[11px] font-semibold text-signal">{item.time}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-10 shrink-0 text-[9px] font-semibold text-muted">Before</span>
                  <div className="h-2.5 flex-1 rounded-full bg-ink/10">
                    <div className="h-full w-full rounded-full bg-ink/25" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 shrink-0 text-[9px] font-semibold text-muted">After</span>
                  <div className="h-2.5 flex-1 rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-signal/60" style={{ width: `${item.afterPct}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
          <p className="text-[11px] text-muted leading-relaxed">
            Performance runs analyzed with Grafana, OpenSearch/Elasticsearch APM logs, internal monitoring tools, and JVM diagnostics.
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
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          LLM-Assisted RCA Triage
        </p>
        <div className="rounded-lg border border-ink/10 bg-white/60 p-3">
          <div className="flex items-center justify-between rounded-lg border border-ink/10 bg-white/70 p-3">
            <div className="text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">Before</p>
              <p className="font-display text-lg font-bold text-ink">Hours</p>
            </div>
            <span className="text-muted">→</span>
            <div className="text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">After</p>
              <p className="font-display text-lg font-bold text-signal">Minutes</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="rounded-full border border-ink/10 bg-white/70 px-2.5 py-1 text-[9px] font-semibold text-ink">
              Failure Signal
            </span>
            <span className="text-[10px] text-muted">→</span>
            <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 text-[9px] font-bold text-signal">
              Historical Pattern Match
            </span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { cat: "Code", color: "signal" },
              { cat: "Data", color: "brass" },
              { cat: "Configuration", color: "brass" },
              { cat: "Environment", color: "signal" },
            ].map((item) => (
              <div
                key={item.cat}
                className={`rounded-lg border px-3 py-2 text-center ${
                  item.color === "signal" ? "border-signal/30 bg-signal/10" : "border-brass/30 bg-brass/10"
                }`}
              >
                <p className={`text-[11px] font-semibold ${item.color === "signal" ? "text-signal" : "text-brass"}`}>
                  {item.cat}
                </p>
              </div>
            ))}
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

function CaseStudyGrid({
  studies,
  onOpen,
}: {
  studies: CaseStudy[];
  onOpen: (slug: string) => void;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {studies.map((study, index) => {
        const accent = index % 2 === 0 ? "signal" : "brass";

        return (
          <button
            key={study.slug}
            type="button"
            onClick={() => onOpen(study.slug)}
            className={`group flex flex-col gap-4 rounded-[1.5rem] border-t-4 border border-ink/10 bg-white/60 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
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

            <span className="mt-auto self-start text-sm font-semibold text-signal transition group-hover:text-ink">
              Details →
            </span>
          </button>
        );
      })}
    </div>
  );
}

function CaseStudyExplorerInner({ studies }: CaseStudyExplorerProps) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(() => searchParams.get("case"));
  const openStudy = studies.find((study) => study.slug === openSlug) ?? null;

  useEffect(() => {
    const onPopState = () => {
      setOpenSlug(new URLSearchParams(window.location.search).get("case"));
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) {
      return;
    }

    if (openStudy && !dialogEl.open) {
      dialogEl.showModal();
      closeButtonRef.current?.focus();
    } else if (!openStudy && dialogEl.open) {
      dialogEl.close();
    }
  }, [openStudy]);

  const syncUrl = (slug: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (slug) {
      params.set("case", slug);
    } else {
      params.delete("case");
    }

    const query = params.toString();
    const hash = slug ? "#work" : "";
    const url = `${window.location.pathname}${query ? `?${query}` : ""}${hash}`;
    window.history.pushState(null, "", url);
  };

  const openCase = (slug: string) => {
    setOpenSlug(slug);
    syncUrl(slug);
  };

  const closeCase = () => {
    setOpenSlug(null);
    syncUrl(null);
  };

  return (
    <>
      <CaseStudyGrid studies={studies} onOpen={openCase} />

      <dialog
        ref={dialogRef}
        onClose={closeCase}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current?.close();
          }
        }}
        aria-labelledby="case-study-title"
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 open:flex open:items-center open:justify-center backdrop:bg-ink/50 backdrop:backdrop-blur-sm sm:p-6"
      >
        {openStudy && (
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-panel sm:p-8">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              ref={closeButtonRef}
              aria-label="Close details"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-muted transition hover:border-ink/30 hover:text-ink"
            >
              ×
            </button>

            <p className="pr-10 text-xs font-bold uppercase tracking-[0.24em] text-signal">
              {openStudy.eyebrow}
            </p>
            <h3 id="case-study-title" className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink">
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
        )}
      </dialog>
    </>
  );
}

export default function CaseStudyExplorer({ studies }: CaseStudyExplorerProps) {
  return (
    <Suspense fallback={<CaseStudyGrid studies={studies} onOpen={() => {}} />}>
      <CaseStudyExplorerInner studies={studies} />
    </Suspense>
  );
}
