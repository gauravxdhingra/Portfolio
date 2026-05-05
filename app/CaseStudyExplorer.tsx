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

export default function CaseStudyExplorer({ studies }: CaseStudyExplorerProps) {
  const [activeStudy, setActiveStudy] = useState(studies[0]?.eyebrow ?? "");
  const currentStudy = studies.find((study) => study.eyebrow === activeStudy) ?? studies[0];

  if (!currentStudy) {
    return null;
  }

  return (
    <div className="rounded-[1.9rem] border border-ink/10 bg-white/52 shadow-panel backdrop-blur">
      <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
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
