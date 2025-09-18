import Link from "next/link";

import type { Lang } from "@/lib/i18n/config";
import { siteCopy } from "@/lib/i18n/siteCopy";

import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  lang: Lang;
};

export default function Header({ lang }: HeaderProps) {
  const copy = siteCopy[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-strong"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold uppercase">
            TLLC
          </span>
          <span>{copy.meta.title}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex" aria-label="Main navigation">
          {copy.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <Link
            href={copy.nav.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {copy.nav.cta.label}
          </Link>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-6 pb-4 text-sm font-medium text-slate-700 lg:hidden" aria-label="Mobile navigation">
        {copy.nav.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
