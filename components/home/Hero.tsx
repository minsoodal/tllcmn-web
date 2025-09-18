import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";

type HeroProps = {
  hero: HomeContent["hero"];
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-16 sm:rounded-3xl sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 text-left">
        <div>
          <span className="rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{hero.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-20 -top-32 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />
    </section>
  );
}
