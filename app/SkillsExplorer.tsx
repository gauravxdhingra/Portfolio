"use client";

import { useState } from "react";

type SkillGroup = {
  title: string;
  items: string[];
  summary: string;
};

type SkillsExplorerProps = {
  groups: SkillGroup[];
};

export default function SkillsExplorer({ groups }: SkillsExplorerProps) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.title ?? "");
  const currentGroup = groups.find((group) => group.title === activeGroup) ?? groups[0];

  if (!currentGroup) {
    return null;
  }

  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white/50 p-4 shadow-sm backdrop-blur sm:p-6">
      <div className="flex flex-wrap gap-2">
        {groups.map((group) => {
          const isActive = group.title === currentGroup.title;

          return (
            <button
              key={group.title}
              type="button"
              onClick={() => setActiveGroup(group.title)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-ink text-white"
                  : "border border-ink/10 bg-white/70 text-muted hover:border-ink/25 hover:text-ink"
              }`}
            >
              {group.title}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-ink/10 bg-ledger/70 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Current Focus</p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
            {currentGroup.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{currentGroup.summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {currentGroup.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white/70 px-3 py-2 text-sm text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
