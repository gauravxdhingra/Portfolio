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

const COLLAPSED_LIMIT = 10;

export default function SkillsExplorer({ groups }: SkillsExplorerProps) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.title ?? "");
  const [expanded, setExpanded] = useState(false);
  const currentGroup = groups.find((group) => group.title === activeGroup) ?? groups[0];

  if (!currentGroup) {
    return null;
  }

  const isLongList = currentGroup.items.length > COLLAPSED_LIMIT;
  const visibleItems = isLongList && !expanded
    ? currentGroup.items.slice(0, COLLAPSED_LIMIT)
    : currentGroup.items;

  const panelId = `skills-panel-${currentGroup.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white/50 p-4 shadow-sm backdrop-blur sm:p-6">
      <div role="tablist" aria-label="Skill groups" className="flex flex-wrap gap-2">
        {groups.map((group) => {
          const isActive = group.title === currentGroup.title;
          const tabId = `skills-tab-${group.title.replace(/\s+/g, "-").toLowerCase()}`;

          return (
            <button
              key={group.title}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => {
                setActiveGroup(group.title);
                setExpanded(false);
              }}
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

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`skills-tab-${currentGroup.title.replace(/\s+/g, "-").toLowerCase()}`}
        className="mt-6 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start"
      >
        <div className="rounded-[1.5rem] border border-ink/10 bg-ledger/70 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Current Focus</p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
            {currentGroup.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{currentGroup.summary}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-3">
            {visibleItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-white/70 px-3 py-2 text-sm text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          {isLongList && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-3 text-sm font-semibold text-signal transition hover:text-ink"
            >
              {expanded ? "Show less" : `Show ${currentGroup.items.length - COLLAPSED_LIMIT} more`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
