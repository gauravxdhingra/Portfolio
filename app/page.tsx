const metrics = [
  { value: "5", label: "years in fintech quality engineering" },
  { value: "20+", label: "cross-functional teams supported" },
  { value: "30%", label: "reduced regression test time" },
  { value: "<1%", label: "nightly automation flake rate maintained" },
];

const skillGroups = [
  {
    title: "Automation",
    items: ["Playwright", "Robot Framework", "Selenium", "BDD / Cucumber", "TestNG", "JUnit", "Pytest"],
  },
  {
    title: "Backend & API",
    items: ["REST APIs", "RestAssured", "Kafka", "Microservices", "Async Workflows", "Event-Driven Systems", "Contract Testing"],
  },
  {
    title: "Reliability",
    items: ["Load & Stress Testing", "JMeter", "Resilience Testing", "Chaos Engineering", "Recovery Scenarios", "Failover Validation", "SLA / SLO Testing"],
  },
  {
    title: "Observability",
    items: ["Elasticsearch", "OpenSearch", "Kibana", "Grafana", "Log Analysis", "Distributed Tracing", "Alerting & Dashboards", "SQL", "NoSQL"],
  },
  {
    title: "Tooling & CI/CD",
    items: ["AI", "Jenkins", "Git", "Docker", "Kubernetes", "Maven", "Postman", "Linux / Shell", "Jira", "AWS"],
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
  },
];

const caseStudies = [
  {
    eyebrow: "Automation Architecture",
    title: "Backend and API automation for distributed financial workflows",
    body:
      "I built Python-based Robot Framework automation that validated REST, async, and queue-driven flows against a Java-centric platform, giving teams earlier signal on settlement and reconciliation risk.",
    impact: "Shift-left coverage across backend and integration layers",
  },
  {
    eyebrow: "UI Modernization",
    title: "Playwright-based UI automation for modern platform workflows",
    body:
      "I built Playwright coverage for modern platform workflows and integrated it into the broader automation strategy so UI validation stayed fast, maintainable, and production-relevant.",
    impact: "Modern UI coverage built around Playwright",
  },
  {
    eyebrow: "Reliability Engineering",
    title: "Resilience tests for async services and recovery behavior",
    body:
      "I designed state-of-health tests for services, daemons, and databases, then used disciplined scenario design to isolate environment, data, and configuration failures.",
    impact: "Component failure rate reduced from 25% to under 2%",
  },
  {
    eyebrow: "Performance",
    title: "CI-integrated performance testing with generated test data",
    body:
      "I built performance test coverage around realistic execution flows, automated the supporting test data pipeline, and used the results to expose bottlenecks across memory pressure, DB latency, and lock contention.",
    impact: "3-5x faster test data generation and 40% shorter execution time",
  },
  {
    eyebrow: "Quality Ops",
    title: "Release visibility dashboard replacing manual reporting",
    body:
      "I built a React and Node.js dashboard integrating Jenkins and Azure Graph APIs so release stakeholders could see environment readiness without manual status collection.",
    impact: "Replaced countless manual processes through internal tooling",
  },
];

const experienceBullets = [
  "I lead quality strategy across backend, API, and integration layers for regulated fintech systems where correctness, timing, and resilience matter as much as feature coverage.",
  "I build automation that engineers can trust: stable enough for CI, expressive enough for business workflows, and diagnostic enough to speed up the right fixes.",
  "I am strongest in the failure-heavy parts of the stack: async workflows, recovery scenarios, environment drift, performance bottlenecks, and release-readiness visibility.",
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
              I specialize in backend, API, and UI automation for regulated financial workflows, with deep experience in CI/CD test infrastructure, reliability engineering, and release readiness.
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
              My work sits between engineering velocity and operational risk: enough business context to test the right thing, enough technical depth to make the signal trustworthy.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[1.5rem] border border-ink/10 bg-white/45 p-5 backdrop-blur">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-sm text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="py-16 sm:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-signal">Selected case studies</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Sanitized examples of enterprise work.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <article key={study.title} className={`rounded-[1.75rem] border border-ink/10 bg-white/55 p-6 shadow-sm backdrop-blur ${index === 4 ? "lg:col-span-2" : ""}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-brass" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">{study.eyebrow}</p>
                </div>
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">{study.title}</h3>
                <p className="mt-4 leading-7 text-muted">{study.body}</p>
                <p className="mt-5 rounded-2xl border border-signal/15 bg-signal/10 px-4 py-3 text-sm font-semibold text-signal">
                  {study.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-ink/10 bg-ink p-6 text-white shadow-panel sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brass">Experience snapshot</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">Fintech QA engineering for platforms with real operational stakes.</h2>
          </div>
          <div className="space-y-4">
            {experienceBullets.map((bullet) => (
              <p key={bullet} className="rounded-2xl border border-white/10 bg-white/7 p-4 leading-7 text-white/78">
                {bullet}
              </p>
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
