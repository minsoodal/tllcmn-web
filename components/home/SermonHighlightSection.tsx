import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";
import type { Lang } from "@/lib/i18n/config";

type SermonHighlightSectionProps = {
  sermon: HomeContent["sermonHighlight"];
  lang: Lang;
};

export default function SermonHighlightSection({ sermon, lang }: SermonHighlightSectionProps) {
  const formattedDate = new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(sermon.date));

  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
            {sermon.title}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            {sermon.messageTitle}
          </h2>
          <p className="mt-3 text-sm text-slate-200">
            {sermon.speaker} · {formattedDate}
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-100">{sermon.description}</p>
        </div>
        <Link
          href={sermon.watchHref}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          target="_blank"
        >
          {sermon.watchLabel}
        </Link>
      </div>
      <div className="absolute -right-24 -top-10 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
    </section>
  );
}
