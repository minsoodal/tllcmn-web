import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";

type MinistryHighlightsSectionProps = {
  ministries: HomeContent["ministries"];
};

export default function MinistryHighlightsSection({ ministries }: MinistryHighlightsSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 text-strong">{ministries.title}</h2>
        <p className="text-sm text-strong sm:text-base">{ministries.description}</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {ministries.items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-slate-300 hover:bg-white"
          >
            <h3 className="text-lg font-semibold text-slate-900 text-strong">{item.name}</h3>
            <p className="text-sm text-muted">{item.description}</p>
            <span className="mt-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition group-hover:translate-x-1">
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
