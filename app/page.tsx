import CaseStudyExplorer from "./CaseStudyExplorer";
import SkillsExplorer from "./SkillsExplorer";

const metrics = [
  { value: "5", label: "years in fintech quality engineering" },
  { value: "20+", label: "cross-functional teams supported" },
  { value: "30%", label: "reduced regression test time" },
  { value: "<1%", label: "nightly automation flake rate maintained" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript"],
    summary: "The core languages behind my automation, integration testing, and internal tooling work.",
  },
  {
    title: "Automation",
    items: ["Playwright", "Robot Framework", "Selenium", "BDD / Cucumber", "TestNG", "JUnit", "Pytest"],
    summary: "Browser automation and reusable test design for UI workflows that need to stay stable in CI and meaningful to product teams.",
  },
  {
    title: "Backend & API",
    items: ["REST APIs", "RestAssured", "Kafka", "Microservices", "Async Workflows", "Event-Driven Systems", "Contract Testing"],
    summary: "Most of my depth is in backend and integration quality where financial workflows cross service boundaries and timing matters.",
  },
  {
    title: "Reliability",
    items: ["Load & Stress Testing", "JMeter", "Resilience Testing", "Chaos Engineering", "Recovery Scenarios", "Failover Validation", "SLA / SLO Testing"],
    summary: "I focus on the failure-heavy parts of systems: performance pressure, recovery paths, degraded behavior, and resilience validation.",
  },
  {
    title: "Observability",
    items: ["Elasticsearch", "OpenSearch", "Kibana", "Grafana", "Log Analysis", "Distributed Tracing", "Alerting & Dashboards", "SQL", "NoSQL"],
    summary: "Diagnosis matters as much as detection. I rely on logs, traces, dashboards, and data inspection to turn failures into useful signal.",
  },
  {
    title: "Tooling & CI/CD",
    items: ["AI", "Jenkins", "Git", "Docker", "Kubernetes", "Maven", "Postman", "Linux / Shell", "Jira", "AWS"],
    summary: "I build around delivery systems, not outside them, so automation can run reliably where release decisions are actually made.",
  },
  {
    title: "FinTech",
    items: [
      "Treasury",
      "Financial Messaging (SWIFT MT/MX, ISO 20022, CBPR+, SEPA)",
      "Trade and Risk Management",
      "FX & OTC",
      "Cash Management",
      "Liquidity",
      "Settlements",
      "Reconciliation",
      "Accounting",
      "Cash Position",
      "Bank Account Management",
    ],
    summary: "My strongest domain context is in treasury and financial messaging, where workflow correctness and operational confidence are non-negotiable.",
  },
];

const caseStudies = [
  {
    eyebrow: "Automation Architecture",
    title: "Backend and API automation for distributed financial workflows",
    summary: "Reusable automation across REST, async, and queue-driven workflows for earlier signal on settlement and reconciliation risk.",
    body:
      "I built Python-based Robot Framework automation that validated REST, async, and queue-driven flows against a Java-centric platform, giving teams earlier signal on settlement and reconciliation risk.",
    impact: "Shift-left coverage across backend and integration layers",
  },
  {
    eyebrow: "UI Modernization",
    title: "Playwright-based UI automation for modern platform workflows",
    summary: "Playwright coverage for modern UI flows without turning browser automation into a maintenance burden.",
    body:
      "I built Playwright coverage for modern platform workflows and integrated it into the broader automation strategy so UI validation stayed fast, maintainable, and production-relevant.",
    impact: "Modern UI coverage built around Playwright",
  },
  {
    eyebrow: "Reliability Engineering",
    title: "Resilience tests for async services and recovery behavior",
    summary: "State-of-health and recovery validation focused on isolating environment, data, and configuration-driven failures.",
    body:
      "I designed state-of-health tests for services, daemons, and databases, then used disciplined scenario design to isolate environment, data, and configuration failures.",
    impact: "Component failure rate reduced from 25% to under 2%",
  },
  {
    eyebrow: "Performance",
    title: "CI-integrated performance testing with generated test data",
    summary: "Performance coverage shaped around realistic execution flows, backed by faster test-data generation.",
    body:
      "I built performance test coverage around realistic execution flows, automated the supporting test data pipeline, and used the results to expose bottlenecks across memory pressure, DB latency, and lock contention.",
    impact: "3-5x faster test data generation and 40% shorter execution time",
  },
  {
    eyebrow: "Quality Ops",
    title: "Release visibility dashboard replacing manual reporting",
    summary: "Internal tooling that gave release stakeholders environment readiness signal without manual status collection.",
    body:
      "I built a React and Node.js dashboard integrating Jenkins and Azure Graph APIs so release stakeholders could see environment readiness without manual status collection.",
    impact: "Replaced countless manual processes through internal tooling",
  },
];

const experienceBullets = [
  "I lead backend and integration quality for regulated fintech systems where correctness, timing, and resilience matter as much as feature coverage.",
  "I build automation that is stable in CI, expressive for business workflows, and diagnostic enough to speed up the right fixes.",
  "I do my best work around async failures, recovery paths, environment drift, performance bottlenecks, and release-readiness signal.",
];

const links = {
  email: "mailto:grvdhingra1999@gmail.com",
  linkedin: "https://www.linkedin.com/in/gauravxdhingra/",
  github: "https://github.com/gauravxdhingra",
  resume: "/Gaurav_Dhingra_Resume.pdf",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden px-5 py-6 text-ink sm:px-8 lg:px-12">
      <div className="grain" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-ink/10" />
      <div className="mx-auto max-w-7xl">
        <nav className="reveal flex items-center justify-between rounded-full border border-ink/10 bg-white/45 px-5 py-3 text-sm shadow-sm backdrop-blur">
          <a className="font-display text-lg font-semibold tracking-tight" href="#top" aria-label="Gaurav Dhingra home">
            GD
          </a>
          <div className="hidden items-center gap-6 text-muted sm:flex">
            <a className="transition hover:text-ink" href="#work">Work</a>
            <a className="transition hover:text-ink" href="#systems">Systems</a>
            <a className="transition hover:text-ink" href="#contact">Contact</a>
          </div>
          <a className="rounded-full bg-ink px-4 py-2 font-semibold text-white transition hover:bg-slateblue" href={links.resume}>
            Resume
          </a>
        </nav>

        <section id="top" className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-24">
          <div>
            <p className="reveal text-sm font-semibold uppercase tracking-[0.28em] text-signal">
              Senior QA Engineer / SDET
            </p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              I build quality systems for fintech platforms where failure is expensive.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Backend, API, and UI automation for regulated financial workflows, with deep focus on reliability, CI quality gates, and release readiness.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slateblue" href={links.email}>
                Email me <ArrowIcon />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-ink/30" href={links.linkedin} rel="noreferrer" target="_blank">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="reveal reveal-delay-2 rounded-[2rem] border border-ink/10 bg-panel p-5 shadow-panel backdrop-blur">
            <div className="rounded-[1.5rem] border border-ink/10 bg-ledger-grid bg-[length:34px_34px] p-5">
              <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted">Quality Ledger</span>
                <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-bold text-signal">Live systems mindset</span>
              </div>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="grid grid-cols-[5.5rem_1fr] gap-4 rounded-2xl border border-ink/10 bg-white/60 p-4">
                    <strong className="font-display text-3xl leading-none">{metric.value}</strong>
                    <span className="text-sm leading-5 text-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="systems" className="border-y border-ink/10 py-14">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-signal">Systems I work in</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Automation, reliability, and release signal.</h2>
            </div>
            <p className="max-w-xl text-muted">
              Scan the broad areas first, then drill into the stack where you want more depth.
            </p>
          </div>
          <SkillsExplorer groups={skillGroups} />
        </section>

        <section id="work" className="py-16 sm:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-signal">Selected case studies</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Sanitized examples of enterprise work.</h2>
          </div>
          <CaseStudyExplorer studies={caseStudies} />
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-ink/10 bg-ink p-6 text-white shadow-panel sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brass">Experience snapshot</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">Fintech QA engineering for platforms with real operational stakes.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {experienceBullets.map((bullet, index) => (
              <div key={bullet} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass/80">0{index + 1}</p>
                <p className="mt-3 leading-7 text-white/78">{bullet}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="rounded-[2rem] border border-ink/10 bg-white/55 p-6 shadow-panel backdrop-blur sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-signal">Contact</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">If you need stronger release signal, I can help.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted">
                  I am most useful where product risk, distributed systems, and test infrastructure overlap: API automation, CI quality gates, reliability scenarios, and release visibility.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-slateblue" href={links.email}>
                  grvdhingra1999@gmail.com <ArrowIcon />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3 font-semibold transition hover:border-ink/30" href={links.resume}>
                  Download resume <ArrowIcon />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3 font-semibold transition hover:border-ink/30" href={links.github} rel="noreferrer" target="_blank">
                  GitHub <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
