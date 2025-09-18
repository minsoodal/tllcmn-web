import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";

type QuickLinksSectionProps = {
  quickLinks: HomeContent["quickLinks"];
};

export default function QuickLinksSection({ quickLinks }: QuickLinksSectionProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {quickLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {link.label}
          </p>
          <p className="mt-3 text-sm text-slate-600">{link.description}</p>
          <span
            aria-hidden
            className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      ))}
    </section>
  );
}
