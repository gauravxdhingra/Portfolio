import Image from "next/image";
import CaseStudyExplorer from "./CaseStudyExplorer";
import SkillsExplorer from "./SkillsExplorer";
import MobileNav from "./MobileNav";

const metrics = [
  { value: "5", label: "years in fintech quality engineering" },
  { value: "100+", label: "distributed components under quality scope" },
  { value: "25+", label: "cross-functional teams supported" },
  { value: "30%", label: "release regression cycle reduction" },
  { value: "<1%", label: "nightly automation flake rate maintained" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash / Shell"],
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
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Git", "Docker", "Kubernetes", "Maven", "Postman", "Linux / Shell", "Jira", "AWS"],
    summary: "I build around delivery systems, not outside them, so automation can run reliably where release decisions are actually made.",
  },
  {
    title: "AI / LLM Tooling",
    items: ["Claude", "Copilot", "LLM-based Tooling", "Agentic Workflows", "RAG / Retrieval-Augmented Generation"],
    summary: "I use LLM tooling operationally, including building a RAG-based test generation system that grounds output in the team's real test suite instead of relying on generic zero-shot prompting.",
  },
  {
    title: "FinTech",
    items: [
      "Treasury Management System (TMS)",
      "Payment Hub",
      "Cash Management",
      "Cash Position",
      "Liquidity Management",
      "In-House Banking (IHB)",
      "FX and Interest Rate Risk",
      "Trade and Risk Management",
      "Straight-Through Processing (STP)",
      "Cash and Securities Settlements",
      "Settlement Netting",
      "Trade Confirmation",
      "Reconciliation",
      "Hedge Accounting",
      "Counterparty Risk",
      "Value at Risk",
      "SWIFT MT/MX",
      "ISO 20022",
      "CBPR+",
      "SEPA",
      "Payment Messaging",
    ],
    summary: "Hands-on coverage across Wallstreet Suite workflows: treasury, payment messaging, risk, settlements, and reconciliation.",
  },
];

const caseStudies = [
  {
    slug: "quality-infrastructure",
    eyebrow: "Quality Infrastructure",
    title: "Quality ownership across 100+ distributed components",
    summary: "Shared quality infrastructure and standards spanning treasury, risk, settlements, and messaging workflows.",
    body:
      "I help own quality across 100+ distributed components and defined shared test strategy across 25+ engineering teams, making testability and release readiness part of engineering decisions from design through deployment.",
    impact: "One of 3 engineers accountable for platform-wide quality infrastructure",
  },
  {
    slug: "rag-test-generation",
    eyebrow: "RAG Test Generation",
    title: "RAG-based test generation for deterministic scenario authoring",
    summary: "Hybrid retrieval with dynamic context injection over the team's existing test suite, replacing generic zero-shot LLM output with accurate, domain-aware scenarios.",
    body:
      "Outperformed naive codebase-wide search, which burned tokens on irrelevant context and still produced generic output. Deployed as an internal self-serve tool via FastAPI, so teams generate scenarios without waiting on manual authoring.",
    impact: "AI-powered (RAG) scenario authoring reduced from days to minutes",
  },
  {
    slug: "ui-modernization",
    eyebrow: "UI Modernization",
    title: "Playwright-based UI automation for modern platform workflows",
    summary: "Playwright coverage for modern UI flows without turning browser automation into a maintenance burden.",
    body:
      "Folded into the broader automation strategy rather than run as a separate suite, so UI checks share fixtures, data, and CI signal with backend tests.",
    impact: "Modern UI coverage built around Playwright",
  },
  {
    slug: "automation-architecture",
    eyebrow: "Automation Architecture",
    title: "Backend and API automation for distributed financial workflows",
    summary: "Reusable automation across REST, async, and queue-driven workflows for earlier signal on defects.",
    body:
      "Built with Python-based Robot Framework against a Java-centric platform, where most off-the-shelf tooling assumed a single-language stack.",
    impact: "Shift-left coverage across backend and integration layers",
  },
  {
    slug: "reliability-engineering",
    eyebrow: "Reliability Engineering",
    title: "Chaos-style resilience validation for async platform services",
    summary: "Fault-injection scenarios across services, daemons, and databases to validate restart paths, cascading dependency behavior, and post-recovery functional health.",
    body:
      "Scoped around the failures unit and integration tests miss: what actually happens when a dependency dies mid-transaction, not just whether the happy path passes.",
    impact: "Chaos-tested component failure rate reduced from 25% to under 2%",
  },
  {
    slug: "performance",
    eyebrow: "Performance",
    title: "Standalone performance testing rebuilt into a reproducible model",
    summary: "Rebuilt fragmented runs into reproducible performance workflows using observability-first analysis across logs, APM, and JVM signals.",
    body:
      "Replaced per-run SQL edits and one-off shell/Python scripts with a single reproducible execution model, adding jstack thread dumps to pin down lock contention specifically.",
    impact: "At least 3x faster test data generation and 40% shorter load execution",
  },
  {
    slug: "failure-analysis",
    eyebrow: "Failure Analysis",
    title: "Structured RCA with LLM-assisted triage",
    summary: "Root-cause workflows that reduce cross-team escalation loops and move failure triage from hours to minutes.",
    body:
      "I built a structured RCA workflow and an LLM-assisted investigation agent that uses historical failure patterns to suggest likely investigation paths, helping teams isolate whether failures are code, data, configuration, or environment driven.",
    impact: "AI-assisted failure triage reduced from hours to minutes",
  },
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
    <main id="main-content" className="relative isolate overflow-hidden px-5 py-6 text-ink sm:px-8 lg:px-12">
      <div className="grain" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-ink/10" />
      <div className="mx-auto max-w-7xl">
        <nav className="reveal relative z-30 flex items-center justify-between rounded-full border border-ink/10 bg-white/45 px-5 py-3 text-sm shadow-sm backdrop-blur">
          <a className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight" href="#top" aria-label="Gaurav Dhingra home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
              GD
            </span>
            <span className="hidden sm:inline">Gaurav Dhingra</span>
          </a>
          <div className="hidden items-center gap-6 text-muted sm:flex">
            <a className="transition hover:text-ink" href="#systems">Systems</a>
            <a className="transition hover:text-ink" href="#work">Work</a>
            <a className="transition hover:text-ink" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <MobileNav
              links={[
                { href: "#systems", label: "Systems" },
                { href: "#work", label: "Work" },
                { href: "#contact", label: "Contact" },
              ]}
            />
            <a className="rounded-full bg-ink px-4 py-2 font-semibold text-white transition hover:bg-slateblue" href={links.resume}>
              Resume
            </a>
          </div>
        </nav>

        <section id="top" className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <div className="reveal flex items-center gap-3">
              <Image
                src="/Photo.png"
                alt="Portrait of Gaurav Dhingra"
                width={56}
                height={56}
                priority
                className="h-14 w-14 rounded-full border border-ink/10 object-cover shadow-sm"
              />
              <div>
                <p className="font-display text-base font-semibold leading-tight text-ink">Gaurav Dhingra</p>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
                  Senior QA Engineer / SDET
                </p>
              </div>
            </div>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              I build AI-assisted quality systems for distributed, event-driven platforms where failure is expensive.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Backend, API, and UI automation for distributed, event-driven financial workflows, focused on correctness under failure, load, and scale with strong CI quality gates and release readiness.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slateblue" href={links.email}>
                Email me <ArrowIcon />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-ink/30" href={links.linkedin} rel="noreferrer" target="_blank">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 rounded-[2rem] border border-ink/10 bg-[rgba(255,252,244,0.82)] bg-ledger-grid bg-[length:34px_34px] p-5 shadow-panel backdrop-blur sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted">Quality Ledger</span>
              <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-bold text-signal">Live systems mindset</span>
            </div>
            <div className="space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="grid grid-cols-[5.5rem_1fr] items-center gap-4 rounded-2xl border border-ink/10 bg-white/60 p-4">
                  <strong className="font-display text-3xl leading-none">{metric.value}</strong>
                  <span className="text-sm leading-5 text-muted">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
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
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-signal">Selected case studies</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Sanitized examples of enterprise work.</h2>
            </div>
            <p className="max-w-xl text-muted">
              Each one is a real production problem, condensed to scope, approach, and outcome.
            </p>
          </div>
          <CaseStudyExplorer studies={caseStudies} />
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

        <footer className="reveal flex flex-col items-center gap-2 border-t border-ink/10 py-8 text-center text-xs text-muted">
          <p>
            This site is tested with Playwright on every deploy |{" "}
            <a
              className="font-semibold text-signal transition hover:text-ink"
              href="https://github.com/gauravxdhingra/Portfolio/actions/workflows/ci.yml"
              rel="noreferrer"
              target="_blank"
            >
              view pipeline
            </a>
          </p>
          <p>© {new Date().getFullYear()} Gaurav Dhingra. Built with Next.js.</p>
        </footer>
      </div>
    </main>
  );
}
