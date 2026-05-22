export default function HeroGraphic() {
  return (
    <div className="rounded-[1.5rem] border border-ink/10 bg-white/60 p-5 backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
          Where I Add Value
        </span>
        <span className="rounded-full bg-signal/10 px-3 py-1 text-[10px] font-bold text-signal">
          Shift-Left & Operational Clarity
        </span>
      </div>

      <div className="space-y-3">
        {[
          {
            stage: "Financial Workflow",
            detail: "Payments, settlements, treasury, reconciliation",
            icon: "→",
          },
          {
            stage: "Automation & Test",
            detail: "REST APIs, async validation, UI flows, reliability scenarios",
            icon: "→",
          },
          {
            stage: "Quality Gates",
            detail: "CI checks, performance profiling, automated diagnostics",
            icon: "→",
          },
          {
            stage: "Release Confidence",
            detail: "Risk assessment, readiness signal, stakeholder visibility",
            icon: "✓",
          },
        ].map((item, index) => (
          <div key={item.stage} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-[10px] font-bold text-signal">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold text-ink">{item.stage}</p>
              <p className="mt-1 text-[11px] leading-4 text-muted">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-ink/10 bg-white/60 p-3">
        <p className="text-[11px] text-muted">
          <span className="font-semibold text-ink">Depth areas:</span> Backend test
          architecture, Playwright at scale, resilience engineering, performance
          profiling, observability-driven diagnostics, internal dashboards
        </p>
      </div>
    </div>
  );
}
