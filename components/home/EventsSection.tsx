import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";
import type { Lang } from "@/lib/i18n/config";

type EventsSectionProps = {
  events: HomeContent["events"];
  lang: Lang;
};

export default function EventsSection({ events, lang }: EventsSectionProps) {
  const formatter = new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-slate-900 text-strong">{events.title}</h2>
          <p className="mt-3 text-sm text-strong sm:text-base">{events.description}</p>
        </div>
        <Link
          href={events.seeAllHref}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {events.seeAllLabel}
        </Link>
      </div>
      <div className="mt-8 grid gap-4">
        {events.items.map((item) => (
          <Link
            key={`${item.title}-${item.date}`}
            href={item.href}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-white text-sm font-semibold text-strong shadow">
                <span>{formatter.format(new Date(item.date))}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 text-strong">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.description}
                </p>
              </div>
            </div>
            {item.time ? (
              <div className="text-sm font-semibold text-soft">{item.time}</div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
