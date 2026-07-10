"use client";

import { useEffect, useState } from "react";

type CiState = "loading" | "success" | "failure" | "unknown";

const RUNS_URL =
  "https://api.github.com/repos/gauravxdhingra/Portfolio/actions/workflows/ci.yml/runs?per_page=1&branch=main";
const FALLBACK_URL = "https://github.com/gauravxdhingra/Portfolio/actions/workflows/ci.yml";

export default function CiStatusBadge() {
  const [state, setState] = useState<CiState>("loading");
  const [runUrl, setRunUrl] = useState(FALLBACK_URL);

  useEffect(() => {
    let cancelled = false;

    fetch(RUNS_URL)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (cancelled) {
          return;
        }

        const run = data?.workflow_runs?.[0];
        if (!run) {
          setState("unknown");
          return;
        }

        setRunUrl(run.html_url);
        setState(run.conclusion === "success" ? "success" : run.conclusion ? "failure" : "unknown");
      })
      .catch(() => {
        if (!cancelled) {
          setState("unknown");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const label =
    state === "loading"
      ? "Checking CI…"
      : state === "success"
        ? "Tests passing"
        : state === "failure"
          ? "Tests failing"
          : "View CI";

  const isFailure = state === "failure";

  return (
    <a
      href={runUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition hover:opacity-80 ${
        isFailure ? "bg-brass/10 text-brass" : "bg-signal/10 text-signal"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isFailure ? "bg-brass" : "bg-signal"} ${
          state === "loading" ? "animate-pulse motion-reduce:animate-none" : ""
        }`}
      />
      {label}
    </a>
  );
}
