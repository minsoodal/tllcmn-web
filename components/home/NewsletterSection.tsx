import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";

type NewsletterSectionProps = {
  newsletter: HomeContent["newsletter"];
};

export default function NewsletterSection({ newsletter }: NewsletterSectionProps) {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{newsletter.title}</h2>
        <p className="text-sm leading-6 text-slate-100 sm:text-base">{newsletter.description}</p>
        <div className="flex justify-center">
          <Link
            href={newsletter.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            {newsletter.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
